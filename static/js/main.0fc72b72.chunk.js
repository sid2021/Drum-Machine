(this.webpackJsonpdrum_machine=this.webpackJsonpdrum_machine||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a.n(r),o=a(7),n=a.n(o),l=a(2),i=a(3),d=a(1),p=a(5),c=a(4),u={border:"2px solid white"},m={border:"2px solid black"},h=function(e){Object(p.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={playing:!1},r.playSound=r.playSound.bind(Object(d.a)(r)),r.handleKeyPress=r.handleKeyPress.bind(Object(d.a)(r)),r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.obj.keyCode&&this.playSound()}},{key:"playSound",value:function(){var e=this;if(this.props.power){var t=document.getElementById(this.props.obj.letter);t.currentTime=0,t.volume=this.props.volume,t.play(),this.props.updateDisplay(this.props.obj.id),setTimeout((function(){return e.props.displayClear()}),1e3),this.setState({playing:!0}),setTimeout((function(){e.setState({playing:!1})}),100)}}},{key:"render",value:function(){var e=this.props.power?this.state.playing?u:m:{background:"#ccc",color:"#ccc",border:"2px solid black"};return s.a.createElement("div",{className:"drum-pad",id:this.props.obj.id,onClick:this.playSound,style:e},s.a.createElement("audio",{src:this.props.obj.url,id:this.props.obj.letter,className:"clip"}),this.props.obj.letter)}}]),a}(s.a.Component),y=(a(13),[{keyCode:81,letter:"Q",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:87,letter:"W",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:69,letter:"E",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:65,letter:"A",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"},{keyCode:83,letter:"S",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:68,letter:"D",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:90,letter:"Z",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:88,letter:"X",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"},{keyCode:67,letter:"C",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}]),v=function(e){Object(p.a)(a,e);var t=Object(c.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).state={power:!0,bank:y,display:String.fromCharCode(160),volSlider:.5},r.adjustVolume=r.adjustVolume.bind(Object(d.a)(r)),r.displayClear=r.displayClear.bind(Object(d.a)(r)),r.powerControl=r.powerControl.bind(Object(d.a)(r)),r.updateDisplay=r.updateDisplay.bind(Object(d.a)(r)),r}return Object(i.a)(a,[{key:"powerControl",value:function(){var e=this;this.state.power?this.setState({power:!1,display:"Mode: OFF"}):this.setState({power:!0,display:"Mode: ON"}),setTimeout((function(){return e.displayClear()}),2e3)}},{key:"adjustVolume",value:function(e){var t=this;this.state.power&&(this.setState({volSlider:e.target.value,display:"Volume= "+Math.round(100*e.target.value)}),setTimeout((function(){return t.displayClear()}),1e3))}},{key:"updateDisplay",value:function(e){this.setState({display:e})}},{key:"displayClear",value:function(){this.setState({display:String.fromCharCode(160)})}},{key:"render",value:function(){var e=this,t=this.state.power?{}:{transform:"translateX(-26px)"},a=this.state.power?{}:{backgroundColor:"#ccc"},r=this.state.bank.map((function(t,a){return s.a.createElement(h,{index:a,obj:t,power:e.state.power,volume:e.state.volSlider,bank:e.state.bank,updateDisplay:e.updateDisplay,displayClear:e.displayClear})}));return s.a.createElement("div",{id:"wrapper"},s.a.createElement("div",{id:"drum-machine"},s.a.createElement("h1",null,"Drum Machine"),s.a.createElement("div",{className:"power"},s.a.createElement("h3",null,"Power"),s.a.createElement("div",{className:"btn-outside",style:a,onClick:this.powerControl},s.a.createElement("div",{className:"btn-inside",style:t}))),s.a.createElement("div",{className:"drum-pad-wrapper"},r),s.a.createElement("div",{className:"controls-container"},s.a.createElement("div",{id:"display",style:a},this.state.display),s.a.createElement("div",{className:"volume-slider"},s.a.createElement("h3",null,"Volume"),s.a.createElement("input",{type:"range",min:"0",max:"1",step:"0.02",value:this.state.volSlider,onChange:this.adjustVolume})))),s.a.createElement("footer",null,"by"," ",s.a.createElement("a",{href:"https://codepen.io/sid2021",target:"_blank",rel:"noopener noreferrer"}," ","sid2021"," ")))}}]),a}(s.a.Component);n.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0fc72b72.chunk.js.map