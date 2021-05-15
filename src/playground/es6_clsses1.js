console.log("Hello")
class Person{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    getgreetings()
    {
        return `This are Greetings from Person Class to the ${this.name} `
    }
    getDescription()
    {
        return `I Name is ${this.name} and age is ${this.age} `;
    }
}

class student extends Person{
    constructor(name,age,department)
    {
        super(name,age);
        this.department=department;
    }
    getDepartment()
    {
        return !!this.department;
    }
    getDescription()
    {
        //return "hello"
        let des=super.getDescription();
        if(this.getDepartment)
        {
            des+=`Their major is ${this.department}.`;
        }
        return des;
    }
}

class travelleor extends Person{
    constructor(name,age,homelocation)
    {
        super(name,age);
        this.homelocation=homelocation;
    }
    getgreetings()
    {
        return "OverRiding Person Class and printing this things...!!!"
    }
    getDescription()
    {
        let des=super.getDescription();
        if(this.homelocation)
        {
            des+=`And his location is ${this.homelocation}`;
        }
        return des;
    }
}
const me=new student("Rohit Pawar",16,"CS") 
console.log(me.getDescription()) //I Name is Rohit Pawar and age is 16 Their major is CS.

const travel=new travelleor("Gaurav",14,"Aurangabad") 
console.log(travel.getDescription())    //I Name is Gaurav and age is 14 And his location is Aurangabad