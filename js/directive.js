
var direct=angular.module("direct",[]);



direct.directive("cnitem",function(){
    return {
        templateUrl:"tpl/cntop.html",
        replace:true,
        link:function(scope,element){
            // kx_js开始
            var kaa=document.querySelector('.kx_search_right');
            var kssearch=document.querySelector('#ks_search');
            var kbb=document.querySelector('.kx_search_quxiao');
            var kcc=document.querySelector('.kx_search_box');
            kaa.onclick=function(){
                kssearch.style.display='block';
                kaa.style.display='none';
                kbb.style.display='block';
            };
            kbb.onclick=function () {
                kssearch.style.display='none';
                kbb.style.display='none';
                kaa.style.display='block';
                kcc.style.display='none';
            };
            kssearch.onfocus=function () {
                kcc.style.display='block';
            }

            // kx_js结束
        }
    }
});


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