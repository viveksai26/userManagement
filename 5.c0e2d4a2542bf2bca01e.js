(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4n2y":function(t,e,o){"use strict";o.r(e),o.d(e,"LoginModule",(function(){return T}));var r=o("a6SJ"),n=o("tyNb"),a=o("IejH"),c=o("fXoL");let i=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-public-header"]],decls:4,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],["href","#",1,"navbar-brand"]],template:function(t,e){1&t&&(c.Qb(0,"header"),c.Qb(1,"nav",0),c.Qb(2,"a",1),c.qc(3,"LOGO"),c.Pb(),c.Pb(),c.Pb())},styles:[""]}),t})(),s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-public-footer"]],decls:4,vars:0,consts:[[1,"footer"],[1,"container","d-flex","justify-content-center","align-items-center",2,"height","100%"]],template:function(t,e){1&t&&(c.Qb(0,"footer",0),c.Qb(1,"div",1),c.Qb(2,"div"),c.qc(3,"Blah Blah Blah....."),c.Pb(),c.Pb(),c.Pb())},styles:[""]}),t})(),l=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-public-layout"]],decls:5,vars:0,consts:[[1,"wrapper"],[1,"main"]],template:function(t,e){1&t&&(c.Qb(0,"div",0),c.Mb(1,"app-public-header"),c.Qb(2,"div",1),c.Mb(3,"router-outlet"),c.Pb(),c.Mb(4,"app-public-footer"),c.Pb())},directives:[i,n.f,s],styles:[""]}),t})();var b=o("LRne"),u=o("qfco");let p=(()=>{class t{localStorageRemover(){localStorage.removeItem(u.a.FB_ACCESS_TOKEN),localStorage.removeItem(u.a.FB_AUTH_TOKEN),localStorage.removeItem(u.a.FB_ID_TOKEN),localStorage.removeItem(u.a.G_ACCESS_TOKEN),localStorage.removeItem(u.a.G_AUTH_TOKEN),localStorage.removeItem(u.a.G_ID_TOKEN)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=o("ahC7");let f=(()=>{class t{constructor(t,e){this.genericUtils=t,this.authService=e,console.log("In public route resolver")}resolve(){return this.genericUtils.localStorageRemover(),this.authService.signOut(),Object(b.a)([])}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(p),c.Ub(d.b))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var v=o("3Pt+"),h=o("diEX"),m=o("12jx"),g=o("2Vo4"),I=o("dNgK");let y=(()=>{class t{constructor(t,e){this.snackRef=t,this.data=e}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(I.d),c.Lb(I.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["snack-bar-overview-example"]],decls:6,vars:2,consts:[[1,"row"],[1,"col-md-12","d-flex","justify-content-between",2,"color","aliceblue"]],template:function(t,e){1&t&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"span"),c.qc(3),c.Pb(),c.Qb(4,"span"),c.qc(5),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.Ab(3),c.rc(e.data.message),c.Ab(2),c.rc(e.data.action))},styles:[""]}),t})();var P=o("0IaG");let k=(()=>{class t{constructor(t,e){this.snackBar=t,this.dialog=e,this.isMenuVisible=new g.a(!1)}openSnackBar(t,e){this.snackBarRef=this.snackBar.openFromComponent(y,{duration:5e3,data:{message:t,action:e},verticalPosition:"top",horizontalPosition:"center"})}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(I.b),c.Ub(P.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var w=o("Wp6s"),O=o("bTqV");const S=[{path:"",canActivate:[a.a],component:l,resolve:[f],children:[{path:"",component:(()=>{class t{constructor(t,e,o,r){this.formBuilder=t,this.authService=e,this.NotificationService=o,this.router=r,this.hide=!0}ngOnInit(){this.formGenerator()}formGenerator(){this.loginFormGroup=this.formBuilder.group({username:["",v.h.required],password:["",v.h.required]})}signInWithGoogle(){this.startBlocking(),this.authService.signIn(d.a.PROVIDER_ID).then(t=>{this.stopBlocking(),localStorage.setItem(u.a.G_ID_TOKEN,t.idToken),localStorage.setItem(u.a.G_AUTH_TOKEN,t.authToken),this.router.navigate([h.a.ROUTE_PROFILE])},t=>{console.log(t),this.NotificationService.openSnackBar(null==t?void 0:t.error,"dismiss"),this.stopBlocking()})}goToHome(){this.router.navigate([h.a.ROUTE_HOME])}startBlocking(){this.blockUI.start()}stopBlocking(){setTimeout(()=>{this.blockUI.stop()},2e3)}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(v.a),c.Lb(d.b),c.Lb(k),c.Lb(n.c))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-login"]],decls:15,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"d-flex","justify-content-center","align-items-end"],[1,"col-md-4",2,"margin-top","5%"],[1,"d-flex","justify-content-center"],[1,"row","d-flex","justify-content-center","m-2"],["mat-flat-button","","color","primary",1,"fullwidth",3,"click"]],template:function(t,e){1&t&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"div",3),c.Qb(4,"mat-card",4),c.Qb(5,"div",5),c.Qb(6,"h1"),c.qc(7,"Login"),c.Pb(),c.Pb(),c.Mb(8,"div",1),c.Qb(9,"div",6),c.Qb(10,"button",7),c.Xb("click",(function(){return e.signInWithGoogle()})),c.qc(11," Sign in with google"),c.Pb(),c.Pb(),c.Qb(12,"div",6),c.Qb(13,"button",7),c.Xb("click",(function(){return e.goToHome()})),c.qc(14,"Just Get in"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb())},directives:[w.a,O.a],styles:[""]}),function(t,e,o,r){var n,a=arguments.length,c=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(a<3?n(c):a>3?n(e,o,c):n(e,o))||c);a>3&&c&&Object.defineProperty(e,o,c)}([Object(m.a)()],t.prototype,"blockUI",void 0),t})()}]}];let Q=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[n.e.forChild(S)],n.e]}),t})(),T=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[Q,r.a]]}),t})()}}]);