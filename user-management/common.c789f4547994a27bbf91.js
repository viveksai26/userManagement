(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{EjJx:function(t,e,n){"use strict";function r(t){this.message=t}(r.prototype=new Error).name="InvalidCharacterError";var o="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(t){var e=String(t).replace(/=+$/,"");if(e.length%4==1)throw new r("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,i=0,c=0,a="";o=e.charAt(c++);~o&&(n=i%4?64*n+o:o,i++%4)?a+=String.fromCharCode(255&n>>(-2*i&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return a};function i(t){var e=t.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(t){return decodeURIComponent(o(t).replace(/(.)/g,(function(t,e){var n=e.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n})))}(e)}catch(t){return o(e)}}function c(t){this.message=t}(c.prototype=new Error).name="InvalidTokenError",e.a=function(t,e){if("string"!=typeof t)throw new c("Invalid token specified");var n=!0===(e=e||{}).header?0:1;try{return JSON.parse(i(t.split(".")[n]))}catch(t){throw new c("Invalid token specified: "+t.message)}}},Gz4n:function(t,e,n){"use strict";n.d(e,"a",(function(){return P}));var r=n("fXoL"),o=n("diEX"),i=n("ahC7"),c=n("tyNb"),a=n("OsMq"),s=n("bTqV"),u=n("NFeN"),b=n("ofXK"),l=n("STbY");function g(t,e){if(1&t&&(r.Qb(0,"button",5),r.Qb(1,"mat-icon",2),r.qc(2," person "),r.Pb(),r.Pb()),2&t){r.Zb();const t=r.fc(12);r.cc("matMenuTriggerFor",t)}}function f(t,e){if(1&t){const t=r.Rb();r.Qb(0,"button",7),r.Xb("click",(function(){return r.gc(t),r.Zb().signOut()})),r.Qb(1,"mat-icon"),r.qc(2,"logout"),r.Pb(),r.Qb(3,"span"),r.qc(4,"Logout"),r.Pb(),r.Pb()}}function d(t,e){if(1&t){const t=r.Rb();r.Qb(0,"button",7),r.Xb("click",(function(){return r.gc(t),r.Zb().login()})),r.Qb(1,"mat-icon"),r.qc(2,"login"),r.Pb(),r.Qb(3,"span"),r.qc(4,"Login"),r.Pb(),r.Pb()}}let h=(()=>{class t{constructor(t,e,n){this.authService=t,this.router=e,this.AutheticationService=n,this.sideBarTrigger=new r.o,this.isMenuVisible=!1,this.subscriptionsArray=[]}ngOnInit(){this.isLoggedIn=this.AutheticationService.isLoggedIn}signOut(){this.authService.signOut(),this.router.navigate([o.a.ROUTE_LOGIN])}login(){this.router.navigate([o.a.ROUTE_LOGIN])}goToProfile(){this.router.navigate([o.a.ROUTE_PROFILE])}sidebarToggle(){this.sideBarTrigger.emit(!0)}ngOnDestroy(){this.subscriptionsArray.forEach(t=>{t.unsubscribe()})}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(i.b),r.Lb(c.c),r.Lb(a.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-secure-header"]],outputs:{sideBarTrigger:"sideBarTrigger"},decls:22,vars:4,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],["mat-icon-button","",3,"click"],[2,"color","white"],["routerLink","['/home']",1,"navbar-brand","mr-auto"],["mat-icon-button","",3,"matMenuTriggerFor",4,"ngIf"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu2","matMenu"],["mat-menu-item","",3,"click"],["menu1","matMenu"],["mat-menu-item","",3,"click",4,"ngIf"]],template:function(t,e){if(1&t&&(r.Qb(0,"header"),r.Qb(1,"nav",0),r.Qb(2,"button",1),r.Xb("click",(function(){return e.sidebarToggle()})),r.Qb(3,"mat-icon",2),r.qc(4," menu "),r.Pb(),r.Pb(),r.Qb(5,"a",3),r.qc(6,"LOGO"),r.Pb(),r.oc(7,g,3,1,"button",4),r.Qb(8,"button",5),r.Qb(9,"mat-icon",2),r.qc(10," more_vert "),r.Pb(),r.Pb(),r.Qb(11,"mat-menu",null,6),r.Qb(13,"button",7),r.Xb("click",(function(){return e.goToProfile()})),r.Qb(14,"mat-icon"),r.qc(15,"verified_user"),r.Pb(),r.Qb(16,"span"),r.qc(17,"Profile"),r.Pb(),r.Pb(),r.Pb(),r.Qb(18,"mat-menu",null,8),r.oc(20,f,5,0,"button",9),r.oc(21,d,5,0,"button",9),r.Pb(),r.Pb(),r.Pb()),2&t){const t=r.fc(19);r.Ab(7),r.cc("ngIf",e.isLoggedIn),r.Ab(1),r.cc("matMenuTriggerFor",t),r.Ab(12),r.cc("ngIf",e.isLoggedIn),r.Ab(1),r.cc("ngIf",!e.isLoggedIn)}},directives:[s.a,u.a,c.d,b.i,l.c,l.d,l.a],styles:[""]}),t})();var m=n("XhcP"),p=n("qfco"),v=n("EjJx");function T(t,e){if(1&t&&r.Mb(0,"img",7),2&t){const t=r.Zb();r.cc("src",null==t.userData?null:t.userData.picture,r.hc)}}function I(t,e){if(1&t){const t=r.Rb();r.Qb(0,"button",6),r.Xb("click",(function(){return r.gc(t),r.Zb().goToLogin()})),r.qc(1," Login "),r.Pb()}}let O=(()=>{class t{constructor(t){this.router=t}ngOnInit(){const t=localStorage.getItem(p.a.G_ID_TOKEN);t&&(this.userData=Object(v.a)(t),console.log(this.userData))}goToProfile(){this.router.navigate([o.a.ROUTE_PROFILE])}goToHome(){this.router.navigate([o.a.ROUTE_HOME])}goToLogin(){this.router.navigate([o.a.ROUTE_LOGIN])}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(c.c))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-secure-sidebar"]],decls:9,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-12","mb-3"],["style","width: -webkit-fill-available;",3,"src",4,"ngIf"],["class","mt-3","mat-button","","class","fullwidth",3,"click",4,"ngIf"],[1,"col-md-12"],["mat-button","",1,"fullwidth",3,"click"],[2,"width","-webkit-fill-available",3,"src"]],template:function(t,e){1&t&&(r.Qb(0,"div",0),r.Qb(1,"div",1),r.Qb(2,"div",2),r.oc(3,T,1,1,"img",3),r.oc(4,I,2,0,"button",4),r.Pb(),r.Qb(5,"div",5),r.Qb(6,"button",6),r.Xb("click",(function(){return e.goToHome()})),r.qc(7," Home "),r.Pb(),r.Pb(),r.Mb(8,"div",5),r.Pb(),r.Pb()),2&t&&(r.Ab(3),r.cc("ngIf",null==e.userData?null:e.userData.picture),r.Ab(1),r.cc("ngIf",!e.userData))},directives:[b.i,s.a],styles:[""]}),t})(),w=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-secure-footer"]],decls:3,vars:0,consts:[[1,"footer"],[1,"container","d-flex","justify-content-center"]],template:function(t,e){1&t&&(r.Qb(0,"footer",0),r.Qb(1,"div",1),r.qc(2," Footer "),r.Pb(),r.Pb())},styles:[""]}),t})(),P=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-secure-layout"]],decls:10,vars:0,consts:[[1,"wrapper"],[3,"sideBarTrigger"],[1,"main"],["hasBackdrop","false",1,"fullheight"],["mode","push",2,"width","15%"],["drawer",""]],template:function(t,e){if(1&t){const t=r.Rb();r.Qb(0,"div",0),r.Qb(1,"app-secure-header",1),r.Xb("sideBarTrigger",(function(){return r.gc(t),r.fc(5).toggle()})),r.Pb(),r.Qb(2,"div",2),r.Qb(3,"mat-drawer-container",3),r.Qb(4,"mat-drawer",4,5),r.Mb(6,"app-secure-sidebar"),r.Pb(),r.Qb(7,"mat-drawer-content"),r.Mb(8,"router-outlet"),r.Pb(),r.Pb(),r.Pb(),r.Mb(9,"app-secure-footer"),r.Pb()}},directives:[h,m.b,m.a,O,m.c,c.f,w],styles:[""]}),t})()},IejH:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n("LRne"),o=n("vkgz"),i=n("lJxs"),c=n("JIr8"),a=n("qfco"),s=n("fXoL"),u=n("tyNb"),b=n("ahC7"),l=n("OsMq");let g=(()=>{class t{constructor(t,e,n){this.router=t,this.authService=e,this.AutheticationService=n}canActivate(){return this.authService.authState.pipe(Object(o.a)(t=>{t?(localStorage.setItem(a.a.G_ID_TOKEN,t.idToken),localStorage.setItem(a.a.G_AUTH_TOKEN,t.authToken),this.AutheticationService.isLoggedIn=!0):(localStorage.removeItem(a.a.G_ID_TOKEN),localStorage.removeItem(a.a.G_AUTH_TOKEN),this.AutheticationService.isLoggedIn=!1)}),Object(i.a)(t=>!0),Object(c.a)(t=>(localStorage.removeItem(a.a.G_ID_TOKEN),localStorage.removeItem(a.a.G_AUTH_TOKEN),this.AutheticationService.isLoggedIn=!1,Object(r.a)(!0))))}}return t.\u0275fac=function(e){return new(e||t)(s.Ub(u.c),s.Ub(b.b),s.Ub(l.a))},t.\u0275prov=s.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},OsMq:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("ARWK"),o=n("fXoL"),i=n("tk/3");let c=(()=>{class t{constructor(t){this.http=t,this.isLoggedIn=!1}verifyGToken(t){return this.http.get(r.a.verifyGIdToken.replace("{idToken}",t))}}return t.\u0275fac=function(e){return new(e||t)(o.Ub(i.a))},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},diEX:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));let r=(()=>{class t{}return t.ROUTE_LOGIN="/login",t.ROUTE_HOME="/home",t.ROUTE_PROFILE="/user/profile",t})()},qfco:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));let r=(()=>{class t{}return t.G_ACCESS_TOKEN="g-access-token",t.FB_ACCESS_TOKEN="fb-access-token",t.G_ID_TOKEN="g-id-token",t.FB_ID_TOKEN="fb-id-token",t.G_AUTH_TOKEN="g-auth-token",t.FB_AUTH_TOKEN="fb-auth-token",t})()}}]);