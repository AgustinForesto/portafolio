export function sorteo() {
    const $jugadores = document.querySelectorAll(".jugador"),
        $btn = document.getElementById("btn-ganador"),
        $ganador = document.createElement("div");

    document.addEventListener("click", e => {
        if (e.target.matches("#btn-ganador")) {
            let ganador = Math.floor(Math.random() * $jugadores.length);

            $ganador.classList.add("ganador");

            $ganador.innerHTML = `<h3>${$jugadores[ganador].textContent}</h3>`;

            $btn.insertAdjacentElement("afterend", $ganador);
        }
    });
}