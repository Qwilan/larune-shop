function init() {
	var route = getRoute(window.location.hash);
	
	var localGoods = JSON.parse(window.localStorage.getItem('goods'));
	
	if (!localGoods) {
		window.localStorage.setItem('goods', JSON.stringify(goods));
	}
	
	console.log(route);
	console.log(isAuth());
	
	root.innerHTML = '';
	
	if (isAuth() && route === routes.login) {
		goRoute(routes.main);
		return;
	}
	
	if (!isAuth() && route !== routes.login) {
		goRoute(routes.login);
		return;
	}
	
	if (route === routes.cart) {
		renderNavBar(root);
		renderCart(root);
		renderFooter(root);
		return;
	}
	
	if (route === routes.invoices) {
		renderNavBar(root);
		renderInvoices(root);
		renderFooter(root);
		return;
	}
	
	if (route === routes.login) {
		renderLoginPage(root);
		return;
	}
	
	if (route === routes.main) {
		renderNavBar(root);
		renderMainPage(root);
		renderFooter(root);
		return;
	}
};

function clearLocalStorage() {
	window.localStorage.removeItem("login");
	window.localStorage.removeItem("password");
	window.localStorage.removeItem("timestamp");
	window.localStorage.removeItem("cart");
	window.localStorage.removeItem("goods");
	window.localStorage.removeItem("checkout");
};

function isAuth() {
	var login = window.localStorage.getItem("login");
	var password = window.localStorage.getItem("password");
	var timestamp = window.localStorage.getItem("timestamp");
	
	var now = Date.now();
	
	if ((now - timestamp) > 3 * 60 * 60 * 1000) {
		clearLocalStorage();
		return false;
	}
	
	if (login && login.toLowerCase() == adminLogin.toLowerCase() && password && password.toLowerCase() == adminPassword.toLowerCase()) {
		return true;
	}
	return false;
};

function validate(input) {
	if (input.value.trim() == '') {
		return false;
	}
	return true;
};

function focusHandler(id) {
	if (id === 'login') {
		var loginWrap = document.getElementById('login-wrap');
		loginWrap.classList.remove('alert-validate');
	}
	
	if (id === 'password') {
		var passwordWrap = document.getElementById('password-wrap');
		passwordWrap.classList.remove('alert-validate');
	}
};

function authHandler() {
	event.preventDefault();
	var loginInput = document.getElementById("login");
	var passwordInput = document.getElementById("password");
	var login = loginInput.value.toLowerCase();
	var password = passwordInput.value.toLowerCase();
	var timestamp = Date.now();
	
	var loginCheck = true;
	var passwordCheck = true;

	var loginWrap = document.getElementById('login-wrap');
	var passwordWrap = document.getElementById('password-wrap');
	
	window.localStorage.setItem("login", login);
	window.localStorage.setItem("password", password);
	window.localStorage.setItem("timestamp", timestamp);
	
	if (login !== adminLogin.toLowerCase()) {
		if (!validate(loginInput)) {
			loginWrap.dataset.validate = 'Username is required';
		} else {
			loginWrap.dataset.validate = 'Wrong username';
		}
		loginWrap.classList.add('alert-validate');
	}
	
	if (password !== adminPassword.toLowerCase()) {
		if (!validate(passwordInput)) {
			passwordWrap.dataset.validate = 'Password is required';
		} else {
			passwordWrap.dataset.validate = 'Wrong password';
		}
		passwordWrap.classList.add('alert-validate');
	}
	
	if (isAuth()) {
		console.log("logged in");
		goRoute(routes.main);
		return;
	}
};

function logoutHandler() {
	event.preventDefault();
	clearLocalStorage();
	window.location.reload();
};

function getGoodById(id) {
	if (!id && id != 0) return null;
	
	var localGoods = JSON.parse(window.localStorage.getItem('goods'));
	
	for (var i = 0; i < localGoods.length; i++) {
		if (localGoods[i].id == id) {
			return localGoods[i];
		}
	}
	
	return null;
};

function getGoodFromCartById(id) {
	if (!id && id != 0) return null;
	var cart = JSON.parse(localStorage.getItem("cart"));
	if (!cart) {
		cart = [];
	}
	
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == id) {
			return cart[i];
		}
	}
	
	return null;
};

function addGoodhandler(id) {
	if (!id && id != 0) return;
	var cart = JSON.parse(localStorage.getItem("cart"));
	if (!cart) {
		cart = [];
	}
	var good = getGoodById(id);
	var newGood = {
		id: good.id,
		name: good.name,
		count: 1,
		price: good.price,
		img1: good.img1,
		img2: good.img2,
	};
	if (good) {
		newGood.count = 1;
		cart.push(newGood);
		localStorage.setItem("cart", JSON.stringify(cart));
		document.getElementById('cart-count').innerHTML = cart.length;
	}
};

function removeGoodhandler(id) {
	console.log(id);
	if (!id && id != 0) return;
	var cart = JSON.parse(localStorage.getItem("cart"));
	if (!cart) {
		cart = [];
	}
	var newCart = [];
	var good = getGoodFromCartById(id);
	if (good) {
		for (var i = 0; i < cart.length; i++) {
			if (cart[i].id != good.id) {
				newCart.push(cart[i]);
			}
		}
		localStorage.setItem("cart", JSON.stringify(newCart));
		document.getElementById('cart-count').innerHTML = newCart.length || '';
	}
};

function onQuantityBlur(id, count) {
	var cart = JSON.parse(window.localStorage.getItem('cart'));
	if (!cart) {
		cart = [];
	}
	var good = getGoodById(id);
	for (var i = 0; i < cart.length; i++) {
		if (cart[i].id == id) {
			console.log(true);
			var newCount = (count <= good.count)
				? count
				: good.count;
			cart[i].count = newCount;
			document.getElementById('cart-quantity-' + id).value = newCount;
		} 
	}
	localStorage.setItem("cart", JSON.stringify(cart));
	document.getElementById('cart-count').innerHTML = cart.length || '';
	init();
};

function updateLocalGoods(good) {
	var localGoods = JSON.parse(window.localStorage.getItem('goods'));
	if (!localGoods) {
		localGoods = [];
	}
	for (var i = 0; i < localGoods.length; i++) {
		var newGood = localGoods[i].id;
		if (localGoods[i].id == good.id) {
			localGoods[i] = good;
		}
	}
	window.localStorage.setItem('goods', JSON.stringify(localGoods));
};

function checkoutValidate(good, count) {
	if (good.count - count >= 0) {
		return true;
	}
	document.getElementById('cart-quantity-' + good.id).value = 0;
	return false;
};

function checkoutHandler() {
	var cart = JSON.parse(window.localStorage.getItem('cart'));
	if (!cart) {
		cart = [];
	}
	
	console.log(cart);
	
	if (!cart || !cart.length) {
		return;
	}
	
	var checkout = JSON.parse(window.localStorage.getItem('checkout'));
	if (!checkout) {
		checkout = [];
	}
	
	console.log(checkout);
	
	checkout.push({
		id: newGuid(),
		client: adminLogin,
		date: new Date(),
		goods: cart,
	});
	
	console.log(checkout);
	
	var isCheckout = false;
	
	for (var i = 0; i < cart.length; i++) {
		var good = getGoodById(cart[i].id);
		const isValid = checkoutValidate(good, cart[i].count);
		console.log(5, isValid);
		if (isValid) {
			console.log('asdasd');
			var newGood = good;
			newGood.count -= cart[i].count;
			console.log(newGood.count);
			updateLocalGoods(newGood);
			isCheckout = true;
		}
	}
	
	if (!isCheckout) {
		return;
	}
	
	window.localStorage.removeItem('cart');
	window.localStorage.setItem('checkout', JSON.stringify(checkout));
	goRoute(routes.invoices);
};

function newGuid() {
  return 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 8 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(8);
  });
}

function scrollToTop() {
	window.scrollTo(0, 0);
};

init();