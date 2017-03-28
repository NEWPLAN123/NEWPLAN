<?php include "config.php" ?>

<?php

//获取作品所有评论

$cid = $_REQUEST['cid'];    //获得作品cid

//根据作品cid获取一级评论

$sql = "select * from comment where cid = '$cid' and tid='0' order by sendtime asc";

$rul = $mysqli->query($sql);

$arr1 = Array();

while($row = $rul->fetch_assoc()){
    $pid = $row['pid'];
    //把属于一级评论的找到，添加到里面去
    $sql = "select * from comment where tid='$pid' order by sendtime asc";

    $row2 = $mysqli->query($sql)->fetch_all(MYSQLI_ASSOC);

    $row['more'] = $row2;
    $row['more_num'] = count($row2);

    $arr1[] = $row;
}


echo json_encode($arr1);


?>
