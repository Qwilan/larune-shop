function init() {
	var route = getRoute(window.location.hash);
	
	console.log(route);
	console.log(isAuth());
	
	root.innerHTML = '';
	console.log(route);
	
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
	
	if (login == adminLogin && password == adminPassword) {
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
	
	if (login !== adminLogin) {
		if (!validate(loginInput)) {
			loginWrap.dataset.validate = 'Username is required';
		} else {
			loginWrap.dataset.validate = 'Wrong username';
		}
		loginWrap.classList.add('alert-validate');
	}
	
	if (password !== adminPassword) {
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
	
	for (var i = 0; i < goods.length; i++) {
		if (goods[i].id == id) {
			return goods[i];
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
	if (good) {
		cart.push(good);
		localStorage.setItem("cart", JSON.stringify(cart));
		document.getElementById('cart-count').innerHTML = cart.length;
		console.log(cart);
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
	console.log(cart);
	var good = getGoodFromCartById(id);
	if (good) {
		for (var i = 0; i < cart.length; i++) {
			if (cart[i].id != good.id) {
				newCart.push(cart[i]);
			}
		}
		localStorage.setItem("cart", JSON.stringify(newCart));
		document.getElementById('cart-count').innerHTML = newCart.length || '';
		console.log(newCart);
	}
};

function scrollToTop() {
	window.scrollTo(0, 0);
};

init();