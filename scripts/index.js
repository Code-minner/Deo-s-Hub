
document.addEventListener("DOMContentLoaded", ShadowScroller);

function ShadowScroller() {
    // Navbar shadowHeader Scroller Section //
    const shadowHeader = document.querySelector(".shadowHead");

    if (shadowHeader) {
        window.addEventListener("scroll", () => {
            const isScrolled = window.scrollY > 100;
            shadowHeader.classList.toggle("flaot_head", isScrolled);
            console.log("java is okay")
        });

    } else {
        console.error("shadowHead element not found");
    }
}


document.addEventListener("DOMContentLoaded", function () {
    function ShadowScroller() {
        // Select the navigation element with the 'nav_bar' class
        const navBar = document.querySelector(".nav_bar");

        if (navBar) {
            // Event listener for scroll event
            window.addEventListener("scroll", () => {
                // Check if the page is scrolled more than 100 pixels
                const isScrolled = window.scrollY > 100;

                if (isScrolled) {
                    // Add the 'expand' class if scrolled more than 100 pixels
                    navBar.classList.add("expand");
                } else {
                    // Remove the 'expand' class if scrolled less than 100 pixels
                    navBar.classList.remove("expand");
                }

                console.log("Scroll detected. Navigation bar height adjusted.");
            });
        } else {
            console.error("nav_bar element not found");
        }
    }

    ShadowScroller();
});





function toggleNavBar() {
    var bar = document.querySelector('.bar');
    var navBar = document.getElementById("navbar")


    bar.classList.toggle('roller');
    bar.classList.toggle('active');
    navBar.classList.toggle("navigation")
}


function opener() {
var menu = document.getElementById("menu")
var icon = document.querySelector(".bx-menu")

menu.classList.toggle("menu")
icon.classList.toggle("bxs-x-square")

}





document.addEventListener('DOMContentLoaded', function () {
    const cardSwiper1 = new Swiper('.card_swiper', {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        breakpoints: {
            300: {
                slidesPerView: 2,
            },
            880: {
                slidesPerView: 3,
            },
            980: {
                slidesPerView: 4,
            },
            1000: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },

        },
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const cardSwiper2 = new Swiper('.card_swipers', {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        spaceBetween: 13,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        breakpoints: {

            300: {
                slidesPerView: 2,
            },

            900: {
                slidesPerView: 3,
            },

            1100: {
                slidesPerView: 4,
            },

            1200: {
                slidesPerView: 4,
            },

        },
    });
});




//-----------------------------------------------fliter-------------------------//


  
  
  document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById("video");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var icon = playPauseBtn.querySelector('i');

    function btn_display() {
        if (video.paused) {
            video.play();
            icon.classList.remove('bx-play');
            icon.classList.add('bx-pause');
        } else {
            video.pause();
            icon.classList.remove('bx-pause');
            icon.classList.add('bx-play');
        }
    }

    playPauseBtn.addEventListener('click', btn_display);
});

document.addEventListener('DOMContentLoaded', function () {
    // Function to animate the counter
    function animateCounter(counterElement, targetCount) {
        let currentCount = 0;
        const animationDuration = 2500; // Duration in milliseconds
        const countIncrement = targetCount / (animationDuration / 16); // 60 frames per second

        function updateCounter() {
            currentCount += countIncrement;
            counterElement.textContent = Math.floor(currentCount);

            if (currentCount < targetCount) {
                requestAnimationFrame(updateCounter);
            } else {
                counterElement.textContent = targetCount;
            }
        }

        updateCounter();
    }

    // Callback function for the Intersection Observer
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const targetCount = counter.getAttribute('data-count');
                    animateCounter(counter, targetCount);
                });

                // Unobserve the target once animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null, // Use the viewport as the root
        rootMargin: '0px', // No margin
        threshold: 0.5, // Trigger when 50% of the target is visible
    });

    // Target the container to observe
    const targetContainer = document.getElementById('targetContainer');
    observer.observe(targetContainer);
});