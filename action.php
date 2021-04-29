
<?php

$result = $_POST['voltDrop_cableType'];
$result_explode = explode('|', $result);


$type = $result_explode[0].;
$rating = $result_explode[1].
$size = $_POST["voltDrop_cableSize"];
$pk = $_POST["p"];
$ok = $_POST["o"];

$link = mysql_connect('localhost', 'root', 'randompassword');
if (!$link){
  die(' Oops. We Have A Problem Here: ' . mysql_error());
}

if ($link){
  echo 'connected succesfully';
}

mysql_select_db("forum") or die(' Oops. We Have A Problem Here: ' . mysql_error());

$u = mysql_real_escape_string($un);
$p = mysql_real_escape_string($pk);
$o = mysql_real_escape_string($ok);
$sql = "INSERT INTO users (username, password, occupation) VALUES ('$u', '$p', '$o')";
$ins_sql = mysql_query($sql);
IF($ins_sql) {
  echo 'Inserted new record.';
}ELSE{
  echo 'Insert Failed.';
}
?>