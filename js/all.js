
$(document).ready(function() {
  $('.fa-heart').on('click',  function(){
      $(this).toggleClass('fas text-danger');
  });
  $('.btn-outline-danger').on('click',  function(){
      $(".far").removeClass('fas text-danger');
  });
    
});