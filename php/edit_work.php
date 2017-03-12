<?php include "config.php" ?>
<?php include "session.php" ?>

<?php

session_start();

//修改作品

$cid = $_REQUEST['cid'];    //获取要修改的作品的cid

$sql = "select * from work where cai='$cid'";

$work = $mysqli->query($sql)->fetch_assoc();    //获取主表内容

$sql = "select * from work_mes where cai='$cid'";

$work_mes = $mysqli->query($sql)->fetch_assoc();    //获取副表内容

$arr = Array(
    'title'=>"{$work['title']}",
    'image'=>"{$work['image']}",
    'hid'=>"{$work_mes['hid']}",
    'des'=>"{$work_mes['des']}",
    'lname'=>"{$work_mes['lname']}"
);

echo json_encode($arr);




?>
