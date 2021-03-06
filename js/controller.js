var ctrl=angular.module("ctrl",["ngRoute"]);



ctrl.config(function($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"tpl/cnindex.html",  //首页
        controller:"cnindex"
    }).when("/cnapp:lid",{
        templateUrl:"tpl/cnindex.html",  //app列表页
        controller:"cnapp"
    }).when("/cnwatch",{
        templateUrl: "tpl/zz-watch.html",
        // templateUrl:'tpl/cnwatch.html',  //watch列表页
        controller:"watch"
    }).when("/personCenter",{
        templateUrl:'tpl/zkpersonCenter.html', //个人中心
        controller:"personCenter"
    }).when("/cnweb",{
        templateUrl:'tpl/cnweb.html',  //web列表页
        controller:"cnweb"
    }).when('/search_pages',{
        templateUrl:'tpl/search_pages.html',
        controller:"kx_ctrl"      //搜索页面
    }).when('/search_result',{
        templateUrl:'tpl/search_result.html',    //搜索作品结果
        controller:"searchResult"
    }).when('/designer_result',{
        templateUrl:'tpl/designer_result.html',   //搜索设计师结果
        controller:"searchDesigner"
    }).when('/upload:cid',{
        templateUrl:'tpl/zkupload.html',   //上传作品
    }).when('/myworks',{
        templateUrl:'tpl/zkmyworks.html',   //我的作品列表
        controller:"workList"
    }).when('/unlogin',{
        templateUrl:'tpl/zkpersonCenterUn.html'    //个人中心未登录
    }).when('/xiangqing:cid',{
        templateUrl:'tpl/cmjxiangqing.html',    //作品详情信息
        controller:"xiangqing"
    }).when('/sheji:id',{
        templateUrl:'tpl/cmj_sheji.html',    //设计师详情
        controller:"shejishi"
    }).when('/setting',{
        templateUrl:'tpl/zksetting.html'  //设置个人信息
    }).when('/concern',{
        templateUrl:'tpl/zkconcern.html',  //我的关注
        controller:"follow"
    }).when('/collection',{
        templateUrl:'tpl/zkcollection.html',  //我的收藏
        controller:"collection"
    }).when('/pinlun:cid',{
        templateUrl:'tpl/wjy_pinlun.html',  //评论
        controller:"pinglun"
    }).otherwise({  //如果都不匹配就跳转到首页
        templateUrl:"tpl/cnindex.html",  //首页
        controller:"cnindex"
    })
})
//暂时数据开始
// ctrl.controller('kx_ctrl',function ($scope) {
//     $scope.data=data;
// });
//暂时数据结束

//APP页面的控制器
ctrl.controller("cnindex",function ($scope,$http) {
    $scope.lid= localStorage.getItem("lid")
    $http({
        url:"php/get_worksByType.php?type=lname&val=app",
    }).then(function(data){
        $scope.app = data.data;
    })
});
//搜索结果控制器
ctrl.controller("searchResult",function ($scope,$http) {
    $scope.lid= localStorage.getItem("lid")
    $http({
        url:"php/get_worksByType.php?type=lname&val=app",
    }).then(function(data){
        $scope.app = data.data;
    })
});
// 搜索结果控制器


//收藏控制器
ctrl.controller("collection",function ($scope,$http) {
    $scope.lid= localStorage.getItem("lid")
    $http({
        url:"php/get_worksByType.php?type=lname&val=app",
    }).then(function(data){
        $scope.app = data.data;
    })
});
// 收藏控制器


//WEB页面的控制器
ctrl.controller("cnweb",function ($scope,$http) {
    $scope.lid= localStorage.getItem("lid")
    $http({
        url:"php/get_worksByType.php?type=lname&val=web",
    }).then(function(data){
        $scope.web = data.data;
    })
})

//评论页面的控制器
ctrl.controller("pinglun",function ($scope,$http,$routeParams) {
    $scope.lid= localStorage.getItem("lid")
    $scope.cid = $routeParams.cid;
    // 先找到对应的作品的信息
    $http({
        url:"php/get_worksByType.php?type=cid&val="+$scope.cid,
    }).then(function(data){
        $scope.work = data.data[0];
        $scope.manId = data.data[0].lid;
        //获取该作者的信息
        $http({
            url:"php/get_user.php?lid="+$scope.manId
        }).then(function(data){
            $scope.man = data.data;
        })//http 2
        //获取评论信息
        $http({
            url:"php/get_comment.php?cid="+$scope.cid
        }).then(function(data){
            $scope.pinglun = data.data;
        })//http 3
    })//http 1
})

//设计师页面的控制器
ctrl.controller("shejishi",function ($scope,$http,$routeParams) {
    $scope.lid= localStorage.getItem("lid")
    $scope.id= $routeParams.id; //从上个页面获取到设计师的lid
    //根据设计师的lid找到对应的设计师信息
    $http({
        url:"php/get_user.php?lid="+$scope.id,
    }).then(function(data){
        $scope.user = data.data;
    })
    //根据设计师的lid找到对应的设计师的作品
    $http({
        url:"php/get_worksByType.php?type=lid&val="+$scope.id,
    }).then(function(data){
        $scope.app = data.data;
    })

})

//我的收藏页面的控制器
// ctrl.controller("shejishi",function ($scope,$http,$routeParams) {
//     $scope.lid= localStorage.getItem("lid") //获取到自己的lid
//     //根据设计师的lid找到对应的设计师信息
//     $http({
//         url:"php/get_follow.php?lid="+$scope.id,
//     }).then(function(data){
//         $scope.follow = data.data;
//     })
// })

//APP页面的控制器
ctrl.controller("cnindex",function ($scope,$http) {
    $scope.lid= localStorage.getItem("lid")
    $scope.abc = 4;
    $http({
        url:"php/get_worksByType.php?type=lname&val=app",
    }).then(function(data){
        $scope.app = data.data;
    })
})

//个人关注列表 控制器
ctrl.controller("follow",function ($scope,$http) {
    $scope.lid= localStorage.getItem("lid")
    $http({
        url:"php/get_follow.php?lid="+$scope.lid,
    }).then(function(data){
        $scope.manList = data.data;
    })
})


ctrl.controller("searchDesigner",function ($scope,$http) {
    $scope.lid= localStorage.getItem("lid")
    $http({
        url:"php/get_follow.php?lid=15",
    }).then(function(data){
        console.log(data.data)
        $scope.manList = data.data;
    })
})


//作品详情的控制器
ctrl.controller("xiangqing",function ($scope,$http,$routeParams) {
    $scope.lid= localStorage.getItem("lid")
    $scope.cid = $routeParams.cid;
    $http({     //获取作品信息
        url:"php/get_worksbyType.php?type=cid&val="+$scope.cid,
        method:"GET",
    }).then(function(data){
        $scope.xiangqing = data.data[0];
        var lid = $scope.xiangqing.lid;
        //查找作者信息
        $http({
            url:"php/get_user.php?lid="+lid,
            method:"GET"
        }).then(function(data){
            $scope.user = data.data;
        })//$http
    })
})


//watch的控制器
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

    $scope.toSetting = "#!setting";

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
        $scope.toSetting = "wjy_denglu.html";
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




