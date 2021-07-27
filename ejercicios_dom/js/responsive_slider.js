export function slider() {
    const $slides = document.querySelectorAll(".slide"),
        $btnPrev = document.querySelector(".prev"),
        $btnNext = document.querySelector(".next"),
        $slideCarga = document.querySelector(".carga-slide");
    
    let i = 0;

    function animacionSlide() {
        $slideCarga.style.animation = "slide 2s ease infinite";

        $slides[i].classList.remove("slide-active");

        i++;

        if (i > $slides.length - 1) i = 0;

        $slides[i].classList.add("slide-active");
    };

    let interval = setInterval(() => {
        animacionSlide();
    }, 2000); 

    document.addEventListener("click", e => {
        if (e.target.matches(".prev")) {
            clearInterval(interval);

            $slideCarga.style.animation = "0s";

            $slides[i].classList.remove("slide-active");

            i--;

            if (i < 0) i = $slides.length - 1;

            $slides[i].classList.add("slide-active");
        }
        
        if (e.target.matches(".next")) {
            clearInterval(interval);

            $slideCarga.style.animation = "0s";

            clearInterval(interval);

            $slides[i].classList.remove("slide-active");

            i++;

            if (i > $slides.length - 1) i = 0;

            $slides[i].classList.add("slide-active");
        }
    });
}