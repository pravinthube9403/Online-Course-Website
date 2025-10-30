
$(document).ready(function () {
    // Add a class
    $(".menubar ul li:first").addClass("menu-active");

    $(".hamburger>i").click(function () {
        $(".sidebar").addClass("sidebar-active");
    });

    // Remove a class
    $(".close").click(function () {
        $(".sidebar").removeClass("sidebar-active");
    });


    // toggle for dark light mode class
    $(".dark-light-button").click(function () {
        $("body").toggleClass("active");

        let isDark = $("body").hasClass("active");

        $(".toggle-img").fadeOut(200, function () {
            $(this).attr(
                "src",
                isDark
                    ? "./assets/home/Rate-dark.png"
                    : "./assets/home/Rate-light.png"
            );
            $(this).fadeIn(200);
        });

    });

    $(".dark-mode").click(function () {
        $("body").toggleClass("active");

        let isDark = $("body").hasClass("active");

        $(".toggle-img").fadeOut(200, function () {
            $(this).attr(
                "src",
                isDark
                    ? "./assets/home/Rate-dark.png"
                    : "./assets/home/Rate-light.png"
            );
            $(this).fadeIn(200);
        });

    });


    $(".read-more").click(function () {

        $(this).prev(".feature-text").toggleClass("show-all");

        // Toggle button text
        $(this).text(
            $(".feature-text").hasClass("show-all") ? "Show Less" : "Read More"
        );
    });







    $(".menubar ul li").click(function () {
        $(".menubar ul li").removeClass("menu-active");
        $(this).toggleClass("menu-active");
    });

    
});