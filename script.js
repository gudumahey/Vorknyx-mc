/* ================= LOADER ================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        document
            .getElementById("loader")
            .classList.add("hide");

    }, 2100);

});


/* ================= MOBILE MENU ================= */

function menu(){

    document
        .getElementById("nav")
        .classList.toggle("active");

}


/* CLOSE MOBILE MENU */

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("nav")
            .classList.remove("active");

    });

});


/* ================= COPY IP ================= */

function copyIP(ip, button){

    navigator.clipboard.writeText(ip)
        .then(() => {

            const old = button.innerText;

            button.innerText = "COPIED ✓";

            showToast("SERVER IP COPIED ✓");

            setTimeout(() => {

                button.innerText = old;

            }, 1800);

        })
        .catch(() => {

            showToast("COPY FAILED");

        });

}


/* ================= TOAST ================= */

function showToast(text){

    const toast =
        document.getElementById("toast");

    toast.innerText = text;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 1800);

}


/* ================= MOUSE PARALLAX ================= */

document.addEventListener("mousemove", e => {

    const x =
        (e.clientX / window.innerWidth - .5);

    const y =
        (e.clientY / window.innerHeight - .5);

    const moon =
        document.querySelector(".moon");

    const mountains =
        document.querySelectorAll(".mountains");

    if(moon){

        moon.style.transform =
            `translate(${x * 15}px, ${y * 15}px)`;

    }

    mountains.forEach((mountain,index) => {

        const amount =
            (index + 1) * 3;

        mountain.style.transform =
            `translate(${x * amount}px, ${y * amount}px)`;

    });

});


/* ================= SCROLL REVEAL ================= */

const reveal =
    document.querySelectorAll(
        ".mode-card, .connection-card, .rule, .features > div, .discord-box"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold:.12
        }
    );


reveal.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(35px)";

    element.style.transition =
        "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});


/* ================= REVEAL CLASS ================= */

const style =
document.createElement("style");

style.innerHTML = `

.mode-card.visible,
.connection-card.visible,
.rule.visible,
.features > div.visible,
.discord-box.visible{

    opacity:1 !important;

    transform:translateY(0) !important;

}

`;

document.head.appendChild(style);
