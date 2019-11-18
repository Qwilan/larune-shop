new Promise(function(resolve, reject) {
	var constantsScript = document.createElement('script');
	constantsScript.type = 'text/javascript';
	constantsScript.src = 'js/constants.js';
	resolve(document.body.append(constantsScript));
});

new Promise(function(resolve, reject) {
	var dataScript = document.createElement('script');
	dataScript.type = 'text/javascript';
	dataScript.src = 'js/data.js';
	resolve(document.body.append(dataScript));
});

new Promise(function(resolve, reject) {
	var navbarScript = document.createElement('script');
	navbarScript.type = 'text/javascript';
	navbarScript.src = 'views/navbar.js';
	resolve(document.body.append(navbarScript));
});

new Promise(function(resolve, reject) {
	var footerScript = document.createElement('script');
	footerScript.type = 'text/javascript';
	footerScript.src = 'views/footer.js';
	resolve(document.body.append(footerScript));
});

new Promise(function(resolve, reject) {
	var routerScript = document.createElement('script');
	routerScript.type = 'text/javascript';
	routerScript.src = 'js/router.js';
	resolve(document.body.append(routerScript));
});

new Promise(function(resolve, reject) {
	var loginScript = document.createElement('script');
	loginScript.type = 'text/javascript';
	loginScript.src = 'views/login.js';
	resolve(document.body.append(loginScript));
});

new Promise(function(resolve, reject) {
	var mainScript = document.createElement('script');
	mainScript.type = 'text/javascript';
	mainScript.src = 'views/main.js';
	resolve(document.body.append(mainScript));
});

new Promise(function(resolve, reject) {
	var cartScript = document.createElement('script');
	cartScript.type = 'text/javascript';
	cartScript.src = 'views/cart.js';
	resolve(document.body.append(cartScript));
});

new Promise(function(resolve, reject) {
	var invoicesScript = document.createElement('script');
	invoicesScript.type = 'text/javascript';
	invoicesScript.src = 'views/invoices.js';
	resolve(document.body.append(invoicesScript));
});

new Promise(function(resolve, reject) {
	var appScript = document.createElement('script');
	appScript.type = 'text/javascript';
	appScript.src = 'js/app.js';
	resolve(document.body.append(appScript));
});