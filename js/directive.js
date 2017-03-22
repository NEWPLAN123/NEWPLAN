
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
            // kaa.addEventListener('touchstart',function () {
            //     kssearch.style.display='inline-block';
            //     kaa.style.display='none';
            //     kbb.style.display='inline-block';
            //     kaab.style.display='inline-block';
            //     kaac.style.display='none';
            // });
            // touch.on('.kx_search_right2','touchend',function (){
            //     kssearch.style.display='inline-block';
            //     kaa.style.display='none';
            //     kbb.style.display='inline-block';
            //     kaab.style.display='inline-block';
            //     kaac.style.display='none';
            // });
            kaa.onclick=function(){
                kssearch.style.display='inline-block';
                kaa.style.display='none';
                kbb.style.display='inline-block';
                kaab.style.display='inline-block';
                kaac.style.display='none';
            };
            // touch.on('.kx_search_quxiao','touchstart',function () {
            //     kssearch.style.display='none';
            //     kbb.style.display='none';
            //     kaa.style.display='inline-block';
            //     kcc.style.display='none';
            //     kaab.style.display='none';
            //     kaac.style.display='inline-block';
            // });
            // kbb.addEventListener('touchstart',function () {
            //     kssearch.style.display='none';
            //     kbb.style.display='none';
            //     kaa.style.display='inline-block';
            //     kcc.style.display='none';
            //     kaab.style.display='none';
            //     kaac.style.display='inline-block';
            // });
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
            setTimeout(function () {
                var hd=document.querySelector('.cn-top');
                hd.style.display='block';
            },300)

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
            setTimeout(function () {
                var headerlogo=document.querySelector('.header_logo');
                headerlogo.style.background="url('images/header_change_images/kx_first.png') no-repeat center center/cover";
                headerlogo.style.width='1.58rem';
                headerlogo.style.height='.39rem';
                //kx_js结束
            },300)
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
            setTimeout(function () {
                var headerlogo=document.querySelector('.header_logo');
                headerlogo.style.background="url('images/header_change_images/web_design.png') no-repeat center center/cover";
                headerlogo.style.width='1.88rem';
                headerlogo.style.height='.39rem';
                //kx_js结束
            },300)
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

//设计师详情 页面指令 开始
direct.directive("shejishi",function(){
    return {
        replace:true,
        link:function(scope,element){
            setTimeout(function () {
                var xxk=document.querySelector(".xxk");
                var gz=document.querySelectorAll(".xxk>ul>li");
                var ka=document.querySelector(".ka")
                var zp=document.querySelectorAll(".ka>div");
                for(i=0;i<gz.length;i++){
                    gz[i].index=[i];
                    gz[i].onclick=function(){
                        for(y=0;y<zp.length;y++){
                            zp[y].style.display="none";
                        }
                        this.className="active";
                        zp[this.index].style.display="block";
                    }
                }

            },200)//setTimeout
        }
    }
});
//设计师详情 页面指令 结束


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
                        var thumbs = $(".thumbs");  //头像的图片

                        //因为能进到这个页面的都是说明是已经登录的了
                        var lid = localStorage.getItem("lid");
                        //现在是已登录状态，先通过ajax从数据库中获取相应的内容
                        $.ajax({
                            url:"php/get_user.php",
                            type:"GET",
                            data:{lid:lid},
                            success:function(data1){
                                var data = JSON.parse(data1);
                                //设置相应的字段

                                thumbs.css("background","url('"+data.thumb+"') no-repeat center center/cover");  //设置头像
                                name.val(data.name);    //昵称
                                ch.val(data.ch);    //称号
                                zl.val(data.zl);    //专栏
                                sex.val(data.sex);    //性别
                                zym.val(data.zym);    //简介
                            }
                        })

                        images.on("change",function(){
                            //获取文件
                            var thumb = images[0].files;
                            var files = thumb[0];
                            if(files.type.slice(0,5)!='image'){
                                mes.html("上传的文件只能是图片");
                                return ;
                            }else if(thumb[0].size/1024 > 10240){
                                mes.html("图片大小不得超过10M");
                                return ;
                            }

                            //先上传到临时文件夹，先替换
                            var fd = new FormData();
                            fd.append('files',files);
                            var xhr = new XMLHttpRequest(); //实例化ajax对象
                            xhr.open("post","php/temp_images.php");
                            xhr.send(fd);
                            xhr.onreadystatechange = function () {
                                if(xhr.readyState==4){
                                    if(xhr.status==200){
                                        var text = xhr.responseText;
                                        var arr = JSON.parse(text);
                                        if(!arr['error']){
                                            //更换临时头像
                                            thumbs.css("background","url('"+arr['url']+"') no-repeat center center/cover");  //设置头像
                                        }else{
                                            return ;
                                        }//else

                                    }
                                }
                            }//onreadystatechange
                        })

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
                                    }else if(thumb[0].size/1024 > 10240){
                                        mes.html("上传的文件不得大于10M");
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
                            }//else
                        })
                    },200)
                }//else 已登录
        // }
    }
})
// zk结束

// 设置上传作品信息************************************************************
direct.directive("setwork",function(){
    return{
        replace:true,
        controller:function($scope,$routeParams,$http){
            $scope.cid = $routeParams.cid;
            if($scope.cid!=0){
                $scope.type = "edit";
            }else{
                $scope.type = "add";
            }
            $http({
                url:"php/get_worksByType.php?type=cid&val="+$scope.cid,
                method:"GET"
            }).then(function(data){
                $scope.work = data.data[0];
            })
        },
        link:function(scope,element){
            setTimeout(function () {//延迟2秒
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
                //获取完成按钮
                var submit = $(".kx_finish");
                //获取数据
                var title = $("#title");    //标题
                var des = $("#des");        //作品介绍
                var image = $("#fileId3");  //上传文件
                var hid = $("#hid");        //所属行业
                var lname = $("#lname");    //所属栏目
                var thumbs = $(".thumbs");  //头像的图片
                var lid = localStorage.getItem("lid");  //获取用户lid
                var hid2;
                if(scope.cid!=0){
                    //如果是修改信息，那么设置获取到的信息
                    title.val(scope.work.title)
                    des.val(scope.work.des)
                    thumbs.css("background","url('"+scope.work.image+"') no-repeat center center/cover");
                    switch(scope.work.hid){
                        case "1":hid.html("金融");break;
                        case "2":hid.html("旅游");break;
                        case "3":hid.html("健康");break;
                        case "4":hid.html("医疗");break;
                        case "5":hid.html("社交");break;
                        case "6":hid.html("动漫");break;
                        case "7":hid.html("电商");break;
                        case "8":hid.html("游戏");break;
                        case "9":hid.html("工具");break;
                        case "10":hid.html("美食");break;
                        case "11":hid.html("视频");break;
                        case "12":hid.html("教育");break;
                        case "13":hid.html("生活");break;
                    }
                    lname.html(scope.work.lname)
                    timg = scope.work.image;
                }


                //获取提示消息
                var mes = $("#mes");
                submit.attr("href","javascript:;")
                //设置a标签的链接
                submit.css("href","javascript:;")

                //当选择了图片，那么先上传到临时文件先
                image.on("change",function(){
                    var thumb = image[0].files;
                    //获取文件
                    var files = thumb[0];
                    if(files.type.slice(0,5)!='image'){
                        mes.html("上传的文件只能是图片");
                        return ;
                    }else if(thumb[0].size/1024 > 10240){
                        mes.html("图片大小不得大于10M");
                        return ;
                    }
                    //先上传到临时文件夹，先替换
                    var fd = new FormData();
                    fd.append('files',files);
                    var xhr = new XMLHttpRequest(); //实例化ajax对象
                    xhr.open("post","php/temp_images.php");
                    xhr.send(fd);
                    xhr.onreadystatechange = function () {
                        if(xhr.readyState==4){
                            if(xhr.status==200){
                                var text = xhr.responseText;
                                var arr = JSON.parse(text);
                                if(!arr['error']){
                                    //更换临时头像
                                    thumbs.css("background","url('"+arr['url']+"') no-repeat center center/cover");  //设置头像
                                }else{
                                    return ;
                                }//else

                            }
                        }
                    }//onreadystatechange
                })
                touch.on(submit,"tap",function(){
                    var thumb = image[0].files; //获取作品图片文件
                    var files = thumb[0];
                    switch (hid.html()){
                        case "金融": hid2 = 1;break;
                        case "旅游": hid2 = 2;break;
                        case "健康": hid2 = 3;break;
                        case "医疗": hid2 = 4;break;
                        case "社交": hid2 = 5;break;
                        case "动漫": hid2 = 6;break;
                        case "电商": hid2 = 7;break;
                        case "游戏": hid2 = 8;break;
                        case "工具": hid2 = 9;break;
                        case "美食": hid2 = 10;break;
                        case "视频": hid2 = 11;break;
                        case "教育": hid2 = 12;break;
                        case "生活": hid2 = 13;break;
                    }

                    //当点击提交的时候，先进行数据的验证
                    if(!title.val()){
                        mes.html("标题不能为空")
                        return;
                    }else if(!des.val()){
                        mes.html("作品介绍不能为空")
                        return;
                    }else if(thumb.length == 0 && scope.cid==0){
                        mes.html("图片不能为空")
                        return;
                    }else if( scope.cid==0 && thumb[0].size/1024 > 10240){
                        mes.html("图片大小不得大于10M")
                        return;
                    }else{

                        if(thumb.length != 0){
                            //可以开始上传
                            //先对图片进行上传
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
                                            return ;
                                        }//else

                                    }
                                }
                            }//xhr
                        }

                        setTimeout(function () {
                            //继续上传后续
                            $.ajax({
                                url:"php/add_work.php",
                                type:"POST",
                                data:{
                                    type:scope.type,
                                    cid:scope.cid,
                                    lid:lid,
                                    title:title.val(),
                                    des:des.val(),
                                    image:timg,
                                    hid:hid2,
                                    lname:lname.html()
                                },
                                success:function(data1){
                                    var data = JSON.parse(data1)
                                    if(data['error']){
                                        //如果修改失败
                                        mes.html(data.data['mes'])
                                    }else{
                                        //如果成功
                                        mes.html(data['mes'])
                                        setTimeout(function () {
                                            location.href="#!/myworks"
                                        },1000)
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
//*******************************


//cn数据
direct.directive("cnshuju",function(){
    return{
        replace:true,
        templateUrl:"tpl/cnindex1.html",
        link:function(){
           setTimeout(function () {
               //每次进入进来先判断是否已经登录了
               var lid = localStorage.getItem("lid");
               if(!lid){
                   //如果是没有登录的状态
                   $(".cndz").attr("href","wjy_denglu.html")
               }
           },300)
        }//link
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
             var dianji=$(".dianji");
            var cnzhezhao=document.querySelector(".cn-zhezhao");
            // console.log(cnzhezhao)
            function getXY(deg) {
                var hd=Math.PI/180*deg;
                var x=Math.sin(hd)*r;
                var y=Math.cos(hd)*r;
                return {x:-x,y:-y}
            }   
            var ang=180/(list.length-1);
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
                     for (var i = 0; i < dianji.length; i++) {
                        dianji[i].style.display="block";
                    };

                }else{
                    console.log(22)
                    flag=false;
                    for(i=0;i<list.length;i++){
                        list[i].style.transform="rotate(0deg) translate(0px,0px)";
                        list[i].style.transition="all 0.5s "+(list.length-i)*100+"ms";
                    }
                    cnzhezhao.style.display='none';
                     for (var i = 0; i < dianji.length; i++) {
                        dianji[i].style.display="none";
                    };

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
});
//详情的上拉效果开始
direct.directive("ko",function(){
    return {
        templateUrl:"",
        replace:true,
        link:function(scope,element){
            // kx_js开始
            var up=document.querySelector('#up');
            up.addEventListener('touchstart',function (e){
               console.log(e.screenY);
            });

            // kx_js结束
        }
    }
});
//详情的上拉效果结束


//web列表指令开始
direct.directive("web",function(){
    return {
        replace:true,
        link:function(scope,element){
            setTimeout(function () {
                var toLogin = $(".toLogin")
                //判断是否已经登录了
                var lid = localStorage.getItem("lid");
                if(lid){
                }else{
                    //如果是没登录状态，那么设置href
                    toLogin.attr("href","wjy_denglu.html")
                }
            },300)
        }
    }
});
//web列表指令开始结束


//评论获取高度
direct.directive("pinglun",function(){
    return {
        replace:true,
        link:function(scope,element){
            setTimeout(function(){
                //获取高度
               function liugao(){
                var aaaaa=$(".aaaaa");
                var wjynum=90;
                var wjyaheight=$(window).height();
                aaaaa.css("height",wjyaheight)
                }
                liugao()
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
                        wjy_liuyanbox.className="wjy_liuyanbox";
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
                            this.style="background:url(../images/wjy_img/wjy_xin.png)no-repeat center center/cover";

                            }
                fax=!fax;
                        }
                    }
                }
                taoxin()
                // 王佳一评论
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
<<<<<<< HEAD
=======


                // 点击文字消失

>>>>>>> origin/master
                var huifuinput=document.querySelector(".huifuinput");
                huifuinput.onclick=function(){
                    this.value="";
                    if (this.value="") {
                        this.value="点击文字消失"
                    };
                }
<<<<<<< HEAD

            },300)//setTimeout
        }
    }
});

direct.directive('cnleft',function(){
    return{
        replace:true,
        // templateUrl:"tpl/cnleft.html",
        link:function (scope,element) {
            
            var mask = $(".mask");
console.log(mask)
            var li = $(".mask li");
            var ul = $(".mask ul");
            var ca=document.querySelector('.ca');
            var len = li.length;

            for(var i = 0 ; i < len/2 ; i++){
                li.eq(i).css("transition","all 1s "+(i*50)+"ms");
                li.eq(len-i).css("transition","all 1s "+(i*50)+"ms");
            }


//右滑动事件
//             touch.on(document,"swiperight",function(){
//                 //延迟显示 li
//                 li.css("transform","translateX(0)");
//             })

//左滑动事件
            touch.on(document,"swipeleft",function(){
                //延迟隐藏 li
                li.css("transform","translateX(-100%)");
                mask.css({"display":"none"});
            })

//向上滑动事件，暂时当成mask的点击事件

            touch.on(ul,"tap",function(){
                //假设此时是上滑
                shang()

            })

            function shang(){
                var li = $(".mask li");
                //操作dom节点
                ul[0].appendChild(li.eq(0)[0]);

            }


            li.each(function(){
                var index = $(this).index();
                $(this).attr("i",index)
                var num = index - 6;
                touch.on($(this),"tap",function(){
                    console.log($(this))
                    // for(var i = 0 ; i < num ; i++){
                    // 	shang();
                    // }
                })

            })



            var li2 = document.querySelectorAll("li");


            for(var i = 0 ; i < li2.length ; i++){
                li2[i].index = i;
                console.log(li2[i])
                touch.on(li2[i],"tap",function(){
                    console.log(this)
                    var index = this.index;

                })
            }


            touch.on(ca,"touchstart",function(){
                li.css("transform","translateX(0%)");
                mask.css({"display":"block"});
            })

                // touch.on(mask,"touchstart",function(){
                //     li.css("transform","translateX(-100%)");
                //
                // })
=======
            },300)//setTimeout
>>>>>>> origin/master
        }
    }
})

