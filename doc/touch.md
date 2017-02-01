# touch.js API#

touch.js是百度开发的一个手势库，可很好的兼容移动端用户操作的各种手势。

使用方法：
touch.on(ele,"tap",function(){
	***
});

第一个参数:触发的对象
第二个参数：手势类型
	手势的类型有：
		1）tap：单击
		2）doubletap：双击
		3）hold：长按
		4）swiperight：向右滑动
		5）swipeleft：向左滑动
第三个参数：事件处理程序
	