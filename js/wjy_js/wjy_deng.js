
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




















































