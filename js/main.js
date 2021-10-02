//SCROLL TO SHOW AOS
AOS.init();
AOS.init({
    duration: 800
});

//DROP UP MENU ICONBARS
var element = document.querySelector(".iconbar__social-dropup-2");
function clickMeEvent(obj) {
    if (obj) {
        if (element.classList.contains("height__dropup")) {
            element.classList.remove("height__dropup");
        } else {
            element.classList.add("height__dropup");
        }
    }
}

// SCROLL TO SEARCHBAR POSITION
scrollToPosition = function () {
    $("html, body").animate({
        scrollTop: $('.search-bar').offset().top
    }, 1000);
}


// SCROLL TO SHOW, HIDE MENU BAR
// get previous position of scroll mouse
var prevScrollpos = window.pageYOffset;
var scrollMenu = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".bg__black").style.top = "0";
        document.querySelector(".header").style.top = "0";
    } else {
        document.querySelector(".bg__black").style.top = "-108px";
        document.querySelector(".header").style.top = "-108px";
    }
    prevScrollpos = currentScrollPos;
}
window.onscroll = scrollMenu;


// SHOW AND HIDE ICONBARS
var navbarToggleIcon = document.querySelector(".navbar-toggler-icon");
var element3 = document.querySelector(".iconbar");

function changeIcon(obj) {
    if (obj) {
        if (navbarToggleIcon.classList.contains("navbar-toggler-icon-2")) {
            navbarToggleIcon.classList.remove("navbar-toggler-icon-2");
            element3.classList.remove("display__iconbar");
            window.onscroll = scrollMenu;
        } else {
            navbarToggleIcon.classList.add("navbar-toggler-icon-2");
            element3.classList.add("display__iconbar");
            window.onscroll = null;
        }
    }
}


// BACK TO TOP
(function () {
    // Back to Top - by CodyHouse.co
    var backTop = document.getElementsByClassName('js-cd-top')[0],
        offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
        offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        scrollDuration = 700,
        scrolling = false;

    if (backTop) {
        //update back to top visibility on scrolling
        window.addEventListener("scroll", function (event) {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkBackToTop, 250) : window.requestAnimationFrame(checkBackToTop);
            }
        });

        //smooth scroll to top
        backTop.addEventListener('click', function (event) {
            event.preventDefault();
            (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : Util.scrollTo(0, scrollDuration);
        });
    }

    function checkBackToTop() {
        var windowTop = window.scrollY || document.documentElement.scrollTop;
        (windowTop > offset) ? Util.addClass(backTop, 'cd-top--is-visible') : Util.removeClass(backTop, 'cd-top--is-visible cd-top--fade-out');
        (windowTop > offsetOpacity) && Util.addClass(backTop, 'cd-top--fade-out');
        scrolling = false;
    }
})();

