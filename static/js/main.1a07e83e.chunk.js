(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(10),s=n.n(a),i=(n(39),n.p,n(40),n(34)),l=n(19),o=n(31),u=n(30),j=n.n(u),h=function(){return j.a.get("https://randomuser.me/api/?results=50")},d=n(5);var b=function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.userName}),Object(d.jsx)("td",{children:e.employeeLastName}),Object(d.jsx)("td",{children:Object(d.jsx)("img",{src:e.employeePicture})}),Object(d.jsx)("td",{children:e.employeeEmail})]})},m=n(32),O=n(33),f=n(14),p=n(20);var x=function(e){return Object(d.jsx)(m.a,{className:"bg-light justify-content-between",children:Object(d.jsxs)(O.a,{inline:!0,children:[Object(d.jsx)(f.a,{type:"text",placeholder:"Search",className:" mr-sm-2",onChange:e.handleInputChange}),Object(d.jsx)(p.a,{type:"submit",onClick:e.handleFormSubmit,children:"Submit"}),Object(d.jsx)(p.a,{type:"submit",onClick:e.handleFormSort,children:"Sort"})]})})};var g=function(){var e=Object(c.useState)("start"),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),s=Object(l.a)(a,2),u=s[0],j=s[1];Object(c.useEffect)((function(){m()}),[]);var m=function(){h().then((function(e){return r(e.data.results)})).catch((function(e){return console.log(e)}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{handleInputChange:function(e){j(e.target.value)},handleFormSubmit:function(e){e.preventDefault(),console.log(u);var t=n.filter((function(e){return e.name.first.includes(u)}));r(t),console.log(t)},handleFormSort:function(e){e.preventDefault();var t=Object(i.a)(n);t.sort((function(e,t){var n=e.name.last.toLowerCase(),c=t.name.last.toLowerCase();return n<c?-1:n>c?1:0})),r(t)}}),Object(d.jsxs)(o.a,{striped:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"First Name"}),Object(d.jsx)("th",{children:"Last Name"}),Object(d.jsx)("th",{children:"Picture"}),Object(d.jsx)("th",{children:"E-Mail"})]})}),Object(d.jsxs)("tbody",{children:[console.log(n),"start"!=n&&n.map((function(e){return Object(d.jsx)(b,{employeeLastName:e.name.last,userName:e.name.first,employeePicture:e.picture.thumbnail,employeeEmail:e.email})}))]})]})]})};n(63);var y=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(g,{})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(y,{})}),document.getElementById("root")),v()}},[[64,1,2]]]);
//# sourceMappingURL=main.1a07e83e.chunk.js.map