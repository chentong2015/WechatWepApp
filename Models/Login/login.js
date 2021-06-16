//init mui
mui.init();

//Créer un nouveau compte
document.getElementById('inscription').addEventListener('tap',function(){
	mui.later( function(){
    	mui.openWindow('../Inscription/inscription.html','inscription');
    },1000);
});

//Donner le login et le mot de pass 
//注意:: 如果要对某一个id或链接添加一个监听的事件, 一定要将javascript的引用放到主页面的末尾上!!!

document.getElementById('login').addEventListener('tap',function(){
	
    //Cliquer le button pour valider : tap 
	//obtenir les informations afin de verifier, utiliser query
    var usernameInput=document.querySelector('input[name="username"]');
	var passwordInput=document.querySelector('input[name="password"]');
	var usernameValue=usernameInput.value;
	var passwordValue=passwordInput.value;
	//console.info("login:",usernameValue,"password:",passwordValue);
	
    //verifier le login et mot de pass sont vides   
    //使用Ajax把账号和密码传输到服务器上,在服务器进行检正,默认是GET请求,为了安全使用POST
    
   
    mui.ajax({
    	url:'https://api.leancloud.cn/1.1/login',
    	type:'post',
    	data:{		
    		'username':usernameValue,
    		'password':passwordValue	
    	},
    	headers:{
    		'X-LC-Id':'BMNgTYlv4407WaF7eFluNioq-gzGzoHsz',
    		'X-LC-Key':'m3obSfYRLPRGFUnwvybaY03g'
    	},
    	success:function(resp){
    		//取出信息后存储到本地html5+
    		localStorage.setItem('sessionToken',resp.sessionToken);
    		localStorage.setItem('username',resp.username);
    		mui.toast("Connection Success !");		
    		//使用延时函数处理登陆的提示
    		//打开和创建一个页面是一定会提供一个页面的 url 和 id
    		mui.later( function(){
    			//mui.openWindow('../Main/main.html','main');
    			mui.openWindow({
    				url:'../Main/main.html',
    				id:'main',
    				show:{
    					aniShow:'none'
    				},
    				styles:{
    					//开启硬件加速功能
    					hardwareAccelerated:true
    				}
    			});		
    		},2000);	
    	},
    	error:function(error){
    		//debugger  210 : 用户名和密码不匹配   ;   211 : 找不到用户
    	    mui.toast('Uername or Password is false !');
    	}  	
    	
    
    });
    
    /*
    //使用服务器的固定设置方式 s
    if(!usernameValue || !passwordValue){
    	mui.toast('Please input something!');
    	return;
    }
    if(usernameValue==='chentong' && passwordValue==='tong'){
    	mui.openWindow('../Main/main.html','main');	
    }else{
    	mui.toast('Failed, input again!');
    }
    */
    
});
