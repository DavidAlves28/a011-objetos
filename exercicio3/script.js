const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
//a))//
const copiaPokemon = {...pokemon1};
copiaPokemon.nome = "Squirtle";
copiaPokemon.tipo = "Água";
// b)
pokemon1.ataques = [];
pokemon1.ataques.push({nome:"Investida",dano:40,tipo:"Normal",precisao:100});
// c))
copiaPokemon.ataques = [...pokemon1.ataques];
// d))
pokemon1.ataques.pop();// exclui array original.
pokemon1.ataques.push({nome:"Folha Navalha",dano:45,tipo:"Grama",precisao:100});
// e))
copiaPokemon.ataques.pop();//exclui array original.
copiaPokemon.ataques.push({nome:"Jato de Água",dano:40,tipo:"Água",precisao:100});

// f))
console.log(pokemon1);
console.log(copiaPokemon);




//grupo 2


















