/* mobile nav menu functions */
$(document).ready(function () {
    $(".menu-open-btn").click(function () {
        $(".header-menu").fadeIn(100);
        $(".nav_ul").css("transform", "translate(0%,0%)");
        $(".menu-open-btn").css("display", "none");
        $(".menu-close-btn").css("display", "block");
        $(".menu-open-btn").css("visibility", "hidden");
        $(".menu-close-btn").css("visibility", "visible");

    });
});

$(document).ready(function () {
    $(".menu-close-btn").click(function () {
        $(".header-menu").fadeOut(100);
        $(".nav_ul").css("transform", "translate(-100%,0%)");
        $(".menu-open-btn").css("display", "block");
        $(".menu-close-btn").css("display", "none");
        $(".menu-open-btn").css("visibility", "visible");
        $(".menu-close-btn").css("visibility", "hidden");
    });
});