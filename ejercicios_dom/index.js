import { menuHamburguesa } from "./js/menu_hamburguesa.js";
import { reloj, alarma } from "./js/reloj.js";
import { moverBola } from "./js/evento_teclado.js";
import { cuentaRegresiva } from "./js/cuenta_regresiva.js";
import { btnScroll } from "./js/boton_scroll.js";
import { temaNegro } from "./js/tema_negro.js";
import { responsive } from "./js/responsive.js";
import { deteccionDispositivo } from "./js/deteccion_dispositivo.js";
import { responsiveTester } from "./js/responsive_tester.js";
import { estadoRed } from "./js/estado_red.js";
import { webCam } from "./js/deteccion_webcam.js";
import { geo } from "./js/geolocalizacion.js";
import { filtro } from "./js/filtro_busqueda.js";
import { sorteo } from "./js/sorteo.js";
import { slider } from "./js/responsive_slider.js";
import { scrollSpy } from "./js/scroll_espia.js";
//import { smartVideo } from "./js/video_inteligente.js";
import { validacion } from "./js/formulario.js";





document.addEventListener("DOMContentLoaded", e => {
    menuHamburguesa();
    reloj();
    alarma();
    moverBola();
    cuentaRegresiva();
    btnScroll();
    temaNegro();
    responsive();
    responsiveTester();
    deteccionDispositivo();
    estadoRed();
    webCam();
    geo();
    filtro();
    sorteo();
    slider();
    scrollSpy();
    //smartVideo();
    validacion();
});