const stair1 = document.querySelectorAll('.stair-top');
const stair2 = document.querySelectorAll('.stair-bottom');

gsap.set(stair1, { y: '-100%' });
gsap.set(stair2, { y: '100%' });

function stairsIn() {
    const tl = gsap.timeline();

    tl.to(stair1, {
        y: "0%",
        duration: 1.2,
        stagger: {
            amount: 0.5,
            from: "center"
        },
        ease: "power3.inOut"
    }, "start");

    tl.to(stair2, {
        y: "0%",
        duration: 1.2,
        stagger: {
            amount: 0.5,
            from: "center"
        },
        ease: "power3.inOut"
    }, "start");

    return tl;
}

function stairsOut() {
    const tl = gsap.timeline();

    tl.to(stair1, {
        y: "-100%",
        duration: 1.1,
        stagger: { 
            amount: 0.5, 
            from: "center" 
        },
        ease: "power3.inOut"
    }, "start");

    tl.to(stair2, {
        y: "100%",
        duration: 1.1,
        stagger: { 
            amount: 0.5, 
            from: "center" 
        },
        ease: "power3.inOut"
    }, "start");

    return tl;
}

barba.init({
    transitions: [{
        name: "stair-transition",

        async leave() {
            await stairsIn();
        },

        async enter() {
            await stairsOut();
        }
    }]
});