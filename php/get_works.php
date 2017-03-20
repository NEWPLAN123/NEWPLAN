<?php include "config.php" ?>
<?php
//根据栏目获取所有作品列表

$lname = $_REQUEST['lname'];

$sql = "select * from work where lname='$lname'";

$rul = $mysqli->query($sql);

$arr = $rul->fetch_all(MYSQLI_ASSOC);

echo json_encode($arr);
?>