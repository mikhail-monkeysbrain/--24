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
    $('#popup-2').hide();
    $('.burger').click(function() {
    	$(this).hide(500);
        $('#left-menu').toggleClass("open");
    });
    $('.second').hide();
    $('.submit').click(function(){
        $('.first').hide(500);
        $('.second').show(500);
    })
    $('.close').click(function() {
        $('.burger').show(500);
        $('#left-menu').toggleClass("open");
        $('#popup').hide(500);
    });
    $('.close-2').click(function() {
        $('#popup-2').hide(500);
    });
    $('.map').click(function() {
    	$('.burger').show(500);
        $('#left-menu').toggleClass("open");
    	$('#popup').show(500);
	});
    $('.popup-map-icons--item-trans').click(function() {
        $('#popup').hide(300);
    });
    $('.phone-btn_call').click(function() {
        $('#popup').show(300);
    });
    $('.phone-btn_call__white').click(function() {
        $('#popup-2').show(300);
    });

})
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    loopTop: true,
	    loopBottom: true
	});
});