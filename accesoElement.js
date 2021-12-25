

// metodo sort

let amigos = ["Erick", "Cristian", "Max", "Claudia"];
console.log(amigos.sort());


let numeros = [1, 5, 20, 23]; // con numeros ordena segun el primer numero de la cifra
console.log(numeros.sort());


let lista =["Pepe",5,2,"Diego","1"]
console.log(lista.sort())


//metodo reverse

let muchachos = ["Juan", "Lucas", "Pedro", "Marcos"];
console.log(muchachos.reverse());

//forEach

let arregloNumeros = [10,9,8,7,6,5,4,3,2,1];
arregloNumeros.forEach(function(num) {
console.log(num);
});

let clientes = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 22},
    {nombre: 'Karla', edad: 27},
];

clientes.forEach(function(cliente){
    console.log(cliente.nombre)
})  

let nombres = ['Juan','Manuel','Elio','Ali','Yecelis','Yecenia','Laura'];

nombres.forEach(function(nombre){
    console.log(nombre)
})

// metodo find

let productos = [
    {nombre: 'coca-cola', precio: 990},
    {nombre: 'papas fritas', precio: 590},
    {nombre: 'ramitas', precio: 290},
    {nombre: 'kapo', precio: 190},
];

let kapo = productos.find(function(producto){
    return producto.nombre == 'kapo'
    });
    console.log(kapo);


let pokemones = [
    {nombre: 'Charmander', level: 22},
    {nombre: 'Pikachu', level: 28},
    {nombre: 'Dito', level: 37},
    ];

let pokes = pokemones.find(function(poke){
    return poke.nombre == "Pikachu"
})
console.log(pokes)        


// findIndex 

let producto2 = [
    {nombre: 'coca-cola', precio: 990},
    {nombre: 'papas fritas', precio: 590},
    {nombre: 'ramitas', precio: 290},
    {nombre: 'kapo', precio: 190},
];

let ramitasIndice = producto2.findIndex(function(producto){
    return producto.nombre == 'ramitas'
    });
    console.log(ramitasIndice);
    

let experiencias = [
    {titulo: "Practica",anos: 1,},
    {titulo: "Programador Junior", anos: 2,},
    {titulo: "Programador Senior",anos: 4,},
    {titulo: "Jefe de proyecto",anos: 5,}
    ];

let exp5mas = experiencias.findIndex(function(exp){
    return exp.anos >= 5 
})
console.log(exp5mas)


//metodo some

let autos = [
    {marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
    {marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
    {marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
    {marca: 'Bmw', modelo: '116d', combustible: 'Diesel'},
    ];
let algunDiesel = autos.some(function(auto){
    return auto.combustible == 'Diesel'
    });
    console.log(algunDiesel);
    
let pokemon2 = [
    {nombre: 'Charmander', tipo: "Fuego"},
    {nombre: 'Pikachu', tipo: "Electricidad"},
    {nombre: 'Dito', tipo: "normal"},
    ];

let tipoagua = pokemon2.some(function(agua){
    return pokemon2.tipo == "agua"
})
console.log(tipoagua)



        
        
