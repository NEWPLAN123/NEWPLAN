var shuju=[
    {
        title:'NEWSIMPLE',
        src:'images/cn13.png',
        liu:'5310',
        xing:'4396'
    },
    {
        title:'NEWSIMPLE',
        src:'images/cn13.png',
        liu:'5010',
        xing:'4396'
    }
]

var app=angular.module("app",[]);
//顶部
app.controller('c',function($scope){
    $scope.data=shuju;
})

app.directive('cnitem',function () {
    return {
        templateUrl:"tpl/cnitem.html",
        replace:true
    }
})
app.directive('cnindex1',function () {
    return {
        templateUrl:"tpl/cnindex1.html",
        replace:true,
        scope:{
          data:'=data'
        }
    }
})
// var aa=document.querySelector('#yi');
// console.log(aa)