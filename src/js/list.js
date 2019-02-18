
$(function(){
	
//	列表页数据渲染
	$goods = $('.list-goods')[0];
	$pag = $('.list-pag')[0];
	
	
	$.ajax({
		type:"post",
		url:'../api/list.php',
		data: {
				page: 1,
				qty: 12
				
			},
		success:function(str){
			var arr = JSON.parse(str);

			res = arr.list.map(function(item){
				return `
					<li data-id="${item.id}">
						<a href="javascript:;">
							<img src="${item.imgurl}" alt="" />
						</a>
						<a href="javascript:;">
							<span class="s1">${item.name}</span>
						</a>
						<p class="p1">￥${item.price}</p>
						<p class="p2">
							<span class="s2">市场价<del class="del">￥${item.priceed}</del></span>
							<span class="s3">${item.pl}人评论</span>
						</p>
						<a href="javascript:;">
							<input type="button" name="btnBut" id="btnBut" value="立即购买" />
						</a>
						<a href="javascript:;">
							<input type="button" name="btnCart" id="btnCart" value="加入购物车" />
						</a>
					</li>
					`
			}).join('');
			
			$goods.innerHTML = res;
			
			var num = Math.ceil(arr.total/arr.qty);
            for(var i=0;i<num;i++){
                $pag.innerHTML += `						
						<span class="active">${i+1}</span>`
						
            }
            $pag.children[0].className = '';
            
            
		
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
});
	



