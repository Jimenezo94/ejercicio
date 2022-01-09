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
  let calculominimo = Math.round(20*(height * height))
  let calculomaximo = Math.round(24*(height * height))
  console.log(imc);
  optGender(gender, imc);

  let pesoIdeal= document.getElementById("ideal")
  let showimc= document.getElementById("Textoresultado")
  showimc.textContent= imc
  pesoIdeal.textContent=  'Peso ideal: ' +calculominimo + '-' + calculomaximo+'Kg'

}


let boton = document.getElementById("btn");
boton.addEventListener("click", (e) => {
  e.preventDefault();

  getValue();
});

const optGender = (genero, indice) => {
  let mensaje = document.getElementById("itm1") 
  let radio=document.getElementById("rcorners1")
  if (genero == "mujer") {
    if (indice < 16) {
      mensaje.textContent = "Desnutrida"
      radio.setAttribute("style", ' background:red' );
    } else if (indice >= 16 && indice < 20) {
      mensaje.textContent = "Bajo peso"
    } else if (indice >= 20 && indice < 24) {
      mensaje.textContent = "Peso normal"
    } else if (indice >= 24 && indice < 29) {
      mensaje.textContent = "Sobrepeso"
    } else if (indice >= 29 && indice < 34) {
      mensaje.textContent = "Obesidad"
    } else if (indice >= 34 && indice < 39) {
      mensaje.textContent = "Obesidad marcada"
    } else {
      mensaje.textContent = "Obesidad morbida"
    }
  }
  if (genero == "hombre") {
    if (indice < 17) {
      mensaje.textContent = "Desnutrido"
    } else if (indice >= 17 && indice < 20) {
      mensaje.textContent = "Bajo peso"
    } else if (indice >= 20 && indice < 25) {
      mensaje.textContent = "Normal"
    } else if (indice >= 25 && indice < 30) {
      mensaje.textContent = "Sobrepeso"
    } else if (indice >= 30 && indice <35){
      mensaje.textContent = "obesidad"
    } else if(indice >= 35 && indice < 40){
      mensaje.textContent = "obesidad marcado"
    } else {
      mensaje.textContent = 'Obesidad morbida'
    }
  }
};

var data = [
  { y: '2014', a: 50, b: 90},
  { y: '2015', a: 65,  b: 75},
  { y: '2016', a: 50,  b: 50},
  { y: '2017', a: 75,  b: 60},
  { y: '2018', a: 80,  b: 65},
  { y: '2019', a: 90,  b: 70},
  { y: '2020', a: 100, b: 75},
  { y: '2021', a: 115, b: 75},
  { y: '2022', a: 120, b: 85},
  { y: '2023', a: 145, b: 85},
  { y: '2024', a: 160, b: 95}
],
config = {
  data: data,
  xkey: 'y',
  ykeys: ['a', 'b'],
  labels: ['Total Income', 'Total Outcome'],
  fillOpacity: 0.6,
  hideHover: 'auto',
  behaveLikeLine: true,
  resize: true,
  pointFillColors:['#ffffff'],
  pointStrokeColors: ['black'],
  lineColors:['gray','red']
};
config.element = 'area-chart';
Morris.Area(config);
config.element = 'line-chart';
Morris.Line(config);
config.element = 'bar-chart';
Morris.Bar(config);
config.element = 'stacked';
config.stacked = true;
Morris.Bar(config);
Morris.Donut({
element: 'pie-chart',
data: [
{label: "Friends", value: 30},
{label: "Allies", value: 15},
{label: "Enemies", value: 45},
{label: "Neutral", value: 10}
]
});