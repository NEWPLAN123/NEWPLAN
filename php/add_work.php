<?php include "config.php" ?>
<?php

//添加作品
$cid = $_REQUEST['cid'];    //获取作品cid
$type = $_REQUEST['type'];    //获取类型
$lid = $_REQUEST['lid'];    //获取作者lid
$title = $_REQUEST['title'];   //作品名称
$hid = $_REQUEST['hid'];       //获取所属行业
$image = $_REQUEST['image'];   //作品图片
$des = $_REQUEST['des'];       //作品介绍
$lname = $_REQUEST['lname'];     //所属栏目

if($type == "add") {
    $sql = "insert into work(title,image, comNum,likes,lname,hid,lid,views,des) VALUES ('$title','$image',0,0,'$lname','$hid','$lid',0,'$des')";
}else{
    $sql = "update work set title='$title',hid='$hid',image='$image',des='$des',lname='$lname' where cid='$cid'";
}


$mysqli->query($sql);

if($mysqli->affected_rows){
    echo json_encode(array('error'=>0,'mes'=>"修改成功"));
}else{
    //新增作品失败
    echo json_encode(array('error'=>1,'mes'=>"修改失败"));
}



?>
