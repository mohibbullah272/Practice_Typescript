{
    // type assertion 
    let anything :any;
    anything = 'next level web development';
    (anything as string)

    const kgToGm =(value : string | number):string | number | undefined =>{
if(typeof value ==='string'){
    const convertedValue = parseFloat(value)
    return `converted value : ${convertedValue * 1000}`
}
if(typeof value ==='number'){
return value * 1000
}
    }

    const result1 = kgToGm(10) as number
    const result2 = kgToGm('10') as string

// generic type 

type genericArray<T>=Array<T>
const booleanArr :genericArray<boolean>=[true,false,true,false]

const user:genericArray<{name:string,age:number}> =[
    {
        name:'alias',
        age:20
    },
    {
        name:'alias',
        age:20
    },
    {
        name:'alias',
        age:20
    },
]
//  tuple with generic
type genericTuple<X,Y>=[X,Y]
const humans :genericTuple<string,{name:string,age:number}>= ['MRX',{name:'abbas',age:30}]
// generic with function 
const addMoney=<X>(param:X):X[]=>{
    return [param]
}
const res = addMoney<string>('hello')
const createGenericWithTuple =<T,Q>(param1:T ,param2:Q):[T,Q]=>{
return [param1,param2]
}
const res1 = createGenericWithTuple<string,number>('bangladesh',2222)

// constraints 
const addToStudent=<T extends {name:string; email:string; class:string;}>
                    // ^^^^ this the constraints here force ways got this parameter if any type miss it will throw an error 
(student:T):T[]=>{
return [student]
}


const student ={
    name:'mohi',
    email:'a@gmail.com',
    class:'xi'
}
const rest2 = addToStudent(student)

// constraint using keyof 
const findProperty =<X,Y extends keyof  X >(obj:X,key:Y)=>{
    return obj[key]
}
const userInfo ={
    name:'ali',
    address:'ctg',
    salary:'2000'
}
const result3 = findProperty(userInfo,'name')

// asynchronous typescript

const createPromise =():Promise<string>=>{
    return new Promise ((resolve,reject) =>{
const data:string = 'something'
if(data){
    resolve(data)
}else{
    reject('something wrong')
}
    })
}

const getData = async()=>{
    const data = await createPromise()
   return (data)
}

getData()

// mapping types 

type areaNumber = {
    width:number;
    height:number;
}
type areaString<T> = {
    [key in keyof T]:T[key]
    // ^^^Mapped type mean looping variable 
}


const areaDept:areaString<{width:string;height:number;}> = {
    width:'200',
    height:20
}





}