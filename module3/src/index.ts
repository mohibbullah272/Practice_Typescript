{
    // class & object
    class Animal {
        constructor(public name:string,public sound:string ,public species:string){

        }
        makeSound(){
          return (`this ${this.species} say ${this.sound}`)
        }
    }

    const dog =new Animal('german shepard','dog','ghew ghew')
    dog.makeSound()


// inheritance in oop 

class Person {
    name:string;
    age:number;
    address:string;
    constructor(name:string,age:number,address:string){
        this.name=name
        this.age=age
        this.address= address
    }
    getSleep(hours:number){
        console.log(`he/she should sleep ${hours}`)
    }
}

class Student extends Person{
roll:number;
constructor(name:string,age:number,address:string,roll:number){
    super(name,age,address)
    this.roll=roll
}


}
const student = new Student('mokhles',20,'ctg',1)
student.getSleep(20)
// type guard using typeof & in 

type User={
    name:string;
}
type Admin = {
    name:string;
    role:string;
}
const getUser =(user:User | Admin)=>{
    if('role' in user){
        // ^^^^^ check does user have this property
        console.log(user.role)
    }else{
        console.log(user.name)
    }
}
const calculate=(param1:number|string,param2:number|string)=>{
    if(typeof param1 ==='number' && typeof param2 ==='number'){
        //^^^ type gourd using typeof check the type of a param
        return param1 + param2
    }else if(typeof param1 ==='string' && typeof param2 ==='string'){
             //^^^ type gourd using typeof check the type of a param
        return param1 + param2
    }else{
        return 'invalid input '
    }
}
// type guard using instanceof 

{
class Animal{
    name:string;
    sound:string;
    constructor(name:string,sound:string){
        this.name=name
        this.sound=sound
    }
    makeSound(){
        console.log('this is the sound')
    }
}
class Dog extends Animal{
    constructor(name:string,sound:string){
        super(name,sound)
    }
    makeBarking(){
console.log('the sound is bho bho ')

    }
}

class Cat extends Animal{
    constructor(name:string,sound:string){
        super(name,sound)
    }
    makeMeowing(){
console.log('the sound is Meow meow ')

    }
}
const getAnimal=(animal:Animal)=>{
if(animal instanceof Dog){
 return (animal.makeBarking())
}else if (animal instanceof Cat){
    return(animal.makeMeowing())
}
}


const dog =new Dog('dog brother','bho bho')
getAnimal(dog)




}
// access modifiers
class BankAccount{
  public readonly  id:number;
   public name:string;
 private   _balance:number;
    constructor(id:number,name:string,_balance:number){
        this.id=id
        this._balance=_balance
        this.name=name
    }
  public  addMoney(amount:number){
return this._balance=this._balance + amount
    }
  public  getMoney(){
return this._balance
    }
    
}


const user= new BankAccount(2007,'mr_x',20)
user.addMoney(50)
user.getMoney()
// getter and setter
{

    class BankAccount{
        public readonly  id:number;
         public name:string;
       private   _balance:number;
          constructor(id:number,name:string,_balance:number){
              this.id=id
              this._balance=_balance
              this.name=name
          }
  get balance (){
    return this._balance
  }
  set deposit(amount:number){
    this._balance = this._balance + amount
  }
          
      }
      const user= new BankAccount(2007,'mr_x',20)
      user.deposit=80;
      console.log(user.balance)





}

// static in oop
class Counter{
  static  count:number =0;
   
    inc(){
        return Counter.count=Counter.count+1
    }
    dec(){
        return Counter.count =Counter.count -1
    }
}
const instance1= new Counter()
console.log(instance1)
const instance2= new Counter()
console.log(instance2)
const instance3= new Counter()
console.log(instance3)
// polymorphism in oop 
// Polymorphism in TypeScript OOP allows different classes to implement the same method in their own way through interfaces or inheritance. It helps in writing flexible and reusable code by treating objects of different classes as instances of a common superclass or interface.
class Shape {
    getArea():number{
        return 0;
    }
}

class Circle extends Shape{
    radius:number;
    constructor(radius:number){
        super()
        this.radius=radius
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius
    }
}
class Rectangle extends Shape{
    width:number;
    height:number;
    constructor(width:number,height:number){
        super()
        this.height=height
        this.width = width
    }
    getArea(): number {
        return this.width * this.height
    }
    // ^^^^ when changing a class methods value the parent class provide deferent value
}







}