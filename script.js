jQuery(function($) {

/* Alicia's Code */
  var stickyNavTop = $('.navHeader').offset().top;

  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) {
      $('.navHeader').addClass('sticky');
  } else {
      $('.navHeader').removeClass('sticky');
  }
  };

  stickyNav();

  $(window).scroll(function() {
      stickyNav();
  });
/* //Alicia's Code */

  $(".menu").hide();
  $(".hamburger").click(function() {
    $(".menu").slideToggle("slow", function() {
      $(".hamburger").show();
    });
  });

 $('#buttonWCU').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destWCU').offset().top
   }, 500)
   $(".menu").slideToggle("slow", function() {
     $(".hamburger").show();
   });
 });

 $('#buttonI').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destI').offset().top
   }, 500)
   $(".menu").slideToggle("slow", function() {
     $(".hamburger").show();
   });
 });

 $('#buttonBAP').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destBAP').offset().top
   }, 500)
   $(".menu").slideToggle("slow", function() {
     $(".hamburger").show();
   });
 });

 $('#buttonTB').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destTB').offset().top
   }, 500)
   $(".menu").slideToggle("slow", function() {
     $(".hamburger").show();
   });
 });

 $('#buttonYNC').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destYNC').offset().top
   }, 500)
   $(".menu").slideToggle("slow", function() {
     $(".hamburger").show();
   });
 });

 $('#buttonYFRI').click(function(e) {
   e.preventDefault();
   $('html, body').animate({
     scrollTop: $('#destYFRI').offset().top
   }, 500)
   $(".menu").slideToggle("slow", function() {
     $(".hamburger").show();
   });
 });

});
