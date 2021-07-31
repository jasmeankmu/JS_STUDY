# JavaScript란

- 자바스크립트는 ‘웹페이지에 생동감을 불어넣기 위해’ 만들어진 프로그래밍 언어입니다.

- HTML/CSS와 완전히 통합할 수 있음

- 간단한 일은 간단하게 처리할 수 있게 해줌

- 모든 주요 브라우저에서 지원하고, 기본 언어로 사용됨

## Sever Side, Cliet Side

- 기본적으로 JS는 웹 환경(Browser, Document)를 다루기 위해 개발

- 하지만 브라우 밖에서 사용할수 있는 환경을 만들어주는 것이 Node.js(Javascript Runtime)

- Nodejs의 장점
    1. 비동기 처리로 인해 매우 빠른 고성능 서버 구현

    2. 한 가지 언어만으로도 서버-클라이언트 모두 개발

    3. 구글의 최신화된 VB Engine을 이용

    4. 적은 양의 자원으로 일을 처리

    5. 높은 커뮤니티 이용율 및 참여율

- Web에서 JS를 사용하는 방법
    1. `<script> JSCODE </script>`

    2. `<script src="./test.js"> </script?`

## 변수와 상수

> 변수(variable)는 데이터를 저장할 때 쓰이는 ‘이름이 붙은 저장소’ 입니다

- JS에서 `var` OR `let` 키워드를 사용해 생성 할수 있습니다.

- 변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있습니다.

- 첫 글자는 숫자가 될 수 없습니다.

```js
var helloMsg;
helloMsg = 'Hello';

let worldMsg;
worldMsg = 'World!';

console.log(helloMsg);

console.log(worldMsg);
```
> 상수(constant)는 데이터를 저장할때 변하지 않는 값을 뜻한다.
- `let`이나 `var`와는 다르게 `const`를 사용하고 지정한값에 변경이 불가능

```js
const SOCKET_ID = "KIM";
console.log(SOCKET_ID);

```

## 자료형

> 자바스크립트에는 여덟 가지 기본 자료형이 있습니다. 객체와 심볼형을 제외한 6가지 타입에 대해 알아보겠습니다.

- 숫자형 : 정수, 부동 소수점 숫자 등의 숫자를 나타낼 때 사용합니다. 정수의 한계는 ±253 입니다.

- bigint : 길이 제약 없이 정수를 나타낼 수 있습니다.

- 문자형 : 빈 문자열이나 글자들로 이뤄진 문자열을 나타낼 때 사용합니다. 단일 문자를 나타내는 별도의 자료형은 없습니다.

- 불린형 : true, false를 나타낼 때 사용합니다.

- null : null 값만을 위한 독립 자료형입니다. null은 알 수 없는 값을 나타냅니다.

- undefined : undefined 값만을 위한 독립 자료형입니다. undefined는 할당되지 않은 값을 나타냅니다.

```JS
let numberType = 1;
let bigIntType = 12222222222222222222222222222222222222222n;
let stringType = "Hello";
let boolType = true;
let nullType = null;
let undefinedType;

console.log(typeof numberType) // number
```

- `typeof` 연사는 데이터 타입을 알아볼수 있습니다

- 문자열 표시는 `""` 기호로 하거나 `''`로 할수있지만 EC6부터는 ` `` `벡틱(키보드 ~랑 같있는 키)이라는 기능을 통해 다양하게 활용가능

```js
let weight = 70
console.log("내 몸무게는" + weight+ "이야");

console.log(`내 몸무게는 ${weight} 이야`);
```


## 자료형 변환

> 문자형을 숫자형으로 바꾸거나 그 이외에 다른 자료형을 바꿀수 있습니다

1. 문자형으로 변환(String 사용)

```js
let number = 1123;

console.log(typeof number); // number

changeString= String(number); // 변수 value엔 문자열 "true"가 저장됩니다.

console.log(typeof changeString); // string
```

2. 숫자형 사용

```js
let string = "123";

console.log(typeof string); // string

let number = Number(string); // 문자열 "123"이 숫자 123으로 변환됩니다.

console.log(typeof number); // number
```

## 기본적인 연산자

- 앞서 배운 자료형들을 사용해 연산을 할수 있습니다

- 덧셈 연산자 +

- 뺄셈 연산자 -

- 곱셈 연산자 *

- 나눗셈 연산자 /

- 나머지 연산자 %

- 거듭제곱 연산자 **

```js
let num1 = 10;
let num2 = 3;

console.log(num1+num2); //13

console.log(num1-num2); //8

console.log(num1*num2); //30

console.log(num1/num2); //3

console.log(num1%num2); //1

console.log(num1**num2);// 1000

```