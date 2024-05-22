"use strict";(self.webpackChunkfuse=self.webpackChunkfuse||[]).push([[212],{6832:(T,c,r)=>{r.r(c),r.d(c,{default:()=>S});var w=r(1368),n=r(6504),u=r(7816),d=r(3840),l=r(4060),f=r(1560),p=r(8416),h=r(7488),y=r(1568),C=r(8384),I=r(4620),e=r(4496),x=r(3080);const E=["signUpNgForm"];function R(t,a){if(1&t&&(e.I0R(0,"fuse-alert",42),e.OEk(1),e.C$Y()),2&t){const i=e.GaO();e.E7m("appearance","outline")("showIcon",!1)("type",i.alert.type)("@shake","error"===i.alert.type),e.yG2(),e.oRS(" ",i.alert.message," ")}}function U(t,a){1&t&&(e.I0R(0,"mat-error"),e.OEk(1," Full name is required "),e.C$Y())}function Y(t,a){1&t&&(e.I0R(0,"mat-error"),e.OEk(1," Email address is required "),e.C$Y())}function b(t,a){1&t&&(e.I0R(0,"mat-error"),e.OEk(1," Please enter a valid email address "),e.C$Y())}function k(t,a){1&t&&e.wR5(0,"mat-icon",43),2&t&&e.E7m("svgIcon","heroicons_solid:eye")}function G(t,a){1&t&&e.wR5(0,"mat-icon",43),2&t&&e.E7m("svgIcon","heroicons_solid:eye-slash")}function $(t,a){1&t&&(e.I0R(0,"span"),e.OEk(1," Create your free account "),e.C$Y())}function A(t,a){1&t&&e.wR5(0,"mat-progress-spinner",44),2&t&&e.E7m("diameter",24)("mode","indeterminate")}const O=()=>["/sign-in"],v=()=>["./"],S=[{path:"",component:(()=>{class t{constructor(i,s,o){this._authService=i,this._formBuilder=s,this._router=o,this.alert={type:"success",message:""},this.showAlert=!1}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",n.AQ.required],email:["",[n.AQ.required,n.AQ.email]],password:["",n.AQ.required],company:[""],agreements:["",n.AQ.requiredTrue]})}signUp(){this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(this.signUpForm.value).subscribe(i=>{this._router.navigateByUrl("/confirmation-required")},i=>{this.signUpForm.enable(),this.signUpNgForm.resetForm(),this.alert={type:"error",message:"Something went wrong, please try again."},this.showAlert=!0}))}static#e=this.\u0275fac=function(s){return new(s||t)(e.GI1(x.o),e.GI1(n.KE),e.GI1(y.E5))};static#t=this.\u0275cmp=e.In1({type:t,selectors:[["auth-sign-up"]],viewQuery:function(s,o){if(1&s&&e.CC$(E,5),2&s){let m;e.wto(m=e.Gqi())&&(o.signUpNgForm=m.first)}},standalone:!0,features:[e.UHJ],decls:75,vars:22,consts:[[1,"flex","flex-col","flex-auto","items-center","sm:justify-center","min-w-0","md:p-8"],[1,"flex","md:w-full","md:max-w-6xl","sm:rounded-2xl","sm:shadow","overflow-hidden","sm:bg-card"],[1,"w-full","sm:w-auto","py-8","px-4","sm:p-12","md:p-16"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"inline-flex","items-end","w-full","mt-1.5"],[1,"-ml-2",3,"color","formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","items-center","mt-8"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[1,"icon-size-5",3,"svgIcon"],[3,"diameter","mode"]],template:function(s,o){if(1&s){const m=e.KQA();e.I0R(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.wR5(5,"img",5),e.C$Y(),e.I0R(6,"div",6),e.OEk(7,"Sign up"),e.C$Y(),e.I0R(8,"div",7)(9,"div"),e.OEk(10,"Already have an account?"),e.C$Y(),e.I0R(11,"a",8),e.OEk(12,"Sign in "),e.C$Y()(),e.yuY(13,R,2,5,"fuse-alert",9),e.I0R(14,"form",10)(15,"mat-form-field",11)(16,"mat-label"),e.OEk(17,"Full name"),e.C$Y(),e.wR5(18,"input",12),e.yuY(19,U,2,0,"mat-error",13),e.C$Y(),e.I0R(20,"mat-form-field",11)(21,"mat-label"),e.OEk(22,"Email address"),e.C$Y(),e.wR5(23,"input",14),e.yuY(24,Y,2,0,"mat-error",13)(25,b,2,0,"mat-error",13),e.C$Y(),e.I0R(26,"mat-form-field",11)(27,"mat-label"),e.OEk(28,"Password"),e.C$Y(),e.wR5(29,"input",15,16),e.I0R(31,"button",17),e.qCj("click",function(){e.usT(m);const g=e.Gew(30);return e.CGJ(g.type="password"===g.type?"text":"password")}),e.yuY(32,k,1,1,"mat-icon",18)(33,G,1,1,"mat-icon",18),e.C$Y(),e.I0R(34,"mat-error"),e.OEk(35," Password is required "),e.C$Y()(),e.I0R(36,"div",19)(37,"mat-checkbox",20)(38,"span"),e.OEk(39,"I agree with"),e.C$Y(),e.I0R(40,"a",8),e.OEk(41,"Terms "),e.C$Y(),e.I0R(42,"span"),e.OEk(43,"and"),e.C$Y(),e.I0R(44,"a",8),e.OEk(45,"Privacy Policy "),e.C$Y()()(),e.I0R(46,"button",21),e.qCj("click",function(){return o.signUp()}),e.yuY(47,$,2,0,"span",13)(48,A,1,2,"mat-progress-spinner",22),e.C$Y()()()(),e.I0R(49,"div",23),e.S2Z(),e.I0R(50,"svg",24)(51,"g",25),e.wR5(52,"circle",26)(53,"circle",27),e.C$Y()(),e.I0R(54,"svg",28)(55,"defs")(56,"pattern",29),e.wR5(57,"rect",30),e.C$Y()(),e.wR5(58,"rect",31),e.C$Y(),e.gRP(),e.I0R(59,"div",32)(60,"div",33)(61,"div"),e.OEk(62,"Welcome to"),e.C$Y(),e.I0R(63,"div"),e.OEk(64,"our community"),e.C$Y()(),e.I0R(65,"div",34),e.OEk(66," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),e.C$Y(),e.I0R(67,"div",35)(68,"div",36),e.wR5(69,"img",37)(70,"img",38)(71,"img",39)(72,"img",40),e.C$Y(),e.I0R(73,"div",41),e.OEk(74,"More than 17k people joined us, it's your turn"),e.C$Y()()()()()()}if(2&s){const m=e.Gew(30);e.yG2(11),e.E7m("routerLink",e.q4q(19,O)),e.yG2(2),e.E7m("ngIf",o.showAlert),e.yG2(),e.E7m("formGroup",o.signUpForm),e.yG2(4),e.E7m("formControlName","name"),e.yG2(),e.E7m("ngIf",o.signUpForm.get("name").hasError("required")),e.yG2(4),e.E7m("formControlName","email"),e.yG2(),e.E7m("ngIf",o.signUpForm.get("email").hasError("required")),e.yG2(),e.E7m("ngIf",o.signUpForm.get("email").hasError("email")),e.yG2(4),e.E7m("formControlName","password"),e.yG2(3),e.E7m("ngIf","password"===m.type),e.yG2(),e.E7m("ngIf","text"===m.type),e.yG2(4),e.E7m("color","primary")("formControlName","agreements"),e.yG2(3),e.E7m("routerLink",e.q4q(20,v)),e.yG2(4),e.E7m("routerLink",e.q4q(21,v)),e.yG2(2),e.E7m("color","primary")("disabled",o.signUpForm.disabled),e.yG2(),e.E7m("ngIf",!o.signUpForm.disabled),e.yG2(),e.E7m("ngIf",o.signUpForm.disabled)}},dependencies:[y.ER,w.u_,I.G,n.y,n.sz,n.ot,n.ue,n.u,n.sl,n.uW,n.Wo,l.wb,l.Up,l.w5,l.wJ,l.Gm,p.cN,p.yi,u.oJ,u.Gw,u.um,f.oB,f.qL,d.Vn,d.WK,h.kB,h.cm],encapsulation:2,data:{animation:C.u}})}return t})()}]}}]);