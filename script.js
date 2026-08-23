function toggleMenu(){

    const nav = document.getElementById("nav");

    if(nav){
        nav.classList.toggle("open");
    }

}


function copyText(text,button){

    navigator.clipboard.writeText(text).then(()=>{

        const old = button.innerText;

        button.innerText = "COPIED ✓";

        setTimeout(()=>{
            button.innerText = old;
        },1500);

    });

}


/* close mobile menu */

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        const nav = document.getElementById("nav");

        if(nav){
            nav.classList.remove("open");
        }

    });

});


/* small desktop parallax */

if(window.innerWidth > 850){

    document.addEventListener("mousemove",(e)=>{

        const x =
            (e.clientX / window.innerWidth - .5);

        const y =
            (e.clientY / window.innerHeight - .5);

        document.documentElement.style.setProperty(
            "--mx",
            `${x * 10}px`
        );

        document.documentElement.style.setProperty(
            "--my",
            `${y * 10}px`
        );

    });

}
