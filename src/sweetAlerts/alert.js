import Swal from "sweetalert2";

export function notify(titulo, icono, mensaje) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
  });
}
export function success(titulo, mensaje) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    allowOutsideClick: false,
    icon: "success",
    timer: 3000,
    allowEscapeKey: false,
    allowEnterKey: false,
    showConfirmButton: false,
    showDenyButton: false,
    showCancelButton: false,
  });
}
export function errorMsg(titulo, mensaje) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    allowOutsideClick: false,
    icon: "error",
    allowEscapeKey: false,
    allowEnterKey: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
  });
}
