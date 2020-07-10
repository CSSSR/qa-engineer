var clickedLinksSequence = '';
var easterEggSequence = '132312';


$(function () {
    $('.graphs').on('click', 'a', function (e) {
        e.preventDefault();

        var target = $(e.target);
        var infoPanes = $('[class*="info-"]');
        var graphs = $('[class*="graph-"]');
        var linkClicked = target.parent().attr('class').slice(7);
        var showElemClass = '.info-' + linkClicked;


        if (target.parent().hasClass('graphs-files')) {
            e.preventDefault();
        } else {
            target.parent().addClass('graph-active');
            graphs.removeClass('graph-active');
            infoPanes.fadeOut(500);
            $(showElemClass).fadeIn(1000);
        }

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

$(function() {
    $('.email').on('keyup', function(e) {
        var inputVal = $(this).val();

        $(this).attr('value', inputVal);
    })

    $('.description').on('keyup', function(e) {
        var inputVal = $(this).val();

        $(this).attr('value', inputVal);
    })
})

$(function() {
    $('.form').on('click', 'button', function(e) {
        e.preventDefault();
        $('.email').attr('value', '').val('');
        $('.description').attr('value', '').val('');
    })
})

$(function(){
    $('.bug').on('click', function(e){
        var target = $(e.target);
        if(target.prop('checked')) {
            e.preventDefault();
        }
    });
});
