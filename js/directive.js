
var direct=angular.module("direct",[]);



direct.directive("cnitem",function(){
    return {
        templateUrl:"tpl/cntop.html",
        replace:true
    }
})


direct.directive("hello",function(){
    return {
        // templateUrl:"tpl/cntop.html",
        replace:true,
        controller:function($scope,$http){
        	//ajax请求
        	$http({
        		//发送请求   php?...
        		url:"php/login.php?type=phone&passw0ord=123&acc=admin"
        	}).then(function(data){
        		//得到数据
        		$scope.data = data
        	})

        },
        link:function(scope,element){
        	// js代码会这里被触发 
        	var a = $(".tou");
        	// console.dir($("a",angular.element()));
            
        }
    }
})





// direct.directive('',function () {
//     return {
//         templateUrl:"tpl/index.html",
//         replace:true,
//         scope:{
//             data:'=data'
//         }
//     }
// })