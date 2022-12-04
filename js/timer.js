
function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('demo').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}


function apPm(am,pm){

    const antePost = new Date();
    if(antePost>="00:00:00"){
      am = document.createElement('Am')
    }
    else if(antePost>="12:00:00"){
       pm = document.createElement('Pm')
    }

    return antePost
}

var i = 0;
var txt = 'Olá meu Sou o Adrian Zapico, tudo bem com você? Esse é meu portifólio de programação Web e Produção musical espero que aprecie. 😁';
var speed = 50;

function typeW() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeW, speed);
  }
}
