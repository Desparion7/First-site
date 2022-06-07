document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	const burgermenu = document.querySelector('.fa-bars');
	const allNavLink = document.querySelectorAll('.nav-link');
	const collapse = document.querySelector('.navbar-collapse');

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add('shadow-bg');
		} else {
			nav.classList.remove('shadow-bg');
		}
	}

	function addMenuShadow() {
		if (burgermenu.classList.contains('shadow-bg')) {
		} else {
			nav.classList.add('shadow-bg');
		}
	}

	allNavLink.forEach((link) =>
		link.addEventListener('click', () => collapse.classList.remove('show'))
	);

	window.addEventListener('scroll', addShadow);
	burgermenu.addEventListener('click', addMenuShadow);

	console.log(allNavLink);
});
