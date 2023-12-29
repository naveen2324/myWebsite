document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementsByClassName("header");
    var header_title = document.getElementsByClassName("title");
    var header_buttons = document.getElementsByClassName("header_buttons");

    document.getElementById("button1").addEventListener("click", scrollToOne);
    document.getElementById("button2").addEventListener("click", scrollToTwo);
    document.getElementById("button3").addEventListener("click", scrollToThree);

    var body2_rect=document.getElementById("body_two").getBoundingClientRect();
    var body2_top=body2_rect.top;
    var body2_bottom=body2_rect.bottom;

    var body3_rect=document.getElementById("body_three").getBoundingClientRect();
    var body3_top=body3_rect.top;
    var body3_bottom=body3_rect.bottom;

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (window.scrollY !== 0) {
            header[0].classList.add("sticky_header");
            header_title[0].classList.add("sticky_title");

            header_buttons[0].classList.add("leftmost_header_button");
            for (var i = 0; i < header_buttons.length; i++) {
                header_buttons[i].classList.add("header_sticky_buttons");
            }
        } else {
            header[0].classList.remove("sticky_header");
            header_title[0].classList.remove("sticky_title");

            header_buttons[0].classList.remove("leftmost_header_button");
            for (var i = 0; i < header_buttons.length; i++) {
                header_buttons[i].classList.remove("header_sticky_buttons");
            }
        }
    }

    function scrollToOne() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    function scrollToTwo() {
        window.scrollTo({top: body2_rect.top-(window.innerHeight / 100)*10.4, behavior: 'smooth'});
    }

    function scrollToThree() {
        window.scrollTo({top: body3_rect.top-(window.innerHeight / 100)*10.4, behavior: 'smooth'});
    }
});
