<?php include "config.php" ?>
<?php
//获取所有的作品

$sql = "select * from work";

$rul = $mysqli->query($sql);

$arr = $rul->fetch_all(MYSQLI_ASSOC);

echo json_encode($arr);


?>
