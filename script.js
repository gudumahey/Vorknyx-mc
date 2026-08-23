/* =========================================
   MOBILE MENU
========================================= */

function toggleMenu(){

    const nav = document.getElementById("nav");

    if(!nav) return;

    nav.classList.toggle("open");

}


/* =========================================
   CLOSE MENU AFTER CLICK
========================================= */

document.addEventListener("DOMContentLoaded",()=>{

    const links =
        document.querySelectorAll(".main-nav a");

    const nav =
        document.getElementById("nav");

    links.forEach(link=>{

        link.addEventListener("click",()=>{

            if(nav){
                nav.classList.remove("open");
            }

        });

    });

});


/* =========================================
   COPY SERVER IP
========================================= */

function copyText(text,button){

    if(!navigator.clipboard){

        button.innerText="COPY FAILED";

        setTimeout(()=>{
            button.innerText="COPY";
        },1500);

        return;
    }

    navigator.clipboard.writeText(text)
    .then(()=>{

        const oldText =
            button.innerText;

        button.innerText="COPIED ✓";

        setTimeout(()=>{

            button.innerText=oldText;

        },1500);

    })
    .catch(()=>{

        button.innerText="COPY FAILED";

        setTimeout(()=>{

            button.innerText="COPY";

        },1500);

    });

}


/* =========================================
   DESKTOP MOUSE MOVEMENT
========================================= */

if(window.innerWidth > 850){

    document.addEventListener(
        "mousemove",
        (event)=>{

            const x =
                event.clientX /
                window.innerWidth;

            const y =
                event.clientY /
                window.innerHeight;

            document.documentElement.style
                .setProperty(
                    "--mouse-x",
                    `${(x-.5)*10}px`
                );

            document.documentElement.style
                .setProperty(
                    "--mouse-y",
                    `${(y-.5)*10}px`
                );

        }
    );

}
