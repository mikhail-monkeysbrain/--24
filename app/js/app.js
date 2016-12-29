$(function(){
    $('a').hover(function() {
        $(this).children('.link').toggleClass("font-white")
        $(this).find('p').toggleClass("bw")
    });
})
$(function(){
  $('.popup-map-icons--item').height($('.popup-map-icons--item').width()/1);
  $(window).resize(function(){
    $('.popup-map-icons--item').height($('.popup-map-icons--item').width()/1);
  });
});
$(function(){
	$('#popup').hide();
    $('.burger').click(function() {
    	$(this).hide(500);
        $('#left-menu').toggleClass("open");
    });
    $('.close').click(function() {
    	$('.burger').show(500);
        $('#left-menu').toggleClass("open");
	});
    $('.map').click(function() {
    	$('.burger').show(500);
        $('#left-menu').toggleClass("open");
    	$('#popup').show(500);
	});
    $('.popup-map-icons--item-trans').click(function() {
    	$('#popup').hide(300);
	});

})
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    loopTop: true,
	    loopBottom: true
	});
});