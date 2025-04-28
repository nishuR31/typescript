let hello:string="Hello World!";
console.log(hello);


let obj={
    name:"Nishan",
    age:20,
    lang:"tsc",
    method:function():string{
        return `user is ${this.name} of age ${this.age} using language ${this.lang}`;
    },

    console:function():string{
        return `nishuR31`;
    }
    
}

console.log(obj.method())
console.log(obj.console())
