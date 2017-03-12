<?php


//准备数据库配置
//define("HOST","sqld.duapp.com");
//define("USERNAME","22add207a4d64b958c64e1cb81307c97");
//define("PASSWORD","f2a05117c4d348aa9798f804643d885a");
//define("DBNAME","ItNoOwBHSYSQaJKWYwTk");
//define("PORT","4050");
//
////连接
//var_dump(1111);
//
//$mysqli = new mysqli(HOST,USERNAME,PASSWORD,DBNAME,PORT);
//
//if($mysqli->connect_error){
//    echo $mysqli->connect_error;
//    exit();
//}
//$mysqli->set_charset("utf8");
//连接成功，利用php对数据库进行操作


//获取作品详情
//$cid = $_GET['cid'];    //获取作品cid
//
//$sql = "select * from work where cid='$cid'";
//$work = $mysqli->query($sql)->fetch_assoc(); //获取主表内容
//$lid = $work['lid'];
//
//$sql = "select * from work_mes where cid='$cid'";
//$work_mes = $mysqli->query($sql)->fetch_assoc(); //获取副表内容
//
////获取评论数量
//$sql = "select count() from comment where cid='$cid'";
//$comNum = $mysqli->query($sql);
//
////获取被收藏的数量
//$sql = "select count() from collect where cid='$cid'";
//$collectNum = $mysqli->query($sql);
//
////作者信息
//$sql = "select * from user where lid='$lid'";
//$user = $mysqli->query($sql)->fetch_assoc();
//
//$arr = array(
//    'cid'=>$cid,
//    'title'=>$work['title'],
//    'comNum'=>$comNum,
//    'image'=>$work['image'],
//    'collectNum'=>$collectNum,
//    'content'=>$work_mes['content'],
//    'time'=>$work_mes['time'],
//    'name'=>$user['name'],
//    'thumb'=>$user['thumb']
//);
//



var_dump(123456);



?>