$('a.burger').click(function(event) {
     $('ul.navi').toggleClass('nav-block');
});














////$('a.burger').click(function(event) {
////    $('a.burger').toggleClass('burger-cross');
////    $('div.sidebar').toggleClass('sidebar-full');
////    $('div.sidebar').toggleClass('sidebar-full-height');
////    $('div.nav-bg').toggleClass('nav-bg-pos');
////    $('.nav-content').toggleClass('nav-content-display');
////    $('.nav-content').toggleClass('nav-content-block');
////});
////
////
////
////
/////* HEADER PARALLAX */
////$(window).scroll(function(e){
////	parallax();
////});
////
////
////function parallax(){
////    var scrolled = $(window).scrollTop();
////    $('.header-img').css('top', +(scrolled * 0.5) + 'px');
////}
////
////
///////* SCROLL DOWN ARROW */
//////
//////console.log(headerHeight)
//////
//////$(document).ready(function() {
//////    $(".scroll-down").click(function(event){
//////        $('html, body').animate({scrollTop: + headerHeight}, 400);
//////    });
//////});
////
////
//
////HEADER SIZE
//headerHeight = $('header').outerHeight();
//
//$(document).on("scroll",function(){
//   if($(document).scrollTop()>headerHeight-50)
//   {$("header").removeClass("nuet").addClass("header-klein");}
//   else
//    {$("header").removeClass("header-klein").addClass("nuet");}
//});