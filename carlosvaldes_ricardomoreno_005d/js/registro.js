function CambiarMayusculas() {
  var a = document.getElementById("input1");
  a.value = a.value.toUpperCase();
}

function CambiarMayusculas2() {
  var a = document.getElementById("input2");
  a.value = a.value.toUpperCase();
}

function mostrarHora() {
  var d = new Date();
  var n = d.toLocaleTimeString();

  document.getElementById("fechaDom").innerText = n;
}

setInterval(function () {
  mostrarHora();
}, 1000);
