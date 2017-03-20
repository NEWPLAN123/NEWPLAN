<?php include "config.php" ?>
<?php

//删除作品

$cid = $_REQUEST['cid'];    //获取要删除的作品的cid

$sql = "delete from work where cid='$cid'";
$mysqli->query($sql);

var_dump($sql);

//删除收藏列表里面的收藏
$sql = "delete from collect where cid='$cid'";
$mysqli->query($sql);

//删除对应的评论
$sql = "delete from comment where cid='$cid'";
$mysqli->query($sql);


?>
