"use strict";(self["webpackChunkclanfield_joggers"]=self["webpackChunkclanfield_joggers"]||[]).push([[64],{6641:(e,t,n)=>{n.d(t,{x4:()=>r,kS:()=>s,Ng:()=>d});var i=n(52),a=n.n(i),o=n(796);let l="guest";const r=(e,t)=>{a().get(o.yN+"login",{params:{password:e}}).then((()=>{console.log("Logged in"),"admin"!==l&&(l="admin"),t()})).catch((()=>{console.log("Cannot log in")}))},s=()=>{"guest"!==l&&(l="guest")},d=()=>l},9790:(e,t,n)=>{n.d(t,{Z:()=>fe});var i={};n.r(i);var a=n(3673);const o={id:"content-div"};function l(e,t,n,i,l,r){const s=(0,a.up)("page-entry-component");return(0,a.wg)(),(0,a.iD)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.pageEntries,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.id},[(0,a.Wm)(s,{ref:"entry"+t.id,entry:t,userType:e.userType,onAddPageEntry:e.addPageEntry,onEditConfirm:e.updateEntry,onDeleteEntry:e.deleteEntry},null,8,["entry","userType","onAddPageEntry","onEditConfirm","onDeleteEntry"])])))),128))])}var r=n(52),s=n.n(r),d=n(796),g=n(6641),u=n(8880),m=n(2323);const c=(0,a.Uk)("Edit"),p=(0,a.Uk)("Add Entry Above"),h=(0,a.Uk)("Add Entry Below"),y=(0,a.Uk)("Delete Entry"),f={style:{float:"left"}},w={style:{float:"right"}},I=["innerHTML"],P=(0,a._)("hr",null,null,-1),v=(0,a.Uk)("Add Image Pane");function C(e,t,n,i,o,l){const r=(0,a.up)("q-btn"),s=(0,a.up)("image-pane-component"),d=(0,a.up)("q-input"),g=(0,a.up)("q-card-section"),C=(0,a.up)("q-card-actions"),k=(0,a.up)("q-card"),E=(0,a.up)("q-dialog"),b=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("div",null,["admin"===e.userType?((0,a.wg)(),(0,a.j4)(r,{key:0,onClick:e.edit},{default:(0,a.w5)((()=>[c])),_:1},8,["onClick"])):(0,a.kq)("",!0),"admin"===e.userType?((0,a.wg)(),(0,a.j4)(r,{key:1,onClick:e.addAbove},{default:(0,a.w5)((()=>[p])),_:1},8,["onClick"])):(0,a.kq)("",!0),"admin"===e.userType?((0,a.wg)(),(0,a.j4)(r,{key:2,onClick:e.addBelow},{default:(0,a.w5)((()=>[h])),_:1},8,["onClick"])):(0,a.kq)("",!0),"admin"===e.userType?((0,a.wg)(),(0,a.j4)(r,{key:3,onClick:e.deleteEntry},{default:(0,a.w5)((()=>[y])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a._)("div",null,[(0,a.wy)((0,a.Wm)(s,{ref:"imagePaneTop",size:e.getImagePaneSize(),location:e.getImagePaneLocation(),userType:this.userType,image:e.getImagePaneImage(),onImagePaneEdited:e.imagePaneEdited,onImagePaneDeleted:e.deleteImagePane},null,8,["size","location","userType","image","onImagePaneEdited","onImagePaneDeleted"]),[[u.F8,0===e.getImagePaneLocation()]]),(0,a._)("div",null,[(0,a._)("div",f,[(0,a.wy)((0,a.Wm)(s,{ref:"imagePaneLeft",size:e.getImagePaneSize(),location:e.getImagePaneLocation(),userType:this.userType,image:e.getImagePaneImage(),onImagePaneEdited:e.imagePaneEdited,onImagePaneDeleted:e.deleteImagePane},null,8,["size","location","userType","image","onImagePaneEdited","onImagePaneDeleted"]),[[u.F8,2===e.getImagePaneLocation()]])]),(0,a._)("div",w,[(0,a.wy)((0,a.Wm)(s,{ref:"imagePaneRight",size:e.getImagePaneSize(),location:e.getImagePaneLocation(),userType:this.userType,image:e.getImagePaneImage(),onImagePaneEdited:e.imagePaneEdited,onImagePaneDeleted:e.deleteImagePane},null,8,["size","location","userType","image","onImagePaneEdited","onImagePaneDeleted"]),[[u.F8,3===e.getImagePaneLocation()]])]),(0,a._)("div",{style:(0,m.j5)(e.getMainDivStyle()),innerHTML:e.entry.content},null,12,I)]),(0,a.wy)((0,a.Wm)(s,{ref:"imagePaneBottom",size:e.getImagePaneSize(),location:e.getImagePaneLocation(),userType:this.userType,image:e.getImagePaneImage(),onImagePaneEdited:e.imagePaneEdited,onImagePaneDeleted:e.deleteImagePane},null,8,["size","location","userType","image","onImagePaneEdited","onImagePaneDeleted"]),[[u.F8,1===e.getImagePaneLocation()]])]),P,(0,a.Wm)(E,{ref:"editorDialog",onClose:e.editorClosed},{default:(0,a.w5)((()=>[(0,a.Wm)(k,{style:{"min-width":"50%","min-height":"50%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(d,{type:"textarea",modelValue:e.newContent,"onUpdate:modelValue":t[0]||(t[0]=t=>e.newContent=t),autofocus:""},null,8,["modelValue"]),"admin"===e.userType&&-1===e.getImagePaneLocation()?((0,a.wg)(),(0,a.j4)(r,{key:0,onClick:e.addImagePane},{default:(0,a.w5)((()=>[v])),_:1},8,["onClick"])):(0,a.kq)("",!0)])),_:1}),(0,a.Wm)(C,{align:"right",class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(r,{flat:"",label:"Cancel",onClick:e.abortPressed},null,8,["onClick"]),[[b]]),(0,a.wy)((0,a.Wm)(r,{flat:"",label:"Confirm Changes",onClick:e.confirmPressed},null,8,["onClick"]),[[b]])])),_:1})])),_:1})])),_:1},8,["onClose"])])}const k=["src","alt"],E=(0,a._)("br",null,null,-1),b=(0,a.Uk)("Edit"),z=(0,a.Uk)("Delete"),D=(0,a._)("p",null,"Are you sure you want to delete this image pane?",-1);function S(e,t,n,i,o,l){const r=(0,a.up)("q-btn"),s=(0,a.up)("q-card-section"),d=(0,a.up)("q-card-actions"),g=(0,a.up)("q-card"),u=(0,a.up)("q-dialog"),c=(0,a.up)("add-image-component"),p=(0,a.up)("q-select"),h=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.iD)("div",null,["null"!==e.image.url?((0,a.wg)(),(0,a.iD)("img",{key:0,style:(0,m.j5)(e.getStyle()),src:e.image.url,alt:"[image:"+e.image.name+"]"},null,12,k)):(0,a.kq)("",!0),E,"admin"===e.userType?((0,a.wg)(),(0,a.j4)(r,{key:1,onClick:e.edit},{default:(0,a.w5)((()=>[b])),_:1},8,["onClick"])):(0,a.kq)("",!0),"admin"===e.userType?((0,a.wg)(),(0,a.j4)(r,{key:2,onClick:e.deleteImagePane},{default:(0,a.w5)((()=>[z])),_:1},8,["onClick"])):(0,a.kq)("",!0),(0,a.Wm)(u,{modelValue:this.deleting,"onUpdate:modelValue":t[0]||(t[0]=e=>this.deleting=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,null,{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[D])),_:1}),(0,a.Wm)(d,{align:"center",class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(r,{flat:"",label:"Cancel",onClick:e.abortDelete},null,8,["onClick"]),[[h]]),(0,a.wy)((0,a.Wm)(r,{flat:"",label:"Confirm",onClick:e.confirmDelete},null,8,["onClick"]),[[h]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(u,{modelValue:this.editing,"onUpdate:modelValue":t[3]||(t[3]=e=>this.editing=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{style:{"min-width":"50%","min-height":"50%"}},{default:(0,a.w5)((()=>[(0,a.Wm)(s,null,{default:(0,a.w5)((()=>[(0,a.Wm)(c,{onImageUploaded:e.imageUploaded},null,8,["onImageUploaded"]),(0,a.Wm)(p,{outlined:"",modelValue:e.newSize,"onUpdate:modelValue":t[1]||(t[1]=t=>e.newSize=t),options:e.sizeOptions,label:"Outlined"},null,8,["modelValue","options"]),(0,a.Wm)(p,{outlined:"",modelValue:e.newLocation,"onUpdate:modelValue":t[2]||(t[2]=t=>e.newLocation=t),options:e.locationOptions,label:"Outlined"},null,8,["modelValue","options"])])),_:1}),(0,a.Wm)(d,{align:"right",class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(r,{flat:"",label:"Cancel",onClick:e.abortEdit},null,8,["onClick"]),[[h]]),(0,a.wy)((0,a.Wm)(r,{flat:"",label:"Confirm Changes",onClick:e.confirmEdit},null,8,["onClick"]),[[h]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])}const T=(0,a.Uk)("Upload Image"),W={ref:"inputForm",style:{display:"none"}};function N(e,t,n,i,o,l){const r=(0,a.up)("q-tooltip"),s=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s,{style:{"margin-top":"2%"},icon:"upload",onClick:e.uploadClicked},{default:(0,a.w5)((()=>[(0,a.Wm)(r,null,{default:(0,a.w5)((()=>[T])),_:1})])),_:1},8,["onClick"]),(0,a._)("form",W,[(0,a._)("input",{ref:"fileInput",type:"file",name:"file",accept:"image/*",formenctype:"multipart/form-data",onChange:t[0]||(t[0]=t=>e.uploadImage(t)),id:"file-input"},null,544)],512)],64)}const O=(0,a.aZ)({name:"AddImageComponent",emits:["image-uploaded"],methods:{uploadClicked(){this.$refs.fileInput.click()},uploadImage(e){const t=d.yN+"uploadImage",n=new FormData;n.append("file",e.target.files[0]);const i={header:{"Content-Type":"image"}};this.$axios.post(t,n,i).then((e=>{console.log("Image upload response > ",e),this.$emit("image-uploaded",e.data),this.$refs.inputForm.reset()})).catch((e=>console.log("Error",e.message)))}}});var _=n(8240),q=n(8870),L=n(7518),R=n.n(L);O.render=N;const U=O;R()(O,"components",{QBtn:_.Z,QTooltip:q.Z});const Z=["Above","Below","Left","Right"],A=["Small","Medium","Large"],$={locationOptions:Z,sizeOptions:A},B=e=>{switch(e){case $.sizeOptions[0]:return 5;case $.sizeOptions[1]:return 10;case $.sizeOptions[2]:return 15;default:return console.error("ERROR - Invalid size string (converter -> sizeStrToWidth)"),10}},j=e=>{for(let t=0;t<$.locationOptions.length;t++)if(e===$.locationOptions[t])return t;return console.error("ERROR - Invalid location parameter (converter -> locationStrToInt)"),1},x=e=>e>-1&&e<$.locationOptions.length?$.locationOptions[e]:(console.error("ERROR - Invalid location parameter (converter -> locationIntToStr)"),$.locationOptions[1]),Q={sizeStrToWidth:B,locationStrToInt:j,locationIntToStr:x},V=(0,a.aZ)({name:"ImagePaneComponent",components:{AddImageComponent:U},emits:["image-pane-edited","image-pane-deleted"],props:{userType:{type:String,required:!0},image:{required:!0},size:{required:!0},location:{required:!0}},data(){const e={name:"null",url:"null"},t=!1,n=!1,i=$.sizeOptions,a=$.locationOptions;let o=this.size;void 0!==o&&"null"!==o||(o=$.sizeOptions[1]);let l=Q.locationIntToStr(1);return void 0!==this.location&&(l=Q.locationIntToStr(this.location)),{newImage:e,newSize:o,editing:t,sizeOptions:i,newLocation:l,locationOptions:a,deleting:n}},methods:{getStyle(){const e=Q.sizeStrToWidth(this.size);return"width: "+e+"vw"},edit(){this.deleting||(this.newSize=this.size,void 0!==this.newSize&&"null"!==this.newSize||(this.newSize=$.sizeOptions[1]),this.newLocation=Q.locationIntToStr(1),void 0!==this.location&&(this.newLocation=Q.locationIntToStr(this.location)),this.editing=!0)},deleteImagePane(){this.editing||(this.deleting=!0)},abortDelete(){this.deleting=!1},confirmDelete(){!1!==this.deleting&&(this.deleting=!1,this.$emit("image-pane-deleted"))},imageUploaded(e){this.newImage.name=e.imageName,this.newImage.url=e.imageUrl},abortEdit(){this.editing=!1},confirmEdit(){!1!==this.editing&&(this.editing=!1,"null"!==this.newImage.url?this.$emit("image-pane-edited",this.newImage,this.newSize,Q.locationStrToInt(this.newLocation)):this.$emit("image-pane-edited",this.image,this.newSize,Q.locationStrToInt(this.newLocation)))}}});var M=n(6778),F=n(151),H=n(5589),J=n(9367),G=n(9891),K=n(677);V.render=S;const Y=V;R()(V,"components",{QBtn:_.Z,QDialog:M.Z,QCard:F.Z,QCardSection:H.Z,QCardActions:J.Z,QSelect:G.Z}),R()(V,"directives",{ClosePopup:K.Z});const X=(0,a.aZ)({name:"PageEntryComponent",components:{ImagePaneComponent:Y},emits:["edit-confirm","delete-entry","add-page-entry"],props:{entry:{type:i.PageEntry,required:!0},userType:{type:String,required:!0}},data(){return{editing:!1,newContent:this.entry.content}},methods:{getMainDivStyle(){const e=this.getImagePaneLocation(),t=Q.sizeStrToWidth(this.getImagePaneSize())+2;return 2===e?"margin-left: "+t+"vw":3===e?"margin-right: "+t+"vw":void 0},getImagePaneLocation(){return void 0===this.entry.imagePane?-1:this.entry.imagePane.location},getImagePaneSize(){return void 0===this.entry.imagePane?"null":this.entry.imagePane.size},getImagePaneImage(){return void 0===this.entry.imagePane?"null":this.entry.imagePane.image},startEditing(){this.editing=!0},editorClosed(){this.editing&&(this.editing=!1)},confirmPressed(){this.editing&&this.confirmEdit()},abortPressed(){this.editing&&this.abortEdit()},imagePaneEdited(e,t,n){const i={image:e,location:n,size:t},a={content:this.entry.content,id:this.entry.id,imagePane:i};this.$emit("edit-confirm",a,null)},addImagePane(){const e={name:"null",url:"null"},t={image:e,location:1,size:$.sizeOptions[1]},n={content:this.entry.content,id:this.entry.id,imagePane:t};this.$emit("edit-confirm",n,this.$refs.imagePaneBottom.edit)},deleteImagePane(){const e={name:"null",url:"null"},t={image:e,location:-1,size:"null"},n={content:this.entry.content,id:this.entry.id,imagePane:t};this.$emit("edit-confirm",n,null)},edit(){this.editing=!0,this.newContent=this.entry.content},abortEdit(){!1!==this.editing&&(this.editing=!1,this.newContent=this.entry.content)},confirmEdit(){if(!1===this.editing)return;this.editing=!1;const e={content:this.newContent,id:this.entry.id,imagePane:this.entry.imagePane};this.$emit("edit-confirm",e,null)},addAbove(){this.$emit("add-page-entry",!0,this.entry.id)},addBelow(){this.$emit("add-page-entry",!1,this.entry.id)},deleteEntry(){this.$emit("delete-entry",this.entry.id)}},watch:{editing:function(){this.editing?this.$refs.editorDialog.show():this.$refs.editorDialog.hide()}}});var ee=n(4842);X.render=C;const te=X;R()(X,"components",{QBtn:_.Z,QDialog:M.Z,QCard:F.Z,QCardSection:H.Z,QInput:ee.Z,QCardActions:J.Z}),R()(X,"directives",{ClosePopup:K.Z});const ne=[{id:0,content:"<div style='text-align: center; font-weight: bold'><p>We have now received notification from England Athletics that they are advising that all clubs should be cancelling training sessions with immediate effect until at least the end of April. They also advise that you should continue your training but ask that you bear in mind the Public Health advice about social distancing.</p><p>I regret to inform you that our Wednesday and Sunday sessions for Clanfield Joggers will now be suspended in line with this guidance. Not to do so would invalidate our insurance. As and when the guidance is updated we will write out to you again.</p><p>Of course, individuals can still run together at their own risk. May I suggest that we organise informal runs through the WhatsApp group as a way forward? If you are not part of that group and would like to be please send me your phone number and I will add you.</p><p>Please do take care of yourself and your families during this challenging time.</p><p>Click <a href='https://www.gov.uk/government/publications/covid-19-guidance-on-social-distancing-and-for-vulnerable-people/guidance-on-social-distancing-for-everyone-in-the-uk-and-protecting-older-people-and-vulnerable-adults#what-is-the-advice-if-i-live-with-a-vulnerable-person'>HERE</a> for social distancing guidelines</p></div>",imagePane:{size:"null",location:-1,image:{name:"null",url:"null"}}}],ie=[{id:0,content:"<p>Clanfield Joggers started out in the spring of 1992 as part of an initiative by East Hampshire District Council.  This was to encourage people to set up and run their own sporting/leisure clubs and activities.  Keith Oliver of Clanfield was responsible for getting us off the ground and Keith provided the initial motivation and organisation to set up the Club - we then took the Club forward to where it is today.\n\nWe have a membership of approximately 40 runners, of varying levels of experience and we cater for all standards, from those who want a slow, social jog around the local lanes and tracks, to longer distances and faster speeds.  You'll usually find someone of your standard to run with.\n\n \n\nClanfield Joggers' aim is to provide a supportive environment for those wanting to get into running.  A fellow runner at a local race had this to say about one of our members: \"This was only my second official 10k road race.  I found it quite hard going and was almost ready to quit at the 8k marker; that was before an amazing member of your club encouraged me to carry on.  She is a credit to your club.  She showed a real team player attitude, sacrificing her own finish time to help, encourage and support a complete stranger over the finish line.\"</p>",imagePane:{size:"null",location:-1,image:{name:"null",url:"null"}}}],ae=[{id:0,content:"<p>South Downs Way Half Marathon\n\n\n\nCongratulations to Sarah, Terry and Cara for successfully completing the hilly South Downs Half Marathon in a time of 2 hours and 22 minutes.</p>",imagePane:{size:"null",location:-1,image:{name:"null",url:"null"}}}],oe=[{id:0,content:"<p>These are our regular runs around Clanfield. Each run varies in the distance and the hills!\n\n\n\nDon’t get confused by the fact that there are (at least) two Green Lane tracks in Clanfield: one is the extension northwards of Green Lane (road) and the other is a turning off Hambledon Road round to North Farm.</p>",imagePane:{size:"null",location:-1,image:{name:"null",url:"null"}}}],le=[{id:0,content:"<p>To join Clanfield Joggers, the annual membership is:\n\nWalker - £3.00 per year\nSenior Citizen (60 years+) or Unwaged - non-competing/second-claim - £7.00 per year\nSenior Citizen (60 years+) or Unwaged - competing/first-claim - £22.00 per year\nMember (over 18) - non-competing/second-claim - £10.00 per year\nMember (over 18) - competing/first-claim - £25.00 per year</p>",imagePane:{size:"null",location:-1,image:{name:"null",url:"null"}}}],re=[{id:0,content:"Contact\n\nEmail\n\nTelephone\n\nKen Finlay - Club Secretary\n\ninfo@clanfieldjoggers.co.uk\n07711 228412",imagePane:{size:"null",location:-1,image:{name:"null",url:"null"}}}],se=[{id:0,content:"C25K, is a fantastic program that's been designed to get just about anyone from the couch to running 5 kilometers or 30 minutes in just 9 weeks.\n",imagePane:{size:"null",location:-1,image:{name:"null",url:"null"}}}],de=[{id:0,content:"Below are a selection of events from around the near by area, Many other events are taking place every weekend. Further events can be found at the Southern Running Guide website",imagePane:{size:"null",location:-1,image:{name:"null",url:"null"}}}],ge=e=>{switch(e){case"index":return ne;case"about":return ie;case"news-and-results":return ae;case"regular-runs":return oe;case"membership":return le;case"contact":return re;case"c25k":return se;case"future-events":return de;default:return console.log("ERROR - Could not retrieve data from mockDB. Page does not exist with name ("+e+")"),[]}},ue=(e,t)=>{const n=ge(e).find((({id:e})=>e===t.id));void 0!==n?(n.content=t.content,n.imagePane=t.imagePane,console.log("Entry successfully updated. (ID - "+t.id+", PAGE - "+e+")")):console.log("ERROR - no entry with id "+t.id+" could be found for page ("+e+")")},me=e=>{const t=ge(e);let n=t.length;while(1){if(void 0===t.find((({id:e})=>e===n)))return n;n++}},ce=(e,t,n,i)=>{const a=ge(e);let o=a.findIndex((({id:e})=>e===n));i||(o+=1),a.splice(o,0,t)},pe=(e,t)=>{const n=ge(e);let i=n.findIndex((({id:e})=>e===t));i>-1&&n.splice(i,1)},he={get:ge,post:ue,getNewID:me,add:ce,remove:pe},ye=(0,a.aZ)({name:"PageGeneric",components:{PageEntryComponent:te},props:{pageName:{type:String,required:!0}},data(){const e=[];return{pageEntries:e,userType:(0,g.Ng)()}},methods:{addPageEntry(e,t){const n={name:"null",url:"null"},i={image:n,location:-1,size:"null"},a={content:"",id:this.getNewID(),imagePane:i,isNew:!0};this.addEntry(a,t,e,this.startEditingNewEntry)},startEditingNewEntry(){let e=-1;for(let t=0;t<this.pageEntries.length;t++)this.pageEntries[t].isNew&&(e=this.pageEntries[t].id);if(-1===e)console.error("ERROR - No new page entry found");else{const t="entry"+e;this.$nextTick((()=>{this.$refs[t].startEditing()}))}},deleteEntry(e){d.c4?he.remove(this.pageName,e):this.deleteEntryDB(e),this.$forceUpdate()},deleteEntryDB(e){s().delete(d.yN,{params:{page:this.pageName,id:e}}).then((e=>{console.log(e)})).catch((e=>console.log("Error",e.message)))},getNewID(){return d.c4?he.getNewID(this.pageName):-1},addEntry(e,t,n,i){d.c4?he.add(this.pageName,e,t,n):this.addEntryDB(e,t,n,i)},addEntryDB(e,t,n,i){s().post(d.yN,"",{params:{page:this.pageName,refID:t,above:n,entry:JSON.stringify(e)}}).then((()=>{this.getLatestData(i)})).catch((e=>console.log("Error",e.message)))},updateEntry(e,t){d.c4?this.updateEntryMockData(e):this.updateEntryDB(e,t)},updateEntryMockData(e){he.post(this.pageName,e)},updateEntryDB(e,t){s().post(d.yN,"",{params:{page:this.pageName,entry:JSON.stringify(e)}}).then((e=>{console.log(e),this.getLatestData(t)})).catch((e=>console.log("Error",e.message)))},getLatestData(e){d.c4?this.pageEntries=he.get(this.pageName):s().get(d.yN,{params:{page:this.pageName}}).then((t=>{this.pageEntries=JSON.parse(t.data),null!==e&&e()})).catch((e=>console.log("Error",e.message)))}},mounted(){this.getLatestData(null),window.setInterval((()=>{this.getLatestData(null)}),1e3),window.setInterval((()=>{this.userType=(0,g.Ng)()}),200)}});ye.render=l;const fe=ye},796:e=>{e.exports=JSON.parse('{"c4":false,"yN":"https://hidden-hollows-23141.herokuapp.com/"}')}}]);