"use strict";(self.webpackChunktest_ng4=self.webpackChunktest_ng4||[]).push([[909],{47909:(C,d,s)=>{s.r(d),s.d(d,{ProfileModule:()=>v});var c=s(36895),a=s(24006),g=s(52885),m=s(34793),e=s(94650),o=s(72164);function p(t,b){1&t&&e.\u0275\u0275element(0,"img",13)}function u(t,b){1&t&&e.\u0275\u0275element(0,"img",14)}const f=[{path:"",component:(()=>{class t{constructor(r,n){this.userService=r,this.notificationService=n,this.userObject={},this.disable=!0,this.isEditProfile=!1,this.alteredUserObject={}}ngOnInit(){this.disable=!0,this.getCurrentUser()}getCurrentUser(){this.userService.getCurrentUser().subscribe(r=>{this.userObject=r.data,this.alteredUserObject=new Object(r.data)},r=>{console.log(r)})}checkUnsavedChanges(){let r=!0;Object.keys(this.userObject).forEach(i=>{this.userObject[i]!==this.alteredUserObject[i]&&(this.notificationService.addSingle("error","Access Denied !","You've unsaved changes."),r=!1)}),r&&(this.isEditProfile=!this.isEditProfile)}static#e=this.\u0275fac=function(n){return new(n||t)(e.\u0275\u0275directiveInject(o.KD),e.\u0275\u0275directiveInject(o.gq))};static#t=this.\u0275cmp=e.\u0275\u0275defineComponent({type:t,selectors:[["app-profile"]],decls:16,vars:9,consts:[[2,"margin","auto 100px"],[1,"row","justify-content-end"],[1,"row"],[1,"col-md-3","card",2,"padding-top","40px","padding-bottom","40px"],["alt","User Pic","src","assets/images/male-avatar.png","class","img-circular img-responsive",4,"ngIf"],["alt","User Pic","src","assets/images/female-avatar.jpg","class","img-circular img-responsive",4,"ngIf"],[1,"card-title","text-center",2,"padding-top","10px","font-size","20px","font-weight","600"],[1,"card-subtitle","text-center",2,"font-style","italic"],[1,"offset-md-1","col-md-5","card",2,"padding-top","40px","padding-bottom","40px"],[2,"width","80%","margin-right","auto","margin-left","auto"],[1,"form-group"],["id","user_code","name","user_code","type","text","placeholder","User Code",1,"form-control",3,"ngModel","disabled","ngModelChange"],["id","email","name","email","type","email","placeholder","Email",1,"form-control",3,"ngModel","disabled","ngModelChange"],["alt","User Pic","src","assets/images/male-avatar.png",1,"img-circular","img-responsive"],["alt","User Pic","src","assets/images/female-avatar.jpg",1,"img-circular","img-responsive"]],template:function(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"div",1),e.\u0275\u0275elementStart(2,"div",2)(3,"div",3),e.\u0275\u0275template(4,p,1,0,"img",4),e.\u0275\u0275template(5,u,1,0,"img",5),e.\u0275\u0275elementStart(6,"h5",6),e.\u0275\u0275text(7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(8,"h6",7),e.\u0275\u0275text(9),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(10,"div",8)(11,"div",9)(12,"div",10)(13,"input",11),e.\u0275\u0275listener("ngModelChange",function(l){return i.alteredUserObject.userCode=l}),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(14,"div",10)(15,"input",12),e.\u0275\u0275listener("ngModelChange",function(l){return i.alteredUserObject.email=l}),e.\u0275\u0275elementEnd()()()()()()),2&n&&(e.\u0275\u0275advance(4),e.\u0275\u0275property("ngIf","male"==i.alteredUserObject.gender),e.\u0275\u0275advance(1),e.\u0275\u0275property("ngIf","female"==i.alteredUserObject.gender),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2("",i.alteredUserObject.firstName," ",i.alteredUserObject.lastName,""),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(i.alteredUserObject.userCode),e.\u0275\u0275advance(4),e.\u0275\u0275property("ngModel",i.alteredUserObject.userCode)("disabled",!i.isEditProfile),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngModel",i.alteredUserObject.email)("disabled",!i.isEditProfile))},dependencies:[c.NgIf,a.DefaultValueAccessor,a.NgControlStatus,a.NgModel],styles:[".img-circular[_ngcontent-%COMP%]{background-size:cover;display:block;border-radius:110px;width:200px;height:200px;margin:auto}"]})}return t})()}];let h=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:t});static#i=this.\u0275inj=e.\u0275\u0275defineInjector({imports:[m.Bz.forChild(f),m.Bz]})}return t})(),v=(()=>{class t{static#e=this.\u0275fac=function(n){return new(n||t)};static#t=this.\u0275mod=e.\u0275\u0275defineNgModule({type:t});static#i=this.\u0275inj=e.\u0275\u0275defineInjector({providers:[o.KD,o.gq],imports:[c.CommonModule,a.FormsModule,h,g.IJ]})}return t})()}}]);