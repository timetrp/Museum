

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

  $('a').each(function(){
    $(this).focus(function(){

      $(this).mouseleave(function(){
        $(this).blur();
      })



      
    })
       
    
  })


  var windowWidth = $(window).width();
  
  $(window).resize(function(){

    if ($(window).width() != windowWidth) {

      // Update the window width for next time
      windowWidth = $(window).width();

      // Do stuff here

  }

    $('#dropdown-marker').css('height', '55px');
    $('.nav-dropdown').css('display','none');
   });

    $('.bar-item a:not(:only-child)').click(function(e) {

        
       

        if($(window).width()>= 769){
          
          if($(window).width() >= 769 && $('.nav-dropdown').css('display') == 'contents'){

            $('.nav-dropdown').css('display','none');
          }
          $(this).siblings('.nav-dropdown').toggle();

        }else{
          console.log($('.nav-dropdown').css('display'));

              // if($('.nav-dropdown').css('display') == 'none'){
              //   $('.nav-dropdown').css('opacity','1');
              //   $('.nav-dropdown').css('display','contents');

              // }else if($('.nav-dropdown').css('display') =='contents'){

              //   $('.nav-dropdown').css('display','none');
              //   $('.nav-dropdown').css('opacity','0');
              // }
        // Close one dropdown when selecting another
        if($('#dropdown-marker').css('height') == '300px'){
          $('#dropdown-marker').css('height', '55px');
          $(this).siblings('.nav-dropdown').toggle();

        }else{

          $('#dropdown-marker').css('height', '300px');
          $(this).siblings('.nav-dropdown').toggle();

        }
       
        

        }
       

        

      
    
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });

      $('html').click(function() {
       
      });


    $('#toggle-drop-down').click(function() {
         $('#collapse-nav').slideToggle();
      });

      $(window).resize(function(){
        $('.nav-dropdown').hide();
        $('#dropdown-marker').removeClass('dropped');
       });



       if ($("*").is( ":focus" ))
{
  console.log($('*'));
  $("*").css("background-color","#FF99CC");
}

var blindMode = false;



 });


 function blindMode (){

  $()
    $('.colorBlind').each(function(){

      $(this).toggleClass("blindMode");
    })

}
