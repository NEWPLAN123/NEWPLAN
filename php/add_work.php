<?php include "config.php" ?>
<?php include "session.php" ?>

<?php

session_start();

//添加作品

$lid = $_SESSION['lid'];    //获取作者lid
$title = $_REQUEST['title'];   //作品名称
$hid = $_REQUEST['hid'];       //获取所属行业
$image = $_REQUEST['image'];   //作品图片
$des = $_REQUEST['des'];       //作品介绍
$lname = $_REQUEST['lmnae'];     //所属栏目

$sql = "insert into work(title,comNum,like,image) values ($title,0,0,$image)";

$mysqli->query($sql);

if($mysqli->affected_rows){
    //找到这条记录，获取到cid
    $sql = "select * from work where title='$title' and image='$image'";
    $row = $mysqli->query($sql)->fetch_assoc();
    $cid = $row['cid']; //获取到主表后，副表插入内容
    $sql = "insert into work_mes(cid,hid,lid,time,views,des,lname) values('$cid','$hid','lid',TIMESTAMP,0,'$des','$lname')";
    $rul = $mysqli->query($sql);
    if($rul->num_rows){
        //如果新增副表成功
        echo "新增作品成功";  //提示信息并返回作品列表
    }else{
        //如果新增副表失败，那么删除前面新增的主表
        $sql = "delete from work where cid='$cid'";
        $mysqli->query($sql);
    }
}else{
    //新增作品失败
    echo "新增作品失败";
}



?>
