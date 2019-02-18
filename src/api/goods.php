<?php
	$id = isset($_GET["id"])? $_GET["id"] : "";
	
	$severname = "localhost";
	$username = "root";
	$password = "";
	$dbname = "quhecha";
	$conn = new mysqli($severname,$username,$password,$dbname);
	
	
	
	$result = $conn->query('select * from listgoods');
	$res = $result->fetch_all(MYSQLI_ASSOC);
	
	foreach($res as $item){
		if($item["id"]==$id){
			echo json_encode($item,JSON_UNESCAPED_UNICODE);
			break;
		}
	}
	
	$result->close();
	
	$conn->close();
	
	
	
?>