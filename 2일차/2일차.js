// let A = 10;
// let B = 20;

// console.log(A>B);
// console.log(A==B);

// let Astring = 'ABC';
// let Bstring = 'ABD';
// console.log(Astring>Bstring);

// let D = '2';
// let E = 2;

// console.log(D!=E); // True
// console.log(D!==E); // Number !== String

// console.log(0 == false);
// console.log(''==false);
// console.log(null === undefined);

// //  == === != !=== < > <= >=

// let kim = "kim";
// let lee = "lee";

// lee = "asde";

// if(lee === kim){
//     console.log(`같아`);
// }else if(lee == "lee"){
//     console.log(`중복이야`);
// }else{
//     console.log(`그런 이름한적없어`)
// }

//  19살 성인 남자면 출입 불가능 
//  19살 성인 여자면 출입 가능 
// && and
// || or
// let age = 12;
// let gender = "여자";

// let message = (age>19 || gender ==="남자")? "이용 불가입니다" : " 안녕";
// console.log(message)

// and && ,or ||  
// let gender = "남자";
// let age = 1;

// if(age >=10 && gender === "남자"){
//     console.log("꼬맹이");
// }else if(age < 10 && gender === "남자")
//     console.log("애기");
// else
//     console.log("여성입니다");

// let height;
// if (height === undefined){
//     height =100;
// }

// height = height ?? 100;
// console.log(height);


// *
// **
// ***
// ****
//1234

// for (let i = 1; i <= 4; i++) {
//     let star = "";
//     for (let j = 0; j < i; j++) {
//       star += "*";
//     }
//     console.log(star);
//   }

let age = "chrome";

//  == ===
// switch(age){
//     case "explo": case "chrome":
//         console.log("구데기");
//         break;
//     case "safari":
//         console.log("맥만 좋음");
//         break;
//     case "fireFox":
//         console.log("캐릭터 귀여움")
    
//     default:
//         console.log("그런 브라우저가 세상있다니!")
// }
let AAA=10;
function add(a,b){
    let AA = 20;
    console.log(AAA);
    console.log(a+b);
    return a+b;
}

let result = add(10,20);
console.log(result)
console.log(AAA);
