(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{126:function(e,a,t){e.exports=t(229)},131:function(e,a,t){},229:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),o=t.n(l),c=(t(131),t(25)),i=t(32),m=t(279),s=t(289),u=t(280),d=t(106),p=t(278),h=t(274),g=t(275),v=t(277),E=t(276),b=Object(d.a)({card:{maxWidth:"20rem"},media:{height:"21vh"},paper:{backgroundColor:"white"},cardContent:{opacity:1}});function f(e){var a=e.imagepath,t=e.title,n=e.body,l=e.linkpath,o=b();return r.a.createElement(h.a,{className:o.card,onClick:function(){window.location.href=l}},r.a.createElement(g.a,null,r.a.createElement(E.a,{className:o.media,image:a,title:"Demo"}),r.a.createElement(v.a,{className:o.cardContent},r.a.createElement(p.a,{variant:"h5",component:"h2"},t),r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},n))))}var y=[{img:"https://res.cloudinary.com/ovh55/image/upload/v1578845137/photo/beach-shop-overview.jpg",title:"Shopping Cart",body:"Django & React Redux",path:"https://shoppingcart-django-redux.herokuapp.com",id:1},{img:"https://res.cloudinary.com/ovh55/image/upload/v1578845200/photo/aromatherapy.jpg",title:"SPA Booking System",body:"Django & Bootstrap",path:"https://django-spa.herokuapp.com",id:2},{img:"https://res.cloudinary.com/ovh55/image/upload/v1521698288/backgound/pexels-photo-399161.jpg",title:"Comming soon",body:"Comming soon",path:"#",id:3},{img:"https://res.cloudinary.com/ovh55/image/upload/v1521698288/backgound/pexels-photo-399161.jpg",title:"Comming soon",body:"Comming soon",path:"#",id:4}];function x(){return r.a.createElement(m.a,{container:!0,spacing:1},y.map((function(e){return r.a.createElement(m.a,{item:!0,xs:12,sm:6,md:6,align:"center",key:e.id},r.a.createElement(f,{imagepath:e.img,title:e.title,body:e.body,linkpath:e.path}))})))}var k=t(117),C=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.secondary},work:{height:"87vh"},paper3:{height:"25vh",paddingTop:"13rem",backgroundImage:'url("https://res.cloudinary.com/ovh55/image/upload/v1579020021/backgound/33110.jpg")',backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"},typography:{paddingTop:"1rem",paddingBottom:"1rem"}}}));var j=function(){var e=C();return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(m.a,{container:!0,spacing:1,direction:"column"},r.a.createElement(m.a,{item:!0,xs:12,sm:12,md:12,align:"center"},r.a.createElement(k.a,{className:e.paper3,color:"primary",elevation:7},r.a.createElement(m.a,{container:!0,direction:"row"},r.a.createElement(m.a,{item:!0,xm:12,lg:6},r.a.createElement(p.a,{variant:"h3"},"\xa0 \xa0 \xa0 \u2003 ")),r.a.createElement(m.a,{item:!0,xm:12,lg:6},r.a.createElement(p.a,{variant:"h3",style:{textShadow:"2px 2px black"}},"I'm Alisher"),r.a.createElement(p.a,{variant:"h6",style:{textShadow:"0 0 3px black, 0 0 5px black"}},"Web Developer"),r.a.createElement(p.a,{variant:"subtitle2",style:{textShadow:"0 0 3px black, 0 0 5px black"}},"alisherx07@gmail.com"))))),r.a.createElement(m.a,{item:!0,xs:12,sm:12,md:12},r.a.createElement("div",{className:e.work},r.a.createElement(m.a,{container:!0,justify:"center",alignItems:"center",align:"center",direction:"column"},r.a.createElement(p.a,{gutterBottom:!0,variant:"h6",className:e.typography,style:{textShadow:"0 0 3px black, 0 0 5px black",color:"white"}},"My Demo Work"),r.a.createElement(x,null)))))))))},S=t(22),w=t(13),O=t(38),N={labels:["Python","React","Redux","Django","HTML","CSS","Javascript","SQL"],datasets:[{backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[98,87,90,92,94,96,80,99]}]};function A(){var e=Object(n.useState)(N),a=Object(w.a)(e,2),t=a[0],l=a[1];return function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}((function(){for(var e,a,n=t.datasets[0],r=[],o=0;o<t.labels.length;o++)r.push((e=80,a=99,Math.floor(Math.random()*(a-e+1))+e));var c=Object(S.a)({},n);c.data=r;var i=Object(S.a)({},N,{datasets:[c]});l(i)}),5e3),r.a.createElement("div",null,r.a.createElement(O.b,{style:{height:"42vh"},data:t,options:{title:{display:!0,text:"My skills",fontColor:"white",fontSize:15},legend:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,fontColor:"white",fontSize:20}}],xAxes:[{ticks:{fontColor:"white",fontSize:20}}]}}}))}var B={labels:["Protel","POS","Tiger","SPA"],datasets:[{backgroundColor:["#CCC","#36A2EB","#FFCE56","rgba(255,99,132,0.2)"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","rgba(255,99,132,0.2)"],data:[76,79,70,72]}]};function M(){var e=Object(n.useState)(B),a=Object(w.a)(e,2),t=a[0],l=a[1];return function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}((function(){for(var e,a,n=t.datasets[0],r=[],o=0;o<t.labels.length;o++)r.push((e=50,a=200,Math.floor(Math.random()*(a-e+1))+e));var c=Object(S.a)({},n);c.data=r;var i=Object(S.a)({},B,{datasets:[c]});l(i)}),3e3),r.a.createElement("div",null,r.a.createElement(O.a,{data:t,options:{title:{display:!0,text:"My Support",fontSize:15,fontColor:"white"},legend:{labels:{fontColor:"white",fontSize:10}}}}))}var T=0,z={labels:["1","2","3","4","5","6","7","8","9","10"],datasets:[{backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",borderJoinStyle:"miter",lineTension:.1,data:[76,79,70,71,75,70,78,74,73,72],fill:!1}]};function W(){var e=Object(n.useState)(z),a=Object(w.a)(e,2),t=a[0],l=a[1];return function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])}((function(){var e=t.datasets[0],a=[],n=70;a.push(n);for(var r=0;r<t.labels.length-1;r++)r%2===0&&(n-=Math.floor(10*Math.random())),n+=Math.floor(10*Math.random()),a.push(n);n=0;var o=Object(S.a)({},e),c=a[a.length-1];T=Math.floor(c/70*100)-100,o.data=a;var i=Object(S.a)({},z,{datasets:[o]});l(i)}),4e3),r.a.createElement("div",null,r.a.createElement(O.c,{data:t,options:{title:{display:!0,text:T+" % of Progress",fontSize:15,fontColor:"white"},legend:{display:!1},scales:{xAxes:[{gridLines:{drawOnChartArea:!1,drawTicks:!1},ticks:{display:!1}}],yAxes:[{gridLines:{drawOnChartArea:!1,drawTicks:!1},ticks:{display:!1}}]}}}))}var D=function(e){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(m.a,{container:!0,spacing:1,direction:"row"},r.a.createElement(m.a,{item:!0,xs:12,sm:3,md:3,align:"center",style:{backgroundColor:"rgba(66,66,66)",borderRadius:"1rem"}},r.a.createElement("h1",{style:{color:"white"}},"About Me"),r.a.createElement("img",{src:"https://res.cloudinary.com/ovh55/image/upload/v1579337232/photo/Alisher_photo_round.png",alt:"Alisher",style:{width:"10rem",height:"17vh"}}),r.a.createElement(p.a,{variant:"body2",style:{marginTop:"3vh",color:"white"}},"Web developer. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, Python, JavaScript, CSS, SQL. Strong background in project management and customer relations. Currently working in JA The resort in Dubai.")),r.a.createElement(m.a,{item:!0,xs:12,sm:9,md:9,align:"center"},r.a.createElement(m.a,{container:!0,spacing:1,direction:"row"},r.a.createElement(m.a,{item:!0,xs:12,sm:6,md:6,align:"center"},r.a.createElement(k.a,null,r.a.createElement(W,null))),r.a.createElement(m.a,{item:!0,xs:12,sm:6,md:6,align:"center"},r.a.createElement(k.a,null,r.a.createElement(M,null))),r.a.createElement(m.a,{item:!0,xs:12,sm:12,md:12,align:"center"},r.a.createElement(k.a,null,r.a.createElement(A,null))))))))},I=t(281),P=t(282),R=t(284),L=t(293),F=t(291),q=t(294),J=t(108),H=t.n(J),_=t(283),G=t(110),Z=t.n(G),Q=t(292),V=t(295);function $(){return r.a.createElement("div",null,r.a.createElement(V.a,{avatar:r.a.createElement(Q.a,{alt:"Alisher",src:"https://res.cloudinary.com/ovh55/image/upload/v1579337232/photo/Alisher_photo_round.png"}),label:"About",variant:"outlined"}))}var K=t(51),U=t.n(K),X=Object(d.a)((function(e){return{root:{flexGrow:3},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},navButtonStyle:{color:"white","text-decoration":"none"},invisible:{background:"rgba(0,0,0,0.5)"},nav:{backgroundColor:e.palette.background.paper}}}));var Y=function(){var e=Object(n.useState)(!1),a=Object(w.a)(e,2),t=a[0],l=a[1],o=X();function i(){l(!t)}return r.a.createElement("div",null,r.a.createElement(I.a,{className:o.nav},r.a.createElement(P.a,null,r.a.createElement(s.a,{display:{xs:"block",sm:"none",md:"none"}},r.a.createElement(_.a,{onClick:i},r.a.createElement(H.a,null))),r.a.createElement(s.a,{display:{xs:"none",sm:"block",md:"block"}},r.a.createElement(R.a,{color:"default"},r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:"/",className:o.navButtonStyle},r.a.createElement(p.a,{color:"inherit",variant:"subtitle1"},"Home  ",r.a.createElement(L.a,{fontSize:"small"}))))),r.a.createElement("br",null),r.a.createElement(s.a,{display:{xs:"none",sm:"block",md:"block"}},r.a.createElement(R.a,{color:"default"},r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:"/about",className:o.navButtonStyle},r.a.createElement(p.a,{color:"inherit",variant:"subtitle1"},"About ",r.a.createElement(Z.a,{fontSize:"small"}))))),r.a.createElement("br",null),r.a.createElement(s.a,{display:{xs:"none",sm:"block",md:"block"}},r.a.createElement(R.a,{color:"default"},r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:"/form",className:o.navButtonStyle},r.a.createElement(p.a,{color:"inherit",variant:"subtitle1"},"Contact  ",r.a.createElement(U.a,{fontSize:"small"}))))),r.a.createElement("br",null)),r.a.createElement(F.a,{open:t,width:200,onClick:i,onKeyDown:i},r.a.createElement(q.a,null,r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:"/",className:o.navButtonStyle},r.a.createElement(p.a,{color:"inherit",variant:"subtitle1"},"Home  ",r.a.createElement(L.a,{fontSize:"small"})))),r.a.createElement(q.a,null,r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:"/about",className:o.navButtonStyle},r.a.createElement(p.a,{color:"inherit",variant:"subtitle1"},r.a.createElement($,null)))),r.a.createElement(q.a,null,r.a.createElement(c.b,{activeClassName:"active",exact:!0,to:"/form",className:o.navButtonStyle},r.a.createElement(p.a,{color:"inherit",variant:"subtitle1"},"Contact  ",r.a.createElement(U.a,{fontSize:"small"})))))))};var ee=function(){return r.a.createElement("h1",null,"Notfound")},ae=t(11),te=function(e,a){var t=Object(n.useState)({}),r=Object(w.a)(t,2),l=r[0],o=r[1],c=Object(n.useState)({}),i=Object(w.a)(c,2),m=i[0],s=i[1],u=Object(n.useState)(!1),d=Object(w.a)(u,2),p=d[0],h=d[1];Object(n.useEffect)((function(){0===Object.keys(m).length&&p&&e()}),[m]);return{handleChange:function(e){e.persist(),o((function(a){return Object(S.a)({},a,Object(ae.a)({},e.target.name,e.target.value))})),s(a(l))},handleSubmit:function(e){e&&e.preventDefault(),s(a(l)),h(!0)},values:l,errors:m}};function ne(e){var a,t={};return e.name?e.name.length<=2&&(t.name="Name must be 2 or more characters"):t.name="name is required",e.email?(a=e.email,/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a).toLowerCase())||(t.email="Please provide valid email")):t.email="email is required",e.message?e.message.length<=2&&(t.message="message must be 2 or more characters"):t.message="message is required",t}var re=t(285),le=t(288),oe=t(113),ce=t.n(oe),ie=t(112),me=t.n(ie),se=t(111),ue=t.n(se),de=t(82),pe=t.n(de),he=t(114),ge=t.n(he),ve=t(115),Ee=t.n(ve),be=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),fe=function(){var e=Object(n.useState)(!1),a=Object(w.a)(e,2),t=a[0],l=a[1],o=be(),c=te((function(){l(!0),console.log(t)}),ne),i=c.values,s=c.errors,d=c.handleChange,h=c.handleSubmit;return r.a.createElement("div",{className:"section is-fullheight"},r.a.createElement(u.a,{component:"main"},r.a.createElement(re.a,null),r.a.createElement(m.a,{container:!0,spacing:1},r.a.createElement(m.a,{item:!0,xs:12,sm:12},r.a.createElement("div",{className:o.paper},r.a.createElement(p.a,{component:"h1",variant:"h5"},"Contact Me"))),r.a.createElement(m.a,{item:!0,xs:12,sm:6},r.a.createElement("div",{className:o.paper},r.a.createElement(Q.a,{className:o.avatar},r.a.createElement(U.a,null)),r.a.createElement(p.a,{component:"h1",variant:"h5"},"My details"),r.a.createElement(p.a,{component:"h1",variant:"h5",style:{marginTop:"2rem"}},r.a.createElement(ue.a,null),"Location: Dubai, UAE"),r.a.createElement(p.a,{component:"h1",variant:"h5"},r.a.createElement(me.a,null)," Phone: +971 50 101 5724"),r.a.createElement(p.a,{component:"h1",variant:"h5"},r.a.createElement(pe.a,null)," Email: alisherx07@gmail.com"),t?r.a.createElement(p.a,{component:"h6",variant:"h5"},"name: ",i.name,", email: ",i.email,", message: ",i.message):r.a.createElement("p",null))),r.a.createElement(m.a,{item:!0,xs:12,sm:6},r.a.createElement("div",{className:o.paper},r.a.createElement(Q.a,{className:o.avatar},r.a.createElement(ce.a,null)),r.a.createElement(p.a,{component:"h1",variant:"h5"},"Drop me your note"),r.a.createElement("form",{className:o.form,onSubmit:h,noValidate:!0},r.a.createElement(m.a,{container:!0,spacing:2},r.a.createElement(m.a,{item:!0,xs:12,sm:6},r.a.createElement(le.a,{variant:"outlined",required:!0,fullWidth:!0,autoComplete:"name",name:"name",id:"name",label:"Name",autoFocus:!0,onChange:d,value:i.name||"",helperText:s.name,error:"string"===typeof s.name}),r.a.createElement(p.a,{component:"h1",variant:"h5"})),r.a.createElement(m.a,{item:!0,xs:12,sm:6},r.a.createElement(le.a,{variant:"outlined",required:!0,fullWidth:!0,autoComplete:"email",name:"email",id:"email",label:"Email",onChange:d,value:i.email||"",helperText:s.email,error:"string"===typeof s.email}),r.a.createElement(p.a,{component:"h1",variant:"h5"})),r.a.createElement(m.a,{item:!0,xs:12,sm:12},r.a.createElement(le.a,{variant:"outlined",required:!0,fullWidth:!0,name:"message",label:"Message",id:"component-error",autoComplete:"current-message",onChange:d,value:i.message||"",helperText:s.message,error:"string"===typeof s.message}))),r.a.createElement(R.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:o.submit},"Submit")))),r.a.createElement(m.a,{item:!0,xs:12,sm:12},r.a.createElement("div",{className:o.paper},r.a.createElement(p.a,{component:"h1",variant:"h5"},r.a.createElement(pe.a,null),r.a.createElement(ge.a,null),r.a.createElement(Ee.a,null)))))))};var ye=function(){return r.a.createElement("div",null,r.a.createElement(Y,null),r.a.createElement("div",{style:{marginTop:80}},r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:j}),r.a.createElement(i.a,{exact:!0,path:"/about",component:D}),r.a.createElement(i.a,{exact:!0,path:"/form",component:fe}),r.a.createElement(i.a,{component:ee}))))},xe=t(286),ke=t(116),Ce=t(287);var je=function(){var e=Object(xe.a)("(prefers-color-scheme: dark)"),a=r.a.useMemo((function(){return Object(ke.a)({typography:{useNextVariants:!0},palette:{type:"dark"}})}),[e]);return r.a.createElement("div",{className:"App"},r.a.createElement(Ce.a,{theme:a},r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ye,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[126,1,2]]]);
//# sourceMappingURL=main.b5b3f2f4.chunk.js.map