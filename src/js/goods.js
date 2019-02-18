



var id = decodeURI(location.search).slice(1);
$goods = $(".goods-goods")[0];
$goods2 = $(".goods-l")[0];



$.ajax({
	type:"get",
	url:"../api/goods.php",
	data:{id:id},
	success:function(str){
		var list = JSON.parse(str);
		
		$content = `<div class="box-img">
						<div id="MagnifierWrap2">
	<div class="MagnifierMain">
		<img class="MagTargetImg" src="${list.imgurl2}" data-src="${list.imgurl2}"> 
	</div>
	<span class="spe_leftBtn">&lt;</span>
	<span class="spe_rightBtn">&gt;</span>
	<div class="spec-items"> 
		<ul>
			<li class="on"><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc="${list.imgurl2}"></li>
			<li><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc="${list.imgurl2}"></li>
			<li><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc=".${list.imgurl2}"></li>
			<li><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc="${list.imgurl2}"></li>

			<li><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc="${list.imgurl2}"></li>
			<li><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc="${list.imgurl2}"></li>
			<li><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc="${list.imgurl2}"></li>
			<li><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc="${list.imgurl2}"></li>
			
			<li><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc="${list.imgurl2}"></li>
			<li><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc="${list.imgurl2}"></li>
			<li><img src="${list.imgurl2}" data-lsrc="${list.imgurl2}" data-maxSrc="${list.imgurl2}"></li>
		</ul>
	</div>
</div>
						
						<a href="##"><img class="i2" src="../img/goods-sc.png" alt="" /></a>
						<a href="##"><img class="i3" src="../img/goods-fx.png" alt="" /></a>
						
					</div>
					<div class="box-txt">
						<p class="p1">${list.name}</p>
						<div class="d1">
							<p class="p2">
								<span class="s1">活动价</span>
								<span class="s2">￥${list.price}</span>
								<img class="i2" src="../img/goods-tx.png"/>
							</p>
							<p class="p3">市场价<del class="del">￥176.00</del></p>
						</div>
						<div class="box-pl">
							<p class="p1">配送至：&nbsp;
								<select name="">
									<option value="广东省">广东省</option>
									<option value="福建省">福建省</option>
									
								</select>&nbsp;
								正在计算运费.....正在加载.....
							</p>
							<p class="p2">顾客评分：&nbsp;
								<img class="i1" src="../img/goods-pf.png"/>
								4.92分(已有${list.pl}人评论)
							</p>
							
							
						</div>
						<div class="box-pl2">
							<p class="p1">
								<span class="s1">品牌商家：&nbsp;滋恩</span>
								<span class="s2">产地：&nbsp;福建南平</span>
							</p>
							
							<p class="p1">
								<span class="s1">等级：&nbsp;特级</span>
								<span class="s2">保质期：&nbsp;3年</span>
							</p>
							<p class="p1">
								<span class="s1">产品编号：&nbsp;721537</span>
								<span class="s2">产品规格：&nbsp;50g</span>
							</p>
							<p class="p1">
								<span class="s1">存储方法：&nbsp;存放于干燥、通风、遮光环境</span>
						
							</p>
							
						</div>
						<div class="goods-qty">
							我要购买：
							<input type="text" name="qty" id="qty" value="1" />
							<input type="button" name="add" id="add" value="+"/>
							<input type="button" name="jian" id="jian" value="-" />
							
							件
							
						</div>
						<div class="but">
							<span class="s1">￥立即购买</span>
							<span class="s2 toCar"><img class="i1" src="../img/goods-jr.png"/>加入购物车</span>
							
						</div>
					</div>
					<div class="see">看过的人还看过</div>`;
		
		$goods.innerHTML = $content;
		
		$content2 = `<ul class="nav">
						<a href="##">
							<li class="l1">商品详情</li>
							<li>售后服务</li>
							<li>物流配送</li>
							<li>用户评价</li>
						</a>				
					</ul>
					<img class="i1" src="${list.imgurl3}"/>
					
					<div class="goods-pl2">
						<img style="margin-top:-100px;" class="i2" src="../img/goods-pl2.png"/>
						<div class="comlist"></div>
					</div>`;
		
		$goods2.innerHTML = $content2;
		
		var toCar = document.getElementsByClassName("toCar")[0];

			
		toCar.onclick = function(){


			$.ajax({
		
				
				type:"get",
				url:"../api/setCar.php",
				data:{
					userName:arr[1],
					id:list.id,
					imgURL:list.imgurl,
					goodsName:list.name,
					price:list.price
				},
				success:function(){
					alert("添加成功");
					getCarQty();
				}
			})
		}
		
		
		
		
	}
});


