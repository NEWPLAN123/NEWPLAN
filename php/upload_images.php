<?php

$f = $_FILES['files'];

$time = date('Y-m-d');

if(!file_exists('./upload')){
    mkdir('./upload');
}

if(!file_exists('./upload/'.$time)){
    //如果没有 当天的文件夹 那么创建
    mkdir('./upload/'.$time);
}

//设置相对路径
$dir = 'upload/'.$time."/";

$randNum = rand(10000000,99999999);
$time = date('Ymd').$randNum;   //随机名称

$posfix =  strrchr($f['name'],"."); //后缀名

//重新给文件起名字
$fname = $time.$posfix;

//$url = $_SERVER["HTTP_REFERER"]."php/".$dir.$fname;
$url = "php/".$dir.$fname;

//文件的移动
move_uploaded_file($f['tmp_name'],$dir.$fname);

$mes = "上传头像失败";
$error = 1;
if(!$f["error"]){
    $mes = "上传头像成功";
    $error  = 0;
}

//返回绝对路径
echo json_encode(array('error'=>$error,'mes'=>$mes,'url'=>$url));

?>










