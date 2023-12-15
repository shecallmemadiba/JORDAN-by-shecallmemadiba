var header = document.getElementById("header");
var jordan4 = document.getElementById("AJ4");
var jordan11 = document.getElementById("AJ11");
var jordan1 = document.getElementById("AJ1");
var jordan7 = document.getElementById("AJ7");
var modelo = document.getElementById("modelo");
var nome = document.getElementById("nome");
var Simgmodelo = document.getElementById("2imgmodelo");
var Timgmodelo = document.getElementById("3imgmodelo");
var Qimgmodelo = document.getElementById("4imgmodelo");
var nometexto = document.getElementById("nometexto");
var precotexto = document.getElementById("precotexto");
var modelotexto = document.getElementById("modelotexto");

jordan4.onclick = function(){
  document.getElementById("AJ4").style.color="red";
  document.getElementById("AJ1").style.color="black";
  document.getElementById("AJ11").style.color="black";
  document.getElementById("AJ7").style.color="black";
    header.style.backgroundImage = "url(img/AJ4_2.jfif)";
    modelo.innerHTML = "AIR JORDAN 4";
    nome.innerHTML = "BLACK CANVAS";
    preco.innerHTML = "380€";
    nometexto.innerHTML = "NOME";
    precotexto.innerHTML = "PREÇO";
    document.getElementById("line").style.backgroundColor="white";
    modelotexto.innerHTML = "MODELO";
    Simgmodelo.style.backgroundImage = "url(img/AJ4.jfif)";
    document.getElementById("2imgmodelo").src="img/AJ4.jfif";
    document.getElementById("3imgmodelo").src="img/aj4_3.jpg";
    document.getElementById("4imgmodelo").src="img/hero_image.jpg";
    document.getElementById("FINAL").style.display = "none";
    }

jordan11.onclick = function(){
  document.getElementById("AJ4").style.color="black";
  document.getElementById("AJ11").style.color="red";
  document.getElementById("AJ1").style.color="black";
  document.getElementById("AJ7").style.color="black";
    header.style.backgroundImage = "url(img/AJ11.jpg)";
    modelo.innerHTML = "AIR JORDAN 11";
    nome.innerHTML = "CHERRY";
    preco.innerHTML = "262€";
    document.getElementById("2imgmodelo").src="img/AJ11CHERRY.jfif";
    document.getElementById("3imgmodelo").src="img/A11LETSGO.jpg";
    document.getElementById("4imgmodelo").src="img/AJ11NIGHT.jfif";
    document.getElementById("FINAL").style.display = "none";
}
jordan1.onclick = function(){
  document.getElementById("AJ4").style.color="black";
  document.getElementById("AJ11").style.color="black";
  document.getElementById("AJ1").style.color="red";
  document.getElementById("AJ7").style.color="black";
    header.style.backgroundImage = "url(img/AJ1.jpg)";
    modelo.innerHTML = "AIR JORDAN 1";
    nome.innerHTML = "LOST AND FOUND";
    preco.innerHTML = "459€";
    document.getElementById("2imgmodelo").src="img/aj1_2continua.jpg";
    document.getElementById("3imgmodelo").src="img/aj1_continua .jpg";
    document.getElementById("4imgmodelo").src="img/AJ1_AAHJAH.jpeg";
    document.getElementById("FINAL").style.display = "none";
}
jordan7.onclick = function(){
  document.getElementById("AJ4").style.color="black";
  document.getElementById("AJ11").style.color="black";
  document.getElementById("AJ1").style.color="black";
  document.getElementById("AJ7").style.color="red";
      header.style.backgroundImage = "url(img/AJ7.jfif)";
    modelo.innerHTML = "AIR JORDAN 7";
    nome.innerHTML = "PARIS SAINT-GERMAIN";
    preco.innerHTML = "191€";
    document.getElementById("2imgmodelo").src="img/AJ7UUU.jpg";
    document.getElementById("3imgmodelo").src="img/AJ7QQQQ.jpg";
    document.getElementById("4imgmodelo").src="img/AJ7PATAT.jpg";
    document.getElementById("FINAL").style.display = "none";
}

function TxTdiferente(x) {
    x.style.fontWeight  = "bold";
    x.style.fontSize  = "17px";



  }

function TxTnormal(x) {
    x.style.fontWeight  = "normal";
    x.style.fontSize  = "16px";
  }


  function myFunction() {
    location.href = "Home.html";
  }
