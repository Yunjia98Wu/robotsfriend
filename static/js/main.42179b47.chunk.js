(this.webpackJsonprobotfriend=this.webpackJsonprobotfriend||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(3),i=n.n(s),o=(n(12),n(4)),a=n(5),h=n(7),l=n(6),b=n(0),d=function(e){var t=e.name,n=e.email,r=e.id;return Object(b.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(b.jsx)("img",{src:" https://robohash.org/".concat(r,"?200x200")}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("p",{children:n}),">"]})]})},j=function(e){var t=e.robots,n=t.map((function(e,n){return Object(b.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(b.jsx)("div",{children:n})},u=function(e){e.searchfield;var t=e.searchchange;return Object(b.jsx)("div",{children:Object(b.jsx)("input",{className:"pa2 ba b--blue bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(b.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"},children:e.children})},g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(b.jsx)("h1",{children:"Loading"}):Object(b.jsxs)("div",{className:"tc",children:[Object(b.jsx)("h1",{children:"Robotfriends"}),Object(b.jsx)(u,{searchfield:this.state.searchfield,searchchange:this.onSearchChange}),Object(b.jsx)(f,{children:Object(b.jsx)(j,{robots:t})})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};n(14);i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.42179b47.chunk.js.map