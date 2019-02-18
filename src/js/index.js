$(function(){
	
//	首页数据渲染
	$goods = $('.main-goods')[0];
	
	$.ajax({
		url:'api/shouye.php',
		success:function(str){
			var arr = JSON.parse(str);
//			console.log(arr)
			res = arr.map(function(item){
				return `
					<li>
						<a href="##">
							<img src="${item.imgurl}" alt="" />
							<span class="s1">${item.name}</span><br />
							<span class="s2">${item.price}</span>
							<del class="s3">￥${item.priceed}</del>
						</a>						
					</li>
					`
			}).join('');
			
			$goods.innerHTML = res;
		
		}
	});
	
	
	
});
	



