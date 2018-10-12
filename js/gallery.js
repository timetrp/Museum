function initMap() {
  // The location of Uluru
  var Karen = {
    lat: 19.618992,
    lng: 98.311007
  };
  var Hmong = {
    lat: 18.816855,
    lng: 98.883296
  };
  var Long = {
    lat: 20.083203,
    lng: 99.853272
  };
  var Lahu = {
    lat: 19.288551,
    lng: 98.859904
  };

  // The map, centered at Uluru
  var map1 = new google.maps.Map(
    document.getElementById('Karen'), {
      zoom: 8,
      center: Karen
    });
  // The marker, positioned at Uluru
  var marker1 = new google.maps.Marker({
    position: Karen,
    map: map1
  });

  var map2 = new google.maps.Map(
    document.getElementById('Hmong'), {
      zoom: 8,
      center: Hmong
    });
  // The marker, positioned at Uluru
  var marker2 = new google.maps.Marker({
    position: Hmong,
    map: map2
  });

  var map3 = new google.maps.Map(
    document.getElementById('Lahu'), {
      zoom: 8,
      center: Lahu
    });
  // The marker, positioned at Uluru
  var marker3 = new google.maps.Marker({
    position: Lahu,
    map: map3
  });

  var map4 = new google.maps.Map(
    document.getElementById('Long'), {
      zoom: 8,
      center: Long
    });
  // The marker, positioned at Uluru
  var marker4 = new google.maps.Marker({
    position: Long,
    map: map4
  });
}

var x1;
var x2;

function showMap() {
  var mapBtn = document.querySelectorAll('p.descript+a span');
  var mapBtn2 = document.querySelectorAll('p.descript+a');

  mapBtn2.forEach(function (el) {

    $(el).click(function () {
      console.log(this);
      console.log(el);

      x1 = el.firstChild;

      if (x1.textContent === "Show Map") {


        x1.parentElement.parentElement.parentElement.parentElement.lastElementChild.style.display = 'block';
        x1.parentElement.parentElement.parentElement.parentElement.firstElementChild.style.opacity = "0";


        x1.textContent = "Hide Map";

      } else {
        x1.parentElement.parentElement.parentElement.parentElement.lastElementChild.style.display = 'none';
        x1.parentElement.parentElement.parentElement.parentElement.firstElementChild.style.opacity = "1";

        x1.textContent = "Show Map";

      }


    })

  });
}


$(document).ready(function () {

  var $sm = 480;
  var $md = 768;

  if ($(window).width() <= $sm) {
    $('.section').each(function () {

      $(this).removeClass('animate');

    });

  }

  showMap();

  $('.middle:eq(0)').css('background', 'beige');
  $('.middle:eq(1)').css('background', 'lightsalmon');
  $('.middle:eq(2)').css('background', 'lightpink');
  $('.middle:eq(3)').css('background', 'mediumpurple');

  function onResize() {
    $imgH = $('.middle img').width();
    if ($(window).width() >= $sm) {
      $('.left,.right,.section').css('height', $imgH);
    } else {

      $('.section').css('height', 'auto');
      $('.left,.right').css('height', $imgH);
    }

    if ($(window).width() > $md) {
      $('.middle').css('opacity', '1');
      $('.map').css('display', 'block');
    } else {

      $('.map').css('display', 'none');
      $('.middle').css('opacity', '1');
      $('.map-toggle').text('Show Map');
    }
  }

  onResize();

  $(window).resize(function () {
    onResize();
  });

  $(window).scroll(function () {
    $('.section').each(function () {
      var $elementPos = $(this).offset().top;
      var $scrollPos = $(window).scrollTop();

      var $sectionH = $(this).height();
      var $h = $(window).height();
      var $sectionVert = (($h / 2) - ($sectionH / 4));
      console.log($sectionVert);
      console.log($scrollPos);


      if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos && $(window).width() > $md) {

        $(this).addClass('animate');
      } else {
        $(this).removeClass('animate');
      }
    });
  });

});

$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});