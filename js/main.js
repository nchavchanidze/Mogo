$(function() {
    var header = $(".navbar");
    var burger = $(".navbar-toggler")

    $(burger).click(function(){
        $(this).toggleClass('active');
        return false;
      });
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("header-bg");
        } else {
            header.removeClass("header-bg");
        }
    });
    
});
