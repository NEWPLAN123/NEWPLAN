<?php include "config.php" ?>

<?php

//获取关注设计师的列表
$lid = $_REQUEST['lid'];    //获取用户lid

//从关注信息表获取对应的关注gid
$sql = "select * from follow where lid='$lid'";

$rul =$mysqli->query($sql);

$arr = [];

while($row = $rul->fetch_assoc()){
    //查找关注的每一个人的信息
    $gid = $row['gid'];
    $sql = "select * from user where lid='$gid' ";
    //根据gid查找用户
    $k = $mysqli->query($sql)->fetch_assoc();

    //查找每个设计师被关注的数量
    $sql = "select * from follow where gid='$gid'";
    $fnum = count($mysqli->query($sql)->fetch_all());
    $k['fnum'] = $fnum;
    $arr[] = $k;
}

echo json_encode($arr);



?>
