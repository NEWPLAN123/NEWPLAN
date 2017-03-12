<?php include "config.php" ?>
<?php include "session.php" ?>

<?php

//获取作品所有评论

$cid = $_REQUEST['cid'];    //获得作品cid

//根据作品cid获取一级评论

$sql = "select * from comment where cid = '$cid' and tid='0'";

$rul = $mysqli->query($sql);

$arr1 = Array();

while($row = $rul->fetch_assoc()){
    $pid = $row['pid'];
    //把属于一级评论的找到，添加到里面去
    $sql = "select * from comment where tid='$pid'";

    $row2 = $mysqli->query($sql)->fetch_all(MYSQLI_ASSOC);

    $row['more'] = $row2;
    $ros['more_num'] = count($row2);

    $arr1[] = $row;
}


echo json_encode($arr1);


?>
