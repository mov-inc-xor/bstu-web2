(this["webpackJsonpbstu-web2"]=this["webpackJsonpbstu-web2"]||[]).push([[0],{49:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),s=n(13),r=n.n(s),a=(n(49),n(7)),l=n(8),o=n(9),d=n(10),j=n(26),b=n.n(j),u=n(12),h=n(11),O=n(39),x=n(40),f=n(43),m=n(44),p=n(27),_=n(28),v=n(41),g=n.n(v),k=n(78),N=function(){function e(t){Object(p.a)(this,e),this._text=t,this._id=void 0,this._title=void 0,this._id=Object(k.a)(),this._title=this.makeTitle(t)}return Object(_.a)(e,[{key:"makeTitle",value:function(e){var t=e.split(" ").slice(0,3);return t[t.length-1].length<3&&(t=t.slice(0,2)),t.join(" ").replaceAll(/[^\u0410-\u042f\u0401\u0430-\u044f\u0451A-Za-z0-9\s]/g,"")}},{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title}},{key:"text",get:function(){return this._text}}]),e}(),y=function(e){Object(x.a)(n,e);var t=Object(f.a)(n);function n(e,c){var i;Object(p.a)(this,n);for(var s=arguments.length,r=new Array(s>2?s-2:0),a=2;a<s;a++)r[a-2]=arguments[a];return(i=t.call.apply(t,[this].concat(r)))._title=e,i._color=c,i._id=void 0,i._id=Object(k.a)(),i}return Object(_.a)(n,[{key:"color",get:function(){return this._color}},{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title},set:function(e){this.title=e}}],[{key:"randomHeaderColor",value:function(){var e=["#caedd2","rgb(237 207 202)","rgb(255, 236, 170)","rgb(202 231 237)","rgb(204 202 237)","rgb(237 202 234)","rgb(237 202 202)"];return e[Math.floor(Math.random()*e.length)]}}]),n}(Object(m.a)(Array));y.defaultHeaderColor="#e5ebf5";var w=n(16),C=n(1),F=function(e){var t=e.desk,n=e.task;return Object(C.jsxs)("div",{className:"list__card",children:[Object(C.jsxs)("header",{className:"card__header",children:[Object(C.jsx)("span",{children:n.title}),Object(C.jsx)("button",{onClick:function(){return t.performTask(n.id)},className:"btn btn_inline-green",children:Object(C.jsx)(l.a,{icon:o.a})})]}),Object(C.jsx)("main",{className:"card__main",children:n.text})]})},T=n(19),E=function(e){var t=e.desk,n=e.list,i=e.editable,s=void 0===i||i,r=Object(c.useRef)(null);return Object(C.jsxs)("div",{className:"desk__list",children:[Object(C.jsxs)("header",{className:"list__header",children:[Object(C.jsx)("span",{ref:r,onBlur:function(){return function(){var e=r.current;e.contentEditable="false",e.blur()}()},className:"header__title",style:{backgroundColor:n.color},children:n.title}),Object(C.jsx)("div",{className:"header__btn-container",children:s&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("button",{onClick:function(){return function(){var e=r.current;e.contentEditable="true",e.focus()}()},className:"btn btn_inline-gray",children:Object(C.jsx)(l.a,{icon:o.b})}),Object(C.jsx)("button",{onClick:function(){return t.removeList(n.id)},className:"btn btn_inline-red",children:Object(C.jsx)(l.a,{icon:o.e})})]})})]}),Object(C.jsx)(T.c,{droppableId:n.id,children:function(e,c){return Object(C.jsxs)("main",Object(w.a)(Object(w.a)({className:"list__main"},e.droppableProps),{},{ref:e.innerRef,children:[n.map((function(e,n){return Object(C.jsx)(T.b,{draggableId:e.id,index:n,children:function(n,c){return Object(C.jsx)("div",Object(w.a)(Object(w.a)(Object(w.a)({ref:n.innerRef},n.draggableProps),n.dragHandleProps),{},{children:Object(C.jsx)(F,{desk:t,task:e})}))}},e.id)})),e.placeholder]}))}})]})},I=function(){var e=Object(c.useState)(""),t=Object(a.a)(e,2),n=t[0],i=t[1],s=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(c.useEffect)((function(){Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("localhost:8080/desk").then((function(e){return e.data}));case 2:t=e.sent,i(t.desk.lists.map((function(e){return Object(u.a)(y,[e.title,e.color].concat(Object(h.a)(e.tasks.map((function(e){return new N(e.text)})))))})));case 4:case"end":return e.stop()}}),e)})))().catch((function(){i([Object(u.a)(y,["\u041d\u0435\u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0435",y.defaultHeaderColor].concat([new N("\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0430\u043d\u0431\u0430\u043d \u0434\u043e\u0441\u043a\u0443 \u0431\u044b\u0441\u0442\u0440\u043e \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u0438 \u0431\u0435\u0437 \u0441\u043c\u0441"),new N("\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u043b\u0430\u0431\u043e\u0440\u0430\u0442\u043e\u0440\u043a\u0438 \u043f\u043e WEB"),new N("\u0422\u0443\u0442 \u0444\u0430\u043d\u0442\u0430\u0437\u0438\u044f \u043a\u043e\u043d\u0447\u0438\u043b\u0430\u0441\u044c, \u043a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e")]))])}))}),[]),{desk:n,addList:function(){i((function(e){return[].concat(Object(h.a)(e),[new y("\u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",y.randomHeaderColor())])}))},removeList:function(e){i((function(t){return Object(h.a)(t.filter((function(t){return t.id!==e})))}))},addTask:function(e){i((function(t){var n=t[0];return[Object(u.a)(y,[n.title,n.color].concat(Object(h.a)(n.concat(new N(e)))))].concat(Object(h.a)(t.slice(1)))}))},performTask:function(e){i((function(t){return Object(h.a)(t.map((function(t){return Object(u.a)(y,[t.title,t.color].concat(Object(h.a)(t.filter((function(t){return t.id!==e})))))})))}))},moveTask:function(e,t,c,s){i((function(i){var r=[],a=n.find((function(t){return t.id===e})),l=n.find((function(e){return e.id===t})),o=a.splice(c,1)[0];return l.splice(s,0,o),i.forEach((function(n){n.id!==e?n.id!==t?r.push(n):r.push(l):r.push(a)})),r}))}}}();return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)("header",{className:"header",children:[Object(C.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"20px"},children:[Object(C.jsx)("div",{className:"header__logo",children:"\u041a\u0430\u043d\u0431\u0430\u043d-\u0434\u043e\u0441\u043a\u0430"}),Object(C.jsxs)("div",{className:"header__user",children:[Object(C.jsx)("span",{children:"\u0418\u043b\u044c\u044f \u0410\u0440\u0442\u0451\u043c\u0435\u043d\u043a\u043e"}),Object(C.jsx)(d.b,{to:"/signin",children:Object(C.jsx)(l.a,{icon:o.d})})]})]}),Object(C.jsxs)("div",{className:"add-task-panel",style:{margin:"20px"},children:[Object(C.jsx)("input",{type:"text",placeholder:"\u0427\u0442\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c?",className:"input-text",value:n,onChange:function(e){return i(e.target.value)}}),Object(C.jsx)("button",{onClick:function(){n&&(s.addTask(n),i(""))},className:"btn btn_colored btn_active",children:Object(C.jsx)(l.a,{icon:o.c})})]})]}),Object(C.jsx)("main",{className:"main",children:Object(C.jsxs)("div",{className:"desk",children:[Object(C.jsxs)(T.a,{onDragEnd:function(e){if(console.log(e),e.destination){var t=e.source.droppableId,n=e.destination.droppableId,c=e.source.index,i=e.destination.index;s.moveTask(t,n,c,i)}},children:[s.desk[0]&&Object(C.jsx)(E,{desk:s,list:s.desk[0],editable:!1},s.desk[0].id),s.desk.slice(1).map((function(e){return Object(C.jsx)(E,{desk:s,list:e},e.id)}))]}),Object(C.jsx)("div",{className:"add-list-container",children:Object(C.jsxs)("button",{onClick:function(){return s.addList()},className:"btn btn_colored btn_gray btn_fullwidth",children:[Object(C.jsx)(l.a,{icon:o.c})," \u041d\u043e\u0432\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a"]})})]})})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))},H=n(3),M=function(){return Object(C.jsxs)("div",{className:"center-container",children:[Object(C.jsx)("h1",{children:"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f"}),Object(C.jsxs)("form",{children:[Object(C.jsx)("label",{htmlFor:"email",children:"E-Mail:"}),Object(C.jsx)("input",{type:"text",className:"input-text mb20"}),Object(C.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(C.jsx)("input",{type:"password",className:"input-text mb20"}),Object(C.jsxs)("div",{className:"center-container__bottom-controls",children:[Object(C.jsx)("input",{type:"submit",value:"\u0412\u043e\u0439\u0442\u0438",className:"btn btn_colored btn_active"}),Object(C.jsxs)("span",{children:["\u0438\u043b\u0438 ",Object(C.jsx)(d.b,{to:"/register",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})]})]})},P=function(){return Object(C.jsxs)("div",{className:"center-container",children:[Object(C.jsx)("h1",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(C.jsxs)("form",{children:[Object(C.jsx)("label",{htmlFor:"email",children:"E-Mail:"}),Object(C.jsx)("input",{type:"text",className:"input-text mb20"}),Object(C.jsx)("label",{htmlFor:"password",children:"\u041f\u0430\u0440\u043e\u043b\u044c:"}),Object(C.jsx)("input",{type:"password",className:"input-text mb20"}),Object(C.jsx)("label",{htmlFor:"password",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:"}),Object(C.jsx)("input",{type:"password",className:"input-text mb20"}),Object(C.jsxs)("div",{className:"center-container__bottom-controls",children:[Object(C.jsx)("input",{type:"submit",value:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",className:"btn btn_colored btn_active"}),Object(C.jsxs)("span",{children:["\u0438\u043b\u0438 ",Object(C.jsx)(d.b,{to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})]})};r.a.render(Object(C.jsx)(i.a.StrictMode,{children:Object(C.jsx)(d.a,{basename:"/bstu-web2",children:Object(C.jsxs)(H.c,{children:[Object(C.jsx)(H.a,{path:"/",element:Object(C.jsx)(I,{})}),Object(C.jsx)(H.a,{path:"/signin",element:Object(C.jsx)(M,{})}),Object(C.jsx)(H.a,{path:"/register",element:Object(C.jsx)(P,{})})]})})}),document.getElementById("root")),L()}},[[76,1,2]]]);
//# sourceMappingURL=main.4fd57e08.chunk.js.map