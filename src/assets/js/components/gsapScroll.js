import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function gsapScroll() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ //making timeline for animatio
        scrollTrigger: { 
            trigger: ".section-panel", // what to 
            scrub: true, //scroll with mouse scroll
            pin: "#main", // what to pin when the scrollevent is triggered
            start: "top 20%", // when to start first is the target start position and second is the window position
            end: "+=1000%", // when to end first is the target start position and second is the window position
        }
    });
    
    setTimeout(() => {
        const panels = document.querySelectorAll(".panel");
        let panelHeight = document.querySelector(".panel-wrapper").scrollHeight;

        panelHeight = panelHeight - panels[panels.length-1].offsetHeight;

        tl.to(".panel-wrapper", { 
            y: -panelHeight,
            duration: 5,
            ease: "none",
        });
    }, 200);

}

export { gsapScroll };