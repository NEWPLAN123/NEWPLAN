
var direct=angular.module("direct",[]);



direct.directive("cnitem",function(){
    return {
        templateUrl:"tpl/cntop.html",
        replace:true,
        link:function(scope,element){
            // kx_js开始
            var kaa=document.querySelector('.kx_search_right');
            var kaab=document.querySelector('.kx_search_left');
            var kaac=document.querySelector('.kx_search_left2');
            var kssearch=document.querySelector('#ks_search');
            var kbb=document.querySelector('.kx_search_quxiao');
            var kcc=document.querySelector('.kx_search_box');
            kaa.onclick=function(){
                kssearch.style.display='inline-block';
                kaa.style.display='none';
                kbb.style.display='inline-block';
                kaab.style.display='inline-block';
                kaac.style.display='none';
            };
            kbb.onclick=function () {
                kssearch.style.display='none';
                kbb.style.display='none';
                kaa.style.display='inline-block';
                kcc.style.display='none';
                kaab.style.display='none';
                kaac.style.display='inline-block';
            };
            kssearch.onfocus=function () {
                kcc.style.display='block';
            };
            kssearch.onblur=function () {
                kcc.style.display='none';
            };

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
            var abc=document.querySelector('.kx_search_right')
            console.log(abc);
            
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



// zk开始

// 个人上传
direct.directive("myworks",function(){
    return{
        replace:true,
        controller:function($scope,$http){
            $http({
                url:"php/"
            }).then(function(data){
                $scope.data=data;
            })
        },
        link:function(scope,element){
            var movebox=$("");
            var flag=true;
            touch.on(movebox,"touchstart",function(){
                if(flag){
                    // console.log($(this));
                    $(this).css("left","-1.23rem");
                    flag=false;
                }else{
                    $(this).css("left","0");
                    flag=true;
                }
            })
        }
    }
})
// zk结束
