let number = 10; // 정수
let float = 3;  // 소수
let string = "12";  // 문자열 
let bool = false; // 참거짓
let bool2 = true;
let tmp;


console.log("철수의 키는 :"+float+"입니다"); // es5 
console.log(`철수의 키는 ${float} 입니다`); // es6 최신 기법 

console.log(typeof number);
console.log(typeof float);
console.log(typeof string);
console.log(typeof bool);


console.log(String(number)); // es6 최신 기법 
console.log(Number(string)) // es6 최신 기법 

let stringtonumber = String(number);

console.log(typeof String(number)); // es6 최신 기법 
console.log(typeof Number(string)) // es6 최신 기법 

console.log(number+float);
console.log(number-float);
console.log(number*float);
console.log(number/float);
console.log(number%float);
console.log(number**float);
console.log(number++);
console.log(number);
console.log(number--);
console.log(number);
