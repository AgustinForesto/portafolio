import { dispositivo } from "./deteccion_dispositivo.js";

export function responsive() {
    const $yt = document.getElementById("youtube"),
        $maps = document.getElementById("maps");

    if (dispositivo.desktop()) {
        $yt.innerHTML = `<iframe width="auto" height="auto" src="https://www.youtube.com/embed/HDfHXo10cLo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

        $maps.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155959.15242838554!2d4.763875653154097!3d52.3547925364385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2zw4Ftc3RlcmRhbSwgUGHDrXNlcyBCYWpvcw!5e0!3m2!1ses-419!2sar!4v1625439086977!5m2!1ses-419!2sar" width="auto" height="auto" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    }


    if (dispositivo.mobile()) {
        $yt.innerHTML = `<a href="https://youtu.be/HDfHXo10cLo" target="_blank">Link al video<a>`;

        $maps.innerHTML = `<a href="https://goo.gl/maps/Nqweh8qyxypQauay7" target="_blank">Link al mapa<a>`;
    }
}