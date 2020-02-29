
$(document).ready(function() {
  $('.fa-heart').on('click',  function(){
      $(this).toggleClass('fas text-danger');
  });
  $('.btn-outline-danger').on('click',  function(){
      $(".far").removeClass('fas text-danger');
  });
  $('.top').on('click',  function(){
    event.preventDefault();
    $('html,body').animate({ scrollTop: 0 }, 1000);
  });
  
  

});