
var direct=angular.module("direct",[]);



direct.directive("cnitem",function(){
    return {
        templateUrl:"tpl/cntop.html",
        replace:true,
        controller:function($scope,$http){
            $http({
                url:"php/get_work.php",
                method:"GET"
            }).then(function (data) {
                //成功的时候执行
                $scope.work = data.data;
            },function () {
                // 不成功的时候执行
            })
        },
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

direct.directive("watch",function(){
    return {
        templateUrl:"",
        replace:true,
        link:function(scope,element){
            var wah=document.querySelector('.biggerimg');
            var wat=document.querySelector('.cn-yy');
            var wac=document.querySelector('.cn-zw');
        }
    }
});
direct.directive("hiddentop",function(){
    return {
        templateUrl:"",
        replace:true,
        link:function(scope,element){
            // kx_js开始
            var hd=document.querySelector('.cn-top');
            hd.style.display='none';

            // kx_js结束
        }
    }
});


//头部隐藏添加标签开始
direct.directive("hidden",function(){
    return {
        templateUrl:"",
        replace:true,
        link:function(scope,element){
            // kx_js开始
                var hd=document.querySelector('.cntop1');
                hd.style.display='none';

            // kx_js结束
        }
    }
});
// 头部隐藏添加标签结束
//头部显示添加标签开始
direct.directive("show",function(){
    return {
        templateUrl:"",
        replace:true,
        link:function(scope,element){
            // kx_js开始
            var hd=document.querySelector('.cntop1');
            hd.style.display='block';

            // kx_js结束
        }
    }
});
// 头部显示添加标签结束




direct.directive('designer',function () {
    return{
        scope:{
            data:"=data"
        },
        templateUrl:"tpl/kx_item.html",
        link:function (scope,element) {

        }


    }
});
//头部动态获取logo开始
direct.directive("ks",function(){
    return {
        replace:true,
        link:function(scope,element){
            //kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/kx_first.png') no-repeat center center/cover";
           headerlogo.style.width='1.58rem';
            headerlogo.style.height='.39rem';
            //kx_js结束
        }
    }
});

direct.directive("kx",function(){
    return {
        replace:true,
        link:function(scope,element){
            //kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/cn10.png') no-repeat center center/cover";
            headerlogo.style.width='2.29rem';
            headerlogo.style.height='.39rem';
            //kx_js结束
        }
    }
});

direct.directive("ka",function(){
    return {
        replace:true,
        link:function(scope,element){
            //kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/web_design.png') no-repeat center center/cover";
            headerlogo.style.width='1.88rem';
            headerlogo.style.height='.39rem';
            //kx_js结束
        }
    }
});

direct.directive("kb",function(){
    return {
        replace:true,
        link:function(scope,element){
            //kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/personal.png') no-repeat center center/cover";
            console.log("url('images/header_change_images/personal.png') no-repeat center center/cover")
            headerlogo.style.width='2.68rem';
            headerlogo.style.height='.39rem';
            console.dir(headerlogo);
            //kx_js结束
        }
    }
});
//头部动态获取logo结束


// direct.directive("hello",function(){
//     return {
//         // templateUrl:"tpl/cntop.html",
//         replace:true,
//         controller:function($scope,$http){
//         	//ajax请求
//         	$http({
//         		//发送请求   php?...
//         		url:"php/login.php?type=phone&passw0ord=123&acc=admin"
//         	}).then(function(data){
//         		//得到数据
//         		$scope.data = data
//         	})
//
//         },
//         link:function(scope,element){
//         	// js代码会这里被触发
//         	var a = $(".tou");
//         	// console.dir($("a",angular.element()));
//             //kx_js开始
//             var headerlogo=document.querySelector('.header_logo');
//             headerlogo.style.background="url('images/cn/cn10.png') no-repeat center center/cover";
//             //kx_js结束
//         }
//     }
// });





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
            var movebox=$(".zk-itembox .itemUp .inners");
            var flag=true;
            touch.on(movebox,"swipe",function(e){
                e.preventDefault;
                e.propagaiton;
                if(flag){
                    // console.log($(this));
                    $(this).parent().css("left","-1.23rem");
                    flag=false;
                }else{
                    $(this).parent().css("left","0");
                    flag=true;
                }
            })
        }
    }
})
// 设置个人信息
direct.directive("setting",function(){
    return{
        replace:true,
        /*controller:function($scope,$http){
            $http({
                url:"php/"
            }).then(function(data){
                $scope.data=data;
            })
        },*/
        link:function(scope,element){
                $("#sex").click(function () {  
                    var that = this;  
                    $("#sex-list").mobiscroll().treelist({  
                        theme: "android-ics",  
                        lang: "zh",  
                        display: 'bottom',  
                        inputClass: 'tmp',  
                        headerText: '请您选择',  
                        onSelect: function (valueText) {  
                            var m = $(this).find("li").eq(valueText).html(); 
                            /*$.post("inc/person.org.php", {apart: "resume_base", sex: m}, function (result) { 
                                if (result == 'ok') { 
                                    $(that).find(".mbase-menu-txt").html(m); 
                                } 
                                else { 
                                    error('网络繁忙，请您稍后再试'); 
                                } 
                            });*/
                            $("#sex .mbase-menu-txt").html(m);
                        }  
                    });  
                    $("input[id^=sex-list]").focus();  
                }); 

                $("#sex1").click(function () {  
                    var that = this;  
                    // console.log(1);
                    $("#sex-list1").eq(0).mobiscroll().treelist({  
                        theme: "android-ics",  
                        lang: "zh",  
                        display: 'bottom',  
                        inputClass: 'tmp',  
                        headerText: '请您选择',  
                        onSelect: function (valueText) {  
                            var m = $(this).find("li").eq(valueText).html(); 
                            /*$.post("inc/person.org.php", {apart: "resume_base", sex: m}, function (result) { 
                                if (result == 'ok') { 
                                    $(that).find(".mbase-menu-txt").html(m); 
                                } 
                                else { 
                                    error('网络繁忙，请您稍后再试'); 
                                } 
                            });*/
                            $("#sex1 .mbase-menu-txt").html(m);
                        }  
                    });  
                    $("input[id^=sex-list1]").focus();  
                }); 
            }
        // }
    }
})
// zk结束


//cn数据
direct.directive("cnshuju",function(){
    return{
        replace:true,
        templateUrl:"tpl/cnindex1.html",
    }
})
