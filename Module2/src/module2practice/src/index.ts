{
    // task 1
const firstProgram :string='I will complete the next level web  development course '
// task 2
type Role = 'admin'|"user"|'guest'
const basicAction =(name:string,age:number,role:Role):(string | number)[]=>{
return [name,age,role]
}
// task 3
type Person ={
    name:string;
    address:string;
    hairAndEyeColor:string;
    income:number;
    hobbies:string;

}

// Task 4: Union and Intersection Types
type Book ={
    name:string;
    price:number;
    publish:number;
}
type Magazine ={
    generic:string;
    country:string;
    author:string
}
type UnionOfBook = Book | Magazine
type IntersectionOfMagazine = Book & Magazine

// Task 5: Function Type
const reverseStr =(str:string):string=>{
const spiltStr = str.split('').reverse().join('')
return spiltStr

}
// Task 6: Spread and Rest Operators, Destructuring
const testRestOperation =(...number:number[]):number=>{
let total:number = 0;
for (let num of number){
    total += num
}
return total
}
// Task 7: Type Assertion and Narrowing
type strORNum=string|number
const AssertionAndNarrowing =(param:strORNum):number | string=>{
    if(typeof param ==='string'){
        return param.length
    }else if (typeof param ==='number'){
        return param*2
    }
    return 'invalid input'
}
// Task 8: Intersection Types

type User ={
name:string;
address:string;
salary:number;
}
type Admin ={
    role:string;
    bike:boolean;
    isRich:boolean;
    country?:string;
}
type UserAdmin = User & Admin

const describeAdmin =(user:UserAdmin)=>{
return [userAdmin]
}

const userAdmin ={
name:'akkas',
address:'ctg',
salary:200,
role:'admin',
bike:true,
isRich:false,

}
const res = describeAdmin(userAdmin)

// Task 10: Nullish Coalescing
const getDisplayName = (name:string| null|undefined):string=>{
const isAnonymous= name?? 'Anonymous'
if(!isAnonymous){
    return `this is the name you provide ${name}`
}else{
    return isAnonymous
}
}
console.log(getDisplayName(null))



// Task 11: Unknown Type
const processData=(data: unknown):strORNum=>{
    if(typeof data ==='string'){
        return data.toUpperCase()
    }else if(typeof data === 'number'){
        return data*2
    }
    return 'invalid input '
}

// Task 13: Generics with Functions and Interfaces

type Arr<T>=T[]

function removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }
  removeDuplicates([''])













}