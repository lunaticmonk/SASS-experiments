(function(){
	var menu_btn = document.querySelector('#menu_btn');
	var home_btn = document.querySelector('#home_btn');
	var about_btn = document.querySelector('#about_btn');
	var contribute_btn = document.querySelector('#contribute_btn');
	var idk_btn = document.querySelector('#idk_btn');

	menu_btn.addEventListener('click',function(){
		home_btn.classList.toggle('move-home');		
		about_btn.classList.toggle('move-about');
		contribute_btn.classList.toggle('move-contribute');
		idk_btn.classList.toggle('move-idk');

		// menu_btn.addEventListener('mouseleave',function(){
		// 	home_btn.classList.add('rev-menu');
		// });
	});
})();