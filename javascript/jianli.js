var box1 = document.getElementById('box1');
var box12 = document.getElementById('box1-2');
var box121 = document.getElementById('box1-2-1');
var box13 = document.getElementById('box1-3');
var box131 = document.getElementById('box1-3-1');
var box22 = document.getElementById('box2-2');
var body = document.body;
var boxcover =document.getElementById('boxcover');
var left = document.getElementById('left');
var right = document.getElementById('right');
// var box14 = document.getElementById('box1-3-1-2-1');
// var box141 = document.getElementById('box1-3-1-2-2');
// var box13123 = document.getElementById('box1-3-1-2-3');
// var box13124 = document.getElementById('box1-3-1-2-4');
// var box13125 = document.getElementById('box1-3-1-2-5');
var _index= 0;
var _bool=true;
var _bool1=true;
var t2;
var t3;
window.onload=function(){
	box1.style.top=_index+'px';
}
window.onmousewheel=function(e){
	if (e.wheelDelta){
		if(_index!=0){
			if(e.wheelDelta>0){
				_index+=626;
				box1.style.top=_index+'px';
			}
	}
		if(_index!=-1252){
			if(e.wheelDelta<0){
				_index-=626;
				box1.style.top=_index+'px';
			}
		}
	}
	}
	if(_bool=true){
		_bool=false;
		box12.onmouseover=function(){
			box121.style.animation='aa 2s';
			box121.style.opacity=1;
		}}

	if(_bool1=true){
		_bool1=false;
		box13.onmouseover=function(){
			box131.style.animation='aa1 2s';
			box131.style.opacity=1;
		}}
	function open(a,b,c){
		var t=0;
		var x1=a;
		var x2=b;
		var d=100;
		var t1=setInterval(function(){
			t++;
			if(t>=d){
				clearInterval(t1);
			}
			c.style.left=Tween.Bounce.easeIn(t,x1,x2,d)+'px';
		}, 20)
		}

		window.onload=function(){
			 t2 =setTimeout(function(){
				left.style.color='rgba(1,1,1,.0)';
				right.style.color='rgba(1,1,1,.0)';
				open(0,-body.offsetWidth/2,left);
				open(body.offsetWidth/2,body.offsetWidth/2,right);
			}, 1000)
			 t3=setTimeout(function(){
				boxcover.style.display='none';
			}, 3000)
		}
		left.style.lineHeight=window.screen.height+'px';
		right.style.lineHeight=window.screen.height+'px';
		clearTimeout(t2);
		clearTimeout(t3);

	

