(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(e,t,n){e.exports=n(77)},47:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);n(42);var a=n(0),r=n.n(a),l=n(17),c=n.n(l),i=(n(47),n(33)),u=n(34),o=n(39),s=n(35),m=n(40),d=n(1),p=n(2),f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hello, welcome to my blog!"),r.a.createElement("p",null,"Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod."),r.a.createElement("p",null,"Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"),r.a.createElement("p",null,"Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"About me"),r.a.createElement("p",null,"Welcome to my blog! Proin congue ligula id risus posuere, vel eleifend ex egestas. Sed in turpis leo. Aliquam malesuada in massa tincidunt egestas. Nam consectetur varius turpis, non porta arcu porttitor non. In tincidunt vulputate nulla quis egestas. Ut eleifend ut ipsum non fringilla. Praesent imperdiet nulla nec est luctus, at sodales purus euismod."),r.a.createElement("p",null,"Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"),r.a.createElement("p",null,"Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan dui in facilisis aliquet.,"))},E=function(e){var t=e.articles;return r.a.createElement(r.a.Fragment,null,t.map(function(e,t){return r.a.createElement(d.b,{className:"article-list-item",key:t,to:"/article/".concat(e.name)},r.a.createElement("h3",null,e.title),r.a.createElement("p",{key:t},e.content.substring(0,150),"..."))}))},v=n(3),h=n.n(v),g=n(9),j=n(8),O=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)(function(){!function(){var e=Object(g.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/getAllArticles");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[]),n},w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Articles"),r.a.createElement(E,{articles:O()}))},y=function(e){var t=e.comments;return t.length>0?r.a.createElement("div",null,r.a.createElement("h3",null,"Comments:"),t.map(function(e,t){return r.a.createElement("div",{className:"comment",key:t},r.a.createElement("h4",null,"User: ",e.username),r.a.createElement("p",null,e.text))})):r.a.createElement("div",null,r.a.createElement("h3",null,"Comments:"),r.a.createElement("p",null,"No have comments."))},x=function(e){var t=e.articleName,n=e.upvotes,a=e.setArticleInfo,l=function(){var e=Object(g.a)(h.a.mark(function e(){var n,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t,"/upvote"),{method:"post"});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,a(r);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"upvotes-section"},r.a.createElement("p",null,"This post has been ",n," likes"),r.a.createElement("button",{onClick:function(){return l()}},"Like"))},N=function(e){var t=e.articleName,n=e.setArticleInfo,l=Object(a.useState)(""),c=Object(j.a)(l,2),i=c[0],u=c[1],o=Object(a.useState)(""),s=Object(j.a)(o,2),m=s[0],d=s[1],p=function(){var e=Object(g.a)(h.a.mark(function e(){var a,r;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!m.length||!i.length){e.next=10;break}return e.next=3,fetch("/api/articles/".concat(t,"/add-comment"),{method:"post",body:JSON.stringify({username:i,text:m}),headers:{"Content-Type":"application/json"}});case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,n(r),u(""),d("");case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"add-comment-form"},r.a.createElement("h3",null,"Add a Comment"),r.a.createElement("label",null,"Name:",r.a.createElement("input",{type:"text",value:i,onChange:function(e){return u(e.target.value)}})),r.a.createElement("label",null,"Comment:",r.a.createElement("textarea",{rows:"4",cols:"50",value:m,onChange:function(e){return d(e.target.value)}})),r.a.createElement("button",{onClick:function(){return p()}},"Add Comment"))},A=function(){return r.a.createElement("h1",null,"404: Page Not Found")},k=function(e){var t=e.match.params.name,n=O(),l=n.find(function(e){return e.name===t}),c=Object(a.useState)({upvotes:0,comments:[]}),i=Object(j.a)(c,2),u=i[0],o=i[1];if(Object(a.useEffect)(function(){!function(){var e=Object(g.a)(h.a.mark(function e(){var n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a),o(a);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[t]),!l)return r.a.createElement(A,null);var s=n.filter(function(e){return e.name!==t});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,l.title),r.a.createElement(x,{articleName:t,upvotes:u.upvotes,setArticleInfo:o}),r.a.createElement("p",null,l.content),r.a.createElement(y,{comments:u.comments}),r.a.createElement(N,{articleName:t,setArticleInfo:o}),r.a.createElement("h3",null,"Other Articles:"),r.a.createElement(E,{articles:s}),r.a.createElement(d.b,{to:"/articles-list"},"Go back to Articles page"))},C=n(38),S=(n(74),n(75),function(){var e=O(),t=Object(a.useCallback)(function(e){console.log("cellClicked",e.data.title)},[]),n=Object(a.useMemo)(function(){return{sortable:!0}}),l=Object(a.useState)([{field:"name",width:200,checkboxSelection:!1,cellRenderer:function(e){return r.a.createElement(d.b,{to:"/articles/".concat(e.data.name,"/").concat(e.data.title,"/").concat(e.data.content)},e.data.name)}},{field:"title",width:300,editable:!1,filter:!0},{headerName:"",field:"delete",sortable:!1,width:100,cellRenderer:function(e){return r.a.createElement(d.b,{to:"/articles_delete/".concat(e.data.name)},"Delete")}}]),c=Object(j.a)(l,1)[0];return r.a.createElement("div",{className:"ag-theme-alpine",style:{height:400,width:600}},r.a.createElement(d.b,{to:"/articles/add-article"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"Add")),r.a.createElement(C.AgGridReact,{pagination:!0,paginationPageSize:10,rowSelection:"single",rowData:e,columnDefs:c,animateRows:!0,defaultColDef:n,onCellClicked:t}))}),q=function(e){var t=e.match,n=t.params.name,l=t.params.title,c=t.params.content;console.log(n);var i=Object(a.useState)(l),u=Object(j.a)(i,2),o=u[0],s=u[1],m=Object(a.useState)(c),p=Object(j.a)(m,2),f=p[0],b=p[1],E=function(){var e=Object(g.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/update/".concat(n),{method:"post",body:JSON.stringify({titleUpdate:o,paragraph:f}),headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a.message);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"add-comment-form"},r.a.createElement("h3",null,"Update Article"),r.a.createElement("label",null,"Title:",r.a.createElement("input",{type:"text",value:o,onChange:function(e){return s(e.target.value)}})),r.a.createElement("label",null,"Article:",r.a.createElement("textarea",{rows:"4",cols:"50",value:f,onChange:function(e){return b(e.target.value)}})),r.a.createElement(d.b,{to:"/article-listManagement"},r.a.createElement("button",{onClick:function(){return E()}},"Update")),r.a.createElement(d.b,{to:"/article-listManagement"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"Cancel"))))},M=function(e){var t=e.match.params.name,n=function(){var e=Object(g.a)(h.a.mark(function e(){var n,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles_delete/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,console.log(a.message);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"add-comment-form"},r.a.createElement("h3",null,"Do you agree to delete the ",t,"?"),r.a.createElement(d.b,{to:"/article-listManagement"},r.a.createElement("button",{onClick:function(){return n()}},"Yes")),r.a.createElement(d.b,{to:"/article-listManagement"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"No"))))},D=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(j.a)(c,2),u=i[0],o=i[1],s=function(){var e=Object(g.a)(h.a.mark(function e(){var t,a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/articles/add-article",{method:"post",body:JSON.stringify({titleName:n,paragraph:u}),headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,console.log(a.message);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"add-comment-form"},r.a.createElement("h3",null,"Update Article"),r.a.createElement("label",null,"Title:",r.a.createElement("input",{type:"text",value:n,onChange:function(e){return l(e.target.value)}})),r.a.createElement("label",null,"Article:",r.a.createElement("textarea",{rows:"4",cols:"50",value:u,onChange:function(e){return o(e.target.value)}})),r.a.createElement(d.b,{to:"/article-listManagement"},r.a.createElement("button",{onClick:function(){return s()}},"Add")),r.a.createElement(d.b,{to:"/article-listManagement"},r.a.createElement("button",{type:"button",className:"btn btn-info"},"Cancel"))))},F=function(){return r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(d.b,{to:"/"},"Home"),r.a.createElement(d.b,{to:"/about"},"About"),r.a.createElement(d.b,{to:"/articles-list"},"Articles"),r.a.createElement(d.b,{to:"/article-listManagement",articles:O()},"Articles - Management"))))},I=(n(76),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement("div",{id:"page-body"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",component:f,exact:!0}),r.a.createElement(p.a,{path:"/about",component:b}),r.a.createElement(p.a,{path:"/articles-list",component:w}),r.a.createElement(p.a,{path:"/article-listManagement",component:S}),r.a.createElement(p.a,{path:"/article/:name",component:k}),r.a.createElement(p.a,{path:"/articles/add-article",component:D}),r.a.createElement(p.a,{path:"/articles/:name/:title/:content",component:q}),r.a.createElement(p.a,{path:"/articles_delete/:name",component:M}),r.a.createElement(p.a,{component:A})))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[41,1,2]]]);
//# sourceMappingURL=main.b800aa22.chunk.js.map