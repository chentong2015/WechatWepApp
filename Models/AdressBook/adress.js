mui.init();

//必须等到点击导航栏的时候再获取数据 该代码不可在加载的一开始就执行 获取到的总高度不对

//自定义一个点击事件  名字是showpage
document.addEventListener('showpage',function(){
	var header = document.querySelector('header.mui-bar');
	var list = document.getElementById('list');
	//calc hieght
	//offsetHeight 内容可视的总高度565   header.offsetHeight头部的导航栏44
	list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
	//create 初始化列表索引 
	window.indexedList = new mui.IndexedList(list);
});

/*
mui.ready(function() {
	var header = document.querySelector('header.mui-bar');
	var list = document.getElementById('list');
	//calc hieght
	//offsetHeight 内容可视的总高度   header.offsetHeight头部的导航栏
	list.style.height = (document.body.offsetHeight - header.offsetHeight) + 'px';
	
	//create 初始化列表索引 
	window.indexedList = new mui.IndexedList(list);
});
*/