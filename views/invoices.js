function renderInvoices(node) {
	var invoices = document.createElement('div');
		invoices.id = 'invoices';
		invoices.className = 'container';
	
	var checkout = JSON.parse(window.localStorage.getItem('checkout'));
	if (!checkout) {
		checkout = [];
	}
	
	for (var i = 0; i < checkout.length; i++) {
		var date = new Date(checkout[i].date);
		var sum = 0;
		
		var invoice = document.createElement('div');
			invoice.className = 'm-t-30 m-b-30';
			
		var card = document.createElement('div');
			card.className = 'card';
		
		var cardBody = document.createElement('div');
			cardBody.className = 'card-body p-0';
			
		var headerRow = document.createElement('div');
			headerRow.className = 'row p-5';
			
		var headerCol1 = document.createElement('div');
			headerCol1.className = 'col-md-6';
			headerCol1.innerHTML = '<img src="http://via.placeholder.com/400x90?text=logo">';
		
		var headerCol2 = document.createElement('div');
			headerCol2.className = 'col-md-6 text-right';
			
		var invoiceId = document.createElement('p');
			invoiceId.className = 'font-weight-bold mb-1';
			invoiceId.innerHTML = 'Invoice #' + checkout[i].id;
			
		var invoiceDate = document.createElement('p');
			invoiceDate.className = 'text-muted';
			invoiceDate.innerHTML = 'Due to: ' + date.toLocaleString('en', { day: 'numeric', month: 'short', year: 'numeric' });;
		
		var hr = document.createElement('hr');
			hr.className = 'my-5';
			
		var bodyRow = document.createElement('div');
			bodyRow.className = 'row pb-5 p-5';
			
		var bodyCol1 = document.createElement('div');
			bodyCol1.className = 'col-md-6';
			
		var bodyCol1P1 = document.createElement('p');
			bodyCol1P1.className = 'font-weight-bold mb-4';
			bodyCol1P1.innerHTML = 'Client Information';
			
		var bodyCol1P2 = document.createElement('p');
			bodyCol1P2.className = 'mb-1';
			bodyCol1P2.innerHTML = checkout[i].client;
			
		var bodyCol1P3 = document.createElement('p');
			bodyCol1P3.innerHTML = 'Acme Inc';
			
		var bodyCol1P4 = document.createElement('p');
			bodyCol1P4.className = 'mb-1';
			bodyCol1P4.innerHTML = 'Berlin, Germany';
			
		var bodyCol1P5 = document.createElement('p');
			bodyCol1P5.className = 'mb-1';
			bodyCol1P5.innerHTML = '6781 45P';
			
		var bodyCol2 = document.createElement('div');
			bodyCol2.className = 'col-md-6 text-right';
			
		var bodyCol2P1 = document.createElement('p');
			bodyCol2P1.className = 'font-weight-bold mb-4';
			bodyCol2P1.innerHTML = 'Payment Details';
			
		var bodyCol2P2 = document.createElement('p');
			bodyCol2P2.className = 'mb-1';
			bodyCol2P2.innerHTML = '<span class="text-muted">VAT: </span> 1425782';
			
		var bodyCol2P3 = document.createElement('p');
			bodyCol2P3.className = 'mb-1';
			bodyCol2P3.innerHTML = '<span class="text-muted">VAT ID: </span> 10253642';
			
		var bodyCol2P4 = document.createElement('p');
			bodyCol2P4.className = 'mb-1';
			bodyCol2P4.innerHTML = '<span class="text-muted">Payment Type: </span> Root';
			
		var bodyCol2P5 = document.createElement('p');
			bodyCol2P5.className = 'mb-1';
			bodyCol2P5.innerHTML = 'Name: ';
			
		var bodyCol2P5Span = document.createElement('span');
			bodyCol2P5Span.className = 'text-muted';
			bodyCol2P5Span.innerHTML = checkout[i].client;
		
		headerCol2.append(invoiceId);
		headerCol2.append(invoiceDate);
		
		bodyCol1.append(bodyCol1P1);
		bodyCol1.append(bodyCol1P2);
		bodyCol1.append(bodyCol1P3);
		bodyCol1.append(bodyCol1P4);
		bodyCol1.append(bodyCol1P5);
		
		bodyCol2P5.append(bodyCol2P5Span);
		
		bodyCol2.append(bodyCol2P1);
		bodyCol2.append(bodyCol2P2);
		bodyCol2.append(bodyCol2P3);
		bodyCol2.append(bodyCol2P4);
		bodyCol2.append(bodyCol2P5);
		
		var goodsRow = document.createElement('div');
			goodsRow.className = 'row p-5';
			
		var goodsCol = document.createElement('div');
			goodsCol.className = 'col-md-12';
			
		var goodsTable = document.createElement('table');
			goodsTable.className = 'table';
			
		var goodsThead = document.createElement('thead');
			goodsThead.innerHTML = `
				<tr>
					<th class="border-0 text-uppercase small font-weight-bold">ID</th>
					<th class="border-0 text-uppercase small font-weight-bold">Item</th>
					<th class="border-0 text-uppercase small font-weight-bold">Quantity</th>
					<th class="border-0 text-uppercase small font-weight-bold">Unit Cost</th>
					<th class="border-0 text-uppercase small font-weight-bold">Total</th>
				</tr>
			`;
			
		var goodsTbody = document.createElement('tbody');
		
		for (var j = 0; j < checkout[i].goods.length; j++) {
			var good = checkout[i].goods[j];
			sum += good.price * good.count;
			var tr = document.createElement('tr');
			var idTd = document.createElement('td');
				idTd.innerHTML = good.id;
			var nameTd = document.createElement('td');
				nameTd.innerHTML = good.name;
			var quantityTd = document.createElement('td');
				quantityTd.innerHTML = good.count;
			var priceTd = document.createElement('td');
				priceTd.innerHTML = good.price + ' ₽';
			var sumTd = document.createElement('td');
				sumTd.innerHTML = good.price * good.count + ' ₽';
			
			tr.append(idTd);
			tr.append(nameTd);
			tr.append(quantityTd);
			tr.append(priceTd);
			tr.append(sumTd);
			
			goodsTbody.append(tr);
		}
		
		var footerRow = document.createElement('div');
			footerRow.className = 'd-flex flex-row-reverse bg-dark text-white p-4';
			
		var footerRowDiv1 = document.createElement('div');
			footerRowDiv1.className = 'py-3 px-5 text-right';
			
		var footerRowDiv1Div1 = document.createElement('div');
			footerRowDiv1Div1.className = 'mb-2';
			footerRowDiv1Div1.innerHTML = 'Grand Total';
		var footerRowDiv1Div2 = document.createElement('div');
			footerRowDiv1Div2.className = 'h2 font-weight-light';
			footerRowDiv1Div2.innerHTML = sum + shippingCost + ' ₽';
			
		var footerRowDiv2 = document.createElement('div');
			footerRowDiv2.className = 'py-3 px-5 text-right';
			
		var footerRowDiv2Div1 = document.createElement('div');
			footerRowDiv2Div1.className = 'mb-2';
			footerRowDiv2Div1.innerHTML = 'Shipping cost';
		var footerRowDiv2Div2 = document.createElement('div');
			footerRowDiv2Div2.className = 'h2 font-weight-light';
			footerRowDiv2Div2.innerHTML = shippingCost + ' ₽';
			
		var footerRowDiv3 = document.createElement('div');
			footerRowDiv3.className = 'py-3 px-5 text-right';
			
		var footerRowDiv3Div1 = document.createElement('div');
			footerRowDiv3Div1.className = 'mb-2';
			footerRowDiv3Div1.innerHTML = 'Sub - Total amount';
		var footerRowDiv3Div2 = document.createElement('div');
			footerRowDiv3Div2.className = 'h2 font-weight-light';
			footerRowDiv3Div2.innerHTML = sum + ' ₽';
			
		footerRowDiv1.append(footerRowDiv1Div1);
		footerRowDiv1.append(footerRowDiv1Div2);
		footerRowDiv2.append(footerRowDiv2Div1);
		footerRowDiv2.append(footerRowDiv2Div2);
		footerRowDiv3.append(footerRowDiv3Div1);
		footerRowDiv3.append(footerRowDiv3Div2);
		
		footerRow.append(footerRowDiv1);
		footerRow.append(footerRowDiv2);
		footerRow.append(footerRowDiv3);
		
		headerRow.append(headerCol1);
		headerRow.append(headerCol2);
		bodyRow.append(bodyCol1);
		bodyRow.append(bodyCol2);
		goodsTable.append(goodsThead);
		goodsTable.append(goodsTbody);
		goodsCol.append(goodsTable);
		goodsRow.append(goodsCol);
		cardBody.append(headerRow);
		cardBody.append(hr);
		cardBody.append(bodyRow);
		cardBody.append(goodsRow);
		cardBody.append(footerRow);
		card.append(cardBody);
		invoice.append(card);
		/*invoice.innerHTML = `
			<div class="card">
                <div class="card-body">

                    <div class="d-flex flex-row-reverse bg-dark text-white p-4">
                        <div class="py-3 px-5 text-right">
                            <div class="mb-2">Grand Total</div>
                            <div class="h2 font-weight-light">$234,234</div>
                        </div>

                        <div class="py-3 px-5 text-right">
                            <div class="mb-2">Discount</div>
                            <div class="h2 font-weight-light">10%</div>
                        </div>

                        <div class="py-3 px-5 text-right">
                            <div class="mb-2">Sub - Total amount</div>
                            <div class="h2 font-weight-light">$32,432</div>
                        </div>
                    </div>
                </div>
            </div>
		`;*/
		
		invoices.append(invoice);
	}
	
	const route = getRoute(window.location.hash);
	
	if (!document.getElementById('invoices')) {
		node.append(invoices);
	}
};