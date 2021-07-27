export function responsiveTester() {
    const $form = document.querySelector(".tester");

    let tester;

    $form.addEventListener("submit", e => {
        if (e.target === $form) {
            e.preventDefault();
            
            tester = window.open(
                $form.url.value,
                "tester",
                `innerWidth=${$form.ancho.value}, innerHeight=${$form.alto.value}`
                );
            }
    });

    document.addEventListener("click", e => {
        if (e.target === $form.url) {
            $form.url.value = "http://";
        }
    
        if (e.target === $form.cerrar) {
            tester.close();
        }
    });
}