# gsap-scroll

## This is a demonstration of pinning the a perticular section and scroling the a perticular part and after complete scroll then contineu the body scroll
## This will also be the explanation of how the code works in details

In this code the "section-panel" section will pin until the inner scroll complete the scrolling


### First we import the gsap and ScrollTrigger that is comes when we install the gsap


- Now we register the ScrollTrigger plugin to gsap, gsap will use this plugin for scrubing the animation
### gsap.registerPlugin(ScrollTrigger);

- Now we create the timeline

const tl = gsap.timeline({...});

- this will crate the timeline and some condition have to be written


## Explation of timeline object variable

const tl = gsap.timeline({ //making timeline for animatio
    scrollTrigger: { 
        trigger: ".section-panel",
        scrub: true,
        pin: "#main",
        start: "top 20%",
        end: "+=250%",
    }
});

we call the scrollTrigger object that accept the class, id, variable or object that need to be triggered

For instance: 

const tl = gsap.timeline({
    scrollTrigger: ".classNmae",
})

OR

const tl = gsap.timeline({
    scrollTrigger: "#id",
})

OR

const section = document.querySelector(".section");
const tl = gsap.timeline({
    scrollTrigger: section,
})

OR 

const tl = gsap.timeline({
    scrollTrigger: {...},
})


- trigger: ".section-panel" :- accepts class name, id or variable that need to be trigger when it comes in certain position

- scrub: true :- this will allow to animation along with scrolling the site

This also accepts the numerical value that will define the time(in second) that will complete in that time. The higher value will take longer time to complete the animation

NOTE: If the scrubing time is larger, when the scroll is finished the animation will contineu to happen

- pin: "#main" :- this will take className, id or boolean value that will pin the section while scrolling the page

For exapmple: the above expample will pin the main section while scrolling until the animation finishes,

In my case I pinned the main instead of section because I wanted to pin while still take the same height. If I pin the certain section that does not take the device height this will cause some issue, for instance: the section with the height of 200px when triggered will take the whole height untill the animation finishes.

- start: "top 20%" :- Describes a place on the trigger and a place on the scroller that must meet in order to start the ScrollTrigger. So, for example, "top center" means "when the top of the trigger hits the center of the scroller" (and the scroller is the viewport by default). "bottom 80%" means "when the bottom of the trigger hits 80% down from the top of the viewport" (assuming vertical scroll). You can use keywords like "top", "bottom", "center" (or "left" and "right" if horizontal: true) or percentages like "80%" or pixel values like "100px". Percentages and pixels are always relative to the top/left of the element/scroller. You can even use a complex relative value like "top bottom-=100px" which means "when the top of the trigger hits 100px above the bottom of the viewport/scroller"

In my case I want to start the trigger when it hit the top of the content(that need to be animated) and 20% from the top of the window

Similarly:
- end: "+=250%"  :- Describes a place on the endTrigger (or trigger if one isn't defined) and a place on the scroller that must meet in order to end the ScrollTrigger. So, for example, "bottom center" means "when the bottom of the endTrigger hits the center of the scroller". "center 100px" means "when the center of the endTrigger hits 100px down from the top of the scroller" (assuming vertical scroll). You can use keywords like "top", "bottom", "center" (or "left" and "right" if horizontal: true) or percentages like "80%" or pixel values like "100px". Percentages and pixels are always relative to the top/left of the element/viewport. You can also define a single relative value like "+=300" which means "300px beyond where the start is", or "+=100%" means "the height of the scroller beyond where the start is". "max" is a special keyword indicating the maximum scroll position.


Now, We difine the content that need to be animated, to do that we use the following code

tl.to(".panel-wrapper", { 
    y: -panelHeight,
    duration: 5,
    ease: "none",
});



- .to("className", {...});

will define what section/content will animate and the second parameter/object what to do(animation part)

In the above example we need to animate panel-wrapper section whill will scroll whole part above with the duration of 5 second


- y: -100 :- will animate the panel-wrapper to 100px we can also use percentage to animate for that we need to use 'yPercent: 100',

NOTE: duration will not allow the scroll to slow the animation but end value in "scrollTrigger" will if we increase the end value the animation time will increase.
