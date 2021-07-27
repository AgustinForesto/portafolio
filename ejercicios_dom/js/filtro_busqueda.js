export function filtro() {
    const $cards = document.querySelectorAll(".card");

    document.addEventListener("keyup", e => {
        if (e.target.matches(".card-filter")) {
            if (e.key === "Escape") e.target.value = "";

            $cards.forEach(el => el.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? el.classList.remove("filter") : el.classList.add("filter"));
        }
    });
}