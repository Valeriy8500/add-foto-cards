(this["webpackJsonpadd-foto"]=this["webpackJsonpadd-foto"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(9),c=n.n(o),s=n(2),r=n(3),i=n(5),l=n(4),u=(n(14),n(0)),m=function(){return Object(u.jsx)("div",{className:"header",children:Object(u.jsx)("h1",{className:"header__title",children:"TEST APP"})})},d=(n(16),function(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("h2",{className:"footer__title",children:"\xa9 2018-2019"})})}),j=n(6),f=n.n(j),h=n(8),b=function e(){var t=this;Object(s.a)(this,e),this._base="https://boiling-refuge-66454.herokuapp.com/images",this.getResource=function(e){return fetch("".concat(t._base,"/").concat(e)).then((function(e){return e.json()})).then((function(e){return{url:e.url,comment:t.resComment(e),date:t.resDate(e)}}))},this.resComment=function(e){return void 0===e.comments[0]?null:e.comments[0].text},this.resDate=function(e){return void 0===e.comments[0]?null:e.comments[0].date},this.getImagesArray=Object(h.a)(f.a.mark((function e(){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t._base);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)}))),this.postComments=function(){var e=Object(h.a)(f.a.mark((function e(n,a){var o,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._base,"/").concat(n,"/comments"),{method:"Post",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 2:return o=e.sent,e.next=5,o.status;case 5:return c=e.sent,console.log(c),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},v=(n(18),function(){return Object(u.jsx)("div",{className:"lds-css",children:Object(u.jsxs)("div",{className:"lds-double-ring",children:[Object(u.jsx)("div",{}),Object(u.jsx)("div",{})]})})}),p=(n(19),n.p+"static/media/close__button_black.44a2231a.svg"),g=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).service=new b,e.state={url:null,comment:null,date:null,loading:!0,valueName:"",valueComment:""},e.getModalData=function(){e.service.getResource(e.props.id).then((function(t){e.setState({url:t.url,comment:t.comment,date:t.date,loading:!1})}))},e.changeName=function(t){var n=t.target.value;e.setState({valueName:n})},e.changeComment=function(t){var n=t.target.value;e.setState({valueComment:n})},e.formButtonClick=function(t){var n=e.props.id,a=e.state,o=a.valueName,c=a.valueComment,s=e.service.postComments(n,{name:o,comment:c});return t.preventDefault(),s},e.escKey=function(){document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.props.closeModal()}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.escKey(),this.getModalData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.url,a=t.comment,o=t.date,c=t.loading,s=t.valueName,r=t.valueComment;return c?Object(u.jsx)("div",{className:"modal-window",children:Object(u.jsx)("div",{className:"modal-window__container",children:Object(u.jsx)(v,{})})}):Object(u.jsx)("div",{className:"modal-window",children:Object(u.jsxs)("div",{className:"modal-window__container",children:[Object(u.jsx)(O,{url:n,closeModal:function(){return e.props.closeModal},comment:a,date:o}),Object(u.jsx)(x,{changeName:function(){return e.changeName},changeComment:function(){return e.changeComment},formButtonClick:function(){return e.formButtonClick},valueName:s,valueComment:r})]})})}}]),n}(a.Component),O=function(e){var t=e.url,n=e.closeModal,a=e.comment,o=e.date;return Object(u.jsxs)("div",{className:"modal-window__top-flex-block",children:[Object(u.jsx)("img",{className:"modal-window__image",src:t,alt:"foto"}),Object(u.jsx)("button",{className:"modal-window__close-button",onClick:n(),style:{backgroundImage:"url(".concat(p,")")}}),Object(u.jsxs)("div",{className:"modal-window__comments-block",children:[Object(u.jsx)("p",{className:"modal-window__comments-date",children:o}),Object(u.jsx)("p",{className:"modal-window__comment",children:a})]})]})},x=function(e){var t=e.changeName,n=e.changeComment,a=e.formButtonClick,o=e.valueName,c=e.valueComment;return Object(u.jsxs)("form",{className:"form",children:[Object(u.jsx)("label",{className:"form__label",children:Object(u.jsx)("input",{className:"form__input",type:"text",placeholder:" \u0412\u0430\u0448\u0435 \u0438\u043c\u044f",required:!0,value:o,onChange:t()})}),Object(u.jsx)("label",{className:"form__label",children:Object(u.jsx)("input",{className:"form__input",type:"text",placeholder:" \u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",value:c,required:!0,onChange:n()})}),Object(u.jsx)("button",{className:"form__button",type:"button",onClick:a(),children:"\u041e\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]})},w=(n(20),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).service=new b,e.state={images:[],loading:!0,modalWindow:!1,id:null},e.openModalWindow=function(t){e.setState({modalWindow:!0,id:t})},e.imagesLoaded=function(t){e.setState({images:t,loading:!1})},e.closeModal=function(){e.service.getImagesArray().then((function(t){e.setState({images:t,loading:!1,modalWindow:!1,id:null})})),document.removeEventListener("keydown",(function(t){"Escape"===t.key&&e.props.closeModal()}))},e.getFotoArray=function(){return e.service.getImagesArray().then(e.imagesLoaded)},e.renderFotoCards=function(){return e.state.images.map((function(t){return Object(u.jsx)("img",{className:"foto-container__image",alt:"foto",src:t.url,onClick:function(){return e.openModalWindow(t.id)}},t.id)}))},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.getFotoArray()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.modalWindow,a=e.id,o=this.renderFotoCards();return t?Object(u.jsx)(v,{}):n?Object(u.jsxs)("div",{className:"foto-container",children:[o,Object(u.jsx)(g,{id:a,closeModal:this.closeModal})]}):Object(u.jsx)("div",{className:"foto-container",children:o})}}]),n}(a.Component)),_=(n(21),function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{className:"main-block",children:[Object(u.jsx)(m,{}),Object(u.jsx)(w,{openModalWindow:this.openModalWindow}),Object(u.jsx)(d,{})]})}}]),n}(a.Component));c.a.render(Object(u.jsx)(_,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.e5c028aa.chunk.js.map