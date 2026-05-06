// class A{
//     constructor(){
//         console.log("생성자");
//     }
// }
// C++ java c# jas
// const a = new A();

// 객체 변수 안에 있는 변수는 프로퍼티 라고 한다
// 프로퍼티는 한개의 변수
// 프로퍼티즈는 여러개의 변수
const obj = new Object();

obj.boy = "소년";
obj.girl = "소녀";
obj.friend = "친구";

console.log(obj);
console.log(obj['boy']);
console.log(obj.boy);
