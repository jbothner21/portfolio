document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);

    var tll = gsap.timeline();

    tll.to(".animation-text", {
        duration: 0.75,
        text: "Hey there",
        ease: "power1.out"
    }, "+=1")

    tll.set(".animation-text", {
        text: ""
    }, "+=1")

    tll.to(".animation-text", {
        duration: 0.75,
        text: "I'm Jace",
        ease: "power1.out"
    }, "+=1")

    tll.set(".animation-text", {
        text: ""
    }, "+=1")

    tll.to(".animation-text", {
        opacity: 1,
        duration: 3,
        text: "I'm a digital marketer from Wichita, KS",
        ease: "power1.out"
    }, "+=1")

    tll.set(".animation-text", {
        text: ""
    }, "+=1.5")

    tll.to(".animation-text", {
        opacity: 1,
        duration: 2,
        text: "Let's explore what I can do",
        ease: "power1.out"
    }, "+=1")

    tll.to(".animation", {
        scale: 0.5,
        duration: 0.75,
        ease: "power1.inOut"
    }, "+=1")
    tll.to(".animation", {
        height: "0",
        y: "-50%",
        duration: 1,
        display: "none",
        ease: "power1.inOut",
    });

    tll.add(() => {
        var tll1 = gsap.timeline({
            repeat: -1
        });
        gsap.set([".arrow1", ".arrow2", ".arrow3"], {
            opacity: 0
        });

        tll1.staggerTo([".arrow1", ".arrow2", ".arrow3"], 0.25, {
                opacity: 1,
                ease: "power1.inOut"
            }, 0.25)
            .staggerTo([".arrow1", ".arrow2", ".arrow3"], 0.25, {
                opacity: 0,
                ease: "power1.inOut"
            }, 0.25);

        ScrollTrigger.create({
            start: "top",
            onEnter: () => {
                tll1.pause();
                gsap.to([".arrow1", ".arrow2", ".arrow3"], {
                    opacity: 0
                });
            },
            onLeaveBack: () => {
                tll1.play();
            },
            toggleActions: "play none none none"
        });
    });

    tll.to(".name", {
        display: "unset",
        opacity: 1,
        y: "20%",
        duration: 1,
        ease: "power1.inOut",
    });

    // OVERVIEW SECTION

    gsap.to(".pinned-knife", {
        scrollTrigger: {
            trigger: ".pinned-knife",
            start: "center center",
            end: "+=1000",
            pin: true,
            pinSpacing: true,
        }
    });

    gsap.from(".headline", {
        opacity: 0,
        scale: 1.05,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".headline",
            start: "top 80%",
            end: "top 60%",
            scrub: false
        }
    });

    gsap.from(".subhead", {
        opacity: 0,
        scale: 1.05,
        duration: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".subhead",
            start: "top 20%",
            end: "top 0%",
            scrub: false
        }
    });

    gsap.from(".knife", {
        opacity: 0,
        duration: 1,
        stagger: 1,
        scale: 0.8,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".knife",
            start: "top 60%",
            end: "top 40%",
            scrub: false
        }
    });

    gsap.set("#_1", {
        transformOrigin: "right",
        rotation: 190
    });
    gsap.set("#_2", {
        transformOrigin: "bottom left",
        rotation: 36
    });
    gsap.set("#_3", {
        transformOrigin: "top left",
        rotation: 295
    });
    gsap.set("#_4", {
        transformOrigin: "bottom",
        rotation: 90
    });
    gsap.set("#_5", {
        transformOrigin: "bottom left",
        rotation: 55
    });
    gsap.set("#_6", {
        transformOrigin: "top",
        rotation: 260
    });
    gsap.set("#_7", {
        transformOrigin: "top left",
        rotation: 320
    });
    gsap.set("#_8", {
        transformOrigin: "bottom",
        rotation: 270
    });

    gsap.to(["#_1", "#_2", "#_4", "#_5"], {
        rotation: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".knife",
            start: "top 30%",
            end: "bottom 0%",
            scrub: true
        }
    });

    gsap.to(["#_3", "#_6", "#_7", "#_8"], {
        rotation: "0_cw",
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".knife",
            start: "top 30%",
            end: "bottom 0%",
            scrub: true
        }
    });

    gsap.from(".overview", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".overview",
            start: "top 80%",
            end: "top 40%",
            scrub: false
        }
    });

    // TECHNICAL SKILLS

    gsap.set(".technical-skills-header", {
        opacity: 0
    });

    gsap.to(".technical-skills-header", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".technical-skills-header",
            start: "top 60%",
            end: "top 0%",
            scrub: true
        }
    });

    gsap.to(".technical-skills-header", {
        scrollTrigger: {
            trigger: ".technical-skills-header",
            start: "center center",
            end: "+=1000",
            pin: true,
            pinSpacing: true,
            onEnter: () => {
                gsap.to(".technical-skills-header-text", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut"
                });
            },
            onLeaveBack: () => {
                gsap.to(".technical-skills-header-text", {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut"
                });
            }
        }
    });

    const tl = gsap.timeline({
        paused: true
    });
    tl.to(".technical-skills-header", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    });

    ScrollTrigger.create({
        trigger: ".technical-skills-header",
        start: "bottom 70%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse()
    });

    gsap.from(".skill", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".skill",
            start: "top 90%",
            end: "top 50%",
            scrub: false
        }
    });

    gsap.from('.skill-bar', {
        duration: 1,
        width: '0%',
        ease: "power1.inOut",
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".skill",
            start: "top 80%",
            end: "top 40%",
            scrub: false
        }
    });

    function createBreathingTimeline(element) {
        var duration = Math.random() * (1.5 - 0.5) + 0.5;
        return gsap.timeline({
                repeat: -1,
                yoyo: true
            })
            .to(element, {
                duration: duration,
                ease: 'power2.out',
                stagger: 0,
            })
            .to(element, {
                duration: duration,
                boxShadow: '0 0 20px 10px rgba(115, 143, 167, 0.15)'
            }, 0);
    }

    var skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(function (bar) {
        createBreathingTimeline(bar);
    });


    gsap.from(".considerations", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.1,
        ease: "power1.inOut",
        delay: 1.5,
        scrollTrigger: {
            trigger: ".considerations",
            start: "top 80%",
            end: "top 40%",
            scrub: false,
        }
    }), "+=5";

    // FEATURED PROJECTS

    gsap.set(".featured-projects-header", {
        opacity: 0
    });

    gsap.to(".featured-projects-header", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".featured-projects-header",
            start: "top 60%",
            end: "top 0%",
            scrub: true
        }
    });

    gsap.to(".featured-projects-header", {
        scrollTrigger: {
            trigger: ".featured-projects-header",
            start: "center center",
            end: "+=1000",
            pin: true,
            pinSpacing: true,
            onEnter: () => {
                gsap.to(".featured-projects-header-text", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut"
                });
            },
            onLeaveBack: () => {
                gsap.to(".featured-projects-header-text", {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut"
                });
            }
        }
    });


    const tl1 = gsap.timeline({
        paused: true
    });

    tl1.to(".featured-projects-header", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    });

    ScrollTrigger.create({
        trigger: ".featured-projects-header",
        start: "bottom 70%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => tl1.play(),
        onLeaveBack: () => tl1.reverse()
    });

    gsap.from(".project", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".project",
            start: "top 80%",
            end: "top 0%",
            scrub: false
        }
    });

    // WORK EXPERIENCE

    gsap.set(".work-experience-header", {
        opacity: 0
    });

    gsap.to(".work-experience-header", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".work-experience-header",
            start: "top 60%",
            end: "top 0%",
            scrub: true
        }
    });

    gsap.to(".work-experience-header", {
        scrollTrigger: {
            trigger: ".work-experience-header",
            start: "center center",
            end: "+=1000",
            pin: true,
            pinSpacing: true,
            onEnter: () => {
                gsap.to(".work-experience-header-text", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut"
                });
            },
            onLeaveBack: () => {
                gsap.to(".work-experience-header-text", {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut"
                });
            }
        }
    });


    const tl2 = gsap.timeline({
        paused: true
    });

    tl2.to(".work-experience-header", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    });

    ScrollTrigger.create({
        trigger: ".work-experience-header",
        start: "bottom 70%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => tl2.play(),
        onLeaveBack: () => tl2.reverse()
    });

    gsap.from(".role", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".role",
            start: "top 80%",
            end: "top 0%",
            scrub: false
        }
    });

    // EDUCATION

    gsap.set(".education-header", {
        opacity: 0
    });

    gsap.to(".education-header", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".education-header",
            start: "top 60%",
            end: "top 0%",
            scrub: true
        }
    });

    gsap.to(".education-header", {
        scrollTrigger: {
            trigger: ".education-header",
            start: "center center",
            end: "+=1000",
            pin: true,
            pinSpacing: true,
            onEnter: () => {
                gsap.to(".education-header-text", {
                    opacity: 1,
                    duration: 1,
                    ease: "power2.inOut"
                });
            },
            onLeaveBack: () => {
                gsap.to(".education-header-text", {
                    opacity: 0,
                    duration: 1,
                    ease: "power2.inOut"
                });
            }
        }
    });

    const tl3 = gsap.timeline({
        paused: true
    });

    tl3.to(".education-header", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut"
    });

    ScrollTrigger.create({
        trigger: ".education-header",
        start: "bottom 70%",
        end: "bottom 20%",
        scrub: true,
        onEnter: () => tl3.play(),
        onLeaveBack: () => tl3.reverse()
    });

    gsap.from(".school", {
        duration: 1,
        opacity: 0,
        y: 50,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".school",
            start: "top 80%",
            end: "top 40%",
            scrub: false
        }
    });

    gsap.from(".years", {
        duration: 1,
        opacity: 0,
        delay: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".years",
            start: "top 80%",
            end: "top 40%",
            scrub: false
        }
    });

    gsap.from(".education-text", {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.75,
        delay: 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".education-text",
            start: "top 80%",
            end: "top 40%",
            scrub: false
        }
    });

    // CONTACT

    gsap.from(".contact-container", {
        duration: 1,
        opacity: 0,
        stagger: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            end: "top 40%",
            scrub: false
        }
    });
});