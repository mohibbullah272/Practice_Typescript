let target:string = 'type script was so fun'

let roll :number = 20;

let friends :string[]=['abul','kabul']
let core :number[]=[1,2]
let testTuple :[number,string]=[1,'mar']
const user:{
    company:string;
    name:string;
    salary:number;  
     isMarried?:boolean;      //optional 
}={
company:'ph',
name:'mohi',
salary:2000,

}

// function in ts 
 function add(num1:number,num2:number):number{
    return num1*num2
 }
 add(1,2)
 const addArrow=(num1:number,num2:number):number=>num1+ num2
const userInfo={
    name:'mezba',
    balance:0,
    addBalance(balance:number){
       return balance*balance       //this is called method
    }
}
 const collection:number[]=[2,4,6]
 const newCollection:number[]= collection.map((ele:number)=>ele*ele)


//  speared operation
const bros1:string[]=['mohi','showrv','sakib']
const bros2:string[]=['abbas','gabgas','sabgas']
bros1.push(...bros2)


const mentor1={
    typescript:'mezba',
    redux:'tesba',
    prisma:'hesma'
}
const mentor2={
    next:'kesma',
    mongose:'chesma'
}
const mentorList={
    ...mentor1,
    ...mentor2
}
// rest operation

const greet=(...friends:string[])=>{
friends.forEach(friend => {
    // console.log(`hi ${friend}`)
});
}

greet('abul','kabul','babul')

// destructuring

const userInfo2={
    contact:'012345452414',
    details:{
name:'hugomaru',
address:';dhaka'
    },
    pc:'lenovo'
}
const {contact,details:{
    address
}}=userInfo2


const friends2 :string[]=['abul,babul,cabul,tabul']
const [,bestFriend,...rest]=friends2


//type union and intersection 
type Frontend ="fakibaz"| 'frontendDeveloper'
type Backend = 'fakibaz'| 'backendDeveloper'
type FullStackDeveloper = Frontend & Backend 

const ariful :Frontend='fakibaz'
const jhankarMahabub :FullStackDeveloper='fakibaz'

// ternary operator nullish optional chaining

let age = 18
const isAdult = age>=18 ? true:false

const isAuth = undefined
const result = isAuth ?? 'guest'
console.log(result)

type User={
    name:string;
    address:string;
    contact?:string
}
const akkas:User={
    name:'abul',
    address:'cth',
    
}


