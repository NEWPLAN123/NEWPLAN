var ctrl=angular.module("ctrl",["ngRoute"]);



ctrl.config(function($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"tpl/cnindex.html",  //首页
    }).when("/cnapp:lid",{
        templateUrl:"tpl/cnindex.html",  //app列表页
        controller:"cnapp"
    }).when("/cnwatch",{
        templateUrl:'tpl/cnwatch.html',  //watch列表页
        controller:"watch"
    }).when("/personCenter",{
        templateUrl:'tpl/zkpersonCenter.html', //个人中心
        controller:"personCenter"
    }).when("/cnweb",{
        templateUrl:'tpl/cnweb.html'  //web列表页
    }).when('/search_pages',{
        templateUrl:'tpl/search_pages.html'  //搜索页面
    }).when('/search_result',{
        templateUrl:'tpl/search_result.html'  //搜索作品结果
    }).when('/designer_result',{
        templateUrl:'tpl/designer_result.html'   //搜索设计师结果
    }).when('/upload:cid',{
        templateUrl:'tpl/zkupload.html',   //上传作品
    }).when('/myworks',{
        templateUrl:'tpl/zkmyworks.html',   //我的作品列表
        controller:"workList"
    }).when('/unlogin',{
        templateUrl:'tpl/zkpersonCenterUn.html'    //个人中心未登录
    }).when('/xiangqing',{
        templateUrl:'tpl/cmjxiangqing.html'    //详情未关注
    }).when('/sheji',{
        templateUrl:'tpl/cmj_sheji.html'    //设计师详情
    }).when('/setting',{
        templateUrl:'tpl/zksetting.html'  //设置个人信息
    }).when('/concern',{
        templateUrl:'tpl/zkconcern.html',  //我的关注
        controller:"follow"
    }).when('/collection',{
        templateUrl:'tpl/zkcollection.html'  //我的收藏
    }).when('/pinlun',{
        templateUrl:'tpl/wjy_pinlun.html'  //评论
    }).otherwise({  //如果都不匹配就跳转到首页
        templateUrl:"tpl/cnindex.html"  //首页
    })
})

ctrl.controller("follow",function ($scope,$http) {
    $scope.lid= localStorage.getItem("lid")
    $http({
        url:"php/get_worksByType.php?type=lid&val="+$scope.lid,
    }).then(function(data){
        console.log(data)
    })
})

ctrl.controller("watch",function ($scope,$http) {
    $http({
        url:"php/get_works.php?lname=watch",
        method:"GET"
    }).then(function (data) {
        $scope.watch = data.data;
    })
})


//个人中心页面 控制器
ctrl.controller("personCenter",function($scope,$http){
    //判断是否已经登录
    var lid = localStorage.getItem("lid");
    $scope.name = "未登录";
    $scope.thumb = "php/upload/man.png";

    $scope.tishi = "退出登录";

    $scope.toUpload = "#!myworks";
    $scope.toFollow = "#!concern";
    $scope.toCollect = "#!collection";

    $scope.outLogin;

    if(lid){
        //如果已经登录，那么取出数据
        $http({
            url:"php/get_user.php?lid="+lid,
            method:"GET"
        }).then(function (data) {
            //获取成功
            $scope.name = data.data.name;       //设置用户名称
            $scope.thumb = data.data.thumb;     //设置用户头像
        })
        $scope.outLogin = function () {
            //点击退出登录的时候，清除localStorage缓存
            localStorage.removeItem("lid");
            location.href = "wjy_denglu.html";
        }
    }else{
        //如果是没登录状态
        $scope.toUpload = "wjy_denglu.html";
        $scope.toFollow = "wjy_denglu.html";
        $scope.toCollect = "wjy_denglu.html";
        $scope.tishi = "登录/注册"
        $scope.outLogin = function () {
            location.href = "wjy_denglu.html";
        }
    }
})

//作品列表 控制器
ctrl.controller("workList",function($scope,$http,$filter){
    //能进来这个页面说明是已经成功的登录了
    $scope.lid = localStorage.getItem("lid");
    //获取作者信息
    $http({
        url:"php/get_user.php?lid="+$scope.lid,
        method:"GET",
    }).then(function (data) {
        $scope.user =data.data;
    })
    //获取作品列表
    $http({
        url:"php/get_worksByType.php?type=lid&val="+$scope.lid,
        method:"GET",
    }).then(function (data) {
        $scope.workList =data.data;
    })

    //添加删除事件
    $scope.del = function (cid) {
        $http({
            //删除对应的作品
            url:"php/del_work.php?cid="+cid,
            method:"POST"
        }).then(function () {
            //当成功删除作品后，重新获取作品
            $http({
                url:"php/get_worksByType.php?type=lid&val="+$scope.lid,
                method:"GET",
            }).then(function (data) {
                $scope.workList =data.data;
            })
        })
    }
})




