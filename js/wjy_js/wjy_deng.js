
var wjy_oneq=document.querySelectorAll(".wjy_tow_input_box_input_box_input");
var wjy_onew=document.querySelectorAll(".wjy_tow_input_box_input_box");

// 光标加样式
function wjy_input(){
wjy_oneq.value="请输入您的邮箱号码";
for (var i = 0; i < wjy_oneq.length; i++) {
wjy_oneq[i].onfocus=function(){
	for (var y = 0; y < wjy_onew.length; y++) {
		wjy_onew[y].style="box-shadow: 0 0  0.5rem #fff";
	};
}
}
for (var i = 0; i < wjy_oneq.length; i++) {
wjy_oneq[i].onblur=function(){
	for (var y = 0; y < wjy_onew.length; y++) {
		wjy_onew[y].style="";
	};
}
}
}
wjy_input()

// 光标加样式结束



// 密码显示影藏
function wjy_clickmima(){
var wjy_9x9_right=document.querySelector(".wjy_9x9_right");
var wjy_shoumima=document.querySelector(".wjy_shoumima");


touch.on(wjy_9x9_right,"tap",function(){
	if (wjy_shoumima.type=="password") {
		wjy_shoumima.type="text";
	}else{
		wjy_shoumima.type="password"
	}
})
}
wjy_clickmima()


// 登陆选项卡


var wjy_hua=function(){


var wjy_xuan=document.querySelectorAll(".wjy_tow_input_box_div a");
var wjy_weixin=document.querySelectorAll(".wjy_xuanxiangka");
		$(".wjy_tow_input_box_div>a").eq(0).css("color","#FFFF00");

// if ($(".wjy_tow_input_box_div>a").eq(1)) {
// 	$(".wjy_lunbo").css("display","none")
// };


	// 点击事件
	var inputA = $(".wjy_tow_input_box_div>a");
	inputA .click(function(){
		inputA.css("color","#fff")
		$(this).css("color","#FFFF00");
		$(".wjy_xuanxiangka").css("display","none")
		var index=$(this).index()
		$(".wjy_xuanxiangka").eq(index).css("display","block")
	})




// 向左滑动
var wjyxuan=$(".wjy_xuanxiangka");
var wjyaa=$(".wjy_tow_input_box_div>a");
var num=0;
	$(".wjy_tow_input_box").on("swipeleft",function(){
num++;
		var index=$(this).index()
		if(num>2){
			num=2;
		}
		wjyaa.css("color","#FFFFFF").eq(num).css("color","#FFFF00")
		wjyxuan.css("display","none")
		wjyxuan.eq(num).css("display","block")
	})








	$(".wjy_tow_input_box").on("swiperight",function(){
		var index=$(this).index()
		num--;
		if(num<=0){
			num=0;
		}
		
		wjyaa.css("color","#FFFFFF").eq(num).css("color","#FFFF00")
		wjyxuan.css("display","none")
		wjyxuan.eq(num).css("display","block")
	})


}

wjy_hua()

//登录验证
//获取登录按钮
var login = $("#login");

var mes = $('.error_mes');

var type="email";
var zhanghao = "";

touch.on(login,"tap",function () {

    var loginEmail = $("#login_email");
    var loginPassword= $("#login_password");
    var loginPhone = $("#login_phone");

	//先判断帐号是否为空
	if(!(loginEmail.val() || loginPhone.val())){
        mes.html("帐号不能为空！");
	}else{
		//判断密码是否为空
		if(!loginPassword.val()){
			mes.html("密码不能为空！")
		}else{

            //判断是什么模式的登录的，如果两个都有就默认为邮箱登录
            if(loginEmail.val() || loginPhone.val()){
				if(loginEmail.val()){
                    type = "email";
                    //默认email登录
                    zhanghao = loginEmail.val()
				}else{
                    //判断手机号长度是否正确
                    if(loginPhone.val().length != 11){
                        mes.html("请输入正确的手机号");
                        return;
                    }else{
                        zhanghao = loginPhone.val()
                        type = "phone";
					}
				}
            }else{
                mes.html("请输入帐号");
            }
            //发送ajax请求
            $.ajax({
                url:"php/login.php",
				type:"POST",
				data:{
					type:type,
					zhanghao:zhanghao,
					password:loginPassword.val()
				},
				success:function (data1) {
					var data = JSON.parse(data1);
					if(data.error == 1){
						//如果发生了错误
						mes.html(data.mes);
					}else if(data.error == 0){
						//跳转回首页
                        mes.html(data.mes);
						setTimeout(function () {
							localStorage.setItem("lid",data.lid)
                            location.href="../NEWPLAN/#!/"
                        },1000)
					}
                }
            })
		}

	}//else
})




//注册验证
//获取注册按钮
var reg = $("#reg");

var mes = $('.error_mes');


touch.on(reg,"tap",function () {

    var regEmail = $("#reg_email");
    var regPassword= $("#reg_password");
    var regPhone = $("#reg_phone");

    //先判断帐号是否为空
    if(!(regEmail.val() && regPhone.val())){
        mes.html("帐号不能为空！");
    }else{
        //判断密码是否为空
        if(!regPassword.val()){
            mes.html("密码不能为空！")
        }else{
			//判断手机号长度是否正确
			if(regPhone.val().length != 11){
				mes.html("请输入正确的手机号");
				return;
			}
            //发送ajax请求
            $.ajax({
                url:"php/reg.php",
                type:"POST",
                data:{
                    phone:regPhone.val(),
					email:regEmail.val(),
                    password:regPassword.val()
                },
                success:function (data2) {
                    var data = JSON.parse(data2);
                    if(data.error == 1){
                        //如果注册发生了错误
                        mes.html(data.mes);
                    }else if(data.error == 0){
                        //跳转回登录页面
                        mes.html(data.mes);
                        setTimeout(function () {
                            location.href="wjy_denglu.html"
                        },1500)
                    }
                }
            })
        }

    }//else
})






















































