//获取li元素
var lis = document.querySelectorAll('.tab-control li');
//获取切换项中所有的div元素
var divs = document.querySelectorAll('.tab-content-item');
//遍历li元素
var i = 0;
for (; i < lis.length; i++) {
	lis[i].index = i;
	lis[i].onmouseenter = function() {
		var j = 0;
		for (; j < lis.length; j++) {
			lis[j].className = '';
			divs[j].className = 'tab-content-item';
		}
		this.className = 'active';
		var num = this.index;
		divs[num].className = 'tab-content-item active';
	}


}
