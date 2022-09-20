var numero = 5
 
function anterior(numero){
  return numero -1
}
 
function triple(numero){
  return numero*3
}
 
function anteriorDelTriple(numero){
  var resultado
  resultado = triple(numero);
  resultado = anterior(resultado)
  return resultado
}
 
 
 
console.log(anterior(numero))
 
console.log(triple(numero))
 
console.log(anteriorDelTriple(numero))