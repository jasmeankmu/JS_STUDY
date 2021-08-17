// let user = {
//     name: "kim",
// };

// user.name="lee";
// let des = Object.getOwnPropertyDescriptor(user,"name");

// Object.defineProperty(user,"name",{
//     configurable: false
// })
// Object.defineProperty(user,"name",{
//     writable: false

// })

// console.log(des)

// let user = {
//     name: "kim",
//     subname: "leepark",

//     get fullname(){
//         return `${this.name} ${this.subname}`;
//     },
//     set fullnam2e(value){
//         [this.name,this.subname] = value.split(" ");
//     }
// };

// user.fullnam2e="김치 볶음밥"
// console.log(user.fullname);


// function User(name,birthday){
//     this.name = name;
//     this.birthday = birthday;

//     Object.defineProperty(this,"age",{
//         get(){
//             let todayYear = new Date().getFullYear();
//             return todayYear -this.birthday.getFullYear();
//         }
//     });

//     Object.defineProperty(this,"name",{
//         writable:false
//     });
// }


// let eom = new User("eom",new Date(2000,6,1));

// console.log(eom);

// let animal ={
//     eats: true,
//     walk(){
//         console.log(` ${this.eats} walk`);
//     }
// };

// console.log(animal);

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     walk(){
//         console.log("삐약 삐약");
//     }
// }

// function User2(name){
//     this.name= name;
//     this.walk = () =>{
//         console.log("삐약삐약")
//     }
// }

// let user = new User("eom");
// console.log(user.name);

// let user2 = new User2("eom2");
// console.log(user2.name);
// user2.walk()

class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    check(){
        if(this.age <10){
            console.error("f");
        }
    }
}

let user = new User("kim123",1);
console.log(user)
user.check();

function User3(name,age) {
    this.name = name;
    this.age = age;
    ()=> {
        if(this.age <10){
            console.error("f");
        }
    }
}
let user3 = new User3("kim",1);
user3.check;