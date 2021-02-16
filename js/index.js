var container = document.querySelector(".container")
var flockAudio = document.querySelector("#flock-audio");
var seaAudio = document.querySelector("#sea-audio");
window.addEventListener("load", function () {
    gsap.to(".ready-text", 1, { opacity: 1, ease: "power2.out", delay: .3 });
    document.body.addEventListener("click", function () {
        gsap.to(container, 1, { opacity: 1, ease: "power2.out", delay: .5 });
        seaAudio.play();
        flockAudio.play();
        gsap.to(".loading-text", .3, { opacity: 0, ease: "power2.out" });
    })
})


// gsap.set("body", { opacity: 0 })