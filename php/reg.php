<?php include "config.php" ?>

<?php

//注册后台

//获取手机和邮箱
$phone = $_REQUEST['phone'];
$email = $_REQUEST['email'];
//获取密码
$password = md5($_REQUEST['password']);

//先判帐号有没有被注册过了
$sql = "select * from login where phone='$phone'";
$rul = $mysqli->query($sql);

if($rul->num_rows){
    //如果查询到有记录，说明该帐号已经被注册了
    echo json_encode(array('error'=>1,'mes'=>"该手机号已被注册！"));
    //跳转到注册页面，并返回提示信息
}else{
    $sql = "select * from login where email='$email'";
    $rul = $mysqli->query($sql);
    if($rul->num_rows){
        echo json_encode(array('error'=>1,'mes'=>"该邮箱已被注册！"));
        //跳转到注册页面，并返回提示信息
    }else{
        //可以注册
        $sql = "insert into  login(phone,email,password) values('$phone','$email','$password')";
        $mysqli->query($sql);
        if($mysqli->affected_rows){ //注册成功
            echo json_encode(array('error'=>0,'mes'=>"注册成功！"));
        }else{
            echo json_encode(array('error'=>1,'mes'=>"注册失败！"));
        }
        //跳转至相对应的页面，并给出提示信息
    }
}


?>