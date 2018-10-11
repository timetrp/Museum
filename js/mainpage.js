var tribeName = document.querySelectorAll(".tribe-name");
var tribeContent = document.querySelectorAll(".tribe-content");
var tabLink = document.querySelectorAll(".tribe-name a");

var isShowing = Array.from(tribeName).map(() => false);



tabLink.forEach(function (link){


    link.addEventListener("mouseclick", function(e){
        if (e.target !== this) {
            return;
        }

        if (!isShowing[e.target.accessKey]) {
            jQuery(this).fadeOut("slow", () => {
                $(this.nextElementSibling).css("display", "flex")
                .fadeIn("slow", () => {
                    
                });
            });
        }

    })



});


var  x2;



tribeName.forEach(function (name, index) {

    name.addEventListener("mouseover", function (e, index) {

        if (e.target !== this) {
            return;
        }

        if (!isShowing[e.target.accessKey]) {
            jQuery(this).fadeOut("slow", () => {
                $(this.nextElementSibling).css("display", "flex")
                .fadeIn("slow", () => {
                    setTimeout(function () {
                        $(this.nextElementSibling).fadeOut("slow", () => {
                            // console.log(this);
                            $(this).css("display", "flex")
                            .fadeIn("slow");
                        })
                    }.bind(this), 30000);
                });
            });
        }
    });





});


function showContent(x){

        console.log(x);
        console.log();
        $(tribeName[x-1]).fadeOut("slow",function(){
            $(tribeContent[x-1]).fadeIn("slow", function(){
                setTimeout(function () {
                    $(this.nextElementSibling).fadeOut("slow", () => {
                        // console.log(this);
                        $(this).css("display", "flex")
                        .fadeIn("slow");
                    })
                }.bind(this), 30000);

            })
        })
        x2=this;

}




