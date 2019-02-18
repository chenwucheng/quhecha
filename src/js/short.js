

var goods = document.getElementsByClassName('list-goods')[0];

var price = document.getElementById('btnPrice');
var xl = document.getElementById('btnXl');
var pl = document.getElementById('btnPl');
var istrue = true;



price.onclick = ev =>{
				
				
                var ev = ev||window.event;
                

                   
                    var url = '../api/short.php';
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
										<input type="button" name="btnCart" id="btnCart" value="加入购物车" />
									</a>
								</li>`
			
			            }).join('');
			            
			            goods.innerHTML = res;
			            
			            
				for(var i=0;i<$goods.children.length;i++){
			goods.children[i].children[0].onclick = function(e){
				e.preventDefault();
				let id = this.parentElement.dataset.id;
				location.href = 'goods.html?' + encodeURI(id);
			}
		}
                        

                    });

                
            }

istrue=false;
price.onclick = ev =>{

                var ev = ev||window.event;
                

                    
                    var url = '../api/short.php';
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
										<input type="button" name="btnCart" id="btnCart" value="加入购物车" />
									</a>
								</li>`
			
			            }).join('');
			            
			            goods.innerHTML = res;
			            
			            for(var i=0;i<$goods.children.length;i++){
			goods.children[i].children[0].onclick = function(e){
				e.preventDefault();
				let id = this.parentElement.dataset.id;
				location.href = 'goods.html?' + encodeURI(id);
			}
		}

                        

                    });

                
            }

xl.onclick = ev =>{

                var ev = ev||window.event;
                

                    
                    var url = '../api/short.php';
        			var data = 'page=1&qty=12';

			        ajax('post',url,data,function(str){
			            var arr = JSON.parse(str);
			            var res = arr.xl.map(function(item){
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
			            
			            goods.innerHTML = res;

                        for(var i=0;i<$goods.children.length;i++){
			goods.children[i].children[0].onclick = function(e){
				e.preventDefault();
				let id = this.parentElement.dataset.id;
				location.href = 'goods.html?' + encodeURI(id);
			}
		}

                    });

                
            }

pl.onclick = ev =>{

                var ev = ev||window.event;
                

                    
                    var url = '../api/short.php';
        			var data = 'page=1&qty=12';

			        ajax('post',url,data,function(str){
			            var arr = JSON.parse(str);
			            var res = arr.pl.map(function(item){
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
			            
			            goods.innerHTML = res;

                        for(var i=0;i<$goods.children.length;i++){
			goods.children[i].children[0].onclick = function(e){
				e.preventDefault();
				let id = this.parentElement.dataset.id;
				location.href = 'goods.html?' + encodeURI(id);
			}
		}

                    });

                
            }