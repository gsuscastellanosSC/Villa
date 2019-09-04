var vp = document.getElementById("villaplatzi");
document.addEventListener("keydown", dibujarTeclado);
var papel = vp.getContext("2d");
var x = -14;
var y = -28;
control = true;
var flechas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT:39
};

var fondo = {
  url: "img/title.png",
  cargaOk: false
};

var cerdo = {
  url: "img/cerdo.png",
  cargaOk: false
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdo);

function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();
}

function cargarCerdo(){
  cerdo.cargaOk = true;
  dibujar();
}

function dibujar(x, y){
  console.log(fondo.cargaOk+" "+ x +" "+ y);
  if(fondo.cargaOk){
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(cerdo.cargaOk){
      papel.drawImage(cerdo.imagen, x, y);
    }
}

function aleatorio(min, maxi){
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function dibujarTeclado(evento){
  var movimiento = 20;
  switch (evento.keyCode){
  case flechas.UP:
    dibujar(x, y-movimiento);
    y = y-movimiento;
    if(y<=-29){
      y=442;
    }
    console.log(x+" "+y);
    console.log("up");
  break;
  case flechas.DOWN:
    dibujar(x, y+movimiento);
    y = y+movimiento;
    if(y>=443){
      y=-28;
    }
    console.log(x+" "+y);
    console.log("Down");
  break;
  case flechas.LEFT:
    dibujar(x-movimiento, y);
    x = x-movimiento;
    if(x<=-15){
      x=430;
    }
    console.log(x+" "+y);
    console.log("Left");
  break;
  case flechas.RIGHT:
    dibujar(x+movimiento, y);
    x = x+movimiento;
    if(x>=430){
      x=-9;
    }
    console.log(x+" "+y);
    console.log("Right");
  break;
  default:
    console.log("Otra tecla " + evento.keyCode );
  }
}
