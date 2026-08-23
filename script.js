/* ================= LOADER ================= */

window.addEventListener("load", function(){

    setTimeout(function(){

        document.getElementById("loader")
            .classList.add("hide");

    }, 1900);

});


/* ================= MOBILE MENU ================= */

function toggleMenu(){

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");

}


/* Close menu after clicking link */

document.querySelectorAll("#navMenu a").forEach(function(link){

    link.addEventListener("click", function(){

        document.getElementById("navMenu")
            .classList.remove("active");

    });

});


/* ================= COPY IP ================= */

function copyIP(ip, button){

    navigator.clipboard.writeText(ip).then(function(){

        const oldText = button.innerText;

        button.innerText = "COPIED ✓";

        button.style.background = "#7c3aed";
        button.style.color = "#fff";

        showToast("SERVER IP COPIED ✓");

        setTimeout(function(){

            button.innerText = oldText;
            button.style.background = "";
            button.style.color = "";

        },1800);

    }).catch(function(){

        showToast("COPY FAILED");

    });

}


/* ================= TOAST ================= */

function showToast(message){

    const toast = document.getElementById("toast");

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(function(){

        toast.classList.remove("show");

    },1800);

}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".connection-card, .mode-card, .rule, .feature-list div, .about-content, .discord-box"
);

const revealObserver = new IntersectionObserver(

    function(entries){

        entries.forEach(function(entry){

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold:0.12
    }

);


revealElements.forEach(function(element){

    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* ================= ACTIVE NAV ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", function(){

    let current = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop - 150;

        if(window.scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link){

        link.style.color = "";

        if(link.getAttribute("href") === "#" + current){

            link.style.color = "#c084fc";

        }

    });

});
