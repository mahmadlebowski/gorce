(this.webpackJsonpgorce=this.webpackJsonpgorce||[]).push([[0],{3:function(e,t,n){e.exports=n(4)},4:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2);n(9);class o extends a.Component{constructor(e){super(e),this.state={quote:"Le discours progressiste"}}componentDidMount(){this.renderCanvas(this.state.quote)}componentDidUpdate(){this.renderCanvas(this.state.quote)}renderCanvas(e){var t=document.getElementById("canvas");if(null!==t){var n=t.getContext("2d"),a=new Image;a.src="/gorce/background.png",console.log(a),a.onload=()=>{console.log(a);n.drawImage(a,0,0),n.lineWidth=1,n.fillStyle="#000000",n.font="18px Indie Flower",n.textAlign="center";for(var t=e.split("\n"),s=0;s<t.length;s+=1)n.fillText(t[s],150,40+18*s);n.fillText("Vous \xeates b\xeate contrairement \xe0 moi",420,50),n.fillText("(Xavier Gorce) qui suit intelligent",420,68)}}}handleChange(e){this.setState({quote:e.target.value})}render(){return a.createElement("div",{className:"App"},a.createElement("textarea",{id:"text",className:"flex-item",value:this.state.quote,onChange:e=>this.handleChange(e)}),a.createElement("div",{className:"flex-container"},a.createElement("canvas",{className:"flex-item",id:"canvas",width:"560",height:"287"})))}}const r=document.getElementById("root");Object(s.render)(a.createElement(o,null),r)},9:function(e,t,n){}},[[3,1,2]]]);
//# sourceMappingURL=main.bc01c9ef.chunk.js.map