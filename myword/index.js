var navs = document.querySelectorAll('li');
var contents = document.getElementsByClassName('sub')
var i = 0;
for(; i < navs.length; i++){
	navs[i].onmouseenter = function () {
		this.className = 'show';
		var j = 0;
		for(; j < contents.length; j++){
			contents[j].className = '';
			contents[j].className = 'sub active'
		}
	}
}