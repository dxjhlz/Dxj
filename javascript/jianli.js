var box1 = document.getElementById('box1');
var box11 = document.getElementById('box1-1');
var _index= 0
window.onload=function(){
	box1.style.top=_index+'px';
}
window.onmousewheel=function(e){
	if (e.wheelDelta){
		if(_index!=0){
			if(e.wheelDelta>0){
				_index+=626;
				box1.style.top=_index+'px';
				console.log(_index);
			}
	}
		if(_index!=-2504){
			if(e.wheelDelta<0){
				_index-=626;
				box1.style.top=_index+'px';
				console.log(_index);
			}
		}
	}
	}