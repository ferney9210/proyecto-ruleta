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

  setTimeout(() => {
   switch (true) {
      case valor > 0 && valor <= 45:
       alert('2 Estrellas');
       break;
      case valor > 45 && valor <= 90:
       alert('5 piezas');
       break;
      case valor > 90 && valor <= 135:
       alert('2 corazones');
       break;
      case valor > 135 && valor <= 180:
       alert('2 Nigiri');
       break;
      case valor > 180 && valor <= 225:
       alert('Handroll Mini');
       break;
      case valor > 225 && valor <= 270:
       alert('Descortez');
       break;
      case valor > 270 && valor <= 315:
       alert('Coca Cola 2 L');
       break;
      case valor > 315 && valor <= 360:
       alert('2 enjoys');
       break;
   
   }
   
}, 5000);
}
}