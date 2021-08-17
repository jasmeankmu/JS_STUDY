# JavaScript란

- 자바스크립트는 ‘웹페이지에 생동감을 불어넣기 위해’ 만들어진 프로그래밍 언어입니다.

- HTML/CSS와 완전히 통합할 수 있음

- 간단한 일은 간단하게 처리할 수 있게 해줌

- 모든 주요 브라우저에서 지원하고, 기본 언어로 사용됨

# 프로퍼티의 플래그와 설명자
- 객체엔 프로퍼티가 저장됩니다.

- 지금 까지는 단순하게 key:vlaue 값으로 다루었지만, 이 객체는 다양하게 사용할수 있습니다.

-  객체 프로퍼티는 값과 함께 플래그 라는 특별한 속성 3가지를 가집니다.
    - writable : true면 수정 가능
    
    - enumerable: true면 반복문을 사용해 나열할수 있음, 
    
    - configurable : true면 삭제나 플래그 수정이 가능

```js
let user = {
  name: "kim"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log( JSON.stringify(descriptor, null, 2 ) );
```

- 여기서 `Object.defineProperty`를 사용하면 플래그를 변경할수 있습니다.

```js
let user = {
  name: "kim"
};

Object.defineProperty(user, "name", {
  writable: false
});
user.name = "Lee";

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log( JSON.stringify(descriptor, null, 2 ) );

```

```js
function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age는 현재 날짜와 생일을 기준으로 계산됩니다.
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

console.log( john.birthday ); // birthday를 사용할 수 있습니다.
console.log( john.age );      // age 역시 사용할 수 있습니다.
```
# 프로퍼티 getter와 setter
- 객체 프로퍼티는 두종류가 있습니다

    - 데이터 프로퍼티 : 지금까지 우리가 사용했던 프로퍼티들이 데이터 프로퍼티입니다.

    - 접근자 프로퍼티 : 접근자 프로퍼티의 본질은 함수입니다. get과 set을 하는 역할을 당담합니다

- 접근자 프로퍼티는 : get과 set으로 나타낼수 있습니다

```js
let user = {
  name: "kim",
  surname: "leepark",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
 }
};

console.log(user.fullName); // John Smith
```



# 프로토타입

- 개발을 하다  보면 기존에 있는 기능을 가져와 확장을 해야할 때가 있습니다.

- 이런 경우에는 `Prototype`을 사용하여 해결할 수 있습니다.

## Prototype

- 자바스크립트 객체에는 `Prototype`이라는 숨겨진 프로퍼티를 가집니다.

- 이 프로퍼티의 값은 `Null` 이거나 다른 객체에 대한 참조가 되는데, 만약 다른 객체를 참조하는 경우 참조 대상을 `ProtoType`이라고 부릅니다.

```js
let animal = {
  eats: true,
  walk() {
    console.log("동물이 걷습니다.");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

rabbit.walk(); 
```
- 이렇게 작성하면 rabbit의 프로토타입이 animal이 되어 walk 함수를 사용했을때 값을 가져오는걸 볼수 있습니다.


```js
let user = {
  name: "kim",
  age: 20,

  set intro(value) {
    [this.name, this.age] = value.split(" ");
  },

  get intro() {
    return `${this.name} 의 나이는 : ${this.age}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.intro); 
admin.fullName = "Alice 20"; 

console.log(admin.intro);
console.log(user.intro); 
```

- `intro`의 this엔 어떤값이 들어가는거지 의문이 있을수 있습니다.

- 프로퍼티의 `this.name` , `this.age`에 값을 쓰면 user에 저장이 될까 어드민에 저장이 될까 라는 의문이 있을수 있습니다.

- 답은 this는 프로토 타입에 영행을 받지 않는다는것입니다.

- 메서드를 객체에서 호출했든 프로토타입에서 호출했든 상관없이 this는 언제나 . 앞에 있는 객체가 됩니다

- `new`를 통해 새로운 객체를 만들수 있다고 배웠습니다.

```js
let person= {
  graduation: true
};

function student(name) {
  this.name = name;
}

student.prototype = animal;

let eom = new student("성현"); 

console.log( eom ); 
```

- 만약 우리가 아래와 같이 코딩을 하면 어떤 결과물이 나올까요?

```js
let obj = {}
console.log(obj); 
```
- 여기서 [object Object] 라는 문자열은 기본적으로 만들어져있는 Object라는 객체 생성자 함수를 참조하게됩니다.

- 그래서 디폴트로 들어가는 `[object Object]`값이 나오게 되는 것입니다.

```js
let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); 
```

# 클래스와 기본 문법


- 동일한 객체를 여러개 생성해야 하는 경우가 있었을 때 우리는 new라는걸 사용했습니다.

- 여기서는 새롭게 도입된 class라는 문법을 활용해 객체 지향 프로그래밍을 해보겠습니다.

```js
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(this.name);
  }

}

// 사용법:
let user = new User("kim");
user.sayHi();

```

- 클래스의 동작 방법에 대해 알아보면 
    - 1: User라는 이름을 가진 함수를 만든다

    - 2: 함수에서 생성자 메서드 Constructor를 가져온다

    - 3: sayHi와 같은 클래스 내에서 정의한 메서드를 User.prototype에 저장합니다

- 이것을 우리가 배운 함수 코드로 작성하면 다음과 같습니다.

```js
// 1. 생성자 함수를 만듭니다.
function User(name) {
  this.name = name;
}
// 모든 함수의 프로토타입은 'constructor' 프로퍼티를 기본으로 갖고 있기 때문에
// constructor 프로퍼티를 명시적으로 만들 필요가 없습니다.

// 2. prototype에 메서드를 추가합니다.
User.prototype.sayHi = function() {
  console.log(this.name);
};

// 사용법:
let user = new User("John");
user.sayHi(
```

- class와 함수로 정의하는 것의 차이
    - class로 만든 함수엔 특수 내부 프로퍼티인 [[FunctionKind]]:"classConstructor"가 이름표처럼 붙습니다. 

    -  클래스로 만든것은 non-enumerable 합니다 

- 클래스에도 getter 와 setter가 있습니다
```js
class User {

  constructor(name) {
    // setter를 활성화합니다.
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("이름이 너무 짧습니다.");
      return;
    }
    this._name = value;
  }

}

let user = new User("John");
console.log(user.name); // John

user = new User(""); //
```

