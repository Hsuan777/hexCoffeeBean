
$(document).ready(function() {
  $('.innerProduct__item__like').on('click',  function(){
      $(this).find('.far').toggleClass('fas text-danger');
  });
  $('.top').on('click',  function(){
    event.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 1000);
  });
  $('.card-img-top, .card-body, .innerProduct__item::before').hover(function(){
    $(this).parent().toggleClass('innerProduct__item__active');
  });
  $('.card-body .btn').hover(function(){
    $('.card-body').parent().toggleClass('innerProduct__item__active');
  });
  
  


  
  // $('.card-img-top').on('click',  function(){
  //   $(this).parent().toggleClass('innerProduct__item__active').siblings()
	// 	.removeClass('innerProduct__item__active').find().toggleClass('innerProduct__item__active');
    
  // });

});