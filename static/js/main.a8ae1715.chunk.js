(this["webpackJsonpmael-landrin"]=this["webpackJsonpmael-landrin"]||[]).push([[0],{35:function(e,t,a){e.exports=a(73)},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},47:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),i=(a(40),a(13)),s=a(14),o=a(17),m=a(15),u=a(18),d=(a(41),a(42),a(7)),p=a(21),g=a(19),h=(a(43),function(){return r.a.createElement("header",{className:"bg-light"},r.a.createElement(d.a,null,r.a.createElement(p.a,{bg:"light",expand:"lg"},r.a.createElement(p.a.Brand,{href:"#"},"Mael Landrin"),r.a.createElement(p.a.Toggle,{"aria-controls":"ml-navbar"}),r.a.createElement(p.a.Collapse,{id:"ml-navbar"},r.a.createElement(g.a,null,r.a.createElement(g.a.Link,{href:"#aboutScroll",className:"animated infinite pulse"},"About"),r.a.createElement(g.a.Link,{href:"#experienceScroll",className:"animated infinite pulse"},"Portfolio"),r.a.createElement(g.a.Link,{href:"#skillScroll",className:"animated infinite pulse"},"Skills"),r.a.createElement(g.a.Link,{href:"#link",className:"animated infinite pulse"},"Contact"))))))}),f=a(20),E=(a(47),function(e){return r.a.createElement(f.a,{className:"card-experience"},r.a.createElement("a",{href:e.experienceData.experienceurl,target:"_blank"},r.a.createElement(f.a.Img,{variant:"top",src:e.experienceData.experiencefileurl,alt:e.experienceData.experiencename}),r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,e.experienceData.experiencename),r.a.createElement(f.a.Text,null,e.experienceData.experiencedescription))))}),b=a(33),v=a.n(b),x=a(25),N=a(8),S=(a(67),a(68),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onNameChange=function(e){a.setState({name:e.target.value})},a.onDescriptionChange=function(e){a.setState({description:e.target.value})},a.onUrlChange=function(e){a.setState({url:e.target.value})},a.onFileChange=function(e){a.setState({fileExperience:e.target.files[0]})},a.onSubmitChange=function(){var e=new FormData;e.append("url",a.state.url),e.append("name",a.state.name),e.append("description",a.state.description),e.append("fileExperience",a.state.fileExperience),e.append("fileName",a.state.fileExperience.name),fetch("https://app-d077afa0-d0a4-4d67-8720-1d7a756510d8.cleverapps.io/new-experience",{method:"post",body:e}),a.setState({name:"",description:"",url:"",fileExperience:""}),document.getElementById("formExperience").reset()},a.state={experiences:[],name:"",description:"",url:"",fileExperience:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://app-d077afa0-d0a4-4d67-8720-1d7a756510d8.cleverapps.io/get-experiences").then((function(e){return e.json()})).then((function(t){e.setState({experiences:t})}))}},{key:"render",value:function(){return r.a.createElement(d.a,{fluid:!0,className:"experience"},r.a.createElement(d.a,{id:"experienceScroll"},r.a.createElement("div",{className:"experience-section"},r.a.createElement("h2",{className:"text-center"},"My experiences"),0===this.state.experiences.length?r.a.createElement("div",{className:"loader"},r.a.createElement(v.a,{type:"Plane",color:"#00BFFF",height:300,width:300})):r.a.createElement("div",null,r.a.createElement("p",{className:"text-center"},"Here are most of the websites I fully/partly did"),r.a.createElement(x.a,null,this.state.experiences.map((function(e){return r.a.createElement(N.a,{xs:12,lg:4},r.a.createElement(E,{experienceData:e}))})))))))}}]),t}(r.a.Component)),w=(a(69),function(e){return r.a.createElement("div",{className:"single-skill"},r.a.createElement("div",{className:"inner-skill"},r.a.createElement("div",{className:"skill-img-wrap bg-light"},r.a.createElement("img",{src:e.imgUrl,alt:e.name}),r.a.createElement("h2",null,e.name))))}),C=(a(70),function(e){var t=[{name:"PHP",img:e.urlWebsite+"/img/php.png"},{name:"JavaScript",img:e.urlWebsite+"/img/javascript.png"},{name:"Node.js",img:e.urlWebsite+"/img/nodejs.png"},{name:"React",img:e.urlWebsite+"/img/react.png"},{name:"CSS",img:e.urlWebsite+"/img/css.png"},{name:"HTML",img:e.urlWebsite+"/img/html.png"},{name:"Git",img:e.urlWebsite+"/img/git.png"},{name:"WordPress",img:e.urlWebsite+"/img/wordpress.png"}];return r.a.createElement(d.a,{fluid:!0,className:"container-fluid skills"},r.a.createElement(d.a,{id:"skillScroll"},r.a.createElement("h2",{className:"text-center"},"Skills"),r.a.createElement("div",{className:"skillscontainer"},r.a.createElement(x.a,null,t.map((function(e){return r.a.createElement(N.a,{xs:12,md:3},r.a.createElement(w,{name:e.name,imgUrl:e.img}))}))))))}),k=(a(71),function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"about-section",id:"aboutScroll"},r.a.createElement("h2",null,"About me"),r.a.createElement("p",null,"I'm a freelance web developer. I dropped out of college without a degree because I was bored of school. I started web development with the basics of HTML and CSS, and learnt on the job."),r.a.createElement("h2",null,"My skills and experiences"),r.a.createElement("p",null,"I've been working with WordPress for more than 2 years ( with minimal plugins, only CF7, ACF ), learnt JavaScript for animation purposes during these 2 years. I also started learning React and Node.JS in November 2019."),r.a.createElement("p",null,"I made this website using React and Node as a training project, and I've got a few projects in mind that I'll add to my own website. So stay tuned :)")))}),y=a(12),j=a(34),O=(a(72),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).onNameChange=function(t){e.setState({contactName:t.target.value})},e.onAddressChange=function(t){e.setState({contactAddress:t.target.value})},e.onMessageChange=function(t){e.setState({contactMessage:t.target.value})},e.onSubmit=function(){fetch("https://app-d077afa0-d0a4-4d67-8720-1d7a756510d8.cleverapps.io/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.state.contactName,address:e.state.contactAddress,message:e.state.contactMessage})}).then((function(e){return console.log(e)}))},e.state={contactName:"",contactAddress:"",contactMessage:""},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{className:"contact-section"},r.a.createElement("h2",null,"Contact me"),r.a.createElement(y.a,null,r.a.createElement(y.a.Row,{className:"toprow-contact"},r.a.createElement(N.a,null,r.a.createElement(y.a.Control,{id:"contactName",placeholder:"Name",onChange:this.onNameChange})),r.a.createElement(N.a,null,r.a.createElement(y.a.Control,{id:"contactAddress",type:"email",placeholder:"Email address",onChange:this.onAddressChange}))),r.a.createElement(y.a.Group,{controlId:"contactForm.contactMessage",id:"contactMessage"},r.a.createElement(y.a.Control,{as:"textarea",rows:"5",placeholder:"Your message",onChange:this.onMessageChange})),r.a.createElement(j.a,{variant:"primary",type:"submit",onClick:this.onSubmit},"Send email")))}}]),t}(r.a.Component)),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={urlWebsite:"https://monkeyfeeder.github.io/mael-landrin"},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(k,null),r.a.createElement(S,null),r.a.createElement(C,{urlWebsite:this.state.urlWebsite}),r.a.createElement(O,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.a8ae1715.chunk.js.map