(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{49:function(e,a,s){},50:function(e,a,s){},51:function(e,a,s){},62:function(e,a,s){},63:function(e,a,s){},64:function(e,a,s){},65:function(e,a,s){},66:function(e,a,s){},67:function(e,a,s){},68:function(e,a,s){},69:function(e,a,s){},70:function(e,a,s){},71:function(e,a,s){"use strict";s.r(a);var t=s(1),c=s.n(t),i=s(18),r=s.n(i),n=(s(49),s(2)),o=s(9),l=s(7),m=(s(50),s(51),s(74)),p=s(75),d=s(0),j=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(m.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(d.jsx)(m.a.Brand,{children:Object(d.jsxs)(o.b,{className:"brand-link",to:"/",children:[Object(d.jsx)("i",{className:"bi-folder nav-icon"})," Luke Irvine"]})}),Object(d.jsx)(m.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(d.jsx)(m.a.Collapse,{id:"responsive-navbar-nav",children:Object(d.jsxs)(p.a,{className:"mr-auto",children:[Object(d.jsx)(p.a.Link,{as:o.b,to:"/apps",children:"Apps"}),Object(d.jsx)(p.a.Link,{as:o.b,to:"/music",children:"Music"}),Object(d.jsx)(p.a.Link,{as:o.b,to:"/contact",children:"Contact"})]})})]})})},b=s(73),h=(s(62),s(5)),u=s(8),g={music:{swingDance:"https://i.imgur.com/5NLIcPa.png",winery:"https://i.imgur.com/pndhVne.jpg",villageHall:"https://i.imgur.com/BgHdC1a.jpg",practiceRoom:"https://i.imgur.com/ZSvtToV.png",botb:"https://i.imgur.com/JCS54MC.jpg",springJam:"https://i.imgur.com/7ROLluW.jpg",highlightsConcert:"https://i.imgur.com/rpgMKyN.jpg",margieOtt:"https://i.imgur.com/0UQX896.jpg",jazzTrio:"https://i.imgur.com/KXPJDyz.png",treeFarm:"https://i.imgur.com/Jgpg8QS.jpg",vespersOutside:"https://i.imgur.com/aSoXlCI.jpg",vespersPracticeRoom:"https://i.imgur.com/7WdvuLe.jpg"},goaltop:{homepage:"https://i.imgur.com/Zjsf9ee.jpg",dashboard:"https://i.imgur.com/U2KPCeZ.png"},surveyCounter:{reports:"https://i.imgur.com/TLmtJ9t.png",homepage:"https://i.imgur.com/Kcv4Iml.png"},mealDash:{phone:"https://i.imgur.com/pN6d4aU.jpg",dash:"https://i.imgur.com/sJXxmQ3.png"},smallGroups:{groupCategory:"https://i.imgur.com/ccimp3e.png",startGroup:"https://i.imgur.com/TdoqfuY.png",groupCards:"https://i.imgur.com/Diw5KSJ.png",homepage:"https://i.imgur.com/cT6qzp3.jpg"},midi:{gm7:"https://i.imgur.com/TsIxURi.png"},videoImgs:{goaltop:"https://i.imgur.com/xyYcivg.mp4",smallGroups:"https://i.imgur.com/CBQu48z.mp4",surveyCounter:"https://i.imgur.com/NfaTfld.mp4",mealDash:"https://i.imgur.com/iIgP5Tj.mp4"}},O={1:{front:g.music.treeFarm,back:g.goaltop.dashboard},2:{front:g.music.botb,back:g.music.winery},3:{front:g.music.highlightsConcert,back:g.music.jazzTrio},4:{front:g.music.winery,back:g.music.swingDance},5:{front:g.smallGroups.groupCards,back:g.mealDash.dash},6:{front:g.music.springJam,back:g.music.villageHall},7:{front:g.mealDash.phone,back:g.music.margieOtt},8:{front:g.smallGroups.groupCategory,back:g.smallGroups.homepage},9:{front:g.music.swingDance,back:g.music.botb},10:{front:g.music.vespersPracticeRoom,back:g.music.highlightsConcert},11:{front:g.goaltop.dashboard,back:g.music.treeFarm},12:{front:g.music.vespersOutside,back:g.mealDash.phone},13:{front:g.music.margieOtt,back:g.music.springJam},14:{front:g.music.jazzTrio,back:g.music.vespersOutside},15:{front:g.midi.gm7,back:g.goaltop.homepage},16:{front:g.music.villageHall,back:g.music.vespersPracticeRoom},17:{front:g.goaltop.homepage,back:g.goaltop.dashboard},18:{front:g.surveyCounter.reports,back:g.smallGroups.groupCards}};s(63);console.log(O);var x=[];Object.values(g).forEach((function(e){Object.values(e).forEach((function(e){x.push(e)}))}));var v=function(){for(var e={0:1},a=1;a<=18;a++)e[a]=!1;var s=Object(t.useState)(e),c=Object(u.a)(s,2),i=c[0],r=c[1];Object(t.useEffect)((function(){var e=setInterval((function(){r((function(e){var a,s,t=(a=1,s=18,Math.floor(Math.random()*(s-a+1)+a));return Object(n.a)(Object(n.a)({},e),{},Object(h.a)({0:e[0]%4+1},t,!e[t]))}))}),2500);return function(){clearInterval(e)}}),[]);for(var o=[],l=1;l<=18;l++)o.push(Object(d.jsx)("div",{className:"item item-"+l.toString(),children:Object(d.jsxs)("div",{className:"bg-card"+(i[l]?" bg-card-flipped":""),children:[Object(d.jsx)("img",{src:O[l].front,className:"bg-image bg-card-front"}),Object(d.jsx)("img",{src:O[l].back,className:"bg-image bg-card-back"})]})}));return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"bg-main-container",children:Object(d.jsx)("div",{className:"bg-grid-container bg-anchor-1",children:Object(d.jsx)("div",{className:"bg-grid",children:o})})}),Object(d.jsx)("div",{className:"bg-grid-container bg-anchor-2",children:Object(d.jsx)("div",{className:"bg-grid-screen"})})]})},f=(s(64),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(v,{}),Object(d.jsx)("div",{className:"hp2-page",children:Object(d.jsxs)("div",{className:"hp2-content",children:[Object(d.jsx)("div",{className:"hp2-avatar-wrapper",children:Object(d.jsx)("img",{className:"hp2-avatar",alt:"avatar",src:"https://i.imgur.com/3EAWXp9.jpg"})}),Object(d.jsx)("h1",{className:"page-title",children:"Luke Irvine"}),Object(d.jsxs)("div",{className:"hp2-identity",children:[Object(d.jsx)("h2",{className:"hp2-identity-item",children:"Full-stack Developer, "}),Object(d.jsx)("h2",{className:"hp2-identity-item",children:"Musician, "}),Object(d.jsx)("h2",{className:"hp2-identity-item",children:"Outdoor Adventurer"})]}),Object(d.jsx)("p",{className:"hp2-tagline",children:"I solve people's problems and make their lives easier with engaging MicroSaaS web apps, mostly using React.js and Firebase."}),Object(d.jsxs)("div",{className:"hp2-link-container",children:[Object(d.jsxs)(b.a,{variant:"light",className:"hp2-link-btn",as:o.b,to:"/apps",children:[Object(d.jsx)("i",{className:"bi-tools"}),Object(d.jsx)("span",{className:"hp2-link-btn-text",children:"Apps"})]}),Object(d.jsxs)(b.a,{variant:"light",className:"hp2-link-btn",href:"https://github.com/lukeirvine",target:"_blank",children:[Object(d.jsx)("i",{className:"bi-github"}),Object(d.jsx)("span",{className:"hp2-link-btn-text",children:"Code"})]}),Object(d.jsxs)(b.a,{variant:"light",className:"hp2-link-btn",href:"https://www.linkedin.com/in/luke-irvine-73b136186/",target:"_blank",children:[Object(d.jsx)("i",{className:"bi-linkedin"}),Object(d.jsx)("span",{className:"hp2-link-btn-text",children:"Linkedin"})]}),Object(d.jsxs)(b.a,{variant:"light",className:"hp2-link-btn",as:o.b,to:"/music",children:[Object(d.jsx)("i",{className:"bi-music-note-beamed"}),Object(d.jsx)("span",{className:"hp2-link-btn-text",children:"Music"})]}),Object(d.jsxs)(b.a,{variant:"light",className:"hp2-link-btn",as:o.b,to:"/contact",children:[Object(d.jsx)("i",{className:"bi-chat-dots"}),Object(d.jsx)("span",{className:"hp2-link-btn-text",children:"Contact"})]})]})]})})]})}),N=(s(65),function(e){return Object(d.jsx)("div",{className:e.className,children:Object(d.jsxs)("div",{className:"container-fluid footer-container",children:[Object(d.jsx)("div",{className:"footer-ig-wrapper footer-large-only",children:Object(d.jsx)("div",{className:"footer-btn-wrapper",children:Object(d.jsxs)(b.a,{href:"https://github.com/lukeirvine/portfolio",target:"_blank",className:"btn btn-link footer-btn",variant:"link",children:[Object(d.jsx)("i",{className:"bi-github footer-icon"}),Object(d.jsx)("span",{className:"footer-text",children:"View on Github"})]})})}),Object(d.jsx)("div",{className:"footer-text-wrapper",children:Object(d.jsx)("p",{className:"footer-text",children:"Luke Irvine"})}),Object(d.jsx)("div",{className:"footer-text-wrapper footer-large-only",children:Object(d.jsxs)("p",{className:"footer-text footer-link",children:[Object(d.jsx)("i",{className:"bi-envelope-fill footer-icon"}),Object(d.jsx)("a",{className:"footer-link",href:"mailto: lukeirvinefreelance@gmail.com",children:"lukeirvinefreelance@gmail.com"})]})})]})})}),k=(s(66),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"apps-page",children:[Object(d.jsx)("img",{className:"hero-img apps-hero",alt:"",src:"https://i.imgur.com/VjswpFA.png"}),Object(d.jsxs)("h1",{className:"apps-title",children:[Object(d.jsx)("i",{className:"bi-tools"}),"  Apps"]}),Object(d.jsxs)("div",{className:"apps-content",children:[Object(d.jsxs)("div",{className:"app-container",id:"goaltop-container",children:[Object(d.jsxs)("div",{className:"app-name-container",children:[Object(d.jsx)("i",{className:"bi-music-note-list app-icon"}),Object(d.jsx)("h2",{className:"app-name",children:"Show My Piano"})]}),Object(d.jsx)("p",{className:"app-dates",children:"January 2022"}),Object(d.jsxs)("div",{className:"app-content",children:[Object(d.jsx)("img",{className:"app-demo-img",alt:"small groups demo",src:g.midi.gm7}),Object(d.jsxs)("div",{className:"app-description",children:[Object(d.jsx)("p",{className:"app-par",children:"Goaltop was born out of having too many little things to do and no good way to keep my eyes on the big milestones I was working towards. A whiteboard above my desk probably would have worked, but I figured it'd be much more effective to have my goals right on my desktop where I'd see them no matter where I was."}),Object(d.jsx)("p",{className:"app-par",children:"This app is currently in beta testing but will be available for public use soon."}),Object(d.jsxs)("p",{className:"app-par",children:["If you'd like to participate in the beta, ",Object(d.jsx)("a",{href:"mailto: lukeirvinefreelance@gmail.com",children:"email me"})," and I'll send you the beta access key."]})]})]})]}),Object(d.jsxs)("div",{className:"app-container app-dark",id:"goaltop-container",children:[Object(d.jsxs)("div",{className:"app-name-container",children:[Object(d.jsx)("i",{className:"bi-arrow-up-circle-fill app-icon"}),Object(d.jsx)("h2",{className:"app-name",children:"GoalTop"})]}),Object(d.jsx)("p",{className:"app-dates",children:"October 2021 - present"}),Object(d.jsxs)("div",{className:"app-content",children:[Object(d.jsx)("img",{className:"app-demo-img",alt:"small groups demo",src:g.goaltop.dashboard}),Object(d.jsxs)("div",{className:"app-description",children:[Object(d.jsx)("p",{className:"app-par",children:"Goaltop was born out of having too many little things to do and no good way to keep my eyes on the big milestones I was working towards. A whiteboard above my desk probably would have worked, but I figured it'd be much more effective to have my goals right on my desktop where I'd see them no matter where I was."}),Object(d.jsx)("p",{className:"app-par",children:"This app is currently in beta testing but will be available for public use soon."}),Object(d.jsxs)("p",{className:"app-par",children:["If you'd like to participate in the beta, ",Object(d.jsx)("a",{href:"mailto: lukeirvinefreelance@gmail.com",children:"email me"})," and I'll send you the beta access key."]})]})]})]}),Object(d.jsxs)("div",{className:"app-container",id:"smallgroups-container",children:[Object(d.jsxs)("div",{className:"app-name-container",children:[Object(d.jsx)("i",{className:"bi-people-fill app-icon"}),Object(d.jsx)("h2",{className:"app-name",children:"Small Groups Website"})]}),Object(d.jsx)("p",{className:"app-dates",children:"December 2020 - Present"}),Object(d.jsxs)("div",{className:"app-content",children:[Object(d.jsx)("img",{className:"app-demo-img",alt:"small groups demo",src:g.smallGroups.groupCards}),Object(d.jsxs)("div",{className:"app-description",children:[Object(d.jsx)("p",{className:"app-par",children:"This is a website I developed to help religious organizations facilitate small group signups and facilitation. It shows potential group members the different groups available, how many people are in each along with other information, and allows them to sign up and leave different groups."}),Object(d.jsx)("p",{className:"app-par",children:"It's built using React.js, React Bootstrap Components, and Firebase. It utilizes several Firebase features such as the Realtime Database, Cloud Storage, Cloud Functions, and Authentication."}),Object(d.jsx)("p",{className:"app-par",children:"This app isn't in production yet, but will hopefully be implemented and used by Walla Walla Universtiy's Chaplain's Office in January of 2022."})]})]})]}),Object(d.jsxs)("div",{className:"app-container app-dark",id:"survey-container",children:[Object(d.jsxs)("div",{className:"app-name-container",children:[Object(d.jsx)("i",{className:"bi-pencil-square app-icon"}),Object(d.jsx)("h2",{className:"app-name",children:"Survey Counter"})]}),Object(d.jsx)("p",{className:"app-dates",children:"July 2021"}),Object(d.jsxs)("div",{className:"app-content",children:[Object(d.jsx)("img",{className:"app-demo-img",alt:"small groups demo",src:g.surveyCounter.reports}),Object(d.jsxs)("div",{className:"app-description",children:[Object(d.jsx)("p",{className:"app-par",children:"I worked at a summer camp for a number of years where we handed out paper surveys to the kids every week, but counting them and getting any kind of real data from them was a real pain. So I developed this app that makes entering the data extremely fast and then creates a series of bar charts and averages for the data."}),Object(d.jsx)("p",{className:"app-list-title",children:"Additional Features:"}),Object(d.jsxs)("ul",{className:"app-list",children:[Object(d.jsx)("li",{children:"Download json object for survey data to be uploaded to another account"}),Object(d.jsx)("li",{children:"Create shareable link to display survey data without being logged in"})]}),Object(d.jsx)("p",{className:"app-par",children:"The camp staff in charge of the surveys loved using this app and enjoyed being able to quickly share results with other staff via the shareable link and will no doubt be using this app in future summers."})]})]})]}),Object(d.jsxs)("div",{className:"app-container",id:"meal-container",children:[Object(d.jsxs)("div",{className:"app-name-container",children:[Object(d.jsx)("i",{className:"bi-tv app-icon"}),Object(d.jsx)("h2",{className:"app-name",children:"Meal Announcements"})]}),Object(d.jsx)("p",{className:"app-dates",children:"August 2021"}),Object(d.jsxs)("div",{className:"app-content",children:[Object(d.jsx)("img",{className:"app-demo-img",alt:"small groups demo",src:g.mealDash.dash}),Object(d.jsxs)("div",{className:"app-description",children:[Object(d.jsx)("p",{className:"app-par",children:"This is another app for the summer camp I spent a number of years working for. During our family camps, we would have chaotic meal times where campers would try to listen for when they were dismissed for food and when they were dismissed for activities. It was a mess, so I developed a small webpage that we loaded up on a smart tv in the cafeteria, and a mobile site that controlled what was shown on the tv in real time."}),Object(d.jsx)("p",{className:"app-par",children:"All the camp leadership loved this app because it completely streamlined their meals, making for happier campers and more time for the campers to do the activities they came to do."})]})]})]})]}),Object(d.jsx)(N,{})]})]})}),w=(s(67),[["C","o","m","i","n","g"],["S","o","o","n"]]),y=0,_=Object(d.jsx)("h1",{className:"cs-phrase",children:w.map((function(e,a){return 0!==a&&(y+=w[a-1].length),Object(d.jsx)("div",{className:"cs-phrase-word",children:e.map((function(e,a){return console.log("letter num",a+1+y),Object(d.jsx)("div",{className:"cs-phrase-letter",style:{animation:"3s ease 1 csTitle"+(a+1+y).toString()+" forwards, 1s ease 3.2s 1 shake forwards"},children:e},a)}))},a)}))}),C=function(e){var a=e.cName,s=e.title,t=e.bg;return Object(d.jsxs)("div",{className:"cs-page "+(null!=a?a:""),children:[Object(d.jsx)("h1",{className:"cs-title",style:{backgroundImage:t},children:s}),_]})},I=(s(68),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)("div",{className:"m-page",children:Object(d.jsx)(C,{title:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("i",{className:"bi-music-note-list"})," Music"]}),bg:"linear-gradient(rgb(118, 0, 165), rgb(68, 0, 95))"})}),Object(d.jsx)(N,{className:"m-footer"})]})}),T=(s(69),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(C,{title:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("i",{className:"bi-envelope"})," Contact"]}),bg:"linear-gradient(rgb(116, 120, 182), rgb(62, 58, 83))"}),Object(d.jsx)(N,{className:"c-footer"})]})}),S=s(25),F=s(26),D=s(35),z=s(33);s(70);var A=function(e){Object(D.a)(s,e);var a=Object(z.a)(s);function s(e){var t;return Object(S.a)(this,s),(t=a.call(this,e)).handleHomeClick=function(){t.setState({redirect:!0})},t.state={redirect:!1},t}return Object(F.a)(s,[{key:"componentDidMount",value:function(){var e=document.getElementById("cord").getContext("2d"),a=160,s=100,t=100,c=!0,i=!1,r=!0;!function(){var e=document.getElementById("visor").getContext("2d");e.beginPath(),e.moveTo(5,45),e.bezierCurveTo(15,64,45,64,55,45),e.lineTo(55,20),e.bezierCurveTo(55,15,50,10,45,10),e.lineTo(15,10),e.bezierCurveTo(15,10,5,10,5,20),e.lineTo(5,45),e.fillStyle="#2f3640",e.strokeStyle="#f5f6fa",e.fill(),e.stroke()}(),function n(){requestAnimationFrame(n),e.clearRect(0,0,innerWidth,innerHeight),e.beginPath(),e.moveTo(130,170),e.bezierCurveTo(250,a,345,s,400,t),e.strokeStyle="white",e.lineWidth=8,e.stroke(),100===a&&(c=!0),300===a&&(c=!1),100===s&&(i=!0),310===s&&(i=!1),100===t&&(r=!0),317===t&&(r=!1),c?a+=1:a-=1,i?s+=1:s-=1,r?t+=1:t-=1}()}},{key:"render",value:function(){if(this.state.redirect)return Object(d.jsx)(l.a,{to:"/"});var e="It looks like one of the developers fell asleep",a="404";return void 0!==this.props.location.state&&("PERMISSION_DENIED"===this.props.location.state.code?(a="403",e="Looks like there was an error and you don't have permission to access this website's data"):(a=this.props.location.state.code,e=this.props.location.state.message)),Object(d.jsxs)("div",{className:"error-page-container",children:[Object(d.jsx)("div",{className:"moon"}),Object(d.jsx)("div",{className:"moon__crater moon__crater1"}),Object(d.jsx)("div",{className:"moon__crater moon__crater2"}),Object(d.jsx)("div",{className:"moon__crater moon__crater3"}),Object(d.jsx)("div",{className:"star star1"}),Object(d.jsx)("div",{className:"star star2"}),Object(d.jsx)("div",{className:"star star3"}),Object(d.jsx)("div",{className:"star star4"}),Object(d.jsx)("div",{className:"star star5"}),Object(d.jsxs)("div",{className:"error",children:[Object(d.jsx)("div",{className:"error__title",children:a}),Object(d.jsx)("div",{className:"error__subtitle",children:"Hmmm..."}),Object(d.jsx)("div",{className:"error__description",children:e}),Object(d.jsx)("button",{onClick:this.handleHomeClick,className:"error__button error__button--active",children:"HOME PAGE"})]}),Object(d.jsxs)("div",{className:"astronaut",children:[Object(d.jsx)("div",{className:"astronaut__backpack"}),Object(d.jsx)("div",{className:"astronaut__body"}),Object(d.jsx)("div",{className:"astronaut__body__chest"}),Object(d.jsx)("div",{className:"astronaut__arm-left1"}),Object(d.jsx)("div",{className:"astronaut__arm-left2"}),Object(d.jsx)("div",{className:"astronaut__arm-right1"}),Object(d.jsx)("div",{className:"astronaut__arm-right2"}),Object(d.jsx)("div",{className:"astronaut__arm-thumb-left"}),Object(d.jsx)("div",{className:"astronaut__arm-thumb-right"}),Object(d.jsx)("div",{className:"astronaut__leg-left"}),Object(d.jsx)("div",{className:"astronaut__leg-right"}),Object(d.jsx)("div",{className:"astronaut__foot-left"}),Object(d.jsx)("div",{className:"astronaut__foot-right"}),Object(d.jsx)("div",{className:"astronaut__wrist-left"}),Object(d.jsx)("div",{className:"astronaut__wrist-right"}),Object(d.jsx)("div",{className:"astronaut__cord",children:Object(d.jsx)("canvas",{id:"cord",height:"500px",width:"500px"})}),Object(d.jsxs)("div",{className:"astronaut__head",children:[Object(d.jsx)("canvas",{id:"visor",width:"60px",height:"60px"}),Object(d.jsx)("div",{className:"astronaut__head-visor-flare1"}),Object(d.jsx)("div",{className:"astronaut__head-visor-flare2"})]})]})]})}}]),s}(t.Component),M=function(){return Object(d.jsx)(o.a,{children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/",component:f,exact:!0}),Object(d.jsx)(l.b,{path:"/apps",component:k,exact:!0}),Object(d.jsx)(l.b,{path:"/music",component:I,exact:!0}),Object(d.jsx)(l.b,{path:"/contact",component:T,exact:!0}),Object(d.jsx)(l.b,{render:function(e){return Object(d.jsx)(A,Object(n.a)({},e))}})]})})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,76)).then((function(a){var s=a.getCLS,t=a.getFID,c=a.getFCP,i=a.getLCP,r=a.getTTFB;s(e),t(e),c(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(M,{})}),document.getElementById("root")),P()}},[[71,1,2]]]);
//# sourceMappingURL=main.884669d7.chunk.js.map