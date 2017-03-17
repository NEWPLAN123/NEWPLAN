
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
direct.directive("showtop",function(){
    return {
        templateUrl:"",
        replace:true,
        link:function(scope,element){
            // kx_js开始
            var hd=document.querySelector('.cn-top');
            hd.style.display='block';

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
            headerlogo.style.width='2.68rem';
            headerlogo.style.height='.39rem';
            var left=document.querySelector('.kx_search_left2');
            var right=document.querySelector('.kx_search_right');
            var regret=document.querySelector('.kx_regret');
            var finish=document.querySelector('.kx_finish');
            left.style.display='inline-block';
            right.style.display='inline-block';
            regret.style.display='none';
            finish.style.display='none';
            //kx_js结束
        }
    }
});

direct.directive("kc",function(){
    return {
        replace:true,
        link:function(scope,element){
            //kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/upload.png') no-repeat center center/cover";
            headerlogo.style.width='1.37rem';
            headerlogo.style.height='.39rem';
            var left=document.querySelector('.kx_search_left2');
            var right=document.querySelector('.kx_search_right');
            var regret=document.querySelector('.kx_regret');
            var finish=document.querySelector('.kx_finish');
            left.style.display='none';
            right.style.display='none';
            regret.style.display='inline-block';
            finish.style.display='inline-block';
            //kx_js结束
        }
    }
});
direct.directive("kd",function(){
    return {
        replace:true,
        link:function(scope,element){
            //kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/search_result.png') no-repeat center center/cover";
            headerlogo.style.width='2.47rem';
            headerlogo.style.height='.4rem';
            //kx_js结束
        }
    }
});
direct.directive("ke",function(){
    return {
        replace:true,
        link:function(scope,element){
            //kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/designer_result.png') no-repeat center center/cover";
            headerlogo.style.width='2.74rem';
            headerlogo.style.height='.4rem';
            //kx_js结束
        }
    }
});
direct.directive("kf",function(){
    return {
        templateUrl:"",
        replace:true,
        link:function(scope,element){
            // kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/artist.png') no-repeat center center/cover";
            headerlogo.style.width='1.13rem';
            headerlogo.style.height='.39rem';

            // kx_js结束
        }
    }
});
direct.directive("kg",function(){
    return {
        templateUrl:"",
        replace:true,
        link:function(scope,element){
            // kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/comment.png') no-repeat center center/cover";
            headerlogo.style.width='1.56rem';
            headerlogo.style.height='.39rem';

            // kx_js结束
        }
    }
});
direct.directive("kh",function(){
    return {
        templateUrl:"",
        replace:true,
        link:function(scope,element){
            // kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/collection.png') no-repeat center center/cover";
            headerlogo.style.width='1.86rem';
            headerlogo.style.height='.39rem';

            // kx_js结束
        }
    }
});
direct.directive("ki",function(){
    return {
        templateUrl:"",
        replace:true,
        link:function(scope,element){
            // kx_js开始
            var headerlogo=document.querySelector('.header_logo');
            headerlogo.style.background="url('images/header_change_images/concern.png') no-repeat center center/cover";
            headerlogo.style.width='1.48rem';
            headerlogo.style.height='.39rem';

            // kx_js结束
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

                var mes = $("#mes");
                //张家强写的逻辑代码
                    setTimeout(function () {
                        //加0.2秒的延迟，保证dom元素已经加载好了

                        //获取dom元素
                        var images = $("#fileId3");      //图片
                        var name = $("#username");      //昵称
                        var ch = $("#ch");              //称号
                        var zl = $("#zl");              //专栏
                        var sex = $("#xingbie");      //性别
                        var zym = $("#zym");      //座右铭
                        var timg = "";

                        //因为能进到这个页面的都是说明是已经登录的了
                        var lid = 15;   //这个lid应该从scope中获取参数得到的
                        //现在是已登录状态，先通过ajax从数据库中获取相应的内容
                        //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx


                        var toPerson = $(".kx_finish");
                        toPerson.attr("href","javascript:;");
                        touch.on(toPerson,"tap",function(){
                            var thumb = images[0].files;
                            //判断昵称是否为空
                            if(!name.val()){
                                mes.html("昵称不能为空！");
                                return ;
                            }else{
                                //验证完毕，可以发送ajax请求
                                //如果用户有更改或上传头像
                                if(thumb.length != 0){
                                    //判断上传的是不是图片
                                    var files = thumb[0];
                                    if(files.type.slice(0,5)!='image'){
                                        mes.html("上传的文件只能是图片");
                                        return ;
                                    }
                                    // 先上传头像
                                    var fd = new FormData();
                                    fd.append('files',files);
                                    var xhr = new XMLHttpRequest(); //实例化ajax对象
                                    xhr.open("post","php/upload_images.php");
                                    xhr.send(fd);
                                    xhr.onreadystatechange = function () {
                                        if(xhr.readyState==4){
                                            if(xhr.status==200){
                                                var text = xhr.responseText;
                                                var arr = JSON.parse(text);
                                                if(!arr['error']){
                                                    timg = arr['url'];
                                                    //上传头像成功
                                                }else{
                                                    mes.html(arr['mes']);
                                                    return ;
                                                }//else

                                            }
                                        }
                                    }//onreadystatechange
                                }
                                setTimeout(function(){
                                    //延迟0.2秒发送，确保图片路径收到
                                    $.ajax({
                                        url:"php/upload.php",
                                        type:"post",
                                        data:{
                                            lid:lid,
                                            name:name.val(),
                                            sex:sex.html(),
                                            ch:ch.val(),
                                            zl:zl.val(),
                                            zym:zym.val(),
                                            thumb:timg
                                        },
                                        success:function (data1) {
                                            var data = JSON.parse(data1);
                                            if(data['error']){
                                                //如果发生了错误
                                                mes.html(data['mes']);
                                                return;
                                            }else{
                                                //跳转回去
                                                mes.html(data['mes']);
                                                setTimeout(function () {
                                                    location.href="#!/personCenter";
                                                },1500)
                                            }
                                        }
                                    })
                                },200)
                            }
                        })
                    },200)
                }//else 已登录
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



// 扇形菜单

direct.directive("cnyouxia",function () {
    return{
        replac:true,
        // templateUrl:"tpl/cnindex.html",
        link:function (scope,element) {
            var meno=$(".cn-meno")[0];
            var group=$(".cn-group")[0];
            var list=$("li",group);
            var r=90;
            var cnzhezhao=document.querySelector(".cn-zhezhao");
            // console.log(cnzhezhao)
            function getXY(deg) {
                var hd=Math.PI/180*deg;
                var x=Math.sin(hd)*r;
                var y=Math.cos(hd)*r;
                return {x:-x,y:-y}
            }   
            var ang=180/(list.length-1);
            console.log(meno)
            var flag=false;
            touch.on(meno,"tap",function(){
                if (!flag){
                    flag=true;
                    for(i=0;i<list.length;i++){
                        var w=getXY(i*ang-30)
                        list[i].style.transform=" translate("+w.x+"px,"+w.y+"px) ";
                        list[i].style.transition="all 0.5s "+i*100+"ms";

                    }
                    cnzhezhao.style.display='block';

                }else{
                    console.log(22)
                    flag=false;
                    for(i=0;i<list.length;i++){
                        list[i].style.transform="rotate(0deg) translate(0px,0px)";
                        list[i].style.transition="all 0.5s "+(list.length-i)*100+"ms";
                    }
                    cnzhezhao.style.display='none';

                }
                // cnzhezhao.style.display='block';
            })

            touch.on( cnzhezhao,'tap',function () {
                for(i=0;i<list.length;i++){
                    list[i].style.transform="rotate(0deg) translate(0px,0px)";
                    list[i].style.transition="all 0.5s "+(list.length-i)*100+"ms";
                }
                cnzhezhao.style.display='none';
            })
        }
    }
})
