var tribeName = document.querySelectorAll(".tribe-name");
var tribeContent = document.querySelectorAll(".tribe-content");

console.log(tribeName);


tribeName.forEach(function(name,index){

    name.addEventListener("mouseover", function(e){
        $( this ).toggleClass( "hide" );
        console.log($(tribeContent[index]));
        $(tribeContent[index]).toggleClass("hide");
    });


      

    



});

tribeContent.forEach(function(content,index){
    content.addEventListener("mouseout", function(e){

        $( this ).toggleClass( "hide" );

        $(tribeName[index]).toggleClass("hide");

    });


})
    

  








