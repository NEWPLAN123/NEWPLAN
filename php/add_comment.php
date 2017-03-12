<?php include_once "config.php" ?>
<?php include_once "session.php" ?>

<?php

session_start();

//添加评论
//1、添加一级评论
//2、添加一级评论下面的回复


$lid = $_SESSION['lid'];    //获取用户lid

//根据用户lid找到用户信息
$sql = "select name from user where lid='$lid'";

$type = $_POST['type'];

$owner = $mysqli->query($sql)->fetch_assoc()['name'];   //评论发出者
$content = $_POST['content'];;                          //评论内容
$cid = $_POST['cid'];                                    //所属作品cid


if($type == 'one'){
    //如果添加的是一级评论
    $sql = "insert into comment(owner,toname,sendtime,content,cid,tid) values('$owner','',TIMESTAMP ,'$content','$cid',0)";
}else if($type == "two"){
    //如果添加的是一级评论里面的评论
    $toname = $_POST['toname'];
    $pid = $_POST['pid'];
    $sql = "insert into comment(owner,toname,sendtime,content,cid,tid) values('$owner','$toname',TIMESTAMP ,'$content','$cid',$pid)";
}

$mysqli->query($sql);

if($mysqli->affected_rows){
    echo '评论成功';
}else{
    echo '评论失败';
}


?>
