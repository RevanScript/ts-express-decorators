(window.webpackJsonp=window.webpackJsonp||[]).push([[513],{722:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"interceptors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#interceptors","aria-hidden":"true"}},[t._v("#")]),t._v(" Interceptors  "),s("Badge",{attrs:{text:"beta",type:"warn"}}),t._v(" "),s("Badge",{attrs:{text:"Contributors are welcome"}})],1),t._v(" "),s("p",[t._v("Creating and consuming an interceptor is two-step process.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),s("ApiList",{attrs:{query:"module == '@tsed/common/interceptors' && symbolType === 'decorator'"}}),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Create and annotate the interceptor class that will intercept calls to service methods")]),this._v(" "),e("li",[this._v("Decide which methods will be intercepted by which interceptor")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"decorators"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#decorators","aria-hidden":"true"}},[this._v("#")]),this._v(" Decorators")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"interceptor-class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#interceptor-class","aria-hidden":"true"}},[this._v("#")]),this._v(" Interceptor class")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("To create interceptor class you need to implement he "),s("code",[t._v("IInterceptor")]),t._v(" interface and implement the\n"),s("code",[t._v("aroundInvoke(ctx: IInterceptorContext)")]),t._v(" method, and use the "),s("code",[t._v("@Interceptor()")]),t._v(" annotaiton to register your interceptor class. Inside your "),s("code",[t._v("src/interceptors/MyInterceptor.ts")]),t._v(" folder create the following simple interceptor.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" IInterceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" IInterceptorContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Interceptor "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@tsed/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n@"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Interceptor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyInterceptor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IInterceptor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// you can inject other components as usual")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// be careful for circular dependencies in your components")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("injSrv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" InjectorService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do some logic")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * ctx: The context that holds the dynamic data related to the method executiong and the proceed method * to proceed with the original method execution \n     * \n     * opts: Static params that can be provided when the interceptor is attached to a specific method \n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("aroundInvoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" IInterceptorContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" opts"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`the method ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" will be executed with args ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(" and static data ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("opts"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let the original method proceed")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" retValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("proceed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`the method was executed, and returned ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("retValue"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// must return the returned value back to the caller")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the retValue might be a promise in which case you can use .then to chain other code logic")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or you can use async aroundInvoke and await ctx.proceed() to execute the code in linear fashion")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" retValue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"use-the-interceptor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-the-interceptor","aria-hidden":"true"}},[this._v("#")]),this._v(" Use the interceptor")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Now that your interceptor logic is in place you can use it in any other service. You need to use the "),e("code",[this._v("@Intercept(InterceptorClass, opts)")]),this._v(" annotation to register which interceptor should be used for the specific method you want to intercept. An example service in "),e("code",[this._v("src/services/MyService.ts")]),this._v(":")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Intercept "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@tsed/common'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MyInterceptor "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../interceptors/MyInterceptor'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MyInterceptor is going to be used to intercept this method whenever called")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 'simple data' is static data that will be passed as second arg the the interceptor aroundInvoke")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this can be any data, you can pass array or object for that matter")]),t._v("\n    @"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Intercept")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyInterceptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'simple data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mySimpleMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'the simple method is executed'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the service method is executed like "),e("code",[this._v("myServiceInstance.mySimpleMethod()")]),this._v(" we will get the following output:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("the method mySimpleMethod will be executed with args and static data simple data\nthe simple method is executed\nthe method was executed, and returned undefined\n")])])])}],!1,null,null,null);e.default=a.exports}}]);