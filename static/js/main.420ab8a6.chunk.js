(this["webpackJsonpnews-monkey"]=this["webpackJsonpnews-monkey"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(8),r=a.n(s),i=(a(14),a(2)),l=a(3),o=a(5),b=a(4),d=(a(15),a(0)),j=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",href:"#",children:"NewsMonkey"}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"#",children:"About"})})]}),Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})]})]})})})}}]),a}(n.Component),u=a(7),h=a.n(u),p=a(9),m=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,n=e.imgUrl,c=e.newsUrl;return Object(d.jsx)("div",{class:!0,children:Object(d.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(d.jsx)("img",{src:n,className:"card-img-top",alt:"Sorry, this image is not available",width:"500",height:"200"}),Object(d.jsxs)("div",{className:"card-body mx-4",children:[Object(d.jsx)("h6",{className:"card-title",children:t}),Object(d.jsx)("p",{className:"card-text",children:a}),Object(d.jsx)("a",{href:c,target:"_blank",className:"btn btn-primary",children:"Read More"})]})]})})}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).articles=[],e.state={articles:e.articles,loading:!1,page:1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(p.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://newsapi.org/v2/top-headlines?country=in&apiKey=1d8ab729b3644f1db00d67c6df897667",e.next=3,fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=1d8ab729b3644f1db00d67c6df897667");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({articles:a.articles}),console.log(a);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"container my-3",children:[Object(d.jsx)("h2",{className:"text-center",children:"NewsMonkey - Top Headlines"}),Object(d.jsxs)("div",{className:"row",children:[this.state.articles.map((function(e){return Object(d.jsx)("div",{className:"col my-2",children:Object(d.jsx)(m,{title:e.title,description:e.description,newsUrl:e.url,imgUrl:e.urlToImage})},e.url)})),Object(d.jsxs)("div",{className:"container d-flex justify-content-between",children:[Object(d.jsx)("button",{type:"button",className:"btn btn-dark",children:"\xab Previous"}),Object(d.jsx)("button",{type:"button",className:"btn btn-dark",children:"Next \xbb"})]})]})]})}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(j,{}),Object(d.jsx)(O,{})]})}}]),a}(n.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),x()}},[[18,1,2]]]);