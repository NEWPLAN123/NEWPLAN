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



var app=angular.module("app",["ngRoute","ctrl","direct"]);
//顶部 







app.controller('c',function($scope){
    $scope.data=shuju;
})


var aa=document.querySelector('#yi');
