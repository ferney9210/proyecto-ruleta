const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click',girar);

function girar(){

let rand = Math.random() * 7200;
   calcular(rand);
   var sonido = document.querySelector('#audio');
   sonido.setAttribute('src','sonido/ruleta.mp3');

   function calcular(rand) {

  valor = rand / 360;
  valor = (valor-parseInt(valor.toString().split(".")[0]))*360;
  ruleta.style.transform = "rotate("+rand+"deg)";

}
}