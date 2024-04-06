const cursor = document.querySelector(".cursor");
const main = document.querySelector('#main');
const mainVideo = document.querySelector('.page1 video');
const features = document.querySelectorAll('.page2 .features .features-text div');
const featureImgs = document.querySelectorAll('.page2 .features .feature-imgs img');
const rows = document.querySelectorAll('.row');
const mentions = document.querySelectorAll('.mentions');
const navLinks = document.querySelectorAll('#nav #nav-2 h4');
const navBar = document.querySelector('#nav #nav-2');
const purple = document.querySelector('#purple');
const purpleText = document.querySelectorAll('#purple .moving .moving-in h2');
const header = document.querySelector('header');
const menuBtn = document.querySelector('#menu-btn');
const mobNav = document.querySelector('#mob-nav');

function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init();

// adding cursor functionality
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.x + "px";
    cursor.style.top = e.y + "px";
});

document.addEventListener('touchstart', (e) => {
    console.log('start', e);
    cursor.style.left = e.changedTouches[0].clientX + "px";
    cursor.style.top = e.changedTouches[0].clientY + "px";
});

document.addEventListener('touchmove', (e) => {
    console.log('move', e);
    cursor.style.left = e.changedTouches[0].clientX + "px";
    cursor.style.top = e.changedTouches[0].clientY + "px";
});

document.addEventListener('touchend', (e) => {
    console.log('end' ,e);
    cursor.style.left = e.changedTouches[0].clientX + "px";
    cursor.style.top = e.changedTouches[0].clientY + "px";
});

mainVideo.addEventListener('mouseenter', (e) => {
    cursor.style.backgroundColor = 'transparent';
    cursor.innerHTML = '<button class="sound-btn">Sound On</button>';
});

mainVideo.addEventListener('mouseout', (e) => {
    cursor.style.backgroundColor = '#edbfff';
    cursor.innerHTML = '';
});

const mm = gsap.matchMedia();



// mobile animations
mm.add("(max-width: 576px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.page1 h1:nth-child(1)',
            scroller: '#main',
            start: 'top 5%',
            end: 'top 0',
            scrub: 2
        }
    });
    
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.page2 .section-heading',
            scroller: '#main', 
            start: 'top 10%',
            end: 'top 0',
            scrub: 2
        }
    });
    
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.page2 .features .features-text',
            scroller: '#main',
            start: 'top 40%',
            end: 'top 0',
            scrub: 2
        }
    });
    
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.page4',
            scroller: '#main',
            start: 'top 30%',
            end: 'top 0',
            scrub: 2
        }
    });

    tl.to('.page1 h1:nth-child(1)', {
        x: -200,
        duration: 2,
    }, "landing-text")
    
    tl.to('.page1 h1:nth-child(2)', {
        x: 200,
        duration: 2
    }, "landing-text")
    
    tl.to('.page1 .landing-text', {
        blur: 15,
        alpha: 0.3,
        duration: 2
    }, 'landing-text')
    
    tl.to('.page1 video', {
        width: '100%',
        duration: 2
    });

    tl2.to('#main', {
        backgroundColor: 'white',
        duration: 1
    }, 'feature-anim')
    
    tl2.to('.page2 .section-heading h2 .big', {
        color: 'black',
        duration: 1
    }, 'feature-anim')
    
    tl2.to('.page2 .section-heading h2 .small', {
        color: 'black',
        duration: 1
    }, 'feature-anim');
    
    tl3.fromTo('.page2 .features .features-text .feat-1', {
        y: 50,
    }, { y: 0, duration: 1 });
    
    tl3.fromTo('.page2 .features .features-text div:nth-child(2)', {
        y: 50,
    }, { y: 0, duration: 1 });
    
    tl3.fromTo('.page2 .features .features-text div:nth-child(3)', {
        y: 50,
    }, { y: 0, duration: 1 });

    tl4.to('#main', {
        backgroundColor: '#0f0d0d',
        duration: 1
    }, 'bg-change');

    tl4.to('.page3 .p3-part2 .portfolio:nth-child(1) h3',{
        color: 'white',
        duration: 1
    }, 'bg-change')

    tl4.to('.page3 .p3-part2 .portfolio:nth-child(1) p',{
        color: 'white',
        duration: 1
    }, 'bg-change')

    tl4.to('.page3 .p3-part2 .portfolio:nth-child(2) h3',{
        color: 'white',
        duration: 1
    }, 'bg-change')

    tl4.to('.page3 .p3-part2 .portfolio:nth-child(2) p',{
        color: 'white',
        duration: 1
    }, 'bg-change')
    
    tl4.to('.divider ', {
        width: '100%',
        duration: 1
    });
    
    tl4.fromTo('#head1', {
        y: 110
    }, { y: 0, duration: 1 });
    
    tl4.fromTo('#head2', {
        y: 110
    }, { y: 0, duration: 1 });
    
    tl4.fromTo('#head3', {
        y: 110
    }, { y: 0, duration: 1 });
});


// desktop animations
mm.add("(min-width: 768px)", () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.page1 h1:nth-child(1)',
            scroller: '#main',
            start: 'top 27%',
            end: 'top 0',
            scrub: 2
        }
    });
    
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.page2 .section-heading',
            scroller: '#main',
            start: 'top 40%',
            end: 'top 0',
            scrub: 2
        }
    });
    
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.page2 .features .features-text',
            scroller: '#main',
            start: 'top 40%',
            end: 'top 0',
            scrub: 2
        }
    });
    
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: '.page4',
            scroller: '#main',
            start: 'top 5%',
            end: 'top 0',
            scrub: 2
        }
    });

    tl.to('.page1 h1:nth-child(1)', {
        x: -200,
        duration: 2,
    }, "landing-text")
    
    tl.to('.page1 h1:nth-child(2)', {
        x: 200,
        duration: 2
    }, "landing-text")
    
    tl.to('.page1 .landing-text', {
        blur: 15,
        alpha: 0.3,
        duration: 2
    }, 'landing-text')
    
    tl.to('.page1 video', {
        width: '90%',
        duration: 2
    });

    tl2.to('#main', {
        backgroundColor: 'white',
        duration: 1
    }, 'feature-anim')
    
    tl2.to('.page2 .section-heading h2 .big', {
        color: 'black',
        duration: 1
    }, 'feature-anim')
    
    tl2.to('.page2 .section-heading h2 .small', {
        color: 'black',
        duration: 1
    }, 'feature-anim');
    
    tl3.fromTo('.page2 .features .features-text .feat-1', {
        y: 50,
    }, { y: 0, duration: 1 });
    
    tl3.fromTo('.page2 .features .features-text div:nth-child(2)', {
        y: 50,
    }, { y: 0, duration: 1 });
    
    tl3.fromTo('.page2 .features .features-text div:nth-child(3)', {
        y: 50,
    }, { y: 0, duration: 1 });

    tl4.to('#main', {
        backgroundColor: '#0f0d0d',
        duration: 1
    });
    
    tl4.to('.divider ', {
        width: '100%',
        duration: 1
    });
    
    tl4.fromTo('#head1', {
        y: 110
    }, { y: 0, duration: 1 });
    
    tl4.fromTo('#head2', {
        y: 110
    }, { y: 0, duration: 1 });
    
    tl4.fromTo('#head3', {
        y: 110
    }, { y: 0, duration: 1 });
});

function animateFeature(elem) {
    gsap.fromTo(elem, {
        opacity: 0,
        blur: 15,
        alpha: 0.3,
        zIndex: 1
    }, {
        opacity: 1, zIndex: 10, blur: 0,
        alpha: 1, duration: 0.6
    });
}

features.forEach((feature) => {
    feature.addEventListener('mouseenter', (e) => {
        if (e.target.classList.contains('feat-1')) {
            animateFeature('#feat-img-1');
            featureImgs[1].style.zIndex = 1;
            featureImgs[2].style.zIndex = 1;
        } else if (e.target.classList.contains('feat-2')) {
            animateFeature('#feat-img-2');
            featureImgs[0].style.zIndex = 1;
            featureImgs[2].style.zIndex = 1;
        } else if (e.target.classList.contains('feat-3')) {
            animateFeature('#feat-img-3')
            featureImgs[0].style.zIndex = 1;
            featureImgs[1].style.zIndex = 1;
        }
    });
})


rows.forEach(row => {
    row.addEventListener('mouseenter', (e) => {
        cursor.style.left = e.x + 5 + "px";
        cursor.style.top = e.y + 5 + "px";
        let attr = e.target.getAttribute('data-image');
        cursor.style.width = '300px';
        cursor.style.height = '250px';
        cursor.style.borderRadius = "0px";
        cursor.style.backgroundImage = `url(${attr})`;
        cursor.style.backgroundSize = 'cover';
        cursor.style.backgroundPosition = 'center';
    })

    row.addEventListener('mouseleave', (e) => {
        cursor.style.left = e.x + "px";
        cursor.style.top = e.y + "px";
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.borderRadius = "50%";
        cursor.style.backgroundImage = `none`;
        cursor.style.backgroundColor = '#edbfff';
        cursor.style.cursor = 'auto';
        cursor.style.position = 'fixed';
    });

});

navLinks.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        if (e.target.classList.contains('active')) {
            purple.style.zIndex = -1;
            purple.style.opacity = 0;
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.zIndex = 111;
        }
        if (e.target.classList.contains('work')) {
            purple.style.zIndex = 10;
            purple.style.opacity = 1;
            cursor.style.zIndex = 111;

            purpleText.forEach(text => {
                text.style.opacity = 1;
                text.innerText = 'Work';
            })
        } else if (e.target.classList.contains('studio')) {
            purple.style.zIndex = 10;
            purple.style.opacity = 1;
            cursor.style.zIndex = 111;

            purpleText.forEach(text => {
                text.style.opacity = 1;
                text.innerText = 'Studio';
            })
        } else if (e.target.classList.contains('contact')) {
            purple.style.zIndex = 10;
            purple.style.opacity = 1;
            cursor.style.zIndex = 111;

            purpleText.forEach(text => {
                text.style.opacity = 1;
                text.innerText = 'Contact';
            })
        }
    })
    navBar.addEventListener('mouseenter', () => {
        purple.style.zIndex = 10;
        purple.style.opacity = 1;
        cursor.style.width = '50px';
        cursor.style.height = '50px';
    });

    navBar.addEventListener('mouseleave', () => {
        purple.style.zIndex = -1;
        purple.style.opacity = 0;
        cursor.style.width = '20px';
        cursor.style.height = '20px';
    })
})

menuBtn.addEventListener('click', () => {
    if(!header.classList.contains('fullHeight')) {
        header.classList.add('fullHeight');
        gsap.fromTo('header', {
            height: '55px',
            backgroundColor:'transparent',
            mixBlendMode: 'difference'
        }, { height: '100vh', backgroundColor:'#0f0d0d', mixBlendMode: 'normal', duration: 1 });

        gsap.fromTo('header .mob-nav', {
            height: 0,
        }, { height: '80%', duration: 1 });
        
    } else {
        header.classList.remove('fullHeight');
        gsap.fromTo('header', {
            height: '100vh',
            backgroundColor:'#0f0d0d',
            mixBlendMode: 'normal'
        }, { height: '55px', backgroundColor: 'transparent', mixBlendMode: 'difference', duration: 1 })

        gsap.fromTo('header .mob-nav', {
            height: '80%',
        }, { height: 0, duration: 1 });
    }
})