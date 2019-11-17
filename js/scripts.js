var constantsScript = document.createElement('script');
	constantsScript.type = 'text/javascript';
	constantsScript.src = 'js/constants.js';
	
var routerScript = document.createElement('script');
	routerScript.type = 'text/javascript';
	routerScript.src = 'js/router.js';
	
var dataScript = document.createElement('script');
	dataScript.type = 'text/javascript';
	dataScript.src = 'js/data.js';
	
var navbarScript = document.createElement('script');
	navbarScript.type = 'text/javascript';
	navbarScript.src = 'views/navbar.js';
	
var footerScript = document.createElement('script');
	footerScript.type = 'text/javascript';
	footerScript.src = 'views/footer.js';
	
var loginScript = document.createElement('script');
	loginScript.type = 'text/javascript';
	loginScript.src = 'views/login.js';
	
var mainScript = document.createElement('script');
	mainScript.type = 'text/javascript';
	mainScript.src = 'views/main.js';
	
var cartScript = document.createElement('script');
	cartScript.type = 'text/javascript';
	cartScript.src = 'views/cart.js';
	
var appScript = document.createElement('script');
	appScript.type = 'text/javascript';
	appScript.src = 'js/app.js';
	
document.body.append(constantsScript);
document.body.append(routerScript);
document.body.append(dataScript);
document.body.append(navbarScript);
document.body.append(footerScript);
document.body.append(loginScript);
document.body.append(mainScript);
document.body.append(cartScript);
document.body.append(appScript);