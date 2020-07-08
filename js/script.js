var età = prompt('Inserisci la tua età') ;
var km = prompt('Inserisci la distanza in km') ;
var prezzo = 0.21 * km ;

document.getElementById('totale').innerHTML = prezzo + '' + 'euro';

if (età < 18) {
  document.getElementById('totale').innerHTML = prezzo * 0.8 + '' + 'euro';

} else if (età > 64) {
  document.getElementById('totale').innerHTML = prezzo * 0.6 + '' + 'euro';
}
