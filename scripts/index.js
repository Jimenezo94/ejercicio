import { productosTienda } from "../data/data.js";

console.log("message");

function getValue() {
  let gender = "";
  if (document.getElementById("female").checked) {
    gender = "mujer";
  }
  if (document.getElementById("Man").checked) {
    gender = "hombre";
  }
  //let name = document.getElementById('nombre').value;
  let weight = document.getElementById("peso").value;
  let height = document.getElementById("altura").value;

  let imc = Math.round(weight / (height * height));
  let calculominimo = Math.round(20 * (height * height));
  let calculomaximo = Math.round(24 * (height * height));
  console.log(imc);
  optGender(gender, imc);

  let pesoIdeal = document.getElementById("ideal");
  let showimc = document.getElementById("Textoresultado");
  showimc.textContent = imc;
  pesoIdeal.textContent =
    "Peso ideal: " + calculominimo + "-" + calculomaximo + "Kg";
}

let boton = document.getElementById("btn");
boton.addEventListener("click", (e) => {
  e.preventDefault();

  //let direccion = document.getElementById("dir").value;
  console.log("nj");
  console.log("datosForm");
  //los parametros de esta funciones hacen referencia a los nombres de objeto

  getValue();
  saveForm();
  ListarDatos();
});

const optGender = (genero, indice) => {
  let mensaje = document.getElementById("itm1");
  let radio = document.getElementById("rcorners1");
  if (genero == "mujer") {
    if (indice < 16) {
      mensaje.textContent = "Desnutrida";
      agregarUsuario("Desnutrida");
      radio.setAttribute("style", " background:red");
    } else if (indice >= 16 && indice < 20) {
      mensaje.textContent = "Bajo peso";
      agregarUsuario("Bajo peso");
      radio.setAttribute("style", " background: orange");
    } else if (indice >= 20 && indice < 24) {
      mensaje.textContent = "Peso normal";
      agregarUsuario("Peso normal");
      radio.setAttribute("style", " background: #FC4B08 ");
    } else if (indice >= 24 && indice < 29) {
      mensaje.textContent = "Sobrepeso";
      agregarUsuario("Sobrepeso");
      radio.setAttribute("style", " background: rgb(169, 228, 8)");
    } else if (indice >= 29 && indice < 34) {
      mensaje.textContent = "Obesidad";
      agregarUsuario("Obesidad");
    } else if (indice >= 34 && indice < 39) {
      mensaje.textContent = "Obesidad marcada";
      agregarUsuario("Obesidad marcada");
    } else {
      mensaje.textContent = "Obesidad morbida";
      agregarUsuario("Obesidad morbida");
    }
  }
  if (genero == "hombre") {
    if (indice < 17) {
      mensaje.textContent = "Desnutrido";
      agregarUsuario(imc);
    } else if (indice >= 17 && indice < 20) {
      mensaje.textContent = "Bajo peso";
      agregarUsuario(imc);
    } else if (indice >= 20 && indice < 25) {
      mensaje.textContent = "peso normal";
      agregarUsuario(imc);
    } else if (indice >= 25 && indice < 30) {
      mensaje.textContent = "Sobrepeso";
      agregarUsuario(imc);
    } else if (indice >= 30 && indice < 35) {
      mensaje.textContent = "obesidad";
      agregarUsuario(imc);
    } else if (indice >= 35 && indice < 40) {
      mensaje.textContent = "obesidad marcada";
      agregarUsuario(imc);
    } else {
      mensaje.textContent = "Obesidad morbida";
      agregarUsuario(imc);
    }
  }
};

//let datosForm = [{ estado: "sobrepeso" }];
let datosForm = [];

const agregarUsuario = (E) => {
  let registro = {
    estado: E,
  };
  datosForm.push(registro);
  console.log(datosForm);
};
// // // almacenamos y enviamos datos a localstorage(set)
const saveForm = () => {
  localStorage.setItem("usuario", JSON.stringify(datosForm));
  console.log("cfhcgh");
  //ListarDatos();
};
// //convertimos los datos para usarlos(get)

let showDatos = [];
let agregarEstado = document.getElementById("estadistica");
const ListarDatos = () => {
  agregarEstado.innerHTML = "";
  showDatos = JSON.parse(localStorage.getItem("usuario"));
  let contadorDesnutrido = 0;
  let contadorBajopeso = 0;
  let contadorPesonormal = 0;
  let contadorSobrepeso = 0;
  let contadorObesidad = 0;
  let contadorObesidadmarcada = 0;
  let contadorMorbida = 0;
  showDatos.forEach((element) => {
    console.log(element.estado);
    if (element.estado == "Desnutrido" || "Desnutrida") {
      contadorDesnutrido = contadorDesnutrido + 1;
      console.log("jj");
    }
    if (element.estado == "Bajo peso") {
      contadorBajopeso = contadorBajopeso + 1;
      console.log("jj");
    }
    if (element.estado == "Peso normal") {
      contadorPesonormal = contadorPesonormal + 1;
      console.log("jj");
    }
    if (element.estado == "Sobrepeso") {
      contadorSobrepeso = contadorSobrepeso + 1;
      console.log("jj");
    }
    if (element.estado == "Obesidad") {
      contadorObesidad = contadorObesidad + 1;
      console.log("jj");
    }
    if (element.estado == "Obesidad marcada") {
      contadorObesidadmarcada = contadorObesidadmarcada + 1;
      console.log("jj");
    }
    if (element.estado == "Obesidad morbida") {
      contadorMorbida = contadorMorbida + 1;
      console.log("jj");
    }
  });
  agregarEstado.innerHTML += `<div class="">
         <div class="card-body"
         <section class"card-title"> Desnutrido:${contadorDesnutrido}</section>
         <section class"card-subtitle mb-2 text-muted"> Peso bajo:${contadorBajopeso} </section>      
         <section class"card-subtitle mb-2 text-muted"> Peso normal:${contadorPesonormal} </section>     
         <section class"card-subtitle mb-2 text-muted"> Sobrepeso:${contadorSobrepeso} </section>     
         <section class"card-subtitle mb-2 text-muted">Obesidad :${contadorObesidad} </section>
         <section class"card-subtitle mb-2 text-muted"> Obesidad marcada :${contadorObesidadmarcada} </section>
         <section class"card-subtitle mb-2 text-muted"> Obesidad Morbida :${contadorMorbida} </section>
         </div>
         `;
};
