(this["webpackJsonpbstu-web2"]=this["webpackJsonpbstu-web2"]||[]).push([[0],{34:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(11),r=n.n(s),a=(n(34),n(6)),l=n(7),o=n(8),d=n(9),j=n(10),b=n(14),u=n(26),h=n(28),O=n(29),x=n(23),f=n(24),m=n(46),p=function(){function e(t){Object(x.a)(this,e),this._text=t,this._id=void 0,this._title=void 0,this._id=Object(m.a)(),this._title=this.makeTitle(t)}return Object(f.a)(e,[{key:"makeTitle",value:function(e){var t=e.split(" ").slice(0,3);return t[t.length-1].length<3&&(t=t.slice(0,2)),t.join(" ").replaceAll(/[^\u0410-\u042f\u0401\u0430-\u044f\u04510-9\s]/g,"")}},{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title}},{key:"text",get:function(){return this._text}}]),e}(),_=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,c){var i;Object(x.a)(this,n);for(var s=arguments.length,r=new Array(s>2?s-2:0),a=2;a<s;a++)r[a-2]=arguments[a];return(i=t.call.apply(t,[this].concat(r)))._title=e,i._color=c,i._id=void 0,i._id=Object(m.a)(),i}return Object(f.a)(n,[{key:"color",get:function(){return this._color}},{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title},set:function(e){this.title=e}}],[{key:"randomHeaderColor",value:function(){var e=["#caedd2","rgb(237 207 202)","rgb(255, 236, 170)","rgb(202 231 237)","rgb(204 202 237)","rgb(237 202 234)","rgb(237 202 202)"];return e[Math.floor(Math.random()*e.length)]}}]),n}(Object(O.a)(Array));_.defaultHeaderColor="#e5ebf5";var v=n(15),g=n(1),k=function(e){var t=e.desk,n=e.task;return Object(g.jsxs)("div",{className:"list__card",children:[Object(g.jsxs)("header",{className:"card__header",children:[Object(g.jsx)("span",{children:n.title}),Object(g.jsx)("button",{onClick:function(){return t.performTask(n.id)},className:"btn btn_inline-green",children:Object(g.jsx)(l.a,{icon:o.a})})]}),Object(g.jsx)("main",{className:"card__main",children:n.text})]})},N=n(18),y=function(e){var t=e.desk,n=e.list,i=e.removeable,s=void 0===i||i,r=Object(c.useRef)(null);return Object(g.jsxs)("div",{className:"desk__list",children:[Object(g.jsxs)("header",{className:"list__header",children:[Object(g.jsx)("span",{ref:r,onBlur:function(){return function(){var e=r.current;e.contentEditable="false",e.blur()}()},className:"header__title",style:{backgroundColor:n.color},children:n.title}),Object(g.jsxs)("div",{className:"header__btn-container",children:[Object(g.jsx)("button",{onClick:function(){return function(){var e=r.current;e.contentEditable="true",e.focus()}()},className:"btn btn_inline-gray",children:Object(g.jsx)(l.a,{icon:o.b})}),s&&Object(g.jsx)("button",{onClick:function(){return t.removeList(n.id)},className:"btn btn_inline-red",children:Object(g.jsx)(l.a,{icon:o.e})})]})]}),Object(g.jsx)(N.c,{droppableId:n.id,children:function(e,c){return Object(g.jsxs)("main",Object(v.a)(Object(v.a)({className:"list__main"},e.droppableProps),{},{ref:e.innerRef,children:[n.map((function(e,n){return Object(g.jsx)(N.b,{draggableId:e.id,index:n,children:function(n,c){return Object(g.jsx)("div",Object(v.a)(Object(v.a)(Object(v.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(g.jsx)(k,{desk:t,task:e})}))}},e.id)})),e.placeholder]}))}})]})},w=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],s=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){i([Object(b.a)(_,["\u041d\u0435\u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435",_.defaultHeaderColor].concat([new p("\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0430\u043d\u0431\u0430\u043d \u0434\u043e\u0441\u043a\u0443 \u0431\u044b\u0441\u0442\u0440\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0438 \u0431\u0435\u0437 \u0441\u043c\u0441"),new p("\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043a\u0438 \u043f\u043e WEB"),new p("\u0422\u0443\u0442 \u0444\u0430\u043d\u0442\u0430\u0437\u0438\u044f \u043a\u043e\u043d\u0447\u0438\u043b\u0430\u0441\u044c, \u043a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e")]))])}),[]),{desk:n,addList:function(){i((function(e){return[].concat(Object(j.a)(e),[new _("\u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",_.randomHeaderColor())])}))},removeList:function(e){i((function(t){return Object(j.a)(t.filter((function(t){return t.id!==e})))}))},addTask:function(e){i((function(t){var n=t[0];return[Object(b.a)(_,[n.title,n.color].concat(Object(j.a)(n.concat(new p(e)))))].concat(Object(j.a)(t.slice(1)))}))},performTask:function(e){i((function(t){return Object(j.a)(t.map((function(t){return Object(b.a)(_,[t.title,t.color].concat(Object(j.a)(t.filter((function(t){return t.id!==e})))))})))}))},moveTask:function(e,t,c,s){i((function(i){var r=[],a=n.find((function(t){return t.id===e})),l=n.find((function(e){return e.id===t})),o=a.splice(c,1)[0];return l.splice(s,0,o),i.forEach((function(n){n.id!==e?n.id!==t?r.push(n):r.push(l):r.push(a)})),r}))}}}();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("header",{className:"header",children:[Object(g.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"20px"},children:[Object(g.jsx)("div",{className:"header__logo",children:"\u041a\u0430\u043d\u0431\u0430\u043d-\u0434\u043e\u0441\u043a\u0430"}),Object(g.jsxs)("div",{className:"header__user",children:[Object(g.jsx)("span",{children:"\u0418\u043b\u044c\u044f \u0410\u0440\u0442\u0451\u043c\u0435\u043d\u043a\u043e"}),Object(g.jsx)(d.b,{to:"/signin",children:Object(g.jsx)(l.a,{icon:o.d})})]})]}),Object(g.jsxs)("div",{className:"add-task-panel",style:{margin:"20px"},children:[Object(g.jsx)("input",{type:"text",placeholder:"\u0427\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c?",className:"input-text",value:n,onChange:function(e){return i(e.target.value)}}),Object(g.jsx)("button",{onClick:function(){n&&(s.addTask(n),i(""))},className:"btn btn_colored btn_active",children:Object(g.jsx)(l.a,{icon:o.c})})]})]}),Object(g.jsx)("main",{className:"main",children:Object(g.jsxs)("div",{className:"desk",children:[Object(g.jsxs)(N.a,{onDragEnd:function(e){if(console.log(e),e.destination){var t=e.source.droppableId,n=e.destination.droppableId,c=e.source.index,i=e.destination.index;s.moveTask(t,n,c,i)}},children:[s.desk[0]&&Object(g.jsx)(y,{desk:s,list:s.desk[0],removeable:!1},s.desk[0].id),s.desk.slice(1).map((function(e){return Object(g.jsx)(y,{desk:s,list:e},e.id)}))]}),Object(g.jsx)("div",{className:"add-list-container",children:Object(g.jsxs)("button",{onClick:function(){return s.addList()},className:"btn btn_colored btn_gray btn_fullwidth",children:[Object(g.jsx)(l.a,{icon:o.c})," \u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"]})})]})})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))},F=n(3),T=function(){return Object(g.jsxs)("div",{className:"center-container",children:[Object(g.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("label",{htmlFor:"email",children:"E-Mail:"}),Object(g.jsx)("input",{type:"text",className:"input-text mb20"}),Object(g.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(g.jsx)("input",{type:"password",className:"input-text mb20"}),Object(g.jsxs)("div",{className:"center-container__bottom-controls",children:[Object(g.jsx)("input",{type:"submit",value:"\u0412\u043e\u0439\u0442\u0438",className:"btn btn_colored btn_active"}),Object(g.jsxs)("span",{children:["\u0438\u043b\u0438 ",Object(g.jsx)(d.b,{to:"/register",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})]})]})},E=function(){return Object(g.jsxs)("div",{className:"center-container",children:[Object(g.jsx)("h1",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(g.jsxs)("form",{children:[Object(g.jsx)("label",{htmlFor:"email",children:"E-Mail:"}),Object(g.jsx)("input",{type:"text",className:"input-text mb20"}),Object(g.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(g.jsx)("input",{type:"password",className:"input-text mb20"}),Object(g.jsx)("label",{htmlFor:"password",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:"}),Object(g.jsx)("input",{type:"password",className:"input-text mb20"}),Object(g.jsxs)("div",{className:"center-container__bottom-controls",children:[Object(g.jsx)("input",{type:"submit",value:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",className:"btn btn_colored btn_active"}),Object(g.jsxs)("span",{children:["\u0438\u043b\u0438 ",Object(g.jsx)(d.b,{to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})]})};r.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(d.a,{children:Object(g.jsxs)(F.c,{children:[Object(g.jsx)(F.a,{path:"/",element:Object(g.jsx)(w,{})}),Object(g.jsx)(F.a,{path:"/signin",element:Object(g.jsx)(T,{})}),Object(g.jsx)(F.a,{path:"/register",element:Object(g.jsx)(E,{})})]})})}),document.getElementById("root")),C()}},[[44,1,2]]]);
//# sourceMappingURL=main.dc437405.chunk.js.map