$(function () {
    document.body.onselectstart = function () {
        return false;
    };

    $('.graphs').on('click', 'a', function (e) {
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

        e.preventDefault();
        return false;
    });
});