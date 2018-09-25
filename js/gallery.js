function initMap() {
  // The location of Uluru
  var Karen = {lat: 19.618992, lng: 98.311007};
  var Hmong = {lat: 18.816855, lng: 98.883296};
  var Long = {lat: 20.083203, lng: 99.853272};
  var Lahu = {lat:  19.288551, lng: 98.859904};
  
  // The map, centered at Uluru
  var map1 = new google.maps.Map(
      document.getElementById('Karen'), {zoom: 8, center: Karen});
  // The marker, positioned at Uluru
  var marker1 = new google.maps.Marker({position: Karen, map: map1});

  var map2 = new google.maps.Map(
    document.getElementById('Hmong'), {zoom: 8, center: Hmong});
// The marker, positioned at Uluru
var marker2 = new google.maps.Marker({position: Hmong, map: map2});

var map3 = new google.maps.Map(
  document.getElementById('Lahu'), {zoom: 8, center: Lahu});
// The marker, positioned at Uluru
var marker3 = new google.maps.Marker({position: Lahu, map: map3});

var map4 = new google.maps.Map(
  document.getElementById('Long'), {zoom: 8, center: Long});
// The marker, positioned at Uluru
var marker4 = new google.maps.Marker({position: Long, map: map4});
}


$(document).ready(function(){

   var $sm = 480;
   var $md = 768;





   function resizeThis() {
      $imgH = $('.middle img').width();
      if ($(window).width() >= $sm) {
         $('.left,.right,.section').css('height', $imgH);
      } else {
         $('.left,.right,.section').css('height', 'auto');
      }
   }

   resizeThis();

   $(window).resize(function(){
      resizeThis();
   });

   $(window).scroll(function() {
      $('.section').each(function(){
         var $elementPos = $(this).offset().top;
         var $scrollPos = $(window).scrollTop();

         var $sectionH = $(this).height();
         var $h = $(window).height();
         var $sectionVert = (($h/2)-($sectionH/4));


         if (($elementPos - $sectionVert) <= $scrollPos && ($elementPos - $sectionVert) + $sectionH > $scrollPos) {
            $(this).addClass('animate');
         } else {
            $(this).removeClass('animate');
         }
      });
   });

   $('.btn-primary').click(function(){
      alert('I lied');
   });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


});