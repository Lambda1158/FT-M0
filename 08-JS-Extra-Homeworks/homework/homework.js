// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]
    
    
     let b=[]
  let c=0
  for(let i in objeto){
    let a=[]
    a[0]=i
    a[1]=objeto[i]
    b[c]=a
    c++
  }
  return b
      
    */
  //Escribe tu código aquí
 

  var arr=[]
    for(let i in objeto){
      arr.push([i,objeto[i]])
    }
    return arr
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};                                       // objeto vacio: SE VAN A GUARDAN LOS PARES CLAVE VALOR
  for (var i = 0; i < string.length; i++) {           // a, d, s, j, f
      if (Object.keys(obj).includes(string[i])) {     // si dentro del objeto esta la propiedad que estamos buscando EN SU POSICION
          obj[string[i]] = obj[string[i]] + 1;        // 
      }
      else {
          obj[string[i]] = 1;                         // {a: 1, d: 1, s: 1, j: 1, f: 1}
      }
  }
  return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  let letragrandes=""
  let letrachica=""
  for(let i in s){
    if(s[i]===s[i].toUpperCase()){
      letragrandes=letragrandes+s[i]
    }else{
      letrachica=letrachica+s[i]
    }
  }
  
  return letragrandes.concat(letrachica)
  // return letragrandes+letrachica
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo=str.split(" ").map(function(frase){
    return frase.split("").reverse().join("")
  })
  return espejo.join(" ")
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  numero=numero.toString()
  let a=numero.split("")
  let b=a.reverse().join("")
  if(numero===b){
    return "Es capicua"
  }else{
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena=cadena.replace("a","")
  cadena=cadena.replace("b","")
  cadena=cadena.replace("c","")
  return cadena
  /*
    cadena=cadena.split("")
  let cadena2=[]
  for(let i in cadena){
    if(cadena[i]==="a"||cadena[i]==="b"||cadena[i]==="c"){
       
       }else{
      cadena2.push(cadena[i])  
    }
    
  }
  return cadena2.join("")
  */
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  //revisar sort wachi
  var resultado=arr.sort(function(ele1,ele2){
      return ele1.length-ele2.length
  })
  return resultado

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

