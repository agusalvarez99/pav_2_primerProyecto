function copy(id_elemento) {
  var aux = document.createElement('input');
  aux.setAttribute('value', document.getElementById(id_elemento).innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
  window.alert('Copied to clipboard!');
}
function copyEmail() {
  return 0;
}
