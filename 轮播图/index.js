var content = document.querySelector('#content');
var btnLeft = document.querySelector('#btnLeft');
var btnRight = document.querySelector('#btnRight');
var control = document.querySelector('.control');
var banner = document.querySelector('#banner');
var links = document.querySelectorAll('.control a');
var ul = document.querySelector('#list');

var index = 0;
var num;
btnRight.onclick = function() {
	
	//6
	if(index == 0){
		ul.style.left = 0 + 'px';
	}
	links[index].className = '';

	index++;     //7
	var end = -index * 790;
	move(ul,end);
	if(index == 7){
		index = 0;
	}
	links[index].className = 'active';
	
}

btnLeft.onclick = function() {
	
	links[index].className = '';
	index--;
	
	
	if(index <0){
		ul.style.left = '-5530px'
		index = 6;
	}
	var end = -index * 790;
	move(ul,end);
	links[index].className = 'active';
	
}


// 1. 给每一个小点按钮添加一个属性num表示它在这一组中索引
for (var i = 0; i < links.length; i++) {
  links[i].num = i;
}
// 2. 给类名为control的div注册事件
control.onclick = function (e) {
  // 3. 通过事件对象的target获取最先触发的元素
  var t = e.target;
  // 4. 通过nodeName检测是否是A
  if (t.nodeName == 'A') {
    // 5. 若是A则开始操作轮播
    // 5.1 把index代表的之前的显示项对应的a去掉类名active
    links[index].className = '';
    // 5.2 改变index为当前点击的a元素的num属性
    index = t.num;
    // 5.3 计算目标值
    var end= index * -790;
    // 5.4 运动ul到达目标值
    move(ul,end);
    // 5.5 改变后的显示项对应的a要加上active类名
    links[index].className = 'active';
  }

};

// 【功能4：自动轮播】
var flag = setInterval(function () { 
  // 每间隔3秒调用一次右侧按钮的点击事件程序
  btnRight.onclick();
}, 3000);


// 【功能5：鼠标进入banner，停止轮播】
banner.onmouseenter = function () { 
  clearInterval(flag);
};

// 【功能6：鼠标离开banner，启动轮播】
banner.onmouseleave = function () {
  flag = setInterval(function () { 
    // 每间隔3秒调用一次右侧按钮的点击事件程序
    btnRight.onclick();
  }, 3000);
  
};

function move(obj,end){
	clearInterval(num);
	num = setInterval(function(){
		var start = obj.offsetLeft;
		
		var speed = (end - start) / 10;
		if(start > end){
			speed = Math.floor(speed);
		}else{
			speed = Math.ceil(speed);
		}
		obj.style.left = start + speed +'px';
	},10)
}
