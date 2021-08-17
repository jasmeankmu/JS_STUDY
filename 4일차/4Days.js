// let a = 10;
// let b = "string";

// // 원시형 데이터

// let user = new Object({name:"kim",age:30})

// let user2 = {
//     name:"kim", //프로퍼티  key:value
//     age:30 // 프로퍼티  key:value
// }

// let kim ={
//     name:"kim2",
//     age : 20,
//     gender:"male",
//     height:42.195,
//     person: true,
// }

// let test = kim;

// console.log(test);
// test.name = "lee";

// console.log(test);

// console.log(kim);

// console.log(`제 이름은${kim.name},
// 나이는 ${kim.age}, 
// 성별은 ${kim.gender}, 
// 키는 ${kim.height}`
// );



// let user ={
//     name:"kim",
//     age : 20,
//     test :{
//         a:10,
//     }
// }

// const user2 = {...user }

// user2.name= "Lee";
// user2.test.a= 100;
// console.log(user2);
// console.log(user);

// map , filter, find




// let arr = [
//     {name:"kim"},
//     {name:"lee"},
//     {name:"park"}
// ];


// console.log(arr);
// arr.map((item)=>{
//     console.log(item)
// })

// let arr2 = arr.filter((item)=>{
//     return item.name !=="kim"
// })

// console.log(arr2);

let user ={
    name:"kim",
    age : 20,
    intro(){
        console.log(`hi i am ${this.age} years old`);
    }
}

function user3(name){
    this.name = name;
    this.age = "male";
}
let user4 = new user3('kim');
let user5 = new user3('lee');

console.log(user3);
console.log(user4);
console.log(user5);