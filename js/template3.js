

// var but1 = document.querySelector("#side-bar-button-1");
// var but2 = document.querySelector("#side-bar-button-2");
// var side = document.querySelector(".side");


// but1.addEventListener("click",function(){

//     // side.classList.remove("side-bar2");
//     side.classList.toggle("side-bar1");
    
// });

// // but2.addEventListener("click",function(){

// //     side.classList.remove("side-bar1");
// //     side.classList.add("side-bar2");
    
// // });


$(document).ready ( function(){

    var dropDown = document.querySelector('#collapse-nav');

    $('.bar-item a:not(:only-child)').click(function(e) {
        console.log('dsff');
        $('#dropdown-marker').toggleClass('dropped');
        $(this).siblings('.nav-dropdown').toggle();

        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });

      $('html').click(function() {
        $('.nav-dropdown').hide();
      });


    $('#toggle-drop-down').click(function() {


         $('#collapse-nav').slideToggle();


      });

 });

