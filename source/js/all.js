$(document).ready(function() {
    if (self != top) {
        top.setIframeEvents();
    } else {

//плавная прокрутка

        $('.js-anchor').click(function (e) {
            e.stopPropagation();

            var $area = $('#' + $(this).data('area')),
                $areaFor = $('#' + $area.attr('for')).prop('checked'),
                $tab = $('#' + $(this).data('tab')),
                $for = $('#' + $tab.attr('for')).prop('checked');

            if (!$areaFor) {
                $area.click();
            }

            if (!$for) {
                $tab.click();
            }
            var linkTop = $('#' + $(this).data('link')).offset().top;
            $('html, body').scrollTop(linkTop);

        });

    }

//спойлер

    $('.btn_sh, .btn').each(function () {
        var $pull = $('#' + $(this).attr('for')).next();
        $(this).click(function () {
            $pull.toggleClass('pullVisible');
            $('.close').toggleClass('spoiler_opend');
        });

    });

// //мобильное меню
//
    $('.header__mobile_menu').on('click', function () {
        var button = $(this);
        if ($('.header__nav').css('display') == 'none') {
            $('.header').addClass('header--opend');
            $('.header__nav').addClass('header__nav--opend');
            button.addClass('header__mobile_menu--opend');
        } else {
            $('.header').removeClass('header--opend');
            $('.header__nav').removeClass('header__nav--opend');
            button.removeClass('header__mobile_menu--opend');
        }
    });

    window.onload = function () {

        $(function () { //
            $('a[href*=#]:not([href=#])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 20
                        }, 1000);
                        $('.article-nav--opend').toggleClass('article-nav--opend');
                        $('.header__mobile_menu').toggleClass('header__mobile_menu--opend');
                        return false;
                    }
                }
            });
        });
    }
})