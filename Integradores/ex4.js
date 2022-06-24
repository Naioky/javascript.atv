function calcularNumeroDeEntradas(placa){
   // Seu código vem aqui...
   var contador = 0;
   for (i = 0; i < placas.length; i++)
   {
      if (placas[i] == placa){
         contador++
      }
   }
   return contador
}
 
function calcularValorDevido(placa){
   // Seu código vem aqui...
   var divida = calcularNumeroDeEntradas(placa)
   if  (divida <= 20){
      return divida = divida*10
   }
   else {
      var  extra = divida - 20
      return divida = ((divida-20)*5) + 200
   }
}

/* Esse array é utilizado dentro das funções. Cada placa neste array representa uma entrada do respectivo veículo no estacionamento. Não é necessário alterar esse array. */
var placas = [
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'RXB-2525',
    'AKX-3333', 'ORO-7142', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'ORO-7142', 'ORO-7142',
    'ORO-7142', 'RXB-2525', 'AKX-3333', 'AKX-3333',
    'ORO-7142', 'ORO-7142', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'RXB-2525', 'AKX-3333', 'ORO-7142', 'AKX-3333',
    'AKX-3333', 'RXB-2525', 'AKX-3333', 'ORO-7142',
    'ORO-7142', 'AKX-3333', 'AKX-3333', 'RXB-2525',
    'AKX-3333', 'AKX-3333', 'RXB-2525', 'AKX-3333',
    'AKX-3333', 'RXB-2525'
 ]