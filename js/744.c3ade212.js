"use strict";(self["webpackChunkclanfield_joggers"]=self["webpackChunkclanfield_joggers"]||[]).push([[744],{5744:(e,t,l)=>{l.r(t),l.d(t,{default:()=>x});var n=l(3673);const o=(0,n.Uk)(" Clanfield Joggers "),a=(0,n._)("div",{style:{"margin-top":"1%"}},null,-1),i=(0,n.Uk)(" Pages ");function u(e,t,l,u,r,c){const s=(0,n.up)("q-btn"),p=(0,n.up)("q-toolbar-title"),d=(0,n.up)("q-toolbar"),m=(0,n.up)("q-header"),k=(0,n.up)("login-component"),g=(0,n.up)("q-item-label"),w=(0,n.up)("SideLink"),f=(0,n.up)("q-list"),y=(0,n.up)("q-drawer"),b=(0,n.up)("router-view"),h=(0,n.up)("q-page-container"),_=(0,n.up)("q-layout");return(0,n.wg)(),(0,n.j4)(_,{view:"lHh Lpr lFf"},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{elevated:"",style:{"background-color":"#eaff49"}},{default:(0,n.w5)((()=>[(0,n.Wm)(d,{style:{color:"#000000"}},{default:(0,n.w5)((()=>[(0,n.Wm)(s,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,n.Wm)(p,null,{default:(0,n.w5)((()=>[o])),_:1}),a])),_:1})])),_:1}),(0,n.Wm)(y,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:"",class:"bg-grey-1"},{default:(0,n.w5)((()=>[(0,n.Wm)(f,null,{default:(0,n.w5)((()=>[(0,n.Wm)(k),(0,n.Wm)(g,{header:"",class:"text-grey-8"},{default:(0,n.w5)((()=>[i])),_:1}),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.links,(e=>((0,n.wg)(),(0,n.j4)(w,(0,n.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,n.Wm)(h,null,{default:(0,n.w5)((()=>[(0,n.Wm)(b)])),_:1})])),_:1})}var r=l(2323);function c(e,t,l,o,a,i){const u=(0,n.up)("q-icon"),c=(0,n.up)("q-item-section"),s=(0,n.up)("q-item-label"),p=(0,n.up)("q-item");return(0,n.wg)(),(0,n.j4)(p,{clickable:"",onClick:e.clicked},{default:(0,n.w5)((()=>[e.icon?((0,n.wg)(),(0,n.j4)(c,{key:0,avatar:""},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{name:e.icon},null,8,["name"])])),_:1})):(0,n.kq)("",!0),(0,n.Wm)(c,null,{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.title),1)])),_:1}),(0,n.Wm)(s,{caption:""},{default:(0,n.w5)((()=>[(0,n.Uk)((0,r.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["onClick"])}const s=(0,n.aZ)({name:"SideLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}},methods:{clicked(){this.$router.push(this.link)}}});var p=l(3414),d=l(2035),m=l(4554),k=l(2350),g=l(7518),w=l.n(g);s.render=c;const f=s;w()(s,"components",{QItem:p.Z,QItemSection:d.Z,QIcon:m.Z,QItemLabel:k.Z});const y={key:0},b={ref:"passwordInput"},h=(0,n.Uk)("Admin Login"),_=(0,n.Uk)("Logout");function q(e,t,l,o,a,i){const u=(0,n.up)("q-item-label"),c=(0,n.up)("q-btn");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(u,{header:"",class:"text-grey-8"},{default:(0,n.w5)((()=>[(0,n.Uk)(" User type - "+(0,r.zw)(a.userType),1)])),_:1}),"guest"===a.userType?((0,n.wg)(),(0,n.iD)("div",y,[(0,n._)("input",b,null,512),(0,n.Wm)(c,{onClick:i.login},{default:(0,n.w5)((()=>[h])),_:1},8,["onClick"])])):(0,n.kq)("",!0),"guest"!==a.userType?((0,n.wg)(),(0,n.j4)(c,{key:1,onClick:i.logout},{default:(0,n.w5)((()=>[_])),_:1},8,["onClick"])):(0,n.kq)("",!0)],64)}var v=l(6641);const Z={name:"LoginComponent",data(){return{userType:(0,v.Ng)()}},methods:{login(){(0,v.x4)(this.$refs.passwordInput.value,this.callback)},callback(){this.userType=(0,v.Ng)()},logout(){(0,v.kS)(),this.userType=(0,v.Ng)()}}};var C=l(8240);Z.render=q;const L=Z;w()(Z,"components",{QItemLabel:k.Z,QBtn:C.Z});var W=l(1959);const Q=[{title:"Home",icon:"home",link:"/"},{title:"About",icon:"info",link:"/about"},{title:"News, Results & Future Events",icon:"feed",link:"/news-and-results"},{title:"Gallery",icon:"image",link:"/gallery"},{title:"Membership",icon:"loyalty",link:"/membership"},{title:"Contact",icon:"contact_phone",link:"/contact"},{title:"Couch 2 5k",icon:"directions_run",link:"/c25k"}],D=(0,n.aZ)({name:"MainLayout",components:{SideLink:f,LoginComponent:L},setup(){const e=(0,W.iH)(!1);return{links:Q,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}});var S=l(3066),T=l(3812),U=l(9570),I=l(3747),j=l(2428),H=l(7011),N=l(2652);D.render=u;const x=D;w()(D,"components",{QLayout:S.Z,QHeader:T.Z,QToolbar:U.Z,QBtn:C.Z,QToolbarTitle:I.Z,QDrawer:j.Z,QList:H.Z,QItemLabel:k.Z,QPageContainer:N.Z})}}]);