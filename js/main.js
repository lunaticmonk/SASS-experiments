(function(){
	var menu_btn = document.querySelector('#menu_btn');
	var home_btn = document.querySelector('#home_btn');
	var about_btn = document.querySelector('#about_btn');
	var contribute_btn = document.querySelector('#contribute_btn');
	menu_btn.addEventListener('click',function(){
	home_btn.classList.add('move-home');		
	about_btn.classList.add('move-about');
	contribute_btn.classList.add('move-contribute');
	});
})();