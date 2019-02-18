<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'quhecha';
    $conn = new mysqli($servername, $username, $password, $dbname);
    
	
	$result = $conn->query('select * from shouyegoods');
	$res = $result->fetch_all(MYSQLI_ASSOC);
	
	echo json_encode($res,JSON_UNESCAPED_UNICODE);
	
	$result->close();
	$conn->close();
	
?>