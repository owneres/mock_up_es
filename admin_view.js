function doalert(checkboxElem) {
  if ($("#subscInf").is(':checked')) {
    $("#subscNum").val("0");
    $("#subscNum").attr('disabled', true);
  } else {
    $("#subscNum").attr('disabled', false);
  }
}

$("#changes_btn").click(function() {

  if ($("#subscInf").is(':checked')) {
    $("#subsc-p").text("Unlimited");
    $("#left-p").text("Unlimited");
    $("#success-div").css("visibility", 'visible');
  } else {
    if (Number($("#subscNum").val()) == 0){
      $("#success-div").css("visibility", 'visible');
      return;
    }
    var newun = Number($("#subscNum").val()) - Number($("#used-p").text());
    if (newun < 0) {
      $("#warning-div").css("visibility", 'visible');
      return;
    }
    $("#subsc-p").text($("#subscNum").val());
    $("#left-p").text(newun);
    $("#success-div").css("visibility", 'visible');
  }
});


$(".close-alert").click(function(){
  $(this).parent().css( "visibility", "hidden" );
});
