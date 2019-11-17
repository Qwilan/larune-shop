function renderFooter(node) {
	var footer = document.createElement('footer');
		footer.className = 'text-light';
		
	node.classList.add('with-footer');
		
	footer.innerHTML = `
	<div class="container">
		<div class="row">
			<div class="col-md-3 col-lg-4 col-xl-3">
				<h5>About</h5>
				<hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
				<p class="mb-0">
					Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.
				</p>
			</div>

			<div class="col-md-2 col-lg-2 col-xl-2 mx-auto">
				<h5>Informations</h5>
				<hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
				<ul class="list-unstyled">
					<li><a href="">Link 1</a></li>
					<li><a href="">Link 2</a></li>
					<li><a href="">Link 3</a></li>
					<li><a href="">Link 4</a></li>
				</ul>
			</div>

			<div class="col-md-3 col-lg-2 col-xl-2 mx-auto">
				<h5>Others links</h5>
				<hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
				<ul class="list-unstyled">
					<li><a href="">Link 1</a></li>
					<li><a href="">Link 2</a></li>
					<li><a href="">Link 3</a></li>
					<li><a href="">Link 4</a></li>
				</ul>
			</div>

			<div class="col-md-4 col-lg-3 col-xl-3">
				<h5>Contact</h5>
				<hr class="bg-white mb-2 mt-0 d-inline-block mx-auto w-25">
				<ul class="list-unstyled">
					<li><i class="fa fa-home mr-2"></i> Larune's shop</li>
					<li><i class="fa fa-envelope mr-2"></i> larune5@gmail.com</li>
					<li><i class="fa fa-phone mr-2"></i> + 7 123 456 78 90</li>
					<li><i class="fa fa-print mr-2"></i> + 7 123 456 78 90</li>
				</ul>
			</div>
			<div class="col-12 copyright mt-3">
				<p class="float-left">
					<a href="#" onClick="scrollToTop();return false;">Back to top</a>
				</p>
				<p class="text-right text-muted">created with <i class="fa fa-heart"></i> by <a href="https://vk.com/id53229721" target="_blank"><i>Larune</i></a> | <span>v. 1.0</span></p>
			</div>
		</div>
	</div>
	`;
	
	if (!document.getElementById('footer')) {
		node.append(footer);
	}
};