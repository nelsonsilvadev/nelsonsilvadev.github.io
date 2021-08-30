jQuery(function ($) {
  $(document).ready(function () {
    var contentButton = [];
    var contentTop = [];
    var content = [];
    var lastScrollTop = 0;
    var scrollDir = '';
    var itemClass = '';
    var itemHover = '';
    var menuSize = null;
    var stickyHeight = 0;
    var stickyMarginB = 0;
    var currentMarginT = 0;
    var topMargin = 0;

    $(window).scroll(function (event) {
      var st = $(this).scrollTop();

      if (st > lastScrollTop) {
        scrollDir = 'down';
      } else {
        scrollDir = 'up';
      }
      lastScrollTop = st;
    });

    $.fn.stickUp = function (options) {
      $(this).addClass('stuckMenu');
      var objn = 0;

      if (options != null) {
        for (var o in options.parts) {
          if (options.parts.hasOwnProperty(o)) {
            content[objn] = options.parts[objn];
            objn++;
          }
        }

        itemClass = options.itemClass;
        itemHover = options.itemHover;

        if (options.topMargin != null) {
          if (options.topMargin == 'auto') {
            topMargin = parseInt($('.stuckMenu').css('margin-top'));
          } else {
            if (
              isNaN(options.topMargin) &&
              options.topMargin.search('px') > 0
            ) {
              topMargin = parseInt(options.topMargin.replace('px', ''));
            } else if (!isNaN(parseInt(options.topMargin))) {
              topMargin = parseInt(options.topMargin);
            } else {
              topMargin = 0;
            }
          }
        } else {
          topMargin = 0;
        }

        menuSize = $('.' + itemClass).size();
      }

      stickyHeight = parseInt($(this).height());
      stickyMarginB = parseInt($(this).css('margin-bottom'));

      currentMarginT = parseInt(
        $(this).next().closest('div').css('margin-top')
      );

      vartop = $(this).offset() ? parseInt($(this).offset().top) : 0;
    };

    $(document).on('scroll', function () {
      varscroll = parseInt($(document).scrollTop());

      if (menuSize != null) {
        for (var i = 0; i < menuSize; i++) {
          contentTop[i] = $('#' + content[i] + '').offset()
            ? $('#' + content[i] + '').offset().top
            : 0;

          function bottomView(i) {
            contentView = $('#' + content[i] + '').height() * 0.23;
            testView = contentTop[i] - contentView;

            if (varscroll > testView) {
              $('.' + itemClass).removeClass(itemHover);
              $('.' + itemClass + ':eq(' + i + ')').addClass(itemHover);
            } else if (varscroll < 50) {
              $('.' + itemClass).removeClass(itemHover);
              $('.' + itemClass + ':eq(0)').addClass(itemHover);
            }
          }

          if (
            scrollDir == 'down' &&
            varscroll > contentTop[i] - 51 &&
            varscroll < contentTop[i] + 51
          ) {
            $('.' + itemClass).removeClass(itemHover);
            $('.' + itemClass + ':eq(' + i + ')').addClass(itemHover);
          }

          if (scrollDir == 'up') {
            bottomView(i);
          }
        }
      }

      if (vartop < varscroll + topMargin) {
        $('.stuckMenu').addClass('isStuck');
        $('.stuckMenu').css('position', 'fixed');
        $('.isStuck').css(
          {
            top: '0px',
          },
          10,
          function () {}
        );
      }

      if (varscroll + topMargin < vartop) {
        $('.stuckMenu').removeClass('isStuck');
        $('.stuckMenu')
          .next()
          .closest('div')
          .css(
            {
              'margin-top': currentMarginT + 'px',
            },
            10
          );
        $('.stuckMenu').css('position', 'fixed');
      }
    });
  });
});