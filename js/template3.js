

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
    console.log(dropDown);
    $( "#toggle-drop-down" ).click(function() {
        console.log('clicked');
        console.log($('#collapse-nav'));
        $( "#collapse-nav" ).toggleClass( 'newbar' );

      });
    


 });

