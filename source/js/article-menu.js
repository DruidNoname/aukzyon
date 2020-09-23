$(document).ready(function() {

    var $element = $('#advantage-more');
    var counter = 0;
    $(window).scroll(function (){
        if ($(window).width() > 760){
            var visizone = $(window).scrollTop() + $(window).height();
            //Если скролл до конца елемента
            var notvisizone = $element.offset().top + $(window).height();
            //Если скролл до начала елемента
            // var offset = $element.offset().top

            if (visizone > notvisizone && counter == 0) {
                $('.article-nav').fadeIn(400);
                counter = 1;
            } else if (visizone < notvisizone && counter == 1) {
                $('.article-nav').fadeOut(400);
                counter = 0;
            }
        }
    });
})