

//Скрипт для эфекта увеличения при скроле
//И эфекта длюра (говно, тормазит, потом переделаю)
//$('.arkaplan').css('-webkit-filter', 'blur(5px)');
$(window).scroll(function(e) {
    var scrollSeviye = $(this).scrollTop();

    if(scrollSeviye>2400){
        scrollSeviye=2400;
    }

    var buyutme=(scrollSeviye/4000)+1;

    //$('.arkaplan').css('-webkit-filter', 'blur('+500/scrollSeviye+'px)');
    $('.bg-container').css('-webkit-filter', 'blur('+scrollSeviye/2400+'px)');
    $('.bg-container').css('transform', 'scale('+buyutme+')');
});

//Эфент нажатия на иконку (первую), в обратную сторону потом сделаю)
$(function() {
    $('#iconStart').click(function (e) {
        $.scrollTo('#endPage', 8000);
    });
});
