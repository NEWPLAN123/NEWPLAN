// 选项卡结束
	// 点击下箭头显示文字\
	

function wjy_jian(num){
	var wjy_btn2=document.getElementsByClassName("wjy_btn2")[num]
	var wjy_liuyanbox=document.getElementsByClassName("wjy_liuyanbox")[num]
	var wjy_jianimg=document.getElementsByClassName("wjy_jianimg")[num]
var fal=true;
wjy_btn2.onclick=function(){
	if (!fal) {
		wjy_liuyanbox.className="wjy_liuyanbox ov";
		wjy_liuyanbox.style="height:0.7rem";
		wjy_jianimg.style="background:url(../images/wjy_img/wjy_z01.png)no-repeat center center/cover;"

	fal=!fal
	}else{
		wjy_liuyanbox.className="wjy_liuyanbox"
		wjy_liuyanbox.style="height:auto";

		wjy_jianimg.style="background:url(../images/wjy_img/wjy_z01.png)no-repeat center center/cover;"
	fal=!fal


	}
}
	
}	
	var wjy_btn2=document.getElementsByClassName("wjy_btn2")

for (var i = 0; i < wjy_btn2.length; i++) {
	wjy_jian(i)
	
};

