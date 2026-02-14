/// 202 EJERCICIO. ARRAY OPERATIONS 
//Apartado A
 const head = ([first]: number[]): number => {
    return first
}

 const array = [1,2, 3]

 console.log(head(array))

// Apartado B

const tail = (array: number[]):number[] => {
    const [first, ...resto] = array //destructuring con rest operator 
    return resto // devuelve solo el resto, todos los elementos menos el primero 
} 

console.log(tail([1, 2, 3, 4]))

//Apartado C

const init = (array: number[]): number[] => {
    const resto = array.slice(0, array.length -1)

    return resto
}

console.log (init([0,1,2,3,4]))

//Apartado D

const last = (array: number[]): number => {
    return array[array.length -1]
}

console.log(last([1, 2, 3, 4])); // 4

// /// 203 CONCAT 

//Apartado A

const concat = (a: number[], b: number[]): number[] => [...a, ...b]

console.log (concat([0,1,2,3], [4,5,6]))

//Apartado b

const concatMulti = (...arrays: number[][]): number[] => {
    return arrays.reduce((acc: number[], current: number[]) => {
        return [...acc, ...current]
    }, [])
}

console.log(concatMulti([1,2], [3,4], [8,9]))

// 104 EJERCICIO CLONE MERGE

function clone <T extends object> (source : T){
    return {...source}
}

function merge <T extends object, U extends object> (source: T, target: U){
    const result = clone(target)
    return { ...result, ...source}
}

const a = {name: "María", surname: "Ibañez", country: "SPA"}
const b= {name: "Luisa" , age: 31, married: true }

const combinado = merge(a,b)
console.log(combinado)


/// 110 EJERCICIO READ-BOOK / 4 Read-book
type Book = {
    title : string,
    isRead: boolean
}
const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

function isBookRead (books: Book[], titleToSearch: string): boolean {
    //utilizaremos find, cuando lo encuentra fevuelve el propio objeto y si no undefind. 
    let book = books.find(book => book.title === titleToSearch)
        if(book) {
            //Al revés: if (book === undefined) || if (!book)
            return book.isRead
        } 
        
        return false
        
}
console.log(isBookRead(books, "Devastación"))

//misma función pero hecha con for 

function isBookRead2(books: Book [], titleToSearch: string): boolean {
    for (let i = 0; i < books.length; i++) {
        if (books[i].title === titleToSearch) {
            return books[i].isRead;
        }
    }

    return false;

}
console.log(isBookRead2(books, "Devastación"))

/// 208 EJERCICIO SLOT MACHINE / 5 Slot Machine

class SlotMachine {
    //private hace que no puedas tocar las monedas desde fuera de la clase
    private coins: number

    constructor () {
    this.coins = 0
    }

    private randomBool = ():boolean =>  Math.random() >= 0.5


    public play(): void{
        this.coins++
        
        const b1: boolean = this.randomBool();
        const b2: boolean = this.randomBool();
        const b3: boolean = this.randomBool();
     
        console.log(b1, b2, b3)

        if(b1 && b2 && b3){
            console.log(`Congratulations!!. You won ${this.coins} coins!!`)
            this.coins = 0
        } else {
            console.log ("Good luck next time")
        } 
    } 
    }

const machine1 = new SlotMachine()

machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
