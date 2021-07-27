export const dispositivo = {
    mobile: function () {
        if (navigator.userAgent.match(/android/i)) return "Android";

        if (navigator.userAgent.match(/iphone/i)) return "Iphone";

        if (navigator.userAgent.match(/ipad/i)) return "Ipad";

        if (navigator.userAgent.match(/ipod/i)) return "Ipod";

        if (navigator.userAgent.match(/windows phone/i)) return "Windows phone";

        return false;
    },

    desktop: function () {
        if (!this.mobile()) {
            if (navigator.userAgent.match(/linux/i)) return "Linux";

            if (navigator.userAgent.match(/mac os/i)) return "Mac";

            if (navigator.userAgent.match(/windows nt/i)) return "Windows";
        } else return false
    },

    browser: function () {
        if (navigator.userAgent.match(/chrome/i)) return "Chrome";

        if (navigator.userAgent.match(/safari/i)) return "Safari";

        if (navigator.userAgent.match(/firefox/i)) return "Firefox";

        if (navigator.userAgent.match(/opera|opera minu/i)) return "Opera";

        if (navigator.userAgent.match(/msie|iemobile/i)) return "Internet explorer";

        if (navigator.userAgent.match(/edge/i)) return "Edge";
    }
}

export function deteccionDispositivo() {
    const $id = document.getElementById("user-agent");

    let usuario;

    if (dispositivo.mobile()) usuario = `Mobile (${dispositivo.mobile()})`;

    if (dispositivo.desktop()) usuario = `Desktop (${dispositivo.desktop()})`;

    $id.innerHTML =
        `<ul>
            <li>User Agent: ${navigator.userAgent}</li>
            <li>Dispositivo: ${usuario}</li>
            <li>Navegador: ${dispositivo.browser()}</li>
        </ul>`;
}