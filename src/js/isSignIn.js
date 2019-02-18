
	

var ul = document.getElementsByClassName('toptip')[0];
var cookies = document.cookie;
var car = document.getElementsByClassName("car")[0];
var url_php;
$ul2 = $('.toptip .user')[0];
$ul3 = $('.toptip .tc')[0];
if(cookies.length>0){
    var arr = cookies.split("=");

    $ul2.innerHTML = "欢迎你！" + arr[1];
    $ul3.style.display = 'block';
    
    
//  $ul.children[1].style.display = "list-item";
    ul.children[0].children[0].style.display = "none";
    ul.children[1].children[0].style.display = "none";

    	url_php = "../api/getCar.php";
    	getCarQty();
    
    
	function getCarQty(){
		$.ajax({
	    	type:"get",
	    	url:url_php,
	    	data:{
	    		userName:arr[1]
	    	},
	    	success:function(data){
	    		var goods = JSON.parse(data);
	    		var qty = 0;
	    		for(var i=0;i<goods.length;i++){
	    			qty+=parseInt(goods[i].qty);
	    		}
	    		
	    		car.children[0].innerHTML = qty;
	    	}
    	});
	}
    
}

$ul3.onclick = function(){
	var d = new Date();
	d.setDate(d.getDate()-1);
	document.cookie = "userInfor=" + "" + "; path=/" + "; expires=" + d.toUTCString();
//		$ul.children[1].children[0].display = 'none';
	
		location.href = location.href;

}
   




