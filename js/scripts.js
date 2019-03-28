$(document).ready(function(){
  $("button#submit").click(function(){
    var age = $("#age").val();

    if (age ==="1"){
      $("#older-than-18").show();
      $("#under-18").hide();
    } else {
      $("#under-18").show();
      $("#older-than-18").hide();
    }
  });
});
