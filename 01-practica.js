/// 101 EJERCICIO CURSO BIGGEST-WORD Palabra más larga

    function biggestWord(phrase) {
        const words = phrase.split (" ")
        let biggest = ""

        for (let word of words) {
            if (word.length > biggest.length) {
                biggest = word
            }
        }

        return biggest
    }

    console.log(biggestWord ("Esta frase puede contener muchas palabras sueltasaaaaa"))

   

/// EJERCICIO VALUES 114.
     const miReceta = {
        nombre: "Tarta de manzana",
        tiempo: 45,
        dificultad: "media",
        porciones: 8
    }

    function values(obj) {
        //Object es una funcion ya creada en JavaScript, toma un objeto y devuelve un array con todos los valores de sus propiedades propias 
        return Object.values(obj)
    }

    console.log(values(miReceta))


    // con la funcion de abajo se muestra todas las funciones que un array puede usar como push, pop, map, join...
    const numeros = [1, 2, 3]
    console.log(Object.getPrototypeOf(numeros)) 


/// 102 EJERCICIO CALIFICATIONS 

    let eso2o = {
        David: 8.25,
        Maria: 9.5,
        Jose: 6.75,
        Juan: 1,
        Blanca: 7.75,
        Carmen: 8,
        Alberto: 2,
        Paula: 1
    }

    function printAverage(objetoNotas){
        const notas = Object.values(objetoNotas)
        const suma = notas.reduce((acum, nota) => acum + nota, 0)
        const media = suma/ notas.length    

        if (media === 10) {
            return("Matricula de honor")
        } else if (media >= 9 && media <10 ) {
            return("Sobresaliente")
        } else if (media >= 7 && media < 9){
            return("Notable")
        } else if (media >=6 && media < 7){
            return("Bien")
        } else if (media >= 5 && media < 6) {
            return ("Suficiente")
        } else if (media >= 4 && media < 5){
            return (" Insuficiente")
        } else {
            return ("Muy deficiente")
        }
    }

    console.log(printAverage(eso2o))


/// 103 Ejercicio CHECK ARGUMENTS
    /*
        Esto es lo que nos dan: 

        Check Arguments

        Es muy habitual en javascript, al recibir argumentos de una función, querer asegurarnos de que no sean undefined o null. En este ejercicio debes convertir el código de abajo en algo equivalente pero más compacto y expresivo.
        TIP: Piensa en el operador ternario y también en el operador OR.
        TIP: Puedes suponer que input es siempre de tipo string, incluyendo null o undefined. Es decir, no vas a recibir números, objetos, etc.
    */

    function f(input) {
    var result;
    if (input === undefined) {
        result = "Unknown";
    } else if (input === null) {
        result = "";
    } else {
        result = input;
    }
    return result;
    }


    function f(input) {
        return input === undefined ? "Unknown" : (input || "")
    }

    console.log(f (undefined))

/// 105 EJERCICIO DEEP EQUAL
// ApartadoA

    const user1 = {name: "María", age:30}
    const clonedUser1 = {name: "María", age: 30} 

    console.log(user1 === clonedUser1) //false

    function isEqual (a, b) {

        const keysA = Object.keys (a)
        const keysB= Object.keys (b)
        //Con object podemos sacar lo que queramos de los objectos, con keys sacamos la propiedad y con values sacamos los valores

        if(keysA.length !== keysB.length) return false

        for(let key of keysA) {
            if(!b.hasOwnProperty(key) || a[key] !== b[key]) return false
        }

        return true

    //     Esta funcion solo funciona con las propiedades primitivas (string, number, boolean, null, undefined)
    }

    console.log(isEqual(user1, clonedUser1))

//ApartadoB

    const user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
    };
    const clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29621 },
    friends: ["Juan"],
    };

    function isDeepEqual (a, b){
    
        if (a === b) return true

        if (typeof a !== "object" || typeof b !== "object" || a=== null ||b === null) {return false}

        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        if(keysA.length !== keysB.length) return false //Es lo mismo del anterior

        for(let key of keysA) {
            if(!b.hasOwnProperty(key)) return false      
            
            if(typeof a[key] === "object" && a[key] !== null) {
                if (!isDeepEqual(a[key], b[key])) return false
            } else {
                if (a[key] !== b[key]) return false
            }
            //NO HACE FALTA HACER ESTO PORQUE CUANDO SE VUELVE A LLAMAR A ISDEEPEQUAL HACE A ===B POR LO TANTO YA SE ANALIZA AHÍ
            
        }

        return true
    }

    console.log(isDeepEqual(user, clonedUser))

/// 106 EJERCICIO DICES CLOSURE

    function dadosClosure () {
        let resultados = [null, null] 

        function tirarDado () {
            /* 
                Math.random() genera un número entre 0(incluido) y 1(excluido)
                Multiplicamos por 6 para optener un rango de 0 a <6 
                Math.floor () da números enteros de entre 0 y 5 
                Sumamos uno para que den valores entre 1 y 6
            */    
            return Math.floor(Math.random() * 6) +1 
        }

        return {
            roll: function(){
                resultados [0] = tirarDado()
                resultados [1] = tirarDado ()
            },

            reset: function () {
                        resultados = [null, null]
            },

            print: function () {
                if (resultados [0] === null || resultados [1] === null){
                    console.log ("Primero debes tirar los dados")
                    return 
                }

                console.log(`Resultados: ${resultados[0]} y ${resultados[1]}`)

                if (resultados[0] === 6 && resultados[1] === 6) {
                    console.log("Geniaaaaaal DOBLE SEIS! ¡HAS GANADO UN PREMIO!")
                }
            }
            
        }
    }

    const dados = dadosClosure()

    dados.print()
    dados.roll()
    dados.print()

    dados.reset()
    dados.print()


/// 107 EJERCICIO HOISTING 

// ApartadoB

//     var a = 1;

//     (function() {
//     console.log(a);
//     var a = 2;
//     b = 4;
//     var c = 3;

//     console.log(a)
//     })();

//     console.log(a);
//     console.log(b);
//     console.log(c);

// // Apartado C
//     f();
//     var a = 1;

//     function f() {
//     console.log(a);
//     b = 4;
//     var c = 3;
//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);

// // Apartado A
//     function f() {
//     console.log(a);
//     console.log(g());

//     var a = "good job!";
//     function g() {
//         return a;
//     }
//     console.log(a);
//     }

//     f();



/// EJERCICIO INCLUDES 108
function includes(array, value) { 
    if (array.indexOf(value) === -1)
        {return false; } 
        return true 
}
    console.log(includes([1,2,3,4], 3))

/// 109 EJERCICIO PRIMES PRIMOS
function isPrime(n) {
  if (n < 2) return false;

  for (let m = 2; m <= Math.sqrt(n); m++) {
    if (n % m === 0) {
      return false;
    }
  }
// con comprobar hasta la raíz cuadrada es más eficiente
  return true;
}

function showPrimes (from, to){

    for (let i= from; i<=to; i++){
        if (isPrime(i)) {
            console.log(`${i} is PRIME`)
        } else {
            console.log(`${i} is not a prime`)
        }
    }
}

showPrimes(1, 10)



/// 111 EJERCICIO REVERSE-TEXT

function reverseText(text){
    return text.split(" ").reverse().join(" ")
}
console.log(reverseText("uno dos tres")); // "tres dos uno"

/// 112 EJERCICIO SUBSETS.

// con for
function subsets(word) {
let result = []

    for (let i = 0; i < word.length; i++) {
    result.push(word.slice(i));
}
 return result
}

// sin bucles
function subsets(word){
    let indices = Array.from({ length: word.length }, (_, i) => i);
    //Array.from es un método que crea un nuevo array a partir de algo iterable 
    console.log(indices)

    let subsetArray =indices.map (i => word.slice(i))

    //slice lo que hace es devolver la aprte de la palabra desde la posición i hasta el final 

return subsetArray
}

console.log(subsets("message"))

/// 113 EJERCICIO THIS
var surname = "Pérez";

var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname()); //1 //Jimenez

var surnameFunction = person.wife.getSurname;
console.log(surnameFunction());//2 //Pérez

console.log(surnameFunction.call(person));//3 //González

    /*
        En el primero nos sale jimenez porque llamamos al this desde una función dentro de un objeto 
        objeto.metodo()

        En el segundo nos sale Perez, porque llamamos a la función y como no está dentro de un objeto busca en el objeto global (en JS es window) y var hace que coloque a Pérez como una propiedad del objeto global, de hecho si cambiamos el var por let ya no aparece y sale undefined

        En el tercero, utilizamos call para especificarle exactamente quien es tu papi, por eso nos marca que sería Gonzalez, pero si pusieramos person.wife entonces ya buscaría dentro de wife y saldría Jimenez 
    */


/// 115 EJERCICIO ZIP
function zipObject(keys, values){
    let result = {}
    for (let i= 0; i < keys.length; i++ ) {
        result [keys[i]] = values [i]
        //Para cada keyde numero x ponle el valor del mismo número
    }

    return result
}

function zipObject(keys, values){
    let result = {}
    for (let i= 0; i < keys.length; i++ ) {
        if (values [i]){
        result [keys[i]] = values [i]
        //Para cada keyde numero x ponle el valor del mismo número
        }
    }

    return result
}

console.log(zipObject(["spanish", "english", "french"], ["hola", "hi"])); 

/// 116 EJERCICIO ZZCRYPT

var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
let plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
let cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  let phrase = ""
  for (let i = 0; i< secret.length ; i++) {
    let char = secret [i]
    let index = cipher.indexOf(char)

    if (index === -1){
        phrase += char
    } else {
        phrase += plain[index]
    }
  }
  return phrase
}

console.log(decrypt(secret))

/// 201 EJERCICIO ARGS
    function f(a, { b } = {}, c = 100) {
    console.log(arguments.length);
    console.log(a, a === arguments[0]);
    console.log(b, b === arguments[1]);
    console.log(c, c === arguments[2]);
    }

    f("JS rocks!", { b: "b" }); 

    /* 
        -> 2 Argumentos que le hemos pasado JsRocks y el objeto
        -> JS Rocks! true | 
        -> b false |Esto le dice a la funcion que espera un objeto {b} como segundo argumento. 
        basicamente busca la propiedad b y asignala a una variable local que se llame b
        lo de = {} es el seguro de vida para que no falle, que en caso de que no le pases nada será un objeto vacío 
        El reultado es falso porque en el argumento vive el objeto competo {b : "b"}, pero en la variable b solo vive el valor "b"
        -> 100 false No le hemos pasado nada por lo tanto es false

    */

 f({ b: "b" });
    /* 
        -> 1 solo le pasamos un parametro
        -> {b:"b"} true | porque como a = a simplemente se comparan exactamente los dso objetos
        -> undefined true | esto pasa porque en la función tenemos que si no se pasa nada es un objeto vacío osea undefined,
        como el resultado de lo qeu le hemos apsado es undefined entonces queda undefined === undefined es true 
    */

  //  f("JS sucks!", null, 13);

    /*
        -> Primero lo mismo que el primero
        -> al darle el argumento null desestima el valor por defecto de undefined que le pasamos si no le pasamos un argumetno,
        entonces Js hace lo que le pedimos intenta acceder al valor de b que le dijimos que es null y como null es nada
        Entonces se lanza un error 
    */




/// 204 ejercicio. console

var a = 1;
let b = 2;

{
  try {
    console.log(a, b);
  } catch (error) {}
  let b = 3;
  console.log(a, b);
}

console.log(a, b);

(() => {
  console.log(a);
  var a = 5;
  let b = 6;
  console.log(a, b);
})()

/*
Esta arrow function describe una función anonima, 
pero como no se asigna a ninguna varibale ni se llama, nunca se ejecuta
se podría ejecutar si hicieramos () llamada al final de la funcion el primer console.log
imprimirá undefined porque por hoisting dentro de la función, se declarará al incio con valor undefined 
*/

console.log(a, b);

/// 205 Ejercicio. Fibonacci
 
const fib = n =>{
    let prev = 0
    let current = 1

    if (n===0) return 0
    if (n ===1) return 1

    for (let i= 2; i<= n ; i++) {
        [prev, current] = [current, prev + current]
    }

    return current 

}

console.log(fib(10)) // 0

/// 206 EJERCICIO PLAYERS ORDER
const getPlayersOrder = (players, turns) =>{
    let newPlayers = [...players]

    for (let i=0; i< turns; i++){
         const [first, ...rest] = newPlayers
        newPlayers = [...rest, first]
    }

    return newPlayers
}

console.log(getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2));

/// 207 EJERCICIO REMINDER
// Primera solucion 
class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
   function mostrarRecordatorio(texto, delay) {
      setTimeout(function() {
        console.log(`Your reminder after ${delay} seconds is: ${texto}`);
      }, delay * 1000);
    }

    mostrarRecordatorio(this.text, delay);
  }
}

const r = new Reminder ("patata")
r.remindMe(3)

// Segunda solucion
class Reminder2 {
  constructor(text) {
    this.text = text;
  }

  remindMe2(delay) {
    setTimeout(() => {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}
const s = new Reminder2 ("patata")
s.remindMe2(3)

/* El principal problema aqui tiene que ver con this, el this que está dentro del setTimeout no 
es el mismo que el de la instancia de Reminder. Por eso this.text acaba siendo undefined.

He pensado dos soluciones, primero pasarle directamente una función en vez del setTimeout directamente, eso hace
que desde la función coja los datos directamente al llamarla, un poco tosco.
Segunda solución que había pensado y he visto en los apuntes que el this no funciona igual con function que con arrow function 
cosa que también soluciona el error. (la arrow function no crea su propio this, sino que usa el del entorno donde fue definida)
*/

