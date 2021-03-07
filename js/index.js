var container = document.querySelector(".container")
var firstClick = true;

gsap.registerPlugin(DrawSVGPlugin);

var loadPage = gsap.timeline({ paused: true });
var startPage = gsap.timeline({ paused: true });

loadPage
    .addLabel('start')
    .to('.loading', 2, { opacity: 1, ease: 'power2.out' }, "start+=" + .3)
    .to('#load-icon', .5, { opacity: 1, ease: 'power2.out' }, "start+=" + .3)
    .to('.load-icon', 1.5, {
        startAt: { drawSVG: '0% 0%' }, drawSVG: '0% 100%', ease: 'none', repeat: 0, repeatDelay: .7, onComplete: function () {
            gsap.to('.loading', .5, { opacity: 0 })
            gsap.to('.ready', .8, { opacity: 1, ease: 'power2.out' })

            document.querySelector('.load-screen').addEventListener('click', function () {
                gsap.to('.load-screen', .5, { opacity: 0 })
                startPage.play();
            })

        }
    }, "start+=" + .3)

startPage
    .addLabel('start')
    .to('.logo-db-anim', 1, { opacity: 1, scale: 1, rotationZ: '0.01deg', ease: 'back(1.8).out' }, "start+=" + .3)

    .to('.text-anima', 1, {
        opacity: 1, y: 0, ease: 'power2.out', stagger: .2, onComplete: function () {
            gsap.to('.load-screen', .5, { pointerEvents: 'none' })
        }
    }, "start+=" + .3)

    .to('.phone-anim', .8, { opacity: 1, scale: 1, rotationZ: '0.01deg', ease: 'power1.out' }, "start+=" + .4)
    .to('.arrow-anim', .6, { opacity: 1, x: 0, rotationZ: '0.01deg', ease: 'back(1.8).out' }, "start+=" + .6)
    .to('.arrow-anim', 1, { x: 4, repeat: 10, yoyo: true, ease: 'none' }, "start+=" + 1.2)

window.addEventListener("load", function () {
    loadPage.play();
})