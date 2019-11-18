function renderNavBar(node) {
	var navBar = document.createElement('div');
		navBar.id = 'navBar';
	navBar.innerHTML = `
	<nav class="navbar navbar-expand-md navbar-dark bg-dark">
		<div class="container">
			<a class="navbar-brand" href="#" onClick="goRoute(routes.main);return false;">Larune's shop</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault">
				<ul class="navbar-nav">
					<li id="nav-home" class="nav-item m-auto">
						<a class="nav-link" href="#" onClick="goRoute(routes.main);return false;">Home</a>
					</li>
					<li id="nav-cart" class="nav-item active">
						<a class="nav-link" href="#" onClick="goRoute(routes.cart);return false;">Cart <span class="sr-only">(current)</span></a>
					</li>
					<li id="nav-invoices" class="nav-item active">
						<a class="nav-link" href="#" onClick="goRoute(routes.invoices);return false;">Invoices <span class="sr-only">(current)</span></a>
					</li>
				</ul>

				<form class="nav-form form-inline my-2 my-lg-0">
					<a class="btn my-btn btn-sm ml-3" href="#" onClick="goRoute(routes.cart);return false;">
						<i class="fa fa-shopping-cart"></i> Cart
						<span id="cart-count" class="badge badge-light"></span>
					</a>
					<a class="btn btn-light btn-sm ml-3" href="" onClick="logoutHandler();return false;">
						<i class="fa fa-sign-out"></i> logout
					</a>
				</form>
			</div>
		</div>
	</nav>
	`;
	
	const route = getRoute(window.location.hash);
	
	if (!document.getElementById('navBar')) {
		node.prepend(navBar);
	} else {
		return;
	}
	
	if (route === routes.main) {
		document.getElementById('nav-home').classList.add('active');
		document.getElementById('nav-cart').classList.remove('active');
		document.getElementById('nav-invoices').classList.remove('active');
	}
	
	if (route === routes.cart) {
		document.getElementById('nav-home').classList.remove('active');
		document.getElementById('nav-cart').classList.add('active');
		document.getElementById('nav-invoices').classList.remove('active');
	}
	
	if (route === routes.invoices) {
		document.getElementById('nav-home').classList.remove('active');
		document.getElementById('nav-cart').classList.remove('active');
		document.getElementById('nav-invoices').classList.add('active');
	}
	
	var cart = JSON.parse(window.localStorage.getItem('cart'));
	if (cart && cart.length) {
		document.getElementById('cart-count').innerHTML = cart.length;
	}
};

`<nav class="navbar navbar-expand-xl nav_area sticky">
		<div class="container">
			<div class="logo">
				<a href="" class="logo-light">Larune's shop</a>
				<a href="" class="logo-dark">Larune's shop</a>
			</div>
			<div class="collapse navbar-collapse " id="navbarNav">
				<ul class="navbar-nav ml-auto navbar-center main_menu onepage_nav">
					<li class="nav-item active">
						<a class="nav-link" href="" onClick="goRoute(routes.main);return false;">Shop</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="" onClick="logoutHandler();return false;">Logout</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>`