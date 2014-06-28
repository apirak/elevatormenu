
$(document).ready(function() {

    $('body').scrollspy({ target: '.navbar-example' });

    var scroll, wresize, mobile;
    var headerPos = $('.main-menu-bar').offset().top;
    var init = false;
    var initDrop = false;
    var show, go;


    (scroll = function() {

        if(mobile != true && $('.main-menu-bar').css('position') != 'fixed') {
            var scrollPos = $(document).scrollTop();

            if(scrollPos > headerPos) {
                init = true;
                menuPos = scrollPos-headerPos;
                $('.main-menu-bar').css({'top' : menuPos+'px'});
            } else if(init === true) {
                $('.main-menu-bar').css({'top' : '0px'});
                init = false;
            }

            if(scrollPos > headerPos) {
                initDrop = true;
                menuPos = scrollPos-headerPos;

                menuDropPos = menuPos+menuPos-90;

                if(menuPos < 90-48){
                    $('.drop-menu').css({'top' : (menuDropPos)+'px', 'display':'block'});
                } else {
                    $('.drop-menu').css({'top' : (menuPos-48)+'px', 'display':'block'});
                }

            } else if(initDrop === true) {
                $('.drop-menu').css({'top' : '0px','display':'none'});
                init = false;
            }
        }

    })();

    window.addEventListener('touchstart', function() {
        mobile = true;
    });

    $(document).scroll(scroll);
    $(window).resize(wresize);

});