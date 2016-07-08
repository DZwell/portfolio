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


$(".popup").click(function () {
    var $this = $(this);
    var $iframe = $("<iframe allowfullscreen>").attr("src", "https://www.youtube.com/embed/d9GuCICuRFY?start=13").css({"width": 560, "height": 315});
    var $title = $("<h1>").text($this.data("title"));
    $("#video-view").html($title).append($iframe);
    $iframe.wrap("<div class='class-video'>");
});
