<?php include "config.php" ?>
<?php include "session.php" ?>


<?php

session_start();

//获取关注设计师的列表
$lid = $_SESSION['lid'];    //获取用户lid

//获取对应的关注gid
$sql = "select gid from user where lid='$lid'";

$gid = $mysqli->query($sql)->fetch_assoc()['gid'];

//从关注信息表中查找关注的设计师
$sql = "select * from follow where gid='$gid'";

$arr = $mysqli->query($sql)->fetch_all(MYSQLI_ASSOC);

echo json_encode($arr);



?>
