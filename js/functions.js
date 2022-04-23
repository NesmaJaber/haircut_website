$(function(){
	
/*------------------ Change Active Class --------------------------*/
	$(".nav-item").click(function(){
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    });
  
	
}); //end jQuery code

