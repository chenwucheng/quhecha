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
	
	
	
	
	$sql = $conn->query("SELECT * FROM listgoods ORDER BY id  LIMIT $index,$qty");
	$res = $sql->fetch_all(MYSQLI_ASSOC);
	
		//获取总条数
   	$sql2 =$conn->query("SELECT * FROM listgoods");
	

	
// 	//获取总行数
   	$num = $sql2->num_rows;
	
//   	var_dump($res);

   	$goodslist = array(
   		'total' => $num,
   		'list' => $res,
   		'page' => $page,
   		'qty' => $qty
   	);
	
// 	//把对象转成字符串，echo给前端
   	echo json_encode($goodslist,JSON_UNESCAPED_UNICODE);
	
   	$sql->close();
   	$sql2->close();
   	$conn->close();
	
	
	
//	echo json_encode($res,JSON_UNESCAPED_UNICODE);
//	
//	$result->close();
//	$conn->close();
	
	
	

?>