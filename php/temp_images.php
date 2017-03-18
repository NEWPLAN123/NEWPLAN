<?php

//上传临时文件夹

$f = $_FILES['files'];

if(!file_exists('./upload')){
    mkdir('./upload');
}

//设置相对路径
$dir = 'upload/temp/';

if(!file_exists('./upload/temp')){
    mkdir('./upload/temp');
}

$randNum = rand(10000000,99999999);
$time = date('Ymd').$randNum;   //随机名称

$posfix =  strrchr($f['name'],"."); //后缀名

//重新给文件起名字
$fname = $time.$posfix;

$url = $_SERVER["HTTP_REFERER"]."php/".$dir.$fname;

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










