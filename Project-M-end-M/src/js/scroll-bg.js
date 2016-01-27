
//$('.arkaplan').css('-webkit-filter', 'blur(5px)');
$(window).scroll(function(e) {
    var scrollSeviye = $(this).scrollTop();

    if(scrollSeviye>2400){
        scrollSeviye=2400;
    }

    var buyutme=(scrollSeviye/4000)+1;

    //$('.arkaplan').css('-webkit-filter', 'blur('+500/scrollSeviye+'px)');
    $('.arkaplan').css('-webkit-filter', 'blur('+scrollSeviye/2400+'px)');
    $('.arkaplan').css('transform', 'scale('+buyutme+')');
});
