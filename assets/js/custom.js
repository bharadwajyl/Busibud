//Global variables
var slidestoshow, arrowmark;
if (window.matchMedia("(max-width: 620px)").matches === true) {
    slidestoshow = 1;
    arrowmark = false;
} else if (window.matchMedia("(max-width: 1020px)").matches === true) {
    slidestoshow = 2;
    arrowmark = false;
} else {
    slidestoshow = 3;
    arrowmark = true;
}



//Detect onclick event
if (window.matchMedia("(max-width: 920px)").matches === true) {
    $("nav").append('<i class="fa fa-bars ham"></i>');
    $(".ham").click(function(){
        $("body").append('<div class="overlay" onclick="overlay()"></div>').fadeIn('slow');
        $("nav section").css("left","0");
    });
}


//Jquery Sliders
$('.testimonial-slider').slick({
    slidesToShow: slidestoshow,
    slidesToScroll: 1,
    dots: false,
    arrows: arrowmark,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
});


$('.clients_logo_slider').slick({
    slidesToShow: slidestoshow,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true
});




//DETECT ESC KEY PRESSED
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        if($("nav section").css("left") > "0%"){
            $("nav section").css("left","-100%");
        }
        $(".overlay").remove();
    }
};



//Overlay
function overlay(){
    if($("nav section").css("left") > "0%"){
        $("nav section").css("left","-100%");
    }
    $(".overlay").remove();
}

