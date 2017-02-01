# angular-route API#

angular-route 是用于项目开发中的做移前端路由所需要的模块。

# 使用方法：#
## 1、主模块中添加依赖： ##
app = angular.module("app",[**"ngRoute"**])
注释：app为主模块名 也就是HTML页中 ng-app="app" 的名字

## 2、配置路径： ##
app.config(function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"tpl/index.html",
		controller:"index"
	})
})
注释：绑定了首页的路径，并且给他配置了一个 index 控制器

## 3、对应配置的控制器 ##
如果需要给对应的页面配置控制器，如下操作：
app.controller("index",function($scope){
	// 正常操作
})
注释：注意你配置控制器的时候使用的是什么模块，以决定前面写的是app 还是其他模块名
常用参数：$scope、$http、$routeParams