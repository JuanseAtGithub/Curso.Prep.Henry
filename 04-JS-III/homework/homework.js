// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return(array[0]);
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return(array[array.length -1]);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return(array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for(let a=0; a<array.length; a++){
    array[a]=array[a]+1;
  }
  return(array);
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return(array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return(array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let cadena='';
  for(let a=0; a<palabras.length; a++){
    cadena=cadena+palabras[a];
    if(a!=palabras.length-1){
      cadena=cadena+' ';
    }
  }
  return(cadena);
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let a=false, b=0;
  do{
    if(array[b]===elemento){
      a=true;
    }
    b++;
  }while(a===false && b<array.length);
  return(a);
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma=0;
  for(let a=0; a<numeros.length; a++){
    suma=suma+numeros[a];
  }
  return(suma);
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return(agregarNumeros(resultadosTest)/resultadosTest.length);
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let masGrande=numeros[0];
  for(let a=0; a<numeros.length; a++){
    if(masGrande<numeros[a]){
      masGrande=numeros[a];
    }
  }
  return(masGrande);
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let producto=1;
  if(Object.values(arguments).length!=0){
    for(let a=0; a<Object.values(arguments).length; a++){
      producto=producto* Object.values(arguments)[a];
    }
    return(producto);
  }
  return(0);
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let mayores=0;
  for(let a=0; a<arreglo.length; a++){
    if(18<arreglo[a]){
      mayores++;
    }
  }
  return(mayores);
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia===1 || numeroDeDia===7){
    return('Es fin de semana');
  }
  return('Es dia Laboral');
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  while(n>10 || n<-10){
    n=n/10;
  }
  if(Math.floor(n)===9){
    return(true);
  }
  return(false);
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  let retorno=true;
  if(arreglo.length>0){
    for(let a=1; a<arreglo.length; a++){
      if(arreglo[a]!=arreglo[a-1]){
        retorno=false;
      }
    }
  }
  return(retorno);
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let meses=[];

  let estaEnero=false, estaMarzo=false, estaNoviembre=false;
  
  for(let a=0; a<array.length; a++){
    if(array[a]==='Enero'){
      estaEnero=true;
      meses.push(array[a]);
    }
    if(array[a]==='Marzo'){
      estaMarzo=true;
      meses.push(array[a]);
    }
    if(array[a]==='Noviembre'){
      estaNoviembre=true;
      meses.push(array[a]);
    }
  }
  if(estaEnero===false || estaMarzo===false || estaNoviembre===false){
    return('No se encontraron los meses pedidos');
  }
  return(meses);
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let otroArray=[];
  for (let a=0; a<array.length; a++){
    if (array[a]>100){
      otroArray.push(array[a]);
    }
  }
  return(otroArray);
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  

  let unArray=[];
  let a=1;

  do{

    unArray.push(a*2+numero);
    if(a===unArray[a-1]){
    return('Se interrumpió la ejecución');
    }
    a++;
  }while(a<=10)
  return(unArray);
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let unArray=[], a=0;

  while(a<9){
    a++;

    //if(a===5)
    //  unArray.push(unArray[a-1]);
    //  continue;
    unArray.push(numero+2*a);
  }
  return(unArray);
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
