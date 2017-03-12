<?php include "config.php" ?>
<?php include "session.php" ?>


<?php

session_start();

//获取收藏作品的列表
$lid = $_SESSION['lid'];    //获取用户lid

//获取对应的收藏sid
$sql = "select sid from user where lid='$lid'";

$sid = $mysqli->query($sql)->fetch_assoc()['sid'];

//从关注信息表中查找关注的设计师
$sql = "select * from collect where sid='$sid'";

$arr = $mysqli->query($sql)->fetch_all(MYSQLI_ASSOC);

echo json_encode($arr);



?>
