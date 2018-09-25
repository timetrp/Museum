var tribeName = document.querySelectorAll(".tribe-name");
var tribeContent = document.querySelectorAll(".tribe-content");

var isShowing = Array.from(tribeName).map(() => false);


tribeName.forEach(function (name, index) {

    name.addEventListener("mouseover", function (e, index) {



        if (e.target !== this) {
            return;
        }

        if (!isShowing[e.target.accessKey]) {
            // console.log(e);
            // console.log(this.nextElementSibling);
            // $( this ).addClass("fadeout");
            // $( this ).addClass( "hide" );

            jQuery(this).fadeOut("slow", () => {
                $(this.nextElementSibling).css("display", "flex")
                .fadeIn("slow", () => {

                    setTimeout(function () {


                        $(this.nextElementSibling).fadeOut("slow", () => {
                            // console.log(this);
                            $(this).css("display", "flex")
                            .fadeIn("slow");
                        })



                    }.bind(this), 10000);
                });
            });
        }
    });

});