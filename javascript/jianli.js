var box1 = document.getElementById('box1');
var box12 = document.getElementById('box1-2');
var box121 = document.getElementById('box1-2-1');
var box13 = document.getElementById('box1-3');
var box131 = document.getElementById('box1-3-1');
// var box14 = document.getElementById('box1-3-1-2-1');
// var box141 = document.getElementById('box1-3-1-2-2');
// var box13123 = document.getElementById('box1-3-1-2-3');
// var box13124 = document.getElementById('box1-3-1-2-4');
// var box13125 = document.getElementById('box1-3-1-2-5');
// var _index= 0;
var _bool=true;
var _bool1=true;
// window.onload=function(){
// 	box1.style.top=_index+'px';
// }
// window.onmousewheel=function(e){
// 	if (e.wheelDelta){
// 		if(_index!=0){
// 			if(e.wheelDelta>0){
// 				_index+=626;
// 				box1.style.top=_index+'px';
// 			}
// 	}
// 		if(_index!=-1252){
// 			if(e.wheelDelta<0){
// 				_index-=626;
// 				box1.style.top=_index+'px';
// 			}
// 		}
// 	}
// 	}
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

	// box141.onmouseenter=function(){
	// 	box14.style.innerHTML="javascript";
	// 	alert(1);
	// }