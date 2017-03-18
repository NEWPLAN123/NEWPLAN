<?php include "config.php" ?>
<?php

//根据传进来的 lid 获取用户信息
$lid = $_REQUEST['lid'];

$sql  = "select * from user where lid = '$lid'";
$rul = $mysqli->query($sql)->fetch_assoc();

echo json_encode($rul);

?>