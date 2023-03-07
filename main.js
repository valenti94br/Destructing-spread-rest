// 1.  Ejercicios destructuring

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

//   Extrae la empleada Ana con todos sus datos personales:

const [emp1,emp2,emp3]= empleados

console.log(emp2)

// Extrae el email del empleado Luis --> Luis@gmail.com

const {email} = emp1
console.log(email)

// Dado el siguiente objeto:

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

// Cambia el nombre de la propiedad “name” por “nombre

const { name:nombre,type,ability,stats,moves } = pokemon
console.log(nombre)

// Extrae el nombre del Pokemon

console.log(nombre)

// Extrae el tipo de Pokemon que es

console.log(type)

// Extrae el movimiento “Tackle”

const [,use] = moves
console.log(use)

// 2. Ejercicios spread/rest

// Mergea el siguiente pokémon con el Pokemon del ejercicio anterior:

const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const mergearPokemon = {...pokemon, ...pikachu}
console.log(mergearPokemon)

// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

function sumEveryOther(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i += 1) {
      sum += nums[i];
    }
    return sum;
  }
  console.log(sumEveryOther(6, 8, 2, 3, 1))
  console.log(sumEveryOther(11, 3, 12))

//   Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

function addOnlyNums() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      if (!isNaN(arguments[i]) && typeof arguments[i] !== 'boolean') {
        total += Number(arguments[i]);
      }
    }
    return total;
  }
  console.log(addOnlyNums(1, 'perro', 2, 4))

//   Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

function countTheArgs() {
return arguments.length;
}

console.log(countTheArgs("Gengar", 2, false));

// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

const array1 = [11, 22, 30];
const array2 = [40, 50, 60];

function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2]
  }
  const combinedArray = combineTwoArrays(array1, array2)
  console.log(combinedArray)