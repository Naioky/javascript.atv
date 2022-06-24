/*-----function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));
------*/

const lista = [
	{
	name: 'sabão em pó',
	price: 30,
},
{
	name: 'cereal',
	price: 12,
},
{
	name: 'feijao 1kg',
	price: 18,
},
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
	return lista.reduce (function( prev, current, index){
		console.log ('rodada', index + 1);
		console.log ({prev});
		console.log ({current});
		return prev - current.price;
	}, saldoDisponivel);
}

console.log (calculaSaldo(saldoDisponivel,lista));
