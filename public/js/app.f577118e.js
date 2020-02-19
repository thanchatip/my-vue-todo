(function(t){function o(o){for(var n,s,r=o[0],c=o[1],l=o[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(o);while(p.length)p.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,o=0;o<i.length;o++){for(var e=i[o],n=!0,r=1;r<e.length;r++){var c=e[r];0!==a[c]&&(n=!1)}n&&(i.splice(o--,1),t=s(s.s=e[0]))}return t}var n={},a={app:0},i=[];function s(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,o,e){s.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,o){if(1&o&&(t=s(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)s.d(e,n,function(o){return t[o]}.bind(null,n));return e},s.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(o,"a",o),o},s.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=o,r=r.slice();for(var l=0;l<r.length;l++)o(r[l]);var d=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var n=e("85ec"),a=e.n(n);a.a},"56d7":function(t,o,e){"use strict";e.r(o);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container",attrs:{id:"app"}},[e("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[e("a",{staticClass:"navbar-brand",attrs:{href:"#"},on:{click:function(o){return t.loadTodo()}}},[e("h4",[t._v(" MyTodo ")])]),t._m(0),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[e("ul",{staticClass:"navbar-nav"},[e("li",{staticClass:"nav-item active"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(o){t.loadTodo(),t.showCreate=!1,t.showTodo=!0}}},[t._v(" Todo List "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])]),e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(o){t.showTodo=!1,t.showCreate=!0,t.isEmpty=!1}}},[t._v(" Create "),e("span",{staticClass:"sr-only"},[t._v("(current)")])])])])])]),e("br"),t.showCreate?e("div",[t.emptySave?e("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" Please Enter Todo !!! ")]):t._e(),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"todoTitle"}},[t._v(" Input todo ")]),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newTask},on:{click:function(o){t.isEmpty=!0,t.emptySave=!1},input:function(o){o.target.composing||(t.newTask=o.target.value)}}}),t._m(1),e("br")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"todoTitle"}},[t._v(" Description ")]),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newDescription,expression:"newDescription"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newDescription},on:{input:function(o){o.target.composing||(t.newDescription=o.target.value)}}}),e("br")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(o){t.loadTodo(),t.showCreate=!1,t.showTodo=!0}}},[t._v(" Cancel ")]),t._v(" "),t.isEmpty?e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(o){t.saveTodo(),t.showCreate=!1,t.showTodo=!0}}},[t._v(" Save ")]):e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(o){t.showCreate=!0,t.showTodo=!1,t.emptySave=!0}}},[t._v(" Save ")])]):t._e(),t.showEdit?e("div",[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"todoTitle"}},[t._v(" Input todo ")]),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.taskEditText,expression:"taskEditText"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.taskEditText},on:{click:function(o){t.isEmpty=!1},input:function(o){o.target.composing||(t.taskEditText=o.target.value)}}}),t._m(2),e("br")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"todoTitle"}},[t._v(" Description ")]),e("br"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.descriptionEditText,expression:"descriptionEditText"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.descriptionEditText},on:{input:function(o){o.target.composing||(t.descriptionEditText=o.target.value)}}}),e("br")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(o){t.loadTodo(),t.showCreate=!1,t.showTodo=!0}}},[t._v(" Cancel ")]),t._v(" "),!0!==t.isEmpty?e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(o){t.updateTodoText(),t.showEdit=!1,t.showTodo=!0}}},[t._v(" Save ")]):t._e()]):t._e(),t.showTodo?e("div",t._l(t.todos,(function(o,n){return e("div",{key:o.id,staticClass:"card mb-2"},[e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(o.task))]),e("p",{staticClass:"card-text"},[t._v(t._s(o.description))]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-auto mr-auto"},[e("button",{staticClass:"btn btn-primary",on:{click:function(e){t.editTodo(o),t.showTodo=!1,t.showEdit=!0}}},[t._v(" Edit ")]),t._v(" "),e("button",{staticClass:"btn btn-danger",on:{click:function(e){return t.removeTodo(o.id)}}},[t._v(" Delete ")])]),e("div",{staticClass:"col-auto"},[0!==n?e("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"},on:{click:function(o){return t.moveUp(n)}}},[t._v(" Up ")]):t._e(),t._v(" "),n!==t.todos.length-1?e("button",{staticClass:"btn btn-outline-info",attrs:{type:"button"},on:{click:function(o){return t.moveDown(n)}}},[t._v(" Down ")]):t._e(),e("br")])])])])})),0):t._e()])},i=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("label",{staticClass:"form-text text-muted",attrs:{for:"todoTitle"}},[e("small",[t._v("* Required")])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("label",{staticClass:"form-text text-muted",attrs:{for:"todoTitle"}},[e("small",[t._v("* Required")])])}],s=(e("a4d3"),e("e01a"),e("4160"),e("a434"),e("159b"),e("c23d")),r=(e("e89a"),{apiKey:"AIzaSyDYs65_AIaAEI3-tpayM23T-1iMjILmPwI",authDomain:"vue-todo-f0129.firebaseapp.com",databaseURL:"https://vue-todo-f0129.firebaseio.com",projectId:"vue-todo-f0129",storageBucket:"vue-todo-f0129.appspot.com",messagingSenderId:"480055401847",appId:"1:480055401847:web:f9227fc0a48d381b7b1572"});s["firebase"].initializeApp(r);var c=s["firebase"].firestore(),l={data:function(){return{todos:[],newTask:"",newDescription:"",removeTask:"",showTodo:!0,showCreate:!1,showEdit:!1,isEmpty:!1,currentlyEditing:null,taskEditText:"",descriptionEditText:"",emptySave:!1}},mounted:function(){this.loadTodo()},firestore:function(){return{todos:c.collection("todos")}},methods:{saveTodo:function(){this.newTask&&0!=this.newDescription&&c.collection("todos").add({task:this.newTask,description:this.newDescription}).then(this.newTask="",this.newDescription=""),this.loadTodo()},loadTodo:function(){var t=[];c.collection("todos").get().then((function(o){o.forEach((function(o){var e={id:o.id,task:o.data().task,description:o.data().description};t.push(e)}))})),this.todos=t},editTodo:function(t){this.currentlyEditing=t.id,this.taskEditText=t.task,this.descriptionEditText=t.description},updateTodoText:function(){c.collection("todos").doc(this.currentlyEditing).update({task:this.taskEditText,description:this.descriptionEditText}).then((function(t){console.log("Updated !!!")})).catch((function(t){console.error("Error updating document text: ",t)})),this.currentlyEditing=null,this.todoEditText="",this.loadTodo()},removeTodo:function(t){c.collection("todos").doc(t).delete().then((function(){})).catch((function(t){console.error("Error removing document: ",t)})),this.loadTodo()},moveUp:function(t){if(0!==t){var o=this.todos[t];this.todos.splice(t,1),this.todos.splice(t-1,0,o)}},moveDown:function(t){if(t!=this.todos.length-1){var o=this.todos[t];this.todos.splice(t,1),this.todos.splice(t+1,0,o)}}}},d=l,u=(e("034f"),e("2877")),p=Object(u["a"])(d,a,i,!1,null,null,null),v=p.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,o,e){}});
//# sourceMappingURL=app.f577118e.js.map