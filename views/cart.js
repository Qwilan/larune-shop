function renderCart(node) {
	var cartNode = document.createElement('div');
		cartNode.className = 'cart';
	var cart = JSON.parse(window.localStorage.getItem('cart'));
	if (!cart) {
		cart = [];
	}
	
	var sum = 0;
	
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
				<th scope="col">Quantity</th>
				<th width="10%"> </th>
			</tr>
		`;
	var tbody = document.createElement('tbody');
	
	for (var i = 0; i < cart.length; i++) {
		var good = getGoodById(cart[i].id);
		var count = (cart[i].count <= good.count)
			? cart[i].count
			: good.count;
		sum += cart[i].count * cart[i].price;
		var tr = document.createElement('tr');
			tr.className = 'cart-tr';
		var img = document.createElement('img');
			img.src = cart[i].img1;
		var imgTd = document.createElement('td');
		var nameTd = document.createElement('td');
			nameTd.innerHTML = cart[i].name;
		var countTd = document.createElement('td');
			countTd.innerHTML = good.count;
		var priceTd = document.createElement('td');
			priceTd.innerHTML = cart[i].price + ' ₽';
		var quantityTd = document.createElement('td');
		var input = document.createElement('input');
			input.id = 'cart-quantity-' + cart[i].id;
			input.value = count;
			input.className = 'form-control';
			input.onblur = function() {
				onQuantityBlur(this.id.slice(-1), this.value);
			};
		var actionTd = document.createElement('td');
			actionTd.className = 'text-right';
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
		quantityTd.append(input);
		
		imgTd.append(img);
		tr.append(imgTd);
		tr.append(nameTd);
		tr.append(countTd);
		tr.append(quantityTd);
		tr.append(priceTd);
		tr.append(actionTd);
		
		tbody.append(tr);
	}
	
	var trSub = document.createElement('tr');
		trSub.innerHTML = `
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>Sub-Total</td>
		`;
	var trSubTd = document.createElement('td');
		trSubTd.className = 'text-right';
		trSubTd.innerHTML = sum + ' ₽'
	
	var trShipping = document.createElement('tr');
		trShipping.innerHTML = `
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>Shipping</td>
		`;
	var trShippingTd = document.createElement('td');
		trShippingTd.className = 'text-right';
		trShippingTd.innerHTML = shippingCost + ' ₽'
		
	var trTotal = document.createElement('tr');
		trTotal.innerHTML = `
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>Total</td>
		`;
	var trTotalTd = document.createElement('td');
		trTotalTd.className = 'text-right';
		trTotalTd.innerHTML = sum + shippingCost + ' ₽'
		
	trSub.append(trSubTd);
	trShipping.append(trShippingTd);
	trTotal.append(trTotalTd);
	
	tbody.append(trSub);
	tbody.append(trShipping);
	tbody.append(trTotal);
	
	col2.innerHTML = `
	<div class="col mb-2">
		<div class="row">
			<div class="col-sm-12  col-md-6">
				<button class="btn btn-lg btn-block btn-light" onClick="goRoute(routes.main)">Continue Shopping</button>
			</div>
			<div id="cart-checkout-container" class="col-sm-12 col-md-6 text-right">
				<button id="cart-checkout" class="btn btn-lg btn-block my-btn text-uppercase" onClick="checkoutHandler()">Checkout</button>
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