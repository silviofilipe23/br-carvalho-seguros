(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"0050":function(t,o,e){},"1d62":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[t._v("eeeeeeeee")])},s=[],r={},i=r,l=e("2877"),c=Object(l["a"])(i,a,s,!1,null,null,null);o["default"]=c.exports},"20b6":function(t,o,e){"use strict";var a=e("0050"),s=e.n(a);s.a},"24d9":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("title-page",{attrs:{title:this.$route.meta.title}}),e("carousel-sec")],1)},s=[],r=e("9fc5"),i=e("b2f0"),l={name:"PsCard",components:{TitlePage:r["a"],CarouselSec:i["a"]}},c=l,n=e("2877"),u=Object(n["a"])(c,a,s,!1,null,null,null);o["default"]=u.exports},"2e99":function(t,o,e){"use strict";var a=e("a6bc"),s=e.n(a);s.a},"31df":function(t,o,e){"use strict";var a=e("4eab"),s=e.n(a);s.a},"4b3f":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("form",{staticClass:"form-login",on:{submit:function(o){return o.preventDefault(),t.doLogin()}}},[e("div",{staticClass:"card"},[t._m(0),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{required:"",type:"email",placeholder:"E-mail"},domProps:{value:t.email},on:{input:function(o){o.target.composing||(t.email=o.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{required:"",type:"password",placeholder:"Senha"},domProps:{value:t.password},on:{input:function(o){o.target.composing||(t.password=o.target.value)}}})]),e("button",{staticClass:"btn btn-primary w-100",attrs:{disabled:t.loading}},[t.loading?[t._v(" Entrando... "),e("i",{staticClass:"fa fa-spinner fa-spin"})]:[t._v(" Entrar "),e("i",{staticClass:"fa fa-sign-in-alt"})]],2)])])])},s=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"card-header text-center"},[e("h1",{staticClass:"mb-0"},[t._v("Expenses")])])}];e("96cf"),e("d3b7");function r(t,o,e,a,s,r,i){try{var l=t[r](i),c=l.value}catch(n){return void e(n)}l.done?o(c):Promise.resolve(c).then(a,s)}function i(t){return function(){var o=this,e=arguments;return new Promise((function(a,s){var i=t.apply(o,e);function l(t){r(i,a,s,l,c,"next",t)}function c(t){r(i,a,s,l,c,"throw",t)}l(void 0)}))}}var l={name:"Login",data:function(){return{email:"",password:"",loading:!1}},mounted:function(){0},methods:{doLogin:function(){var t=this;return i(regeneratorRuntime.mark((function o(){var e,a,s,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t.loading=!0,console.log("ssss"),e=t.email,a=t.password,o.prev=3,o.next=6,t.$firebase.auth().signInWithEmailAndPassword(e,a);case 6:s=o.sent,window.uid=s.user.uid,t.$router.push({name:"home"}),o.next=23;break;case 11:o.prev=11,o.t0=o["catch"](3),r="",o.t1=o.t0.code,o.next="auth/user-not-found"===o.t1?17:"auth/wrong-password"===o.t1?19:21;break;case 17:return r="Não foi possível localizar o usuário.",o.abrupt("break",22);case 19:return r="Senha inválida",o.abrupt("break",22);case 21:r="Não foi possível fazer login, tente novamente";case 22:console.log(r);case 23:t.loading=!1;case 24:case"end":return o.stop()}}),o,null,[[3,11]])})))()}},beforeRouteEnter:function(t,o,e){e((function(t){window.uid&&t.$router.push({name:"home"})}))}},c=l,n=(e("2e99"),e("2877")),u=Object(n["a"])(c,a,s,!1,null,"048c46ea",null);o["default"]=u.exports},"4eab":function(t,o,e){},"4ee2":function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("title-page",{attrs:{title:this.$route.meta.title}}),t._m(0),t._m(1),e("carousel-sec")],1)},s=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container",staticStyle:{"padding-bottom":"30px"}},[e("div",{staticClass:"row box-cotacao"},[e("div",{staticClass:"col-lg-12 titulo-cotacao"},[e("h2",[t._v("Cotação para Seguro Residencial")])])]),e("div",{staticClass:"row  box-cotacao",staticStyle:{"margin-top":"30px"}},[e("div",{staticClass:"col-lg-12"},[e("h3",[t._v("Dados do Proprietário")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12"},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"segurado"}},[t._v("Nome do Proprietário:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"Digite o nome completo",type:"text",id:"segurado",required:""}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"email"}},[t._v("Email para Contato:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"pedro@exemplo.com",type:"email",id:"email",required:""}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"telefone"}},[t._v("Telefone para Contato:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"(xx) XXXX-XXXX",type:"text",id:"telefone",required:""}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"nome"}},[t._v("Nome do Solicitante:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"Digite o nome completo",type:"text",id:"nome",required:""}})])]),e("div",{staticClass:"row  box-cotacao",staticStyle:{"margin-top":"30px"}},[e("div",{staticClass:"col-lg-12"},[e("h3",[t._v("Dados do Imóvel")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"ocupacao"}},[t._v("Ocupação do Imóvel:")]),e("select",{staticClass:"form-control",attrs:{id:"ocupacao"}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("Selecione")]),e("option",[t._v("Habitual")]),e("option",[t._v("Veraneio")])])]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"tipo"}},[t._v("Tipo de Moradia:")]),e("select",{staticClass:"form-control",attrs:{id:"tipo"}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("Selecione")]),e("option",[t._v("Madeira")]),e("option",[t._v("Madeira/Alvenaria")]),e("option",[t._v("Alvenaria")]),e("option",[t._v("Alvenaria/Forro de Madeira")])])]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"cep"}},[t._v("CEP da Residência:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"00000-000",type:"text",id:"cep",required:""}})])]),e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-lg-12",staticStyle:{"margin-bottom":"0px"}},[e("label",{attrs:{for:""}},[t._v("Equipamentos de Segurança:")])]),e("div",{staticClass:"form-group col-lg-3"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"alarmeLocal"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"alarmeLocal"}},[t._v("Alarme Local")])])]),e("div",{staticClass:"form-group col-lg-3"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"alarmevigilancia"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"alarmevigilancia"}},[t._v("Alarme por Empresa de Vigilância")])])]),e("div",{staticClass:"form-group col-lg-3"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"grade"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"grade"}},[t._v("Grades nas Janelas")])])]),e("div",{staticClass:"form-group col-lg-3"},[e("div",{staticClass:"custom-control custom-checkbox"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"condFechado"}}),e("label",{staticClass:"custom-control-label",attrs:{for:"condFechado"}},[t._v("Condomínio Fechado")])])])]),e("div",{staticClass:"row  box-cotacao",staticStyle:{"margin-top":"30px"}},[e("div",{staticClass:"col-lg-12"},[e("h3",[t._v("Coberturas do Imóvel - Valores em R$")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"seguro"}},[t._v("Seguro:")]),e("select",{staticClass:"form-control",attrs:{id:"seguro"}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("Selecione")]),e("option",[t._v("Novo")]),e("option",[t._v("Renovação")])])]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"incendio"}},[t._v("Incêndio:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"",type:"text",id:"incendio"}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"vendaval"}},[t._v("Vendaval/Impacto de Veículos:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"",type:"text",id:"vendaval"}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"danos"}},[t._v("Danos Elétricos:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"",type:"text",id:"danos"}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"vidros"}},[t._v("Quebra de Vídros:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"",type:"text",id:"vidros"}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"aluguel"}},[t._v("Aluguel Perda ou Pagamento")]),e("input",{staticClass:"form-control",attrs:{placeholder:"",type:"text",id:"aluguel"}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"desmor"}},[t._v("Desmoronamento:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"",type:"text",id:"desmor"}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"resp"}},[t._v("Responsabilidade Familiar:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"",type:"text",id:"resp"}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"rouboFurto"}},[t._v("Roubo ou Furto:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"",type:"text",id:"rouboFurto"}})]),e("div",{staticClass:"form-group col-lg-6"},[e("label",{attrs:{for:"assist"}},[t._v("Assistência 24Hrs:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"",type:"text",id:"assist"}})]),e("div",{staticClass:"form-group col-lg-12"},[e("label",{attrs:{for:"info"}},[t._v("Outras Coberturas / Informações:")]),e("textarea",{staticClass:"form-control",attrs:{id:"info",rows:"3"}})])]),e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-lg-12"},[e("button",{staticClass:"btn form-control btn-primary",attrs:{type:"submit"}},[t._v("Enviar Cotação")])])])])])])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container",staticStyle:{padding:"50px 15px"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12",staticStyle:{"margin-top":"15px"}},[e("span",[t._v("Muros, grades e cães protegem sua casa, mas não garantem que ela nunca será roubada. Além disso, existem outros imprevistos (incêndio, explosão, vendaval, queda de raios, entre outros.) que podem causar prejuízos, muitas vezes irrecuperáveis.")])]),e("div",{staticClass:"col-lg-12",staticStyle:{"margin-top":"15px"}},[e("span",[t._v("Por isso, mais do que proteger, você precisa garantir seu patrimônio. É exatamente isto que o Seguro Residência oferece. Um seguro com diversas vantagens a um preço reduzido.")])]),e("div",{staticClass:"col-lg-12",staticStyle:{"margin-top":"15px"}},[e("span",{staticClass:"titulo2"},[t._v("Principais Vantagens e Benefícios:")])]),e("div",{staticClass:"col-lg-12"},[e("ul",[e("li",[t._v("Pagamento em até 12 parcelas ou em até 4 vezes sem juros;")]),e("li",[t._v("Sem interrupção das coberturas contratadas durante as férias (30 dias);")]),e("li",[t._v("Preços especiais para apartamentos;")]),e("li",[t._v("Descontos especiais para renovação Porto Seguro sem sinistro;")]),e("li",[t._v("Desconto para cliente Porto Seguro;")]),e("li",[t._v("Descontos especiais para residências em condomínios fechados (horizontais);")]),e("li",[t._v("Abrangência para Residências de Veraneio, com cobertura para subtração de bens.")])])])])]),e("div",{staticClass:"col-lg-5 img-seguro-auto"})])])}],r=e("9fc5"),i=e("b2f0"),l={name:"Residencia",components:{TitlePage:r["a"],CarouselSec:i["a"]}},c=l,n=(e("20b6"),e("2877")),u=Object(n["a"])(c,a,s,!1,null,"501562b2",null);o["default"]=u.exports},6988:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("title-page",{attrs:{title:this.$route.meta.title}}),e("carousel-sec"),e("h1",[t._v("dsafasd")])],1)},s=[],r=e("9fc5"),i=e("b2f0"),l={name:"Vida",components:{TitlePage:r["a"],CarouselSec:i["a"]}},c=l,n=e("2877"),u=Object(n["a"])(c,a,s,!1,null,null,null);o["default"]=u.exports},8995:function(t,o,e){"use strict";var a=e("cba4"),s=e.n(a);s.a},"96c0":function(t,o,e){},"96cf":function(t,o,e){var a=function(t){"use strict";var o,e=Object.prototype,a=e.hasOwnProperty,s="function"===typeof Symbol?Symbol:{},r=s.iterator||"@@iterator",i=s.asyncIterator||"@@asyncIterator",l=s.toStringTag||"@@toStringTag";function c(t,o,e,a){var s=o&&o.prototype instanceof f?o:f,r=Object.create(s.prototype),i=new L(a||[]);return r._invoke=E(t,e,i),r}function n(t,o,e){try{return{type:"normal",arg:t.call(o,e)}}catch(a){return{type:"throw",arg:a}}}t.wrap=c;var u="suspendedStart",d="suspendedYield",p="executing",v="completed",m={};function f(){}function g(){}function h(){}var C={};C[r]=function(){return this};var b=Object.getPrototypeOf,_=b&&b(b(q([])));_&&_!==e&&a.call(_,r)&&(C=_);var y=h.prototype=f.prototype=Object.create(C);function x(t){["next","throw","return"].forEach((function(o){t[o]=function(t){return this._invoke(o,t)}}))}function w(t,o){function e(s,r,i,l){var c=n(t[s],t,r);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&a.call(d,"__await")?o.resolve(d.__await).then((function(t){e("next",t,i,l)}),(function(t){e("throw",t,i,l)})):o.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return e("throw",t,i,l)}))}l(c.arg)}var s;function r(t,a){function r(){return new o((function(o,s){e(t,a,o,s)}))}return s=s?s.then(r,r):r()}this._invoke=r}function E(t,o,e){var a=u;return function(s,r){if(a===p)throw new Error("Generator is already running");if(a===v){if("throw"===s)throw r;return X()}e.method=s,e.arg=r;while(1){var i=e.delegate;if(i){var l=S(i,e);if(l){if(l===m)continue;return l}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(a===u)throw a=v,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);a=p;var c=n(t,o,e);if("normal"===c.type){if(a=e.done?v:d,c.arg===m)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(a=v,e.method="throw",e.arg=c.arg)}}}function S(t,e){var a=t.iterator[e.method];if(a===o){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=o,S(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var s=n(a,t.iterator,e.arg);if("throw"===s.type)return e.method="throw",e.arg=s.arg,e.delegate=null,m;var r=s.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=o),e.delegate=null,m):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function P(t){var o={tryLoc:t[0]};1 in t&&(o.catchLoc=t[1]),2 in t&&(o.finallyLoc=t[2],o.afterLoc=t[3]),this.tryEntries.push(o)}function k(t){var o=t.completion||{};o.type="normal",delete o.arg,t.completion=o}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function q(t){if(t){var e=t[r];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var s=-1,i=function e(){while(++s<t.length)if(a.call(t,s))return e.value=t[s],e.done=!1,e;return e.value=o,e.done=!0,e};return i.next=i}}return{next:X}}function X(){return{value:o,done:!0}}return g.prototype=y.constructor=h,h.constructor=g,h[l]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var o="function"===typeof t&&t.constructor;return!!o&&(o===g||"GeneratorFunction"===(o.displayName||o.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,l in t||(t[l]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},x(w.prototype),w.prototype[i]=function(){return this},t.AsyncIterator=w,t.async=function(o,e,a,s,r){void 0===r&&(r=Promise);var i=new w(c(o,e,a,s),r);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(y),y[l]="Generator",y[r]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var o=[];for(var e in t)o.push(e);return o.reverse(),function e(){while(o.length){var a=o.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},t.values=q,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=o,this.done=!1,this.delegate=null,this.method="next",this.arg=o,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=o)},stop:function(){this.done=!0;var t=this.tryEntries[0],o=t.completion;if("throw"===o.type)throw o.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function s(a,s){return l.type="throw",l.arg=t,e.next=a,s&&(e.method="next",e.arg=o),!!s}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],l=i.completion;if("root"===i.tryLoc)return s("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),n=a.call(i,"finallyLoc");if(c&&n){if(this.prev<i.catchLoc)return s(i.catchLoc,!0);if(this.prev<i.finallyLoc)return s(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return s(i.catchLoc,!0)}else{if(!n)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return s(i.finallyLoc)}}}},abrupt:function(t,o){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.tryLoc<=this.prev&&a.call(s,"finallyLoc")&&this.prev<s.finallyLoc){var r=s;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=o&&o<=r.finallyLoc&&(r=null);var i=r?r.completion:{};return i.type=t,i.arg=o,r?(this.method="next",this.next=r.finallyLoc,m):this.complete(i)},complete:function(t,o){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&o&&(this.next=o),m},finish:function(t){for(var o=this.tryEntries.length-1;o>=0;--o){var e=this.tryEntries[o];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),m}},catch:function(t){for(var o=this.tryEntries.length-1;o>=0;--o){var e=this.tryEntries[o];if(e.tryLoc===t){var a=e.completion;if("throw"===a.type){var s=a.arg;k(e)}return s}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:q(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=o),m}},t}(t.exports);try{regeneratorRuntime=a}catch(s){Function("r","regeneratorRuntime = r")(a)}},"9fc5":function(t,o,e){"use strict";var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container-fluid m-0 title"},[e("div",{staticClass:"container"},[e("h1",[t._v(t._s(t.title))])])])},s=[],r={name:"TitlePages",props:{title:String}},i=r,l=(e("b4ec"),e("2877")),c=Object(l["a"])(i,a,s,!1,null,"655f21fe",null);o["a"]=c.exports},a6bc:function(t,o,e){},ad8d:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("title-page",{attrs:{title:this.$route.meta.title}}),e("carousel-sec")],1)},s=[],r=e("9fc5"),i=e("b2f0"),l={name:"AcidentesPessoais",components:{TitlePage:r["a"],CarouselSec:i["a"]}},c=l,n=e("2877"),u=Object(n["a"])(c,a,s,!1,null,null,null);o["default"]=u.exports},afd0:function(t,o,e){"use strict";e.r(o);var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("title-page",{attrs:{title:this.$route.meta.title}}),t._m(0),t._m(1),e("carousel-sec")],1)},s=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container",staticStyle:{"padding-bottom":"30px"}},[e("div",{staticClass:"row box-cotacao"},[e("div",{staticClass:"col-sm-12  titulo-cotacao"},[e("h2",[t._v("Cotação para Seguro Automóvel")])])]),e("div",{staticClass:"row  box-cotacao",staticStyle:{"margin-top":"30px"}},[e("div",{staticClass:"col-sm-12"},[e("h3",[t._v("Dados do Segurado (Proprietário)")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12"},[e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-lg-6 col-sm-12"},[e("label",{attrs:{for:"segurado"}},[t._v("Segurado:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"Digite o nome completo",type:"text",id:"segurado",required:""}})]),e("div",{staticClass:"form-group col-lg-6 col-sm-12"},[e("label",{attrs:{for:"email"}},[t._v("Email:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"pedro@exemplo.com",type:"email",id:"email",required:""}})]),e("div",{staticClass:"form-group col-lg-3 col-sm-12"},[e("label",{attrs:{for:"telefone"}},[t._v("Telefone Residencial:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"(xx) XXXX-XXXX",type:"text",id:"telefone",required:""}})]),e("div",{staticClass:"form-group col-lg-3 col-sm-12"},[e("label",{attrs:{for:"celular"}},[t._v("Celular:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"(xx) XXXXX-XXXX",type:"text",id:"celular"}})]),e("div",{staticClass:"form-group col-lg-3 col-sm-12"},[e("label",{attrs:{for:"nascimento"}},[t._v("Data de Nascimento:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"dd/mm/aaaa",type:"text",id:"nascimento",required:""}})]),e("div",{staticClass:"form-group col-lg-3 col-sm-12"},[e("label",{attrs:{for:"prof"}},[t._v("Profissão:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"Exemplo: Professor",type:"text",id:"prof",required:""}})]),e("div",{staticClass:"form-group col-lg-3 col-sm-12"},[e("label",{attrs:{for:"cpf"}},[t._v("CPF:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"000.000.000-00",type:"text",id:"cpf",required:""}})]),e("div",{staticClass:"form-group col-lg-3 col-sm-12"},[e("label",{attrs:{for:"sexo"}},[t._v("Sexo:")]),e("select",{staticClass:"form-control",attrs:{id:"sexo",required:""}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("Selecione")]),e("option",[t._v("Masculino")]),e("option",[t._v("Feminino")])])]),e("div",{staticClass:"form-group col-lg-3 col-sm-12"},[e("label",{attrs:{for:"estcivil"}},[t._v("Estado Civil:")]),e("select",{staticClass:"form-control",attrs:{id:"estcivil"}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("Selecione")]),e("option",[t._v("Solteiro(a)")]),e("option",[t._v("Casado(a)")]),e("option",[t._v("Divorciado(a)")]),e("option",[t._v("Viúvo(a)")])])]),e("div",{staticClass:"form-group col-lg-3 col-sm-12"},[e("label",{attrs:{for:"cep"}},[t._v("CEP Residencial:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"00000-000",type:"text",id:"cep",required:""}})])]),e("div",{staticClass:"row  box-cotacao",staticStyle:{"margin-top":"30px"}},[e("div",{staticClass:"col-lg-12 col-sm-12"},[e("h3",[t._v("Dados do Veículo")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-lg-6 col-sm-12"},[e("label",{attrs:{for:"veiculo"}},[t._v("Veículo:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"Exemplo: Gol",type:"text",id:"veiculo",required:""}})]),e("div",{staticClass:"form-group col-lg-3 col-sm-12"},[e("label",{attrs:{for:"ano"}},[t._v("Ano de Fabricação:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"Exemplo: 2020",type:"text",id:"ano",required:""}})]),e("div",{staticClass:"form-group col-lg-3 col-sm-12"},[e("label",{attrs:{for:"modelo"}},[t._v("Modelo:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"Exemplo: 1.0 Plus 16v",type:"text",id:"modelo",required:""}})]),e("div",{staticClass:"form-group col-lg-4 col-sm-12"},[e("label",{attrs:{for:"0km"}},[t._v("Veículo 0km:")]),e("select",{staticClass:"form-control",attrs:{id:"0km"}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("Selecione")]),e("option",[t._v("Sim")]),e("option",[t._v("Não")])])]),e("div",{staticClass:"form-group col-lg-4 col-sm-12"},[e("label",{attrs:{for:"placa"}},[t._v("Placa:")]),e("input",{staticClass:"form-control",attrs:{placeholder:"XXX0000",type:"text",id:"placa"}})]),e("div",{staticClass:"form-group col-lg-4 col-sm-12"},[e("label",{attrs:{for:"Financiado"}},[t._v("Financiado:")]),e("select",{staticClass:"form-control",attrs:{id:"Financiado"}},[e("option",{attrs:{disabled:"",selected:""}},[t._v("Selecione")]),e("option",[t._v("Sim")]),e("option",[t._v("Não")])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-lg-12 col-sm-12"},[e("button",{staticClass:"btn form-control btn-primary",attrs:{type:"submit"}},[t._v("Enviar Cotação")])])])])])])])},function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container",staticStyle:{padding:"50px 15px"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-8 col-sm-12"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-sm-12"},[e("span",{staticClass:"titulo1"},[t._v("Aproveite hoje mesmo para garantir a melhor proteção para o seu automóvel, a preços muito especiais.")])]),e("div",{staticClass:"col-lg-12 col-sm-12",staticStyle:{"margin-top":"15px"}},[e("span",{staticClass:"titulo2"},[t._v("Automóveis / Caminhões")])]),e("div",{staticClass:"col-lg-12 col-sm-12"},[e("ul",[e("li",[t._v("Reposição pelo valor de veículo 0 km por 6 meses;")]),e("li",[t._v("Assistência 24 Horas (assistência ao veículo e à residência);")]),e("li",[t._v("Danos aos vidros*;")]),e("li",[t._v("Assistência Jurídica;")]),e("li",[t._v("Centro Automotivo;")]),e("li",[t._v("Linha de Inspeção Veicular;")]),e("li",[t._v("Desconto na franquia ou Carro Extra por até 7 dias consecutivos;")]),e("li",[t._v("Certificado de Procedência;")]),e("li",[t._v("Instalação de dispositivos de segurança;")]),e("li",[t._v("Diagnóstico e avaliação de diversos itens do veículo;")]),e("li",[t._v("Benefícios e serviços exclusivos para jovens, caminhoneiros e motociclistas;")]),e("li",[t._v("Desconto no seguro de até 35%;")]),e("li",[t._v("Desconto em estacionamentos, táxi, locação de veículos blindados, renovação da CNH, serviços de despachantes, entre outros benefícios.")])])]),e("div",{staticClass:"col-lg-12 col-sm-12",staticStyle:{"margin-top":"15px"}},[e("span",{staticClass:"titulo2"},[t._v("Tabela FIPE")])]),e("div",{staticClass:"col-lg-12 col-sm-12",staticStyle:{"margin-top":"15px"}},[e("span",[t._v("Valor de Mercado Referenciado: Em caso de um sinistro de Perda Total por roubo, furto ou colisão, o segurado recebe da seguradora como indenização o Valor de Mercado Referenciado do seu veículo. O Valor da Indenização é igual ao valor do veículo constante na Tabela FIPE, considerando o fator de ajuste que você escolher quando da contratação do seguro.")])])])]),e("div",{staticClass:"col-lg-4 col-sm-12 img-seguro-auto"})])])}],r=e("9fc5"),i=e("b2f0"),l={name:"Auto",components:{TitlePage:r["a"],CarouselSec:i["a"]}},c=l,n=(e("31df"),e("2877")),u=Object(n["a"])(c,a,s,!1,null,"eb4b7e18",null);o["default"]=u.exports},b2f0:function(t,o,e){"use strict";var a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"container-fluid carousel-sec"},[e("div",{staticClass:"container"},[e("h4",[t._v("Seguros que Trabalhamos")]),e("div",{staticClass:"row"},[e("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,"img-width":"100%","img-height":"124",background:"#ababab"}},[e("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[e("div",{staticClass:"row partners"},[e("div",{staticClass:"col-3"},[e("div",{},[e("img",{staticClass:"d-block",attrs:{width:"100%",height:"124",src:"https://picsum.photos/1920/514",alt:"image slot"}})])]),e("div",{staticClass:"col-3"},[e("img",{staticClass:"d-block",attrs:{width:"100%",height:"124",src:"https://picsum.photos/1920/514",alt:"image slot"}})]),e("div",{staticClass:"col-3"},[e("img",{staticClass:"d-block",attrs:{width:"100%",height:"124",src:"https://picsum.photos/1920/514",alt:"image slot"}})]),e("div",{staticClass:"col-3"},[e("img",{staticClass:"d-block",attrs:{width:"100%",height:"124",src:"https://picsum.photos/1920/514",alt:"image slot"}})])])]},proxy:!0}])}),e("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[e("div",{staticClass:"row partners"},[e("div",{staticClass:"col-3"},[e("div",{},[e("img",{staticClass:"d-block",attrs:{width:"100%",height:"124",src:"https://picsum.photos/1920/514",alt:"image slot"}})])]),e("div",{staticClass:"col-3"},[e("img",{staticClass:"d-block",attrs:{width:"100%",height:"124",src:"https://picsum.photos/1920/514",alt:"image slot"}})]),e("div",{staticClass:"col-3"},[e("img",{staticClass:"d-block",attrs:{width:"100%",height:"124",src:"https://picsum.photos/1920/514",alt:"image slot"}})]),e("div",{staticClass:"col-3"},[e("img",{staticClass:"d-block",attrs:{width:"100%",height:"124",src:"https://picsum.photos/1920/514",alt:"image slot"}})])])]},proxy:!0}])})],1)],1)])])},s=[],r={name:"CarouselSec"},i=r,l=(e("8995"),e("2877")),c=Object(l["a"])(i,a,s,!1,null,"3ea2f33f",null);o["a"]=c.exports},b4ec:function(t,o,e){"use strict";var a=e("96c0"),s=e.n(a);s.a},cba4:function(t,o,e){}}]);
//# sourceMappingURL=login.09e447ee.js.map