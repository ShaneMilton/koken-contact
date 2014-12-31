$(document).ready(function(){
$("#ajax-contact-form").submit(function(){
var str = $(this).serialize();
$.ajax({
  type: "POST",
  // Add you're own url file path to the contact.php here!!
  url: "http://www.shanemiltonphotography.com/koken/storage/themes/axis-86d2f683-9f90-ca3f-d93f-a2e0a9d0a089/contact/contact.php",
  data: str,
  success: function(msg){
    $("#note").ajaxComplete(function(event, request, settings){
    if(msg == 'Thank You! Your Message Was Sent!') {
		//alert('ok');
      result = '<div class="notification_ok">'+msg+'</div>';
      $("#fields").hide();
    }
    else {
		//alert('error');
     result = '<div class="notification_error">'+msg+'</div>';
    }
    $(this).hide();
    $(this).html(result).slideDown("slow");
    $(this).html(result);
  }); }
});
return false;
});
});
