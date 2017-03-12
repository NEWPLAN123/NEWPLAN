var ctrl=angular.module("ctrl",["ngRoute"]);



ctrl.config(function($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"tpl/cnindex.html"
    }).when("/cnwatch",{
        templateUrl:'tpl/cnwatch.html'
    }).when("/personCenter",{
        templateUrl:'tpl/personCenter.html'
    })
})



