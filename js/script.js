$(document).ready(function() {
    $(".togle p").hide();
    $("#design").click(function(){
        $("#design p").toggle();
        $("#design img").toggle();
    });
    $("#dev").click(function(){
        $("#dev p").toggle();
        $("#dev img").toggle();
    });
    $("#prod").click(function(){
        $("#prod p").toggle();
        $("#prod img").toggle();
    });
});