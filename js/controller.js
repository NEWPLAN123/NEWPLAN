var ctrl=angular.module("ctrl",["ngRoute"]);



ctrl.config(function($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"tpl/cnindex.html"
    }).when("/cnwatch",{
        templateUrl:'tpl/cnwatch.html'
    }).when("/personCenter",{
        templateUrl:'tpl/personCenter.html'
    }).when('/search_pages',{
        templateUrl:'search_pages.html'
    }).when('/search_result/:id',{
        templateUrl:'search_result.html'
    }).when('/designer_result',{templateUrl:'designer_result.html'})
})



