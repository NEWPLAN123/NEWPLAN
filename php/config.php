<?php
//准备数据库配置
define("HOST","localhost");
define("USERNAME","root");
define("PASSWORD","");
define("DBNAME","newplan");
define("PORT","3306");

//连接
$mysqli = new mysqli(HOST,USERNAME,PASSWORD,DBNAME,PORT);

if($mysqli->connect_error){
    echo $mysqli->connect_error;
    exit();
}
$mysqli->set_charset("utf8");
//连接成功，利用php对数据库进行操作

?>