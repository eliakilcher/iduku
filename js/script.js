$('a.burger').click(function(event) {
    $('a.burger').toggleClass('burger-cross');
    $('div.sidebar').toggleClass('sidebar-full');
    $('div.sidebar').toggleClass('sidebar-full-height');
    $('div.nav-bg').toggleClass('nav-bg-pos');
    $('.nav-content').toggleClass('nav-content-display');
    $('.nav-content').toggleClass('nav-content-block');
});




/* HEADER PARALLAX */
$(window).scroll(function(e){
	parallax();
});


function parallax(){
    var scrolled = $(window).scrollTop();
    $('.header-img').css('top', +(scrolled * 0.5) + 'px');
}


/* SCROLL DOWN ARROW */
headerHeight = $('header h1').outerHeight();
console.log(headerHeight)

$(document).ready(function() {
    $(".scroll-down").click(function(event){
        $('html, body').animate({scrollTop: + headerHeight}, 400);
    });
});

$(document).on("scroll",function(){
   if($(document).scrollTop()>headerHeight-110)
   {$(".scroll-down").removeClass("nuet").addClass("scroll-down-pos");}
   else
    {$(".scroll-down").removeClass("scroll-down-pos").addClass("nuet");}
});