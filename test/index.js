function $(id) {
 	return document.getElementById(id);
 }

 function start() {
 	var tabs = $("tab").getElementsByTagName('a'),
 		contents = $('content').getElementsByTagName('div'),
 		news = $('news'),
 		timer = null,
 		mark = 0;
 	//改变状态
 	function change(index) {
 		for (var j = 0; j < tabs.length; j++) {
 			tabs[j].className = '';
 			contents[j].style.display = 'none';
 		}
 		tabs[index].className = "mouseover";
 		contents[index].style.display = 'block';
 		mark = index;
 	}
 	//自动轮播函数
 	function play() {
 		mark++;
 		if (mark == tabs.length) {
 			mark = 0;
 		}
 		change(mark);
 	}
 	//添加事件，轮播开始
 	timer = setInterval(play, 2000);
 	news.addEventListener('mouseover', function() {
 		if (timer) {
 			clearInterval(timer);
 		}
 		timer = null;
 	}, false);
 	news.addEventListener('mouseout', function() {
 		if (timer) {
 			clearInterval(timer);
 		}
 		timer = setInterval(play, 2000);
 	}, false);
 	for (var i = 0; i < tabs.length; i++) {
 		tabs[i].index = i;
 		tabs[i].addEventListener('mouseover', function() {
 			change(this.index);
 		}, false);
 	}
 }
 start();
