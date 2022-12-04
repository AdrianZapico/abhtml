var i = 0;
var txt = 'Olá meu nome aqui estão algumas informações sobre como me contatar, links de todas minha redes sociais e localização no maps. 😁';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}