function goRoute(route) {
	if (!route && route != "") return;
	
	console.log(route);
	
	var prevRoute = getRoute(window.location.hash);
	
	if (prevRoute == route) {
		return;
	}
	
	var pathname = window.location.pathname;
	window.location.href = pathname + getHash(route);
	init();
};

function getRoute(hash) {
	if (!hash) return "";
	
	return hash.slice(1);
};

function getHash(route) {
	if (!route) return "#"
	
	return "#" + route;
};
