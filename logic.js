function forCatalogOne() {
    var catalogOne = document.querySelector(".catalog_1")

    catalogOne.addEventListener("mouseenter", function () {
        gsap.to(".catalog_1 .content_overlay", {
            scaleY: 1,
            duration: 0.5
        })
        gsap.to(".catalog_1 .image_box", {
            y: "-10%",
            duration: 0.5
        })
    })

    catalogOne.addEventListener("mouseleave", function () {
        gsap.to(".catalog_1 .content_overlay", {
            scaleY: 0,
            duration: 0.5
        })
        gsap.to(".catalog_1 .image_box", {
            y: "0%",
            duration: 0.5
        })

    })
}
forCatalogOne()


function forCatalogTwo() {

    var catalogTwo = document.querySelector(".catalog_2")


    catalogTwo.addEventListener("mouseenter", function () {
        gsap.to(".catalog_2 .content_overlay", {
            scaleY: 1,
            duration: 0.5
        })
        gsap.to(".catalog_2 .image_box", {
            y: "-10%",
            duration: 0.5
        })
    })

    catalogTwo.addEventListener("mouseleave", function () {
        gsap.to(".catalog_2 .content_overlay", {
            scaleY: 0,
            duration: 0.5
        })
        gsap.to(".catalog_2 .image_box", {
            y: "0%",
            duration: 0.5
        })

    })
}

forCatalogTwo()


function forCatalogThree() {

    var catalogTwo = document.querySelector(".catalog_3")


    catalogTwo.addEventListener("mouseenter", function () {
        gsap.to(".catalog_3 .content_overlay", {
            scaleY: 1,
            duration: 0.5
        })
        gsap.to(".catalog_3 .image_box", {
            y: "-10%",
            duration: 0.5
        })
    })

    catalogTwo.addEventListener("mouseleave", function () {
        gsap.to(".catalog_3 .content_overlay", {
            scaleY: 0,
            duration: 0.5
        })
        gsap.to(".catalog_3 .image_box", {
            y: "0%",
            duration: 0.5
        })

    })
}

forCatalogThree()





var typed = new Typed('#element', {
    strings: [
        'Design Studio',
        'Furniture Store'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});


// <================================================== Navbar Animation ==================================================>

gsap.from(".navbar",{
    y : "-100%",
    duration : 1.2,
    scrollTrigger : {
        trigger : ".navbar"
    }
})

// <================================================== Herobox Animation ==================================================>

gsap.from(".herobox .main_image",{
    x : "100%",
    duration : 1.2,
    scrollTrigger : {
        trigger : ".herobox .main_image"
    }
})
gsap.from(".herobox .background_dot_overlay",{
    x : "100%",
    duration : 1.2,
    scrollTrigger : {
        trigger : ".herobox .background_dot_overlay"
    }
})
gsap.from(".herobox .content_herobox",{
    opacity : 0,
    delay : 1,
    duration : 2,
    scrollTrigger : {
        trigger : ".herobox .content_herobox"
    }
})


// <============================== Section no 1 Animation Here ===============================>

gsap.from(".section_1 .content_section_1",{
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : ".section_1 .content_section_1",
        start : "top 60%",
    }
})
gsap.from(".section_1 .products_section_1",{
    y : "100%",
    duration : 1,
    scrollTrigger : {
        trigger : ".section_1 .products_section_1",
        start : "-90% 60%",
    }
})

// <============================== Section no 2 Animation Here ===============================>

gsap.from(".section_2 .content_area",{
    opacity : 0,
    y : "100%",
    duration : 1.5,
    scrollTrigger : {
        trigger : ".section_2 .content_area",
        start : "-100% 50%"
    }
})

gsap.from(".section_2 .right_image_part",{
    opacity : 0,
    x : "100%",
    duration : 1.5,
    scrollTrigger : {
        trigger : ".section_2 .right_image_part",
        start : "top 80%"
    }
})

// <============================== Section no 3 Animation Here ===============================>

gsap.from(".section_3 .dot_image_wrapper",{
    opacity : 0,
    duration : 2,
    scrollTrigger : {
        trigger : ".section_3 .dot_image_wrapper",
        start : "top 80%"
    }
})
gsap.from(".section_3 .large_image_wrapper",{
    y : "100%",
    opacity : 0,
    duration : 1.5,
    scrollTrigger : {
        trigger : ".section_3 .large_image_wrapper",
        start : "-100% 70%",
    }
})
gsap.from(".section_3 .middle_image_wrapper",{
    y : "100%",
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : ".section_3 .middle_image_wrapper",
        start : "-100% 50%",
    }
})
gsap.from(".section_3 .small_image_wrapper",{
    y : "100%",
    opacity : 0,
    delay : 0.2,
    duration : 1,
    scrollTrigger : {
        trigger : ".section_3 .small_image_wrapper",
        start : "-100% 50%",
    }
})
gsap.from(".section_3 .right_text_area",{
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : ".section_3 .right_text_area",
        start : "20% 50%",
    }
})


// <============================== Footer Animation Here ===============================>

gsap.from(".footer p",{
    opacity : 0,
    duration : 1,
    scrollTrigger : {
        trigger : ".footer p",
        start : "0% 100%",
    }
})



