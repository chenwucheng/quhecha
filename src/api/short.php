<?php
	header("content-type:text/html;charset=utf-8");
	
	
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'quhecha';
    $conn = new mysqli($servername, $username, $password, $dbname);
    
	$page = isset($_POST['page']) ? $_POST['page'] : '';
	$qty = isset($_POST['qty']) ? $_POST['qty'] : '';
//
//	echo $page,$qty;
	$index = ($page - 1) * $qty;
//	echo $index,$qty;
	
	
	
	
	$sql = $conn->query("SELECT * FROM listgoods ORDER BY price DESC LIMIT $index,$qty");
	$res = $sql->fetch_all(MYSQLI_ASSOC);
	
	$sql4 = $conn->query("SELECT * FROM listgoods ORDER BY price  LIMIT $index,$qty");
	$res4 = $sql4->fetch_all(MYSQLI_ASSOC);
	
	$sql2 = $conn->query("SELECT * FROM listgoods ORDER BY xl DESC LIMIT $index,$qty");
	$res2 = $sql2->fetch_all(MYSQLI_ASSOC);
	
	$sql3 = $conn->query("SELECT * FROM listgoods ORDER BY pl DESC LIMIT $index,$qty");
	$res3 = $sql3->fetch_all(MYSQLI_ASSOC);
	

   	$goodslist = array(
   		'list' => $res,
   		'list2' => $res4,		
   		'xl' => $res2,
   		'pl' => $res3,
   		'page' => $page,
   		'qty' => $qty
   	);
	
// 	//把对象转成字符串，echo给前端
   	echo json_encode($goodslist,JSON_UNESCAPED_UNICODE);
	
   	$sql->close();
   	$sql2->close();
   	$sql3->close();
   	$sql4->close();
   	
   	
   
   	$conn->close();
	
	
	
//	echo json_encode($res,JSON_UNESCAPED_UNICODE);
//	
//	$result->close();
//	$conn->close();
	
	
	

?>