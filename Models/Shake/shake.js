//init mui
mui.init();

//Accelerometer模块管理设备加速度传感器,watchAcceleration: 监听设备加速度变化信息
//plusReady()获取底层事件的方法,调用html5+的API
mui.plusReady(function(){
	
	//网页对象信息的获取 querySelector
	var up=document.querySelector('.up');
	var down=document.querySelector('.down');
	
	var MAX=20;
	var p=null;
	
	plus.accelerometer.watchAcceleration(function(a){
		
		//EventListener:: x + y + z > MAX
		if(!p&&Math.abs(a.xAxis)+Math.abs(a.yAxis)+Math.abs(a.zAxis)>MAX){
			
			//Play the music of shaking
			p=plus.audio.createPlayer('_www/Models/Shake/shake.wav');
			p.play();
			setTimeout( function(){
				p.stop();
				p=null;
			},2000);	
				
			//Move the picture while shaking
			up.style.webkitTransform='translateY(-'+(up.offsetHeight/2)+'px)';
			down.style.webkitTransform='translateY('+(down.offsetHeight/2)+'px)';			
			
			//使用css : -webkit-transition 属性设置动画的流畅度
			setTimeout(function(){
				up.style.webkitTransform='';
			    down.style.webkitTransform='';		
			    // set time out 0.3s == setTimeout
			    mui.later(function(){
			    	  //此处需要app的数据库端调用对应的数据显示出来,在此省去!!
			    	  mui.toast('Search person for you right now !');
			    },300);		  
			},800);
			
		}		
	},function(){
	    alert("KO");
	},{
		frequency:1000
	});
});