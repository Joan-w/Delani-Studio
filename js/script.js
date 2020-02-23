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
    $(".img0").mouseenter(function() {
        $(".text0").show(1000);
    });
    $(".img0").mouseleave(function() {
        $(".text0").hide(750);
    });
    $(".img1").mouseenter(function() {
        $(".text1").show(1000);
    });
    $(".img1").mouseleave(function() {
        $(".text1").hide(750);
    });
});    