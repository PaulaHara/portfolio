(function($){
    
    $(".navbar-collapse ul li a").click(function(){
        $(".navbar-toggler:visible").click()
    });

    $(function(){
        var btn_pagetop = $("#pagetop");
        $(window).on("scroll", function() {
            if ($(this).scrollTop() < 20) {
                btn_pagetop.addClass("fade");
            } else {
                btn_pagetop.removeClass("fade");
            }
        });

        $('#pagetop a, .nav-item a').click(function(){
            var speed = 500;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top - 100;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    });
})(jQuery);