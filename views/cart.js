function renderCart(node) {
	var cartNode = document.createElement('div');
		cartNode.className = 'cart';
	var cart = JSON.parse(window.localStorage.getItem('cart'));
	if (!cart) {
		cart = [];
	}
	
	var container = document.createElement('div');
		container.className = 'container mb-4';
	var row = document.createElement('div');
		row.className = 'row';
	var col1 = document.createElement('div');
		col1.className = 'col-12';
	var col2 = document.createElement('div');
		col2.className = 'col mb-2';
	var tableDiv = document.createElement('div');
		tableDiv.className = 'table-responsive';
	var table = document.createElement('table');
		table.className = 'table table-striped';
	var thead = document.createElement('thead');
		thead.innerHTML = `
			<tr>
				<th scope="col"> </th>
				<th scope="col">Product</th>
				<th scope="col">Available</th>
				<th scope="col">Price</th>
				<th> </th>
			</tr>
		`;
	var tbody = document.createElement('tbody');
	
	for (var i = 0; i < cart.length; i++) {
		var tr = document.createElement('tr');
			tr.className = 'cart-tr';
		var img = document.createElement('img');
			img.src = cart[i].img1;
		var imgTd = document.createElement('td');
		var nameTd = document.createElement('td');
			nameTd.innerHTML = cart[i].name;
		var countTd = document.createElement('td');
			countTd.innerHTML = cart[i].count;
		var priceTd = document.createElement('td');
			priceTd.innerHTML = cart[i].price + '₽';
		var actionTd = document.createElement('td');
		var button = document.createElement('button');
			button.id = cart[i].id;
			button.className = 'btn btn-sm btn-danger';
			button.innerHTML = '<i class="fa fa-trash"></i> ';
			button.onclick = function() {
				removeGoodhandler(this.id);
				if (cart.length === 1) {
					goRoute(routes.main);
				} else {
					init();
				}
			};
		
		actionTd.append(button);
		
		imgTd.append(img);
		tr.append(imgTd);
		tr.append(nameTd);
		tr.append(countTd);
		tr.append(priceTd);
		tr.append(actionTd);
		
		tbody.append(tr);
	}
	
	col2.innerHTML = `
	<div class="col mb-2">
		<div class="row">
			<div class="col-sm-12  col-md-6">
				<button class="btn btn-lg btn-block btn-light" onClick="goRoute(routes.main)">Continue Shopping</button>
			</div>
			<div id="cart-checkout-container" class="col-sm-12 col-md-6 text-right">
				<button id="cart-checkout" class="btn btn-lg btn-block my-btn text-uppercase">Checkout</button>
			</div>
		</div>
	</div>
	`;
	
	table.append(thead);
	table.append(tbody);
	tableDiv.append(table);
	col1.append(tableDiv);
	row.append(col1);
	row.append(col2);
	container.append(row);
	cartNode.append(container);
	
	node.append(cartNode);
	
	if (!cart || !cart.length) {
		document.getElementById('cart-checkout-container').removeChild(document.getElementById('cart-checkout'));
	}
};