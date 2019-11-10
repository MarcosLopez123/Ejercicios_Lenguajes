var socket = io.connect('http://172.16.0.149:8088', { 'forceNew': true });

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})
var cadena;
function render (data) {
  var html = data.map(function(elem, index) {
    var html_string = expresiones(elem.text);
    return(`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
            </div>`);

  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}
 
function addMessage(e) {
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };
  
  socket.emit('new-message', message);
  return false;
}
//1let newMensaje = mensaje.match(/[aeiou|AEIOU]/g);
//2let newMensaje2 = mensaje2.match(/(\b[a-zA-Z]{1,}(|[0-9]{1,})\b)/g);
//3 let newMensaje2 = mensaje2.match(/[0-9|^0-9]/g);
//4let newMensaje2 = mensaje2.match(/\b[A-Z]/g);
//5let newMensaje2 = mensaje2.match(/[^aeiou|AEIOU]\b\s/g);

var expresiones = (mensajeObtenido) => {
  var v, p, n, m, nov;

  let Cvocales = mensajeObtenido.match(/[aeiou|AEIOU]/g);
  if (Cvocales === null) {
    v = 0;} 
  else {
    v = Cvocales.length;
  }
  document.getElementById('1').innerHTML = `Cantidad de vocales: ${v}`;

  let Cpalabras = mensajeObtenido.match(/\b[a-zA-Z0-9]{1,}\s/g);
  if (Cpalabras === null) {
    p = 0;
  } else {
    p = Cpalabras.length;
  }
  document.getElementById('2').innerHTML = `Cantidad de palabras: ${p}`;


  let Cnumeros = mensajeObtenido.match(/[0-9|^0-9]/g);
  if (Cnumeros === null) {
    n = 0;
  } else {
    n = Cnumeros.length;
  }
  document.getElementById('3').innerHTML = `Cantidad de números: ${n}`;

  let Cmayus = mensajeObtenido.match(/\b[A-Z]/g);
  if (Cmayus === null) {
    m = 0;
  } else {
    m = Cmayus.length;
  }
  document.getElementById('4').innerHTML = `Cantidad de palabras que inician con mayusculas: ${m}`;

  let Cnovocal = mensajeObtenido.match(/[^aeiou|AEIOU]\b\s/g);
  if (Cnovocal === null) {
    nov = 0;
  } else {
    nov = Cnovocal.length;
  }

  document.getElementById('5').innerHTML = `Cantidad de palabras que no finalizan con vocal: ${nov}`;

 
}
