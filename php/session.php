<?php

session_start();

//使用sessionStorage来保存信息

$isLogin = sessionStorage.getItem(isLogin);

if($isLogin){
    //如果是已经登录的状态，不做处理
}else{
    //跳转到登录页面
    header("Location:../wjy_denglu.html");
    exit();
}


?>