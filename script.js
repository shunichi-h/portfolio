$(function(){

//common

//header
$('header a').click(function(){
  var id = $(this).attr('href');
  var position = $(id).offset().top;
  $('html, body').animate({
    'scrollTop': position
  }, 500);
});

//top-wrapper

//profile-wrapper

//skill-wrapper

//contact-wrapper
$('.contact-form').click(function(){
  $('.g-form').slideDown();
});

$('.fa-2x').click(function(){
  $('.g-form').slideUp();
});

//pagetop-wrapper
$('#top-btn').click(function(){
  $('html, body').animate({
    'scrollTop':0
  }, 500);
});

//footer


});
