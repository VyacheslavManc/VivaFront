/*
 Модальное окно
 открыть по кнопке
*/
$('.js-img').click(function() {
	$('.js-overlay-campaign').fadeIn().addClass('disabled');

});

// закрыть на крестик
$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});

$(document).ready(function() {
	$(".js-img").magnificPopup({
		delegate: 'a',
		type : 'image',
		gallery : {
			enabled: true,
     navigateByImgClick: true,
     preload: [0, 1]
		},
		closeBtnInside: true
	});
});

input.oninput = function(){
	result.innerHML = input.value
}