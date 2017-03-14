var ctrl=angular.module("ctrl",["ngRoute"]);



ctrl.config(function($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"tpl/cnindex.html"
    }).when("/cnwatch",{
        templateUrl:'tpl/cnwatch.html'
    }).when("/personCenter",{
        templateUrl:'tpl/zkpersonCenter.html'
    }).when("/cnweb",{
        templateUrl:'tpl/cnweb.html'
    }).when('/search_pages',{
        templateUrl:'search_pages.html'
    }).when('/search_result/:id',{
        templateUrl:'search_result.html'
    }).when('/designer_result',{
        templateUrl:'designer_result.html'
    }).when('/upload',{
        templateUrl:'tpl/zkupload.html'
    }).when('/myworks',{
        templateUrl:'tpl/zkcollectionList.html'
    }).when('unlogin',{
        templateUrl:'tpl/zkpersonCenterUn.html'
    })
})



