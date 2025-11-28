console.log("hola mundo")

let nombre = "esmeralda"; // let es una constante global
console.log("mi nombre es", nombre)

let apellido = "corona"

console.log("mi nombre y mi apellido son:" ,  nombre + " " + apellido);
let suma = 5 ;
suma += 5;
console.log(suma)

let a=7;
let b=8;
let c=10;
let d=1;
 let suma1= a + b + c + d;
 console.log("el resultado de la suma es",suma1)

let arreglo1 =["aceite", "papel", "fabuloso", "carnes"]
console.log(arreglo1)

let aceite = arreglo1[2]
console.log(aceite)
let nuevoproducto = arreglo1.push("shampoo")
console.log(arreglo1)

//let eliminarproducto = arreglo1.pop("papel")
let eliminarproducto2 = arreglo1.splice(0,2)
console.log(arreglo1)
 let carro ={
    marca: "nissan",
    modelo: " versa",
    año: 2020,
    color:"blanco",
    motor:{
        tipo: "gasolina",
        cilindros:4,
        aceite: "5w36",

    }
 }

 console.log(carro);
 let moto ={
    marca:"yamaha",
    modelo: "mt-07",
    año:2024,
    color: "negro",
    motor:{
        compresion:11.5,
        transmision:"velocidades",
    }
 }
 console.log(moto);
 console. log(carro.marca)
 console.log(carro.motor.cilindros)
 console.log(moto.marca)
 
for(let i = 1; i <= 10; i++)[
[console.log(i)]
]
for( let i=100; i >= 1; i--)[
    [console.log(i)]
]

function sumar(a, b){
return a + b;
}
console.log(sumar(7,9))

function multiplicar(a, b){
    return a * b;
}
console.log(multiplicar(8, 3))

let numeros = [ 5, 10 ,15, 20, 25];
let sumar3 = 0;
for(let i =0; i < numeros.length; i++) {
    sumar3+= numeros[i]
}
console.log("la suma3 es:", sumar3);

let numero = [ 6, 8, 5, 4, 10, 7];
    let sumar4 = 0;
    for(let i =0; i < numeros.length; i++) {
 sumar4+= numero[i]
    }
    console.log("lasuma4 es:", sumar4);

    function sumararreglo(arr){
        let sumararr = 0;

        for(let i = 0; i < arr.length; i++){
            suma = arr[i];
    }
    return suma;
    }
    console.log(sumararreglo([10,20,30]));
    console.log(sumararreglo([10,20,30,2]));
    console.log(sumararreglo([10,20]));
    console.log(sumararreglo([10,20,10]));
    console.log(sumararreglo([10,20,12]));
    console.log(sumararreglo([10,20,30]));
    console.log(sumararreglo([10,20,30,31]));
    console.log(sumararreglo([10,20,30,12]));
    console.log(sumararreglo([10,20,30,10]));
    console.log(sumararreglo([10,20,30,13]));
    console.log(sumararreglo([10,20,30,5]));
    console.log(sumararreglo([10,20,30,16]));
    console.log(sumararreglo([10,20,30 ]));


function restararreglo(arreglo){
        let restar = 0;

        for(let i = 0; i < arreglo.length; i++){
            restar -= arreglo[i];
    }
    return restar;
    }
    console.log(restararreglo([15,30,45]));
   















