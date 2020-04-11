
const sections = $("section");
const display = $(".wrapper__content");

let inScroll = false;

const performTransition = (sectionEq) => {
    if (inScroll === false){

        inScroll = true;

        const position = sectionEq * -100;

        sections.eq(sectionEq).addClass("section--active").siblings().removeClass("section--active");

        display.css({
            transform: `translateY(${position}%)`
        });

        setTimeout(() => {
            $(".circle-nav__item").eq(sectionEq).addClass("circle--active").siblings().removeClass("circle--active");
            inScroll = false;
        }, 1300);
    }  
}


const scrollSection = (direction) => {
    const activeSection = sections.filter(".section--active");
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if(nextSection.length && direction === "next"){
        performTransition(nextSection.index());
    };

    if(prevSection.length && direction === "prev"){
        performTransition(prevSection.index());
    }
};


$(window).on("wheel", (e) => {

    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0){
        scrollSection("next");
    };

    if (deltaY < 0){
        scrollSection("prev");
    }

});

$(document).on("keydown", (e) => {

    const tagName = e.target.tagName.toLowerCase();

    if (tagName !== "input" && tagName !== "textarea"){

        switch(e.keyCode){
            case 38:
                scrollSection("prev");
                break;
            case 40:
                scrollSection("next");
                break;
        }
    }
});


$("[data-scroll-to]").on("click", (e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-scroll-to");

    performTransition(target);
});


$("body").swipe({
    swipe: (event, direction) => {
        let scrollDirection;

        if(direction === "up")scrollDirection = "next";
        if(direction === "down")scrollDirection = "prev";

        scrollSection(scrollDirection);

    }
});