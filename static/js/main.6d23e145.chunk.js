(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(2),o=a.n(l),m=(a(14),a(3)),c=a(4),s=a(6),u=a(5),h=a(7),d=(a(15),function(e){var t=Array.from(e.number).map(function(e,t){return(t+1)%4?e:"".concat(e," ")});return n.a.createElement("h1",null,t)}),i=function(e){return n.a.createElement("h2",null,e.date)},g=function(e){return n.a.createElement("h2",{className:"mr-2"},e.name)},E=function(e){return n.a.createElement("div",{className:"d-flex-column"},n.a.createElement("label",{htmlFor:"name"},"Name : "),n.a.createElement("input",{onChange:e.handlers.handleNameChange,id:"name",type:"text"}),n.a.createElement("div",{style:{color:"red"}},e.errors.nameError),n.a.createElement("label",{htmlFor:"date"},"Date : "),n.a.createElement("input",{onKeyUp:e.handlers.handleDateChange,id:"date",type:"text",placeholder:"MM/YY"}),n.a.createElement("div",{style:{color:"red"}},e.errors.dateError),n.a.createElement("label",{htmlFor:"number"},"Number : "),n.a.createElement("input",{onChange:e.handlers.handleNumberChange,id:"number",type:"text"}),n.a.createElement("div",{style:{color:"red"}},e.errors.numberError))},v=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleNumberChange=function(e){console.log(e.target.value),e.target.value.length<=16&&/^[0-9]*$/.test(e.target.value)?a.setState({number:Array.from(e.target.value).concat(Array.from(a.state.number).slice(e.target.value.length)),numberError:""}):a.setState({numberError:"Card number must has 16 number"})},a.handleNameChange=function(e){e.target.value.length<21?a.setState({name:e.target.value.toUpperCase(),nameError:""}):a.setState({nameError:"Name must be less than 20 chars"})},a.handleDateChange=function(e){e.target.value.length<2&&/^[0-9]*$/.test(e.target.value)||e.target.value.length>2&&e.target.value.length<6&&/^[0-9]{2}\/[0-9]*$/.test(e.target.value)?a.setState({date:Array.from(e.target.value).concat(Array.from(a.state.date).slice(e.target.value.length)),dateError:""}):2===e.target.value.length?("Backspace"!==e.key&&(console.log(e),e.target.value+="/"),a.setState({date:Array.from(e.target.value).concat(Array.from(a.state.date).slice(e.target.value.length)),dateError:""})):5===e.target.value.length&&/^[0-9]{2}\/[0-9]{2}$/.test(e.target.value)?a.setState({date:Array.from(e.target.value).concat(Array.from(a.state.date).slice(e.target.value.length)),dateError:""}):a.setState({dateError:"Date must be this format MM/YY"})},a.state={number:"****************",date:"**/**",name:""},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"d-flex-column card"},n.a.createElement("img",{src:"card.gif",alt:"card"}),n.a.createElement(d,{number:this.state.number}),n.a.createElement("div",{className:"d-flex"},n.a.createElement(g,{name:this.state.name}),n.a.createElement(i,{date:this.state.date}))),n.a.createElement(E,{handlers:{handleDateChange:this.handleDateChange,handleNameChange:this.handleNameChange,handleNumberChange:this.handleNumberChange},errors:{dateError:this.dateError,numberError:this.numberError,nameError:this.nameError}}))}}]),t}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.6d23e145.chunk.js.map