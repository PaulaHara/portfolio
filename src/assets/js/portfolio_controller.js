(function($){
    $(function(){
        var btn_pagetopblock = $("#pagetop");
        $(window).on("scroll", function() {
            if ($(this).scrollTop() < 20) {
                btn_pagetopblock.addClass("fade");
            } else {
                btn_pagetopblock.removeClass("fade");
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