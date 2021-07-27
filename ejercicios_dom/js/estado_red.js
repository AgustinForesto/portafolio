export function estadoRed() {
    const $lista = document.createElement("ul"),
        $info = document.createElement("div"),
        $estado = document.createElement("div"),
        $id = document.getElementById("seccion7");

    function estado() {
        if (navigator.onLine) {
            $estado.classList.add("online");

            $estado.classList.remove("offline");

            $estado.innerHTML = `<h2>Online</h2>`;

            $info.appendChild($estado);
        } else {
            $estado.classList.add("offline");

            $estado.classList.remove("online");

            $estado.innerHTML = `<h2>Offline</h2>`;

            $info.appendChild($estado);
        }
    }

    if (navigator.connection) {
        $lista.innerHTML =
            `Network Information:
        <li>Downlink: ${navigator.connection.downlink}</li>
        <li>Effective Type: ${navigator.connection.effectiveType}</li>
        <li>Onchange: ${navigator.connection.onchange}</li>
        <li>Rtt: ${navigator.connection.rtt}</li>
        <li>Save Data: ${navigator.connection.saveData}</li>`;
    
        $info.appendChild($lista);
    }

    estado();

    window.addEventListener("online", e => estado());

    window.addEventListener("offline", e => estado());

    $id.appendChild($info);
}