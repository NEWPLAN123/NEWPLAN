var ctrl=angular.module("ctrl",["ngRoute"]);



ctrl.config(function($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"tpl/cnindex.html"  //首页
    }).when("/cnwatch",{
        templateUrl:'tpl/cnwatch.html'  //watch列表页
    }).when("/personCenter",{
        templateUrl:'tpl/zkpersonCenter.html' //个人中心
    }).when("/cnweb",{
        templateUrl:'tpl/cnweb.html'  //web列表页
    }).when('/search_pages',{
        templateUrl:'tpl/search_pages.html'  //搜索页面
    }).when('/search_result',{
        templateUrl:'tpl/search_result.html'  //搜索作品结果
    }).when('/designer_result',{
        templateUrl:'tpl/designer_result.html'   //搜索设计师结果
    }).when('/upload',{
        templateUrl:'tpl/zkupload.html'   //上传作品
    }).when('/myworks',{
        templateUrl:'tpl/zkmyworks.html'   //我的作品列表
    }).when('/unlogin',{
        templateUrl:'tpl/zkpersonCenterUn.html'    //个人中心未登录
    }).when('/xiangqing',{
        templateUrl:'tpl/cmjxiangqing.html'    //详情未关注
    }).when('/sheji',{
        templateUrl:'tpl/cmj_sheji.html'    //设计师详情
    }).when('/setting',{
        templateUrl:'tpl/zksetting.html'
    }).when('/concern',{
        templateUrl:'tpl/zkconcern.html'  //我的关注
    }).when('/collection',{
            templateUrl:'tpl/zkcollection.html'  //我的收藏
        })
})



