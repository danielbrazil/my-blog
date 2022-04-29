//npx babel-node src/server.js
//npx nodemon --exec npx babel-node src/server.js
import express from "express";
import bodyParser from 'body-parser';
import { MongoClient, ObjectId } from 'mongodb';
import path from "path";


const app = express();
app.use(express.static(path.join(__dirname, '/build')));

app.use(bodyParser.json());

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');
    
        await operations(db);
        
        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

app.get('/api/articles/:name', async (req, res) => {

    withDB(async (db) => {
        const articleName = req.params.name;
    
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(articleInfo);
    }, res);
});

app.get('/api/articles_delete/:name', async (req, res) => {

    withDB(async (db) => {
        const articleName = req.params.name;
    
        await db.collection('articles').deleteOne({ name: articleName });
        res.status(200).json({ message: articleName + ' deleted!' });
    }, res);
});

app.get('/api/articles/getById/:id', async (req, res) => {

    withDB(async (db) => {
        const articleID = req.params.id;
    
        const articleInfo = await db.collection('articles').findOne({ _id: ObjectId(articleID) });
        res.status(200).json(articleInfo);
    }, res);
});

app.get('/api/articles/deleteById/:id', async (req, res) => {

    withDB(async (db) => {
        const articleID = req.params.id;
    
        await db.collection('articles').deleteOne({ _id: ObjectId(articleID) });
        const articleInfo = await db.collection('articles').findOne({ _id: ObjectId(articleID) });
        res.status(200).json(articleInfo);
    }, res);
});

app.get('/api/getAllArticles', async (req, res) => {

    withDB(async (db) => {
        const articleInfo = await db.collection('articles').find({}).toArray();
        res.status(200).json(articleInfo);
    }, res);
});

app.post('/api/articles/add-article', async (req, res) => {
    
    const { titleName, paragraph } = req.body;
    const articleName = titleName.toLowerCase().replace(/\s/g, "-");
    withDB(async (db) => {
        await db.collection('articles').insertOne({ name: articleName, title: titleName, upvotes: 0, comments: [], content: paragraph });
        const insiertedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json({ message: articleName + ' inserted!' });
    }, res);
});

app.post('/api/articles/update/:name', async (req, res) => {

    withDB(async (db) => {
        const articleName = req.params.name;
        const { titleUpdate, paragraph } = req.body;

        //const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                title: titleUpdate,
                content: paragraph
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });
        console.log(updatedArticleInfo);
        res.status(200).json({ message: articleName + ' updated!' });
    }, res);

    // articlesInfo[articleName].upvotes += 1;
    // res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes!`)
});

app.post('/api/articles/:name/upvote', async (req, res) => {

    withDB(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1
            },
        });
        const updateArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updateArticleInfo);
    }, res);

    // articlesInfo[articleName].upvotes += 1;
    // res.status(200).send(`${articleName} now has ${articlesInfo[articleName].upvotes} upvotes!`)
});

app.post('/api/articles/:name/add-comment', async (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text }),
            },
        });
        const updateArticleInfo = await db.collection('articles').findOne({ name: articleName });
        res.status(200).json(updateArticleInfo);
    }, res);
    // articlesInfo[articleName].comments.push({ username, text });
    // res.status(200).send(articlesInfo[articleName]);
});

// app.get('/hello', (req, res) => res.send('Hello Get!'));
// app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
// app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/build/index.html'));
})

app.listen(8000, () => console.log('Listening on port 8000'));