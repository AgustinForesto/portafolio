export function validacion() {
    const $form = document.getElementById("form"),
        $inputs = document.querySelectorAll("#form [required]"),
        $formRe = document.querySelector(".formulario-response");
    
    $inputs.forEach(input => {
        const $span = document.createElement("span");
        $span.classList.add("formulario-error");
        $span.id = input.name;
        $span.textContent = input.title;
        input.insertAdjacentElement("afterend", $span);
    });

    document.addEventListener("keyup", e => {
        if (e.target.matches(".formulario [required]")) {
            let $input = e.target,
                pattern = $input.pattern || $input.dataset.pattern,
                $span = document.getElementById($input.name);
            
            if (pattern && $input.value != "") {
                let regex = new RegExp(pattern);
                return regex.exec($input.value) ? $span.classList.remove("is-active") : $span.classList.add("is-active");
            }
        }
    });

    document.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();

            $formRe.classList.remove("none");

            $formRe.innerHTML = `<img src="./assets/loader.svg" alt="Cargando">`;

            fetch("https://formsubmit.co/ajax/agustinsanchez099@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json",
                    "Accept": "aplication/json"
                },
                body: JSON.stringify({
                    nombre: $form.nombre.value,
                    email: $form.email.value,
                    asunto: $form.asunto.value,
                    comentario: $form.comentario.value
                })
            })
                .then(res => res.json())
                .then(json => {
                    if (json.success === "true") $formRe.innerHTML = `${json.message}`;
                })
                .catch(err => {
                    $formRe.innerHTML = `Ocurrio un error al enviar el formulario. Por favor, intentelo nuevamente<br>Error: ${err}`;
                })
                .finally(() => {
                    setTimeout(() => {
                        $formRe.innerHTML = "";
                        $formRe.classList.add("none");
                        $form.reset();
                    }, 5000);
                });
        }
    });
}