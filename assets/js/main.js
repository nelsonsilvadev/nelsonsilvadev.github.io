$(document).ready(function () {
  'use strict';

  var linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = 1000;

  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].onclick = function (event) {
      event.preventDefault();

      if ($(window).width() < 769) {
        var hscroll = 0;
      } else {
        var hscroll = 50;
      }

      var id = $(this).attr('href'),
        top = $(id).offset().top;

      $('body,html').animate({ scrollTop: top - hscroll }, V);
    };
  }

  $('.menu .menu-img').on({
    mouseenter: function () {
      var $div = $(this);
      var img = document.createElement('img');
      var img_name = $div.attr('data-img-name');
      img.src =
        './assets/img/menu/' + img_name + '.gif?t=' + new Date().getTime();

      $(img).load(function () {
        $div.attr('src', img.src);
      });
    },
    mouseleave: function () {
      var $div = $(this);
      var img_name = $div.attr('data-img-name');
      var src = './assets/img/menu/' + img_name + '.png';
      $div.attr('src', src);
    },
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });

  $('.scrollToTop').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });

  $('.animated').appear(function () {
    var elem = $(this);
    var animation = elem.data('animation');

    if (!elem.hasClass('visible')) {
      var animationDelay = elem.data('animation-delay');

      if (animationDelay) {
        setTimeout(function () {
          elem.addClass(animation + ' visible');
        }, animationDelay);
      } else {
        elem.addClass(animation + ' visible');
      }
    }
  });

  $('.progress-bar').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).css('width', function () {
        return $(this).attr('aria-valuenow') + '%';
      });
    }
  });

  $('.dial').on('inview', function (event, isInView) {
    if (isInView) {
      var $this = $(this);
      var myVal = $this.attr('value');
      var color = $.cookie('colour-skills');

      $this.knob({
        readOnly: true,
        width: 160,
        height: 160,
        rotation: 'clockwise',
        thickness: 0.3,
        inputColor: color,
        bgColor: '#ffffff',
        fgColor: color,
        draw: function () {
          $(this.i).val(this.cv + '%');
        },
      });

      $({
        value: 0,
      }).animate(
        {
          value: myVal,
        },
        {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.val(Math.ceil(this.value)).trigger('change');
          },
        }
      );
    }
    $(this).unbind(event);
  });

  $('#education-slider').owlCarousel({
    navigation: true,
    navigationText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    pagination: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
  });

  $('#work-slider').owlCarousel({
    navigation: true,
    navigationText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    pagination: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
  });

  var owl = $('#owl-clients');

  owl.owlCarousel({
    itemsCustom: [
      [0, 1],
      [450, 1],
      [600, 2],
      [700, 2],
      [991, 3],
      [1200, 4],
      [1400, 4],
      [1600, 4],
    ],
    navigation: true,
    navigationText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
  });

  $('.owl-pagination').fadeOut();

  $('.count').each(function () {
    $('.total-numbers .sum').appear(function () {
      var counter = $(this).html();

      $(this).countTo({
        from: 0,
        to: counter,
        speed: 2000,
        refreshInterval: 60,
      });
    });
  });

  $('.style-open-form').on('click', function (el) {
    el.preventDefault();
    $('.style-contact-form').toggleClass('style-off-form');
  });

  $('.btn-close-form').on('click', function (el) {
    el.preventDefault();
    $('.style-contact-form').toggleClass('style-off-form');
  });

  $('.ratyli').ratyli();

  if ($('#calendar').hasClass('fc-calendar-container')) {
    $('#calendar').calendario();

    var codropsEvents = {
      '09-01-2016': '<span>Day of Knowledge</span>',
      '09-05-2016': '<span>Day of Knowledge</span>',
      '09-10-2016': '<span>Day of Knowledge</span>',
      '09-23-2016': '<span>Day of Knowledge</span>',
      '10-01-2016': '<span>Day of Knowledge</span>',
      '10-05-2016': '<span>Day of Knowledge</span>',
      '10-10-2016': '<span>Day of Knowledge</span>',
      '11-01-2016': '<span>Day of Knowledge</span>',
      '11-05-2016': '<span>Day of Knowledge</span>',
      '11-10-2016': '<span>Day of Knowledge</span>',
      '11-23-2016': '<span>Day of Knowledge</span>',
      '12-01-2016': '<span>Day of Knowledge</span>',
      '12-05-2016': '<span>Day of Knowledge</span>',
      '12-10-2016': '<span>Day of Knowledge</span>',
      '01-01-2017': '<span>Day of Knowledge</span>',
      '01-05-2017': '<span>Day of Knowledge</span>',
      '01-10-2017': '<span>Day of Knowledge</span>',
      '01-23-2017': '<span>Day of Knowledge</span>',
      '02-01-2017': '<span>Day of Knowledge</span>',
      '02-05-2017': '<span>Day of Knowledge</span>',
      '02-10-2017': '<span>Day of Knowledge</span>',
      '03-01-2017': '<span>Day of Knowledge</span>',
      '03-05-2017': '<span>Day of Knowledge</span>',
      '03-10-2017': '<span>Day of Knowledge</span>',
      '03-23-2017': '<span>Day of Knowledge</span>',
      '04-01-2017': '<span>Day of Knowledge</span>',
      '04-05-2017': '<span>Day of Knowledge</span>',
      '04-10-2017': '<span>Day of Knowledge</span>',
      '05-01-2017': '<span>Day of Knowledge</span>',
      '05-05-2017': '<span>Day of Knowledge</span>',
      '05-10-2017': '<span>Day of Knowledge</span>',
      '05-23-2017': '<span>Day of Knowledge</span>',
    };

    var transEndEventNames = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd',
        msTransition: 'MSTransitionEnd',
        transition: 'transitionend',
      },
      transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
      $wrapper = $('#custom-inner'),
      $calendar = $('#calendar'),
      cal = $calendar.calendario({
        onDayClick: function ($el, $contentEl, dateProperties) {
          if ($contentEl.length > 0) {
            showEvents($contentEl, dateProperties);
          }
        },
        caldata: codropsEvents,
        displayWeekAbbr: true,
      }),
      $month = $('#custom-month').html(cal.getMonthName()),
      $year = $('#custom-year').html(cal.getYear());

    $('#custom-next').on('click', function () {
      cal.gotoNextMonth(updateMonthYear);
    });

    $('#custom-prev').on('click', function () {
      cal.gotoPreviousMonth(updateMonthYear);
    });

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';

    var weekdayhtml = weekday[d.getDay()];
    document.getElementById('week-day').innerHTML = weekdayhtml;

    var dateObj = new Date();
    var month = new Array(12);
    month[0] = 'Jan';
    month[1] = 'Feb';
    month[2] = 'Mar';
    month[3] = 'Apr';
    month[4] = 'May';
    month[5] = 'Jul';
    month[6] = 'Jul';
    month[7] = 'Aug';
    month[8] = 'Sep';
    month[9] = 'Oct';
    month[10] = 'Nov';
    month[11] = 'Dec';

    var monthhtml = month[dateObj.getUTCMonth()];
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    document.getElementById('day').innerHTML = day;
    document.getElementById('month').innerHTML = monthhtml;
  }

  function updateMonthYear() {
    $month.html(cal.getMonthName());
    $year.html(cal.getYear());
  }

  function showEvents($contentEl, dateProperties) {
    hideEvents();

    var $events = $(
        '<div id="custom-content-reveal" class="custom-content-reveal"><h4>Events for ' +
          dateProperties.monthname +
          ' ' +
          dateProperties.day +
          ', ' +
          dateProperties.year +
          '</h4></div>'
      ),
      $close = $('<span class="custom-content-close"></span>').on(
        'click',
        hideEvents
      );

    $events.append($contentEl.html(), $close).insertAfter($wrapper);

    setTimeout(function () {
      $events.css('top', '0%');
    }, 25);
  }

  function hideEvents() {
    var $events = $('#custom-content-reveal');

    if ($events.length > 0) {
      $events.css('top', '100%');

      Modernizr.csstransitions
        ? $events.on(transEndEventName, function () {
            $(this).remove();
          })
        : $events.remove();
    }
  }
});

if (theme === 'dark') document.body.classList.add('dark');
else {
  $('.moon').toggleClass('sun');
  $('.toggle').toggleClass('day');
}

$('.toggle').click(function () {
  document.body.classList.toggle('dark');

  $('.moon').toggleClass('sun');
  $('.toggle').toggleClass('day');

  if (theme === 'dark') {
    window.localStorage.setItem('theme', 'light');
    theme = 'light';
  } else {
    window.localStorage.setItem('theme', 'dark');
    theme = 'dark';
  }
});
