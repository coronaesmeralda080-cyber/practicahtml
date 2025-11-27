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
 