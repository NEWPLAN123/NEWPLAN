<?php include "config.php" ?>

<?php

//设置相对路径
//获取数据


$lid = $_REQUEST["lid"];      //用户id
$name = $_REQUEST["name"];    //用户名称
$sex = $_REQUEST["sex"];    //性别
$thumb = $_REQUEST["thumb"];    //头像
$zym = $_REQUEST["zym"];    //座右铭
$ch = $_REQUEST["ch"];    //称号
$zl = $_REQUEST["zl"];    //专栏

if($thumb){
    $sql = "update user set name='$name',sex='$sex',thumb='$thumb',zym='$zym',ch='$ch',zl='$zl' where lid='$lid' ";
}else{
    $sql = "update user set name='$name',sex='$sex',zym='$zym',ch='$ch',zl='$zl' where lid='$lid' ";
}

$rul = $mysqli->query($sql);

if($mysqli->affected_rows>0){
    //如果修改信息成功
    echo json_encode(array('error'=>0,'mes'=>"修改成功！"));
}else{
    //如果修改信息失败
    echo json_encode(array('error'=>1,'mes'=>"修改失败！"));
}


?>










