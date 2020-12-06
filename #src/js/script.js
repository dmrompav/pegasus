window.onload = function() {
	// !preloader =======================================================
	document.querySelector('#preloader').style.opacity = "0";
	document.querySelector('#wrapper').style.opacity = "1";

	// !images =======================================================
	let articleImg = document.querySelectorAll('.article__photo');
	articleImg[0].style.backgroundImage = 'url(../img/img1.png)';
	articleImg[1].style.backgroundImage = 'url(../img/img2.png)';
	articleImg[2].style.backgroundImage = 'url(../img/img3.png)';
	articleImg[3].style.backgroundImage = 'url(../img/img4.png)';
	articleImg[4].style.backgroundImage = 'url(../img/img5.png)';
	articleImg[5].style.backgroundImage = 'url(../img/img6.png)';
}