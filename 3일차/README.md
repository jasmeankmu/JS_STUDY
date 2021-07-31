# JavaScript란

- 자바스크립트는 ‘웹페이지에 생동감을 불어넣기 위해’ 만들어진 프로그래밍 언어입니다.

- HTML/CSS와 완전히 통합할 수 있음

- 간단한 일은 간단하게 처리할 수 있게 해줌

- 모든 주요 브라우저에서 지원하고, 기본 언어로 사용됨

## 함수 

- 코딩을 하면 비슷한 동작을 하는 코드가 반복 되는 경우가 있습니다.

- 함수를 사용하면 자주 반복되는 동작을 함수로 만들어 여러번 호출할수 있습니다.

## 함수 선언

- 함수 선언 방식을 이용하면 함수를 만들수 있습니다 ( 함수 선언 방식은 함수 선언문이라고 부르기도 합니다)

- 함수는 기본적인 `function`이라는 것을통해 선언하고 옆에 `함수이름` 그리고 `()`안에 `매개 변수`를 삽입해 구현합니다.

- `매개 변수`는 호출할때 함수에 넘겨줄 인자를 의미하는것으로 아래 예시에서는 `"world"`를 넘겨주어 함수에서 출력할때 Hello World가 출력되게 되는겁니다. 

```js
function 함수이름(매개 변수) {
  //코드 
}

function Hello(str) {
  console.log( `Hello ${str}` );
}
Hello("World"); // Hello World

```

- 함수 내부에서 서언한 변수는 지역 변수라고 불리며 함수 안에서만 사용이 가능합니다.

- 하지만 함수 외부에서 선언한 변수는 접근이 가능합니다 

```js
let world = "";
function Hi() {
  let Hello = "안녕하세요!"; // 지역 변수
  world = " wrold"
  console.log( Hello + world); // Hello world
}
console.log(Hello)  // 에러 발생 
```

- 또한 함수를 사용해 호출한 곳에 값을 전달해 줄수있습니다.

- 만약 함수에서 반환을 하지 않는다면 `undefined`가 값으로 들어가게 됩니다
```js
function Hi(){
    return "Hi"
}
let test = hi();
console.log(test); //Hi
```

## 함수 표현식

- 윗 글을 통해 함수를 만들어 보았습니다.

- 자바스크립트에서 함수는 특별한 종류의 값으로 취급합니다.

- 함수 선언 방식 외에 함수 표현식을 사용해서 함수를 표현해 보겠습니다.

```js
let Hi = function() {
  console.log( "Hello" );
};
```

- 함수를 생성하고 변수에 값을 할당하는 것처럼 함수가 변수에 할당되었습니다.

- 쉽게 생각하면 함수를 만들고 변수에 할당 했다는것입니다. 

- 그렇다면 함수 선언방식을 가지고 똑같이 해보겠습니다.

```js
function Hi() {   // (1) 함수 생성
  console.log( "Hello" );
}

let Hi2 = Hi;    // (2) 함수 복사

Hi2(); // Hello     // (3) 복사한 함수를 실행(정상적으로 실행됩니다)!
Hi(); // Hello    //     본래 함수도 정상적으로 실행됩니다.
```

## 함수 표현식 vs 함수 선언문

- 함수 표현식과 함수 선언문의 차이에 대해 알아보도록 하겠습니다.

- 함수 선언문: 함수는 주요 코드 흐름 중간에 독자적인 구문 형태로 존재합니다.

- 함수 표현식: 함수는 표현식이 내부에 생성됩니다. 아래 예시에서는 = 우측에 생성 된것입니다.
```js
// 함수 선언문
function sum1(a, b) {
  return a + b;
}
// 함수 표현식
let sum2 = function(a, b) {
  return a + b;
};
```
- 가장 큰 차이는 자바스크립트 엔진이 언제 함수를 생성하는지가 있습니다.

- 함수 표현식은 실제 실행 흐름이 해당 함수에 도달했을 때 함수를 생성합니다. 

- 따라서 실행 흐름이 함수에 도달했을 때부터 해당 함수를 사용할 수 있습니다.

- 하지만 함수 선언문은 함수 선언문이 정의되기 전에도 호출할 수 있습니다. (따라서 전역으로 사용할수 있다)

- 나머지 차이는 Scope의 차이입니다. 뒤에 스코프에 대해 다룰 예정이지만 간단히 설명하겠습니다.

- (strict mode한정) 함수 선언문이 코드 블록 내에 위치하면 해당 함수는 블록 내 어디서든 접근할 수 있습니다. 하지만 블록 밖에서는 함수에 접근하지 못합니다.


## 콜백함수 

- 함수를 값처럼 전달하는, 함수 표현식에 관현 예시를 보도록 하겠습니다.

```JS
function ask(question, agree, disagree) {
  if (question === 10) agree()
  else disagree();
}

function agree() {
  console.log( "정답이야" );
}

function disagree() {
  console.log( "다시 생각해봐" );
}

ask("10", agree, disagree);
```
- 이렇게 함수를 변수의 인자로 전달하는 방법은 유용하게 사용됩니다.

- 이러한 `agree`,`disagree`은 콜백 함수라 하여  함수를 나중에 호츨한다는 개념을 가집니다.


## Scope란

- 스코프는 참조 대상 식별자를 찾아내기 위한 규칙입니다. (말이 어려웠다면 : 이 변수가 어디를 참조해서 값을 가져오는지 라고생각하세용)

```js
var x = '10';

function foo () {
  var x = '1';
  console.log(x);
}

foo(); // 1
console.log(x); // 10
```

- 이름이 같은 변수 X가 중복 선언이 되었습니다. 

- X를 참조할때, 그리고 함수 foo 내부에서 x를 참조할때 이름이 중복이 된 두개의 변수중 어느걸 찾았는지 생각 하는게 핵심입니다.

- 위 예시에서 `console.log(x)`는 `foo` 함수 내부의 x에 대한 변수의 참조를 할수 없는데 이런것을 `스코프 규칙이라고 합니다`

### 스코프의 종류
> 전역스코프 : 코드 어디에서 참조 가능

> 지역 스코프 : 함수 코드 블록단위로 자신과 하위 함수에서만 참조할수 있다.

- 더 쉽게 생각하면 전역 변수와 지역 변수의 개념으로 받아 들이면 편합니다.

- 자바스크립트는 타 언어의 `블록 레벨 스코프`가 아닌 `함수 레벨 스코프`를 참조합니다(하지만 let의 등장으로 `블록레벨 스코프`도 사용).

> 블록체벨 스코프: 코드 블록 {()}내에서 유효한 스코프를 가진다 .

> 함수레벨 스코프: 함수 레벨 스코프에서는 함수 코드 블록내에서 선언된 변수는 함수 코드 블록내에서만 유효하고 외부에서는 유효하지 않는다.

- 함수 레벨 스코프 
```js
var a = 10;     // 전역변수

(function () {
  var b = 20;   // 지역변수
})();

console.log(a); // 10
console.log(b); // "b" is not defined
```

## 렉시컬 스코프
- 아래 코드의 예시를 통해 foo와 bar의 결과값을 예상해보자

- 아마 함수를 어디에서 호출 했는지에 따라 기준을 매길수도 있고 선언된 기준에 따라 매길수도있다.

```js
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?
```
- 결과의 정답은  1, 1이다, 아마 10,1을 선택한 사람도 많을것이다.

- 먼저 10,1을 선택한 사람들은 호출된 기준으로 판단해서 그렇다.

- 하지만 js에서 호출된 기준이 아닌 선언이 된기준으로 판단하기 때문에 `bar()`가 선언 되었을때 `x`의 값이 1이기에 1,1이된다.

- 정리하면 렉시컬 스코프는 함수를 어디서 호출했는지가 아니라 어디에 선언한지를 중요시 여긴다는 것이다.

## 화살표 함수

- 함수 표현식 보다 단순하고 간결한 문법인 화살표 함수에 대해 알아보도록 하겠습니다.

- 화살표 함수의 모양은 아래와 같이 생겼습니다.

```js
// 함수 표현식
let func = function(e) {
  return "test";
};
// 화살표 함수
let func2 = (e)=> "test";
```
- 이러한 방식이 익숙해지면 아래와 가팅 함수를 동적으로 만들수도 있습니다.(이 부부은 브라우저 console창에서 실습 바람)

```js
let age = prompt("나이를 알려주세요.", 18);

let welcome = (age < 18) ?
  () => alert('안녕') :
  () => alert("안녕하세요!");

welcome();
```

## 객체

- 자료형 챕터에서 배웠듯이 자바스크립트엔 여덟 가지 자료형이 있습니다.

- 이 중 일곱 개는 오직 하나의 데이터(문자열, 숫자 등)만 담을 수 있어 `'원시형'`이라 부릅니다.

- 그런데 객체형은 원시형과 달리 다양한 데이터를 담을 수 있습니다.

- 객체는 중괄호 {…}를 이용해 만들 수 있습니다

- 중괄호 안에는 ‘키(key): 값(value)’ 쌍으로 구성된 프로퍼티(property) 를 여러 개 넣을 수 있는데, 키엔 문자형, 값엔 모든 자료형이 허용됩니다.

- 객체를 만드는 방법에는 두 가지가 있습니다.

```js
let user = new Object(); // '객체 생성자' 문법
let user = {};  // '객체 리터럴' 문법

let user2 = new Object({name:"kim",age:"15"})
let user2 = {name:"kim",age:"15"} ;
```

- 객체에는 현재 `name:"kim"` , `age:15` 두개의 `프로퍼티`가 존재하며  `콜론(:)`을 기준으로 왼쪽에는 `키`, 오른쪽은 `값`이 위치합니다.

- 위 에시로 들자면  첫번째 프로퍼티 - "name"인 `키` 과 "kim" `값` 이 있는겁니다

- 또한 프로퍼티를 추가하거나 빼기 위해서는 아래와 같이 진행하면 됩니다.

```js
let user2 = new Object({name:"kim",age:"15"})
let user2 = {name:"kim",age:"15"} ;
// 추가
user2.gender = "male";
user2["gender"] = "male";
// 빼기
delete user2.age;
delete user2["gender"];
```

## 3일차 과제 
> 베이스 지식 

- 일단 `querySelector`,`createElement`,`appendChild`,`removeChild`에 대해 알아야한다.

- `querySelector` : Html에서 `클래스`나 `id`를 찾아 매핑 해주는 역할을 한다.

- `createElement` : `createElement("div")` 같은 방식을 통해 div를 만들수 있다.

- `appendChild` :  지정한 태그에 자식 태그로 넣어준다 

- `removeChild` : 지정한 태그에 자식 태그를 모두 삭제한다

- 전체 코드
<p align="center"><img src="../READMEIMG\3Days\3Days과제6.png" style = "width: 700px"></img></p>

- querySelector 사용 예시
<p align="center"><img src="../READMEIMG\3Days\3Days과제1.png" style = "width: 700px"></img></p>

- innerText 사용 예시 , appendChild 사용 예시  
<p align="center"><img src="../READMEIMG\3Days\3Days과제2.png" style = "width: 500px"></img> <img src="../READMEIMG\3Days\3Days과제3.png" style = "width: 500px" height= 414px></img></p>

- html에 ul 태그 id 찾고, 해당 id에 appendChild로 삽입
<p align="center"><img src="../READMEIMG\3Days\3Days과제4.png" style = "width: 500px"> <img src="../READMEIMG\3Days\3Days과제5.png" style = "width: 500px"></img></p>

- 결과물
<p align="center"><img src="../READMEIMG\3Days\3Days과제7.png" ></img></p>


## 과제 내용

- 위에 배운것을 통해 내용을 넣고 글을 적으면 메모리스트가 나오게 작성할것 

- 예시


<p align="center"><img src="../READMEIMG\3Days\3Days과제8.png" ></img></p>
<p align="center"><img src="../READMEIMG\3Days\3Days과제9.png" ></img></p>
