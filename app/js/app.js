$(function(){
    $('a').hover(function() {
        $(this).children('.link').toggleClass("font-white")
        $(this).find('p').toggleClass("bw")
    });
})