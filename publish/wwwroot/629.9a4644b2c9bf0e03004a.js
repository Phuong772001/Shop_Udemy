"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[629],{6629:(A,m,r)=>{r.r(m),r.d(m,{AccountModule:()=>C});var c=r(8583),s=r(15),o=r(665),t=r(3018),u=r(740),g=r(4015);let p=(()=>{class e{constructor(n,i,a,x){this.fb=n,this.accountService=i,this.router=a,this.activatedRoute=x}ngOnInit(){this.createLoginForm(),this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl||"/shop"}createLoginForm(){this.loginForm=this.fb.group({email:["",[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")]],password:["",o.kI.required],remember:["",o.kI.required]})}onSubmit(){this.accountService.login(this.loginForm.value).subscribe(()=>this.router.navigateByUrl(this.returnUrl),n=>console.log(n))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.qu),t.Y36(u.B),t.Y36(s.F0),t.Y36(s.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],decls:24,vars:5,consts:[["id","login"],[1,"container"],["id","login-row",1,"row","justify-content-center","align-items-center"],["id","login-column",1,"col-md-4"],["id","login-box",1,"col-md-12"],[1,"form",3,"formGroup","submit"],[1,"text-center","text-info"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],[1,"d-flex","justify-content-between"],[1,"form-group"],["for","remember",1,"text-info"],["id","remember","formControlName","remember","checked","","name","remember","type","checkbox"],["type","submit","name","submit","value","submit",1,"btn","btn-info","btn-md",3,"disabled"],["id","register-link",1,"text-right"],["routerLink","/account/register",1,"text-info"]],template:function(n,i){1&n&&(t.TgZ(0,"body"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"form",5),t.NdJ("submit",function(){return i.onSubmit()}),t.TgZ(7,"h3",6),t._uU(8,"Login"),t.qZA(),t._UZ(9,"app-text-input",7),t._UZ(10,"app-text-input",8),t.TgZ(11,"div",9),t.TgZ(12,"div",10),t.TgZ(13,"label",11),t.TgZ(14,"span"),t._uU(15,"Remember me"),t.qZA(),t._uU(16,"\xa0"),t.TgZ(17,"span"),t._UZ(18,"input",12),t.qZA(),t.qZA(),t._UZ(19,"br"),t._UZ(20,"input",13),t.qZA(),t.TgZ(21,"div",14),t.TgZ(22,"a",15),t._uU(23,"Register here"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(6),t.Q6J("formGroup",i.loginForm),t.xp6(3),t.Q6J("label","email"),t.xp6(1),t.Q6J("label","password")("type","password"),t.xp6(10),t.Q6J("disabled",i.loginForm.invalid))},directives:[o._Y,o.JL,o.sg,g.t,o.JJ,o.u,o.Wl,s.yS],styles:["body[_ngcontent-%COMP%]{margin:0;padding:0;background-color:#17a2b8;height:100vh}#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]{margin-top:120px;max-width:600px;height:320px;border:1px solid #9C9C9C;background-color:#eaeaea}#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%]{padding:20px}#login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   #login-row[_ngcontent-%COMP%]   #login-column[_ngcontent-%COMP%]   #login-box[_ngcontent-%COMP%]   #login-form[_ngcontent-%COMP%]   #register-link[_ngcontent-%COMP%]{margin-top:-85px}"]}),e})();var d=r(8634),b=r(3190),Z=r(8002);const f=[{path:"login",component:p},{path:"register",component:(()=>{class e{constructor(n,i,a){this.fb=n,this.accountService=i,this.router=a}ngOnInit(){this.createLoginForm()}createLoginForm(){this.registerForm=this.fb.group({email:[null,[o.kI.required,o.kI.pattern("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")],this.validateEmailExist.bind(this)],userName:[null,[o.kI.required,o.kI.pattern(/^[a-z]{6,32}$/i)]],password:[null,o.kI.required]})}onSubmit(){this.accountService.register(this.registerForm.value).subscribe(()=>this.router.navigateByUrl("/"),n=>console.log(n))}validateEmailExist(n){return(0,d.H)(300).pipe((0,b.w)(()=>this.accountService.checkEmailExist(n.value).pipe((0,Z.U)(i=>(console.log("call API"),i?{emailExist:!0}:null)))))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o.qu),t.Y36(u.B),t.Y36(s.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-register"]],decls:14,vars:6,consts:[["id","login"],[1,"container"],["id","login-row",1,"row","justify-content-center","align-items-center"],["id","login-column",1,"col-md-4"],["id","login-box",1,"col-md-12"],[1,"form",3,"formGroup","submit"],[1,"text-center","text-info"],["formControlName","userName",3,"label"],["formControlName","email",3,"label"],["formControlName","password",3,"label","type"],[1,"form-group"],["type","submit","name","submit","value","submit",1,"btn","btn-info","btn-md",3,"disabled"]],template:function(n,i){1&n&&(t.TgZ(0,"body"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"form",5),t.NdJ("submit",function(){return i.onSubmit()}),t.TgZ(7,"h3",6),t._uU(8,"Register"),t.qZA(),t._UZ(9,"app-text-input",7),t._UZ(10,"app-text-input",8),t._UZ(11,"app-text-input",9),t.TgZ(12,"div",10),t._UZ(13,"input",11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(6),t.Q6J("formGroup",i.registerForm),t.xp6(3),t.Q6J("label","User Name"),t.xp6(1),t.Q6J("label","Email"),t.xp6(1),t.Q6J("label","Password")("type","password"),t.xp6(2),t.Q6J("disabled",i.registerForm.invalid))},directives:[o._Y,o.JL,o.sg,g.t,o.JJ,o.u],styles:[""]}),e})()}];let h=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,s.Bz.forChild(f)],s.Bz]}),e})();var v=r(4466);let C=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,h,v.m]]}),e})()}}]);