import { dispositivo } from "./deteccion_dispositivo.js";

export function geo() {
    const $map = document.getElementById("map");

    let lat, lng;

    const cargarMapa = () => {
        let map = new google.maps.Map(
            $map,
            { zoom: 18, center: { lat, lng } }
        );

        new google.maps.Marker({ position: { lat, lng }, map });
    };

    navigator.geolocation.getCurrentPosition(
        (position) => {
            lat = position.coords.latitude;
            lng = position.coords.longitude;

            if (dispositivo.mobile()) {
                $map.innerHTML =
                    `<div class="geo-btns">
                        <button id="cargar-maps">Cargar con maps</button>

                        <button id="cargar-mapa">Cargar mapa</button>

                        <button><a href="https://www.google.com/maps/@${lat},${lng},18z" target="_blank">Link del mapa<a></button>
                    </div>`;

                document.addEventListener("click", e => {
                    if (e.target.matches("#cargar-maps")) cargarMapa();

                    if (e.target.matches("#cargar-mapa")) {
                        $map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.060214904331!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQwJzQ3LjgiUyA2NcKwMjcnNTQuMiJX!5e0!3m2!1ses-419!2sar!4v1625537633995!5m2!1ses-419!2sar" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
                    }
                });
            }

            if (dispositivo.desktop()) {
                $map.innerHTML =
                    `<div class="geo-btns">
                    <button id="cargar-maps">Cargar con maps</button>
                    <button id="cargar-mapa">Cargar mapa</button></div>`;

                document.addEventListener("click", e => {
                    if (e.target.matches("#cargar-maps")) cargarMapa();

                    if (e.target.matches("#cargar-mapa")) {
                        $map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1660.060214904331!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQwJzQ3LjgiUyA2NcKwMjcnNTQuMiJX!5e0!3m2!1ses-419!2sar!4v1625537633995!5m2!1ses-419!2sar" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
                    }
                });
            }
        },
        (error) => {
            $map.innerHTML = `<p>Ocurrio el siguiente error: <mark>${error.message}</mark></p>`;
        },
        {
            enableHighAccuracy: true,
            timeout: 60000,
            maximumAge: 0
        }
    );
}
