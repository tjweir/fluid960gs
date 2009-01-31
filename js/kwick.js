jQuery(function ($) {
    $("#kwick")
        .bind("mouseenter", function(e) {
            $(this).not(e.target).animate({ "width": 125 }, 200);
            $(e.target).animate({ "width": 485 }, 200);
        })
        .bind("mouseleave", function(e) {
            $(".kwick", this).animate({ "width": 215 }, 200);
        });
});
