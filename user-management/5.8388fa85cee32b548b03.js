(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4n2y":function(t,e,n){"use strict";n.r(e),n.d(e,"LoginModule",(function(){return Q}));var o=n("a6SJ"),r=n("tyNb"),i=n("IejH"),c=n("fXoL");let a=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-public-header"]],decls:4,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],["href","#",1,"navbar-brand"]],template:function(t,e){1&t&&(c.Qb(0,"header"),c.Qb(1,"nav",0),c.Qb(2,"a",1),c.qc(3,"LOGO"),c.Pb(),c.Pb(),c.Pb())},styles:[""]}),t})(),s=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-public-footer"]],decls:4,vars:0,consts:[[1,"footer"],[1,"container","d-flex","justify-content-center","align-items-center",2,"height","100%"]],template:function(t,e){1&t&&(c.Qb(0,"footer",0),c.Qb(1,"div",1),c.Qb(2,"div"),c.qc(3,"Blah Blah Blah....."),c.Pb(),c.Pb(),c.Pb())},styles:[""]}),t})(),b=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Fb({type:t,selectors:[["app-public-layout"]],decls:5,vars:0,consts:[[1,"wrapper"],[1,"main"]],template:function(t,e){1&t&&(c.Qb(0,"div",0),c.Mb(1,"app-public-header"),c.Qb(2,"div",1),c.Mb(3,"router-outlet"),c.Pb(),c.Mb(4,"app-public-footer"),c.Pb())},directives:[a,r.f,s],styles:[""]}),t})();var l=n("3Pt+"),u=n("ahC7"),p=n("diEX"),d=n("12jx"),f=n("2Vo4"),h=n("dNgK");let v=(()=>{class t{constructor(t,e){this.snackRef=t,this.data=e}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(h.d),c.Lb(h.a))},t.\u0275cmp=c.Fb({type:t,selectors:[["snack-bar-overview-example"]],decls:6,vars:2,consts:[[1,"row"],[1,"col-md-12","d-flex","justify-content-between",2,"color","aliceblue"]],template:function(t,e){1&t&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"span"),c.qc(3),c.Pb(),c.Qb(4,"span"),c.qc(5),c.Pb(),c.Pb(),c.Pb()),2&t&&(c.Ab(3),c.rc(e.data.message),c.Ab(2),c.rc(e.data.action))},styles:[""]}),t})();var m=n("0IaG");let g=(()=>{class t{constructor(t,e){this.snackBar=t,this.dialog=e,this.isMenuVisible=new f.a(!1)}openSnackBar(t,e){this.snackBarRef=this.snackBar.openFromComponent(v,{duration:5e3,data:{message:t,action:e},verticalPosition:"top",horizontalPosition:"center"})}}return t.\u0275fac=function(e){return new(e||t)(c.Ub(h.b),c.Ub(m.a))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var P=n("Wp6s"),y=n("bTqV");const w=[{path:"",canActivate:[i.a],component:b,children:[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.formBuilder=t,this.authService=e,this.NotificationService=n,this.router=o,this.hide=!0}ngOnInit(){this.formGenerator()}formGenerator(){this.loginFormGroup=this.formBuilder.group({username:["",l.h.required],password:["",l.h.required]})}signInWithGoogle(){this.startBlocking(),this.authService.signIn(u.a.PROVIDER_ID).then(t=>{this.stopBlocking(),this.router.navigate([p.a.ROUTE_PROFILE])},t=>{console.log(t),this.NotificationService.openSnackBar(null==t?void 0:t.error,"dismiss"),this.stopBlocking()})}goToHome(){this.router.navigate([p.a.ROUTE_HOME])}startBlocking(){this.blockUI.start()}stopBlocking(){setTimeout(()=>{this.blockUI.stop()},2e3)}}return t.\u0275fac=function(e){return new(e||t)(c.Lb(l.a),c.Lb(u.b),c.Lb(g),c.Lb(r.c))},t.\u0275cmp=c.Fb({type:t,selectors:[["app-login"]],decls:15,vars:0,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"d-flex","justify-content-center","align-items-end"],[1,"col-md-4",2,"margin-top","5%"],[1,"d-flex","justify-content-center"],[1,"row","d-flex","justify-content-center","m-2"],["mat-flat-button","","color","primary",1,"fullwidth",3,"click"]],template:function(t,e){1&t&&(c.Qb(0,"div",0),c.Qb(1,"div",1),c.Qb(2,"div",2),c.Qb(3,"div",3),c.Qb(4,"mat-card",4),c.Qb(5,"div",5),c.Qb(6,"h1"),c.qc(7,"Login"),c.Pb(),c.Pb(),c.Mb(8,"div",1),c.Qb(9,"div",6),c.Qb(10,"button",7),c.Xb("click",(function(){return e.signInWithGoogle()})),c.qc(11," Sign in with google"),c.Pb(),c.Pb(),c.Qb(12,"div",6),c.Qb(13,"button",7),c.Xb("click",(function(){return e.goToHome()})),c.qc(14,"Just Get in"),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb(),c.Pb())},directives:[P.a,y.a],styles:[""]}),function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);i>3&&c&&Object.defineProperty(e,n,c)}([Object(d.a)()],t.prototype,"blockUI",void 0),t})()}]}];let k=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[r.e.forChild(w)],r.e]}),t})(),Q=(()=>{class t{}return t.\u0275mod=c.Jb({type:t}),t.\u0275inj=c.Ib({factory:function(e){return new(e||t)},imports:[[k,o.a]]}),t})()}}]);