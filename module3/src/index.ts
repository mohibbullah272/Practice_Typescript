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

















}