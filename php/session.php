<?php

session_start();

//使用sessionStorage来保存信息

$isLogin = $_SESSION["is_login"];

if(@$isLogin){
    //如果是已经登录的状态，不做处理
}else{
    //跳转到登录页面
    //获取到相对应的路径
//    $loginpath = substr('http://'.$_SERVER['SERVER_NAME'].substr($_SERVER['SCRIPT_NAME'],0,strrpos($_SERVER['SCRIPT_NAME'],'/')),0,-3)."wjy_denglu.html";
    header("Location:../wjy_denglu.html");
    exit();
}


?>