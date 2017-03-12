<?php

session_start();

if($_SESSION['is_login']){
    //如果是已经登录的状态，不做处理
}else{
    //给出提示信息并跳转到登录页面
    $mes = "请登录";

}


?>