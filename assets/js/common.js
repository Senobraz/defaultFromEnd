$(document).ready(function () {
    $.extend($.fancybox.defaults, {
        padding: 0,
        maxWidth: 5555555,
        maxHeight: 555555,
        fitToView: true,
        fixed: false,
        autoResize: true,
        autoCenter: true,

        helpers: {
            overlay: {
                css: {
                    'background': 'rgba(0,0,0,0.7)'
                },
            },
            locked: true,

            title: {
                type: 'over'
            }
        },
    });

    $('.fancy').fancybox({
        fixed: true,
        autoResize: true,
        scrolling: 'visible',
        tpl: {
            closeBtn: ' <div class="close"><a href="href="javascript:;">&times</a></div>'
        }
    });
})