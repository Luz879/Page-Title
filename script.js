$("button").click(function() {
    var cheetah  =$(".put").val();
    var message  =$("#line").val();
    var phone =$(".sink").val();
    $("#person").text("Your favorite activity is" + cheetah +"but sometimes you"+ message +"and you cook" + phone * 2 + "per year");
    
});