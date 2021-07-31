# JavaScript란

- 자바스크립트는 ‘웹페이지에 생동감을 불어넣기 위해’ 만들어진 프로그래밍 언어입니다.

- HTML/CSS와 완전히 통합할 수 있음

- 간단한 일은 간단하게 처리할 수 있게 해줌

- 모든 주요 브라우저에서 지원하고, 기본 언어로 사용됨

## 비교 연산자

- 우리는 수학시간에 크다,작다,같다 와 같은 비교 연산자를 배운적있다.

- JS에서 사용되는 기본적인 비교 연산은 아래와 같다

    - 100은 10보다 크다 `100 > 10` 

    - 100은 101보다 크거나 같다 `100 >= 101` , `100 >== 101`

    - 100은 100이랑 같다 `100 == 100` , `100 === 100`  (==으로 비교할경우 자료형이 다르더라도 값만 같다면 true)

- 또한 console.log(a>b)을 출력해보면  true,false와 같은 불린형으로 나오게된다.

- 문자열을 비교할 경우 `사전`순으로 비교한다. (정확히 말한다면 유니코드)

```js
console.log('Z'>'C'); //true
console.log('blow'>'blee'); //true
console.log('see'>'se'); //true
```

- 또한 number와 string을 비교할 경우 string을 number로 바꿀수있다면 바꿔서 연산합니다.

```js
console.log('3'>1); true
console.log('03'==3); true 
// 그러나 ===를 비교할 경우
console.log('03'===3); false
```

- 동등 연산자는 ==과 ===이 있습니다. (===은 ==과 다르게 데이터 타입이 일치해야합니다 )

```js
console.log(0 == false); true
console.log('' == false); true
console.log( 0 === false); false

console.log( null === undefined ); false
console.log( null == undefined ); true 
```
## if문 

- if문은 조건에 따라 코드를 실행 시킵니다

```js
let name = "kim"
if( name === "kim"){
    console.log("이름이 같습니다");
}else{
    console.lg("이름이 다릅니다");
}
```

- if문 안에서 `0`, `""`, `null`, `undefined`, `NAN`은 모두 false로 처리되고 `1`은 true로 처리 됩니다

- 또한 else와 else if를 통해 조건을 상세히 할수 있습니다.

```js
let name = "kim";

if (name < "kim") {
  console.log( ' 김씨군요 ' );
} else if (name> "lee") {
  console.log( ' 이씨군요 ' );
} else {
  console.log( '김씨나 이씨가 아니군용' );
}
```

- 또한 조건부 연산자 ?를 통해 if문과 같은 연산을 할수 있습니다

```js
let gender = (gender === "male") ? true : false;

let name = "kim";
let result = (name < "kim") ? console.log( ' 김씨군요 ' ) :
  (name> "lee")? console.log( ' 이씨군요 ' ):
  console.log('김씨나 이씨가 아니군요');

console.log(result);
```

## 논리연산자

- 논리 연산자에는 `&&`(and) , `!`(not) , `||`(or) 같은 연산이 있습니다.

- or 연산자 예시
```js
console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false
```
- and 연산자 예시

```js
console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false
```

- not 연산자 예시
```js
console.log( !true ); // false
console.log( !0 ); // true
```

## null 병합 연산자 ??

- null 병합 연산자를 사용하면 연산을 간단하게 줄일수 있습니다 

- `a??b`는 a가 `null`이거나 `undefined`이면 a, 아니면 b로 연사을 합니다

```js
let A = null;
let B = null;
let C = "ABC";

console.log(A??B??C?? "전부 망했네"); // "ABC"
```

## 반복문

- 개발을 하다보면 반복을 해야하는 경우가 많습니다. 이 때는 `for`,`while`을 통해서 해결하곤합니다.

- `while`은 아래와 같은 문법을 통해 실행 시킬수 있습니다.

```js
while (condition) {
  // 코드
  // '반복문 본문(body)'이라 불림
}
// 예시  
let i = 0;
while (i < 10) { // 0, 1, 2가 출력됩니다.
  console.log( i );
  i++;
}
```
- 또한 `do while`을 통해 `while` 먼저 연산을 하고 조건을 비교할수 있습니다.

```js
do {
  // 반복문 본문
} while (condition);

// 예시 
let i = 0;
do {
  console.log( i );
  i++;
} while (i < 9)
```

- 이번에는 `for`를 사용하는 방법에 대해 알아 보도록 하겠습니다.

```js
for (let i = 0; i < 10; i++) {
  console.log(i); // 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9
}
console.log(i);  // 10

// 무한 반복문 

for (;;){
    console.log("무한 반복문");
}
```

- 반복문을 하다가 중간에 조건을 만족시킨다면 중간에 나가야 할때가 있습니다

- 해당 경우에는 `break`를 사용해 나올수 있습니다.

```js
let sum = 0;
let count = 1;
while (true) {
    console.log(count);
    sum += count;
    if (sum == 10) 
        break; // 합이 10이 될경우 반복문을 나온다 

    count ++
}
console.log( '합계: ' + sum );

```

- 또한 현재 반복과정을 건너 뛰는 `continue`도 있습니다.

```js
for (let i = 0; i < 10; i++) {

  // 조건이 참이라면 남아있는 본문은 실행되지 않습니다.
  if (i % 2 == 0) continue;

  console.log(i); // 1, 3, 5, 7, 9가 차례대로 출력됨
}
```

## switch 문

- 복수의 `if`문을 `switch`문을 통해 바꿀수 있습니다.


```js
let name = "kim";

switch (name) {
    case "kim":
        console.log( '김씨입니다' );
        break;
    case "lee":
        console.log( '이씨입니다' );
        break;
    case "park": case "gong"
        console.log( '박씨 또는 공씨입니다' );
        break;
    default:
        console.log( "어떤 값인지 파악이 되지 않습니다." );
}
```