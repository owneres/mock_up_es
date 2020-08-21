$("#id-btn").click(function(){
  num = Number($("#subsc-id").val());
  newText = "";
  if (num > 0) {
    $("#new-ids-div").css("visibility", 'visible');
    for (var i = 0; i < num; i++){
      newId = Math.floor(Math.random()*1000000000);
      //len = 10 - newId.length;
      // if (newId.length > 0){
      //   for (len; len < 10; len++){
      //     newId = "0" + newId;
      //   }

      newText += "<p>" + newId +"</p>";
    }
  //  $("#new-ids-div").html(newText);
  }
  else {

    $("#new-ids-div").css("visibility", 'visible');
  }
  $("#new-ids-div").html(newText);
  }
);
