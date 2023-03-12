import validator from "./validator.js";
// todo o que tiene que ver con el DOM
const btnEnviar = document.querySelector("#btnEnviar");
const creditCard = document.getElementById("creditCard");

btnEnviar.addEventListener("click", function () {
  //console.log("click");
  const numero = creditCard.value;
  const numeroOculto = validator.maskify(numero);
  const resultado = validator.isValid(numero);
  //console.log();

  const mensajeElement = document.querySelector("#mensaje");
  mensajeElement.innerHTML = resultado
    ? "Este númeroes válido"
    : "Este número NO es válido";
});
