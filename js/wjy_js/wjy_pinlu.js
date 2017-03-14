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

		wjy_jianimg.style="background:url(../images/wjy_img/wjy_z01-top.png)no-repeat center center/cover;"
	fal=!fal
		}
	}
}	
	var wjy_btn2=document.getElementsByClassName("wjy_btn2")
for (var i = 0; i < wjy_btn2.length; i++) {
	wjy_jian(i)	
};
//点击桃心亮
function taoxin(){
var wjyxin =document.querySelectorAll(".wjyxin");
var wjyjiayi =document.querySelectorAll(".wjyjiayi");
for (var i = 0; i < wjyxin.length; i++) {
	var num=1;
	fax=true;
	wjyxin[i].onclick=function(){
		var index=$(this).index();
			if (fax) {
			this.style="background:url(../images/wjy_img/wjy_z5.png)no-repeat center center/cover"
		// var nmm=parseInt($(".wjyjiayi").eq(index).text())+1;
		// console.log()
			}else{
			this.style="background:url(../images/wjy_img/wjy_xin.png)no-repeat center center/cover"
			}
fax=!fax;
		}
	}
}
taoxin()

function huifu(){
	var huifu1=document.querySelectorAll(".huifu");
	var huifuinput=document.querySelector(".huifuinput");
	var wjy_sectionr_q=document.querySelector(".wjy_sectionr_q");
	touch.on(huifu1,"tap",function(){
		wjy_sectionr_q.style="display: block;"
		huifuinput.value="请输入回复"
	})	

	touch.on(wjy_sectionr_q,"tap",function(){
		wjy_sectionr_q.style="display: none;"
		huifuinput.value="请输入评论"
	})

}




huifu()



