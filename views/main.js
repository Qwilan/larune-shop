function renderMainPage(node) {
	var localGoods = JSON.parse(window.localStorage.getItem('goods'));
	
	var mainPage = document.createElement("div");
		mainPage.className = 'main';
	
	var container = document.createElement("div");
		container.className = "container";
	
	var row = document.createElement("div");
		row.className = "row";
	
	for (var i = 0; i < localGoods.length; i++) {
		var good = getGoodFromCartById(localGoods[i].id);
		
		var col = document.createElement('div');
			col.className = 'col-md-3 col-sm-6 m-b-15 m-t-15';
		
		var productGrid = document.createElement('div');
			productGrid.id = 'grid-' + localGoods[i].id;
			productGrid.className = 'product-grid4';
		
		if (good) {
			productGrid.classList.add('active');
		}

		var productImage = document.createElement("div");
			productImage.className = "product-image4";
		
		var imageBlock = document.createElement("div");
		
		var img1 = document.createElement("img");
			img1.className = "pic-1";
			img1.src = "assets/" + localGoods[i].img1;
		var img2 = document.createElement("img");
			img2.className = "pic-2";
			img2.src = "assets/" + localGoods[i].img2;
		
		var span = document.createElement('span');
			span.className = 'product-discount-label';
			span.innerHTML = localGoods[i].count;

		var productContent = document.createElement('div');
			productContent.className = 'product-content';
		
		var title = document.createElement('h3');
			title.className = "title";
			title.innerHTML = localGoods[i].name;
		
		var price = document.createElement('div');
			price.className = 'price';
			price.innerHTML = localGoods[i].price + '₽';
		
		var addA = document.createElement('button');
			addA.id = localGoods[i].id;
			addA.className = 'add-to-cart';
			addA.onclick = function() {
				var localGood = getGoodFromCartById(this.id);
				var a = document.getElementById(this.id);
				var grid = document.getElementById('grid-' + this.id);
				if (localGood) {
					removeGoodhandler(this.id);
					a.innerHTML = 'ADD TO CART';
					grid.classList.remove('active');
				} else {
					addGoodhandler(this.id);
					a.innerHTML = 'REMOVE FROM CART';
					grid.classList.add('active');
				}
				return false;
			};
		if (good) {
			addA.innerHTML = 'REMOVE FROM CART';
		} else {
			addA.innerHTML = 'ADD TO CART';
		}
		
		imageBlock.append(img1);
		imageBlock.append(img2);
		imageBlock.append(span);
		productImage.append(imageBlock);

		productContent.append(title);
		productContent.append(price);
		if (localGoods[i].count) {
			productContent.append(addA);
		}

		productGrid.append(productImage);
		productGrid.append(productContent);
		
		col.append(productGrid);
		row.append(col);
	}

	container.append(row);
	mainPage.append(container);
	node.append(mainPage);
};
