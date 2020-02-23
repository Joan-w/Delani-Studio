$(document).ready(function() {
    $("#design").click(function() {
        $("#design-show").toggle("slow");
        $("#design-hide").toggle(1000);
    });
    $("#dev").click(function() {
        $("#dev-show").toggle("slow");
        $("#dev-hide").toggle(1000);
    });
    $("#prod").click(function() {
        $("#prod-show").toggle("slow");
        $("#prod-hide").toggle(1000);
    });
});    