(function ($) {
  $.ratyli = function (el, options) {
    var base = this;
    base.$el = $(el);
    base.el = el;

    base.$el.data('ratyli', base);

    base.init = function () {
      base.options = $.extend({}, $.ratyli.defaultOptions, options);
      base.options = $.extend({}, base.options, base.$el.data());
      base.set(base.options.rate, true);
    };

    base.set = function (val, init) {
      if (val < 0 || val % 1 != 0 || val > base.options.ratemax) val = 0;

      if (
        val == 1 &&
        base.options.rate == 1 &&
        base.options.unrateable == true &&
        !init
      ) {
        val = 0;
      }

      base.options.rate = val;
      base.$el.html('');

      if (base.options.rate != 0) base.$el.attr('data-rate', base.options.rate);

      base.$el.attr('data-ratemax', base.options.ratemax);

      var i = 0;
      while (i < base.options.ratemax) {
        var tmp = '';

        if (i < base.options.rate) {
          tmp = base.signTemplate('full');
        } else {
          tmp = base.signTemplate('empty');
        }

        base.$el.append(tmp);
        i++;
      }

      return base.options.rate;
    };

    base.signTemplate = function (type) {
      return (
        "<span class='rate rate-" +
        type +
        "' style='cursor:" +
        base.options.cursor +
        ";'>" +
        base.options[type] +
        '</span>'
      );
    };

    base.init();
  };

  $.ratyli.defaultOptions = {
    disable: false,
    unrateable: false,
    full: '<i class="fa fa-star"></i>',
    empty: '<i class="fa fa-star-o"></i>',
    cursor: 'default',
    rate: 0,
    ratemax: 5,
  };

  $.fn.ratyli = function (options) {
    return this.each(function () {
      new $.ratyli(this, options);
    });
  };
})(jQuery);
