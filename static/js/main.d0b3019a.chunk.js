(this["webpackJsonpthe-most-awesomest-thing-ever-2"]=this["webpackJsonpthe-most-awesomest-thing-ever-2"]||[]).push([[0],{105:function(e,t,n){e.exports=n.p+"static/media/plus.58e26932.svg"},175:function(e,t,n){e.exports=n.p+"static/media/explosion.b92fd56c.gif"},176:function(e,t,n){e.exports=n.p+"static/media/check.97191e9d.svg"},182:function(e,t,n){e.exports=n(420)},187:function(e,t,n){},189:function(e,t,n){},221:function(e,t){},235:function(e,t){},237:function(e,t){},404:function(e,t,n){},405:function(e,t,n){},410:function(e,t,n){},411:function(e,t,n){},412:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){},419:function(e,t,n){},420:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(174),i=n.n(c),s=(n(187),n(18)),l=n(8),o=n.n(l),u=n(22),m=n(24),h=(n(189),n(1)),d=n(104),f=n.n(d),p=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,f()().random(t);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()().page(t);case 2:return n=e.sent,e.next=5,n.summary();case 5:return a=e.sent,r=a.slice(0,200)===a?a:a.slice(0,200).trim()+"...",e.t0=t,e.t1=r,e.next=11,n.mainImage();case 11:return e.t2=e.sent,e.t3=n.url(),e.next=15,n.categories();case 15:return e.t4=e.sent.map((function(e){return e.slice(9)})),c={name:e.t0,description:e.t1,img:e.t2,url:e.t3,tags:e.t4},e.abrupt("return",c);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=(n(404),n(175)),E=n.n(v),b=n(105),k=n.n(b),w=n(176),y=n.n(w),S=function(e){var t=Object(a.useState)(k.a),n=Object(m.a)(t,2),c=n[0],i=n[1];if(e.data){var s=e.data,l=s.name,o=s.img,u=s.description,h=s.url;return r.a.createElement("div",{className:"Thing-Container"},r.a.createElement("button",{className:"save-btn",onClick:function(){i(e.saveArticle(l)?y.a:k.a)}},r.a.createElement("img",{src:c,alt:"save"}),r.a.createElement("p",null,"save")),r.a.createElement("h2",null,l),o?r.a.createElement("img",{src:o,alt:l}):r.a.createElement("figure",{"aria-label":"no image"}),r.a.createElement("p",null,u),r.a.createElement("a",{href:h.toString(),target:"_blank",rel:"noopener noreferrer"},"Read more"),r.a.createElement("button",{onClick:e.newArticle},"Awesomer"))}return r.a.createElement("div",{className:"Thing-Container"},r.a.createElement("img",{className:"explosion",src:E.a+"?a=".concat(Math.random()),alt:"BIG OOF"}))},x=n(68),O=n(69),j=function(){function e(){Object(x.a)(this,e),this.start=(new Date).getTime()}return Object(O.a)(e,[{key:"ms",get:function(){return(new Date).getTime()-this.start}}]),e}(),T=(n(405),n(16)),N=function(){return r.a.createElement("header",{className:"Header"},r.a.createElement("div",{className:"nav-links"},r.a.createElement(T.c,{exact:!0,to:"/",activeClassName:"nav-active"},r.a.createElement("h1",null,"TMATE2")),r.a.createElement(T.c,{to:"/stats",activeClassName:"nav-active"},r.a.createElement("h3",null,"STATS")),r.a.createElement(T.c,{to:"/about",activeClassName:"nav-active"},r.a.createElement("h3",null,"ABOUT"))))},D=n(181),A=function(){function e(t){Object(x.a)(this,e),this.currentStreak={id:"",length:0},this.longestStreaks=[],this.quickestDecisions=[],this.saved=[],t&&(this.currentStreak=Object(D.a)({},t.currentStreak),this.longestStreaks=Object(s.a)(t.longestStreaks),this.quickestDecisions=Object(s.a)(t.quickestDecisions),this.saved=Object(s.a)(t.saved))}return Object(O.a)(e,[{key:"updateStreak",value:function(e){var t=e.name;this.currentStreak.id===t?this.currentStreak.length++:(this.longestStreaks.push(this.currentStreak),this.longestStreaks=this.longestStreaks.sort((function(e,t){return t.length-e.length})).filter((function(e){return e.length>0})),this.longestStreaks.length>10&&this.longestStreaks.pop(),this.currentStreak={id:t,length:1})}},{key:"addDecision",value:function(e){this.quickestDecisions.push(e),this.quickestDecisions=this.quickestDecisions.sort((function(e,t){return e.time-t.time})),this.quickestDecisions.length>10&&this.quickestDecisions.pop()}},{key:"saveThing",value:function(e){return this.saved.find((function(t){return t.name===e.name}))?(this.saved=this.saved.filter((function(t){return t.name!==e.name})),!1):(this.saved.unshift(e),!0)}}]),e}(),I=(n(410),function(e){return r.a.createElement("tr",{className:"Datum"},e.children.map((function(e,t){return r.a.createElement("td",{key:t},e)})))}),M=(n(411),n(412),function(e){var t=e.cols.map((function(e){return r.a.createElement("th",{key:e},e)}));return r.a.createElement("section",{className:"Data-Table"},r.a.createElement("h2",null,e.title),e.children?r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,t),e.children)):r.a.createElement("h3",null,"Nothing here yet."))}),C=n(178),q=function(e){var t=e.allData,n=t.longestStreaks,a=t.quickestDecisions,c=t.saved,i=n.length&&n.map((function(e){return r.a.createElement(I,{key:e.id+e.length},r.a.createElement("h4",null,e.id),r.a.createElement("p",null,e.length))})),s=a.length&&a.map((function(e){return r.a.createElement(I,{key:e.winnerId+e.loserId+e.time},r.a.createElement("h4",null,e.winnerId),r.a.createElement("p",null,e.loserId),r.a.createElement("p",null,e.time/1e3," s"))})),l=r.a.createElement("div",{className:"chartContainer"},r.a.createElement(C.a,{options:{title:{display:!0,text:"Longest Streaks"},legend:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},data:{labels:n.map((function(e){return e.id.slice(0,21)})),datasets:[{label:"Longest Streak",backgroundColor:["#dd332266","#dd882266","#dddd2266","#88dd2266","#33dd3366","#22dd8866","#22dddd66","#2288dd66","#2233dd66","#2222dd66"],data:n.map((function(e){return e.length}))}]}}));return r.a.createElement("article",{className:"Data-Display"},r.a.createElement(M,{title:"Longest Streaks",cols:["Item","Streak Length"]},i),r.a.createElement(M,{title:"Quickest Decisions",cols:["Winner","Loser","Time"]},s),n.length&&"object"!==typeof jest&&l,r.a.createElement("section",{className:"saved-items"},r.a.createElement("h2",null,"Saved Items"),r.a.createElement("ul",null,c.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url.toString(),target:"_blank",rel:"noopener noreferrer"},e.name))})))))},W=(n(417),function(){return r.a.createElement("article",{className:"About-Page"},r.a.createElement("h1",{className:"ap-title"},"THE MOST AWESOMEST THING EVER 2"),r.a.createElement("h3",null,"About"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://www.mostawesomestthingever.com/"},"The Most Awesomest Thing Ever")," ",'was (and is, as of June 2020) a website dedicated to "scouring the universe for the Most Awesomest Thing. Ever." Unfortunately, it uses Adobe Flash, which will no longer be officially supported after December 2020.',r.a.createElement("br",null),"The Most Awesomest Thing Ever 2 (this site) is an unofficial, fan-made sequel to the original. This site is made in React, meaning you don't have to have anything besides a modern web browser to use it.",r.a.createElement("br",null),"This site pulls its data from the English Wikipedia, so the content presented may not be entirely appropriate for all audiences (although through development, I didn't see anything bad.) This also means the matches can and will be esoteric and obscure. This is intentional."))}),L=n(180),B=n.n(L),F=(n(418),function(){return Object(a.useEffect)((function(){new B.a((function(e){e.setup=function(){e.createCanvas(window.innerWidth,window.innerHeight-60),e.noLoop()},e.draw=function(){var a=e.width,r=e.height;n(0,0,a,r/2,e.color("#223288"),e.color("#ee1493"),2),n(0,r/2,a,r,e.color("#331188"),e.color("#6522a9"),2);for(var c=r/2,i=0;c<r;)t(0,c,a,c,e.color(255)),c+=i+=2;for(var s=Math.max(a%300/10,30),l=0;l<a;l+=s){t(l,r/2+2,2*(l-a/2)+l,r,e.color(255))}e.push(),e.stroke(e.color("#eacc4644")),e.strokeWeight(3),e.fill(e.color("#eacc46")),e.arc(a/2,r/2,180,180,Math.PI,0,"chord"),e.noFill();for(var o=0;o<200;o++)e.stroke(e.color(234,204,70,200-o)),e.arc(a/2,r/2,180+o,180+o,Math.PI,0);e.pop(),e.push(),e.noStroke(),e.fill(e.color("#eacc4644"));for(var u=0;u<4;u++)e.rect(a/2-180,r/2+30*u,360,20),e.fill(e.color("#eacc46"+((4-u).toString()+(4-u))))};var t=function(t,n,a,r,c){var i=n-r,s=a-t,l=e.createVector(i,s).setMag(2),o=r-n,u=t-a,m=e.createVector(o,u).setMag(2);e.push(),e.noFill(),e.strokeWeight(2),e.stroke(e.color(e.red(c),e.blue(c),e.green(c),e.alpha(c)/4)),e.line(t+l.x,n+l.y,a+l.x,r+l.y),e.line(t+m.x,n+m.y,a+m.x,r+m.y),l=l.setMag(1),m=m.setMag(1),e.line(t+l.x,n+l.y,a+l.x,r+l.y),e.line(t+m.x,n+m.y,a+m.x,r+m.y),e.strokeWeight(1.5),e.stroke(c),e.line(t,n,a,r),e.pop()},n=function(t,n,a,r,c,i,s){if(e.noFill(),2===s)for(var l=n;l<=n+r;l++){var o=e.map(l,n,n+r,0,1),u=e.lerpColor(c,i,o);e.stroke(u),e.line(t,l,t+a,l)}else if(1===s)for(var m=t;m<=t+a;m++){var h=e.map(m,t,t+a,0,1),d=e.lerpColor(c,i,h);e.stroke(d),e.line(m,n,m,n+r)}}}),document.querySelector("#background"))}),[]),r.a.createElement("div",{className:"Game-Background",id:"background"})}),J=(n(419),function(){return r.a.createElement("div",{className:"center-page"},r.a.createElement("article",{className:"Page-404"},r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"We didn't have that page in the back, man. Bummer."),r.a.createElement(T.b,{to:"/"},"Party on back home")))});var P=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(new A),l=Object(m.a)(i,2),d=l[0],f=l[1],v=Object(a.useState)(new j),E=Object(m.a)(v,2),b=E[0],k=E[1];Object(a.useEffect)((function(){var e=localStorage.getItem("stat-data");e&&f(new A(JSON.parse(e)))}),[f]),Object(a.useEffect)((function(){localStorage.setItem("stat-data",JSON.stringify(d))}),[d]),Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,w();case 3:return e.t1=e.sent,e.next=6,w();case 6:e.t2=e.sent,e.t3=[e.t1,e.t2],(0,e.t0)(e.t3);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var w=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n,a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(1);case 2:return t=e.sent,n=Object(m.a)(t,1),a=n[0],e.next=7,g(a);case 7:if(!(r=e.sent).tags.some((function(e){return e.match(/disambiguation/gi)||e.match(/list(s)* (of)*/gi)}))){e.next=13;break}return k(new j),e.abrupt("return",w());case 13:return e.abrupt("return",r);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(o.a.mark((function e(t){var a,r,i,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.some((function(e){return!e}))){e.next=2;break}return e.abrupt("return");case 2:return(i=new A(d)).updateStreak(n[t]),i.addDecision({winnerId:null===(a=n[t])||void 0===a?void 0:a.name,loserId:null===(r=n[1-t])||void 0===r?void 0:r.name,time:(null===b||void 0===b?void 0:b.ms)||1/0}),f(i),k(new j),(l=Object(s.a)(n))[1-t]=null,c(Object(s.a)(l)),e.next=12,w();case 12:l[1-t]=e.sent,c(Object(s.a)(l));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=n.find((function(t){return t&&t.name===e}));if(t){var a=new A(d),r=a.saveThing(t);return f(a),r}return!1};return r.a.createElement("main",{className:"App",role:"main"},r.a.createElement(N,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/stats"},r.a.createElement(q,{allData:d})),r.a.createElement(h.a,{exact:!0,path:"/about"},r.a.createElement(W,null)),r.a.createElement(h.a,{exact:!0,path:"/",render:function(){return r.a.createElement("div",{className:"Things"},r.a.createElement(S,{data:n[0],newArticle:function(){return y(0)},saveArticle:x}),r.a.createElement(S,{data:n[1],newArticle:function(){return y(1)},saveArticle:x}))}}),r.a.createElement(h.a,{component:J})),"undefined"===typeof jest&&r.a.createElement(F,null))};i.a.render(r.a.createElement(T.a,{basename:"/tmate2"},r.a.createElement(P,null)),document.getElementById("root"))}},[[182,1,2]]]);
//# sourceMappingURL=main.d0b3019a.chunk.js.map