
	

//var goods = document.getElementsByClassName('list-goods')[0];
$goods = $('.list-goods')[0];
//var id = decodeURI(location.search).slice(1);

var page = document.getElementById('list-pag');

        var url = '../api/list.php';
        var data = 'page=1&qty=12';

        ajax('post',url,data,function(str){
            var arr = JSON.parse(str);
            var res = arr.list.map(function(item){
                return `<li data-id="${item.id}">
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
							<input class="toCar" type="button" name="btnCart" id="btnCart" value="加入购物车" />
						</a>
					</li>`

            }).join('');
            
            $goods.innerHTML = res;
            
            var num = Math.ceil(arr.total/arr.qty);
            for(var i=0;i<num;i++){
                page.innerHTML += `<span>${i+1}</span>`
						
            }
            page.children[0].className = 'active';
            
            for(var i=0;i<$goods.children.length;i++){
			$goods.children[i].children[0].onclick = function(e){
				e.preventDefault();
				let id = this.parentElement.dataset.id;
				location.href = 'goods.html?' + encodeURI(id);
			}
		}
            
            
            
           var toCar = document.getElementsByClassName("toCar")[0];

			
		toCar.onclick = function(){


			$.ajax({
		
				
				type:"get",
				url:"../api/setCar.php",
				data:{
					userName:arr[1],
					id:arr.list.id,
					imgURL:arr.list.imgurl,
					goodsName:arr.list.name,
					price:arr.list.price
				},
				success:function(){
					alert("添加成功");
					getCarQty();
				}
			})
		}

            

        });



page.onclick = ev =>{

                var ev = ev||window.event;
                if(ev.target.tagName.toLowerCase() == 'span'){

                    var num2 = ev.target.innerHTML;
                    var url = '../api/list.php';
                    var data = 'qty=12&page='+num2;
                    ajax('post',url,data,function(str){

                        var arr = JSON.parse(str);
                        var res = arr.list.map(function(item){
                            return `<li data-id="${item.id}">
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
					</li>`
                        }).join('');

                        $goods.innerHTML = res;
                        
                        for(var i=0;i<$goods.children.length;i++){
			$goods.children[i].children[0].onclick = function(e){
				e.preventDefault();
				let id = this.parentElement.dataset.id;
				location.href = 'goods.html?' + encodeURI(id);
			}
		}

                        for(var i = 0;i<page.children.length;i++){
                            page.children[i].className = '';
                            ev.target.className = 'active';
                        }

                    });

                }
            }

