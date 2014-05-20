var clickedLinksSequence = '';
var easterEggSequence = '132412';


$(function () {
    document.body.onselectstart = function () {
        return false;
    };


    $('.graphs').on('click', 'a', function (e) {
        e.preventDefault();

        var target = $(e.target);
        var infoPanes = $('[class*="info-"]');
        var graphs = $('[class*="graph-"]');
        var linkClicked = target.parent().attr('class').slice(7);
        var showElemClass = '.info-' + linkClicked;

        infoPanes.fadeOut(500);
        $(showElemClass).fadeIn(1000);

        graphs.removeClass('graph-active');
        target.parent().addClass('graph-active');

        $('.graph-active').css('max-height', 0).animate({'max-height': '100%'}, {'easing': 'linear', 'duration': 1500});


        function checkEasterEgg() {
            var arr = ['details', 'errors', 'support', 'files'];

            var linkClickedClass = (linkClicked.split(" ")[0]);
            clickedLinksSequence += arr.indexOf(linkClickedClass) + 1;

            if (clickedLinksSequence.length < 6 || !easterEggSequence) return;

            if (~clickedLinksSequence.indexOf(easterEggSequence)) {

                var popupWidth = $('.egg').width();
                var popupHeight = $('.egg').height();
                var verticalScroll = $(window).scrollTop();
                var horizontalScroll = $(window).scrollLeft();

                var horizontalCenter = Math.floor(window.innerWidth / 2 + horizontalScroll - popupWidth / 2);
                var verticalCenter = Math.floor(window.innerHeight / 2 + verticalScroll - popupHeight * 4);

                $('.egg').removeAttr('hidden').offset({top: verticalCenter, left: horizontalCenter});
                easterEggSequence = '';

                $('.popup-background').removeAttr('hidden');

                $(document).on('mousedown', function (e) {
                    $('.egg').remove();
                    $('.popup-background').remove();
                });
            }
        }

        checkEasterEgg();
    });
});

$(function(){
    $('.bug').on('click', function(e){
        var target = $(e.target);
        if(target.prop('checked')) {
            e.preventDefault();
        }
    });
});
