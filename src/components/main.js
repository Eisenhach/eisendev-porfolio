import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  startEvent: "DOMContentLoaded",
  offset: 120, // Desplazamiento (en píxeles) desde el borde inferior del viewport hasta el elemento
  delay: 0, // Retraso en milisegundos antes de que se inicie la animación
  duration: 400, // Duración de la animación en milisegundos
  easing: "ease", // Función de aceleración utilizada
  once: false, // Si la animación debe ocurrir solo una vez
  mirror: true,
  anchorPlacement: "top-bottom",
});
