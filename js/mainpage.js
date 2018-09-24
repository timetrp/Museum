var tribeName = document.querySelectorAll(".tribe-name");
var tribeContent = document.querySelectorAll(".tribe-content");



tribeName.forEach(function(name,index){

        name.addEventListener("mouseover", function(e,index ){

                console.log(e);
                $( this ).addClass( "hide" );
                $(e.target.nextElementSibling).removeClass("hide");
                

            
           




        });

});






// tribeContent.forEach(function(content,index){
//     content.addEventListener("mouseout", function(e){
        

//         if(onMouseout[e.target.accessKey] === false){
//             onMouseout[e.target.accessKey] = true;
//             setInterval( function(){

//                 onMousein[e.target.accessKey] = false;
//                 onMouseout[e.target.accessKey] = false;
                
    
              
    
//             } , 5000);


//         }


       
       



      

//     });


// })
    

  








