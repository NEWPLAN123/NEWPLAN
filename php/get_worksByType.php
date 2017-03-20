<?php include "config.php" ?>
<?php
//根据条件获取所有作品列表

$type = $_GET['type'];
$val = $_REQUEST['val'];

$sql = "select * from work where ".$type."='$val'";

$rul = $mysqli->query($sql);

$arr = $rul->fetch_all(MYSQLI_ASSOC);

echo json_encode($arr);
?>