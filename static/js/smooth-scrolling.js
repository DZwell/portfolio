'use strict';

$(function() {
  $('.scroll-arrow span a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1750, 'easeInOutSine');
    event.preventDefault();
  });
});
