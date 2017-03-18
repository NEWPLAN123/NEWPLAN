<?php include "config.php" ?>
<?php include "session.php" ?>


<?php

//获取作品详情，现在主表和副表融合在一起了
$cid = $_REQUEST['cid'];    //获取作品cid

$sql = "select * from work where cid='$cid'";
$work = $mysqli->query($sql)->fetch_assoc(); //获取主表内容
$lid = $work['lid'];

$sql = "select * from work_mes where cid='$cid'";
$work_mes = $mysqli->query($sql)->fetch_assoc(); //获取副表内容

//获取评论数量
$sql = "select count() from comment where cid='$cid'";
$comNum = $mysqli->query($sql);

//获取被收藏的数量
$sql = "select count() from collect where cid='$cid'";
$collectNum = $mysqli->query($sql);

//作者信息
$sql = "select * from user where lid='$lid'";
$user = $mysqli->query($sql)->fetch_assoc();

$arr = array(
    'cid'=>$cid,
    'title'=>$work['title'],
    'comNum'=>$comNum,
    'image'=>$work['image'],
    'collectNum'=>$collectNum,
    'content'=>$work_mes['content'],
    'time'=>$work_mes['time'],
    'name'=>$user['name'],
    'thumb'=>$user['thumb']
);

echo json_encode($arr);




?>