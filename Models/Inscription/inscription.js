//init mui
mui.init();

//注意:: 如果要对某一个id或链接添加一个监听的事件, 一定要将javascript的引用放到主页面的末尾上!!!
document.getElementById('add').addEventListener('tap',function(){
	
	var usernameInput=document.querySelector('input[name="username"]');
    var emailInput=document.querySelector('input[name="email"]');
	var passwordInput=document.querySelector('input[name="password"]');
	var phoneInput=document.querySelector('input[name="phone"]');
	
	var usernameValue=usernameInput.value;
	var emailValue=emailInput.value;
	var passwordValue=passwordInput.value;
	var phoneValue=phoneInput.value;
	
    //console.info("login:",usernameValue,"email", emailValue,"epassword:",passwordValue);  
    //使用Ajax把账号和密码传输到服务器上,在服务器进行注册,默认是GET请求,为了安全使用POST 
    //用户注册: 注意一定要添加 包头的文件类型 Content-Type':'application/json
    mui.ajax({
    	url:'https://api.leancloud.cn/1.1/users',
    	type:'post',
    	data:{		
    		'username':usernameValue,	
    		'password':passwordValue,
    		'email':emailValue,
    		'phone':phoneValue
    	},
    	headers:{
    		'X-LC-Id':'BMNgTYlv4407WaF7eFluNioq-gzGzoHsz',
    		'X-LC-Key':'m3obSfYRLPRGFUnwvybaY03g',
    		'Content-Type':'application/json'
    	},
    	success:function(resp){
    		//取出信息后存储到本地 html5+
    		localStorage.setItem('sessionToken',resp.sessionToken);
    		localStorage.setItem('username',resp.username);
    		//localStorage.setItem('password',resp.password);
    		//localStorage.setItem('email',resp.email);
    		//localStorage.setItem('phone',resp.phone);
    		
    		mui.toast("Inscription Success !");
    		mui.later( function(){
    			mui.openWindow('../Login/login.html','login'); //使用延时函数处理登陆的提示
    		},2000);	
    	},
    	error:function(error){
    	    mui.toast('Inscription Failed ! Please input again !');
    	}  	
    });
    
});
