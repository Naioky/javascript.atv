function validaArray (arr, num){
  try {
    if (!arr && !num) throw new ReferenceError ("Envie os parametros")

    if (typeof arr !==  'object') throw new TypeError ("Array precisa ser do tipo objt")

    if (typeof num !== 'number') throw new TypeError ("Array precisa ser do tipo num")

    if (arr.length !== num) throw new RangeError ("Tamanho invalido")

    return arr;

  }
  catch (e) {
    if (e  instanceof ReferenceError) {
      console.log ("É um ReferenceError !")
      console.log(e.message);

    } else if (e  instanceof TypeError) {
      console.log ("É um TypeError !")
      console.log(e.message);

    } else if (e  instanceof RangeError) {
      console.log ("É um RangeError !")
      console.log(e.message);
    } else {
      console.log ("Tipo de erro inesperado: " + e);
    }
  }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));
