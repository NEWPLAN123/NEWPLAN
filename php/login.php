<?php include "config.php" ?>

<?php

//开启session
 session_start();

//登录
 $type = $_REQUEST['type']; //确定登录的方式

// if($type == 'phone'){   //如果是和手机的方式登录
//     $acc = $_REQUEST['phone'];
// }else if($type == 'email'){
//     $acc = $_REQUEST['email'];
// }

 $password = md5($_REQUEST['password']);

//先查找用户名
 $sql = "select * from login where $type='$type'";

 $rul = $mysqli->query($sql);
 if($rul->num_rows){
     //继续查询密码
     $sql = "select * from login where $acc='$acc' and password='$password'";
     $rul = $mysqli->query($sql);
     if($rul->num_rows){
         //登录成功
         $row = $rul->fetch_assoc();

         //设置session变量
         $_SESSION['is_login'] = true;
         $_SESSION['lid'] = $row['lid'];
         echo json_encode(array('error'=>0,'mes'=>"登陆成功！"));
     }else{
         //跳转回登录页面并给出提示信息
         echo json_encode(array('error'=>1,'mes'=>"密码错误！"));
     }
 }else{  //如果没找到，说明用户名不存在
     echo json_encode(array('error'=>1,'mes'=>"用户名不存在！"));
 }

?>
