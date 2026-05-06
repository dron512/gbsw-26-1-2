const id = "아이디";
const pw = "패스워드";

const user = {
    id,
    pw,
    name: "이창현",
    age: 25
}
console.log(user);

for (const key in user) {
    console.log(`key = ${key} : ${user[key]}` )
}

// 오브젝트에 프로퍼티에 대해서 학습
// 프로퍼티는 수정 삭제 추가 등ㅇㅣ 가능하다
// 프로퍼티는 대괄호 표기법도 사용가능하고
// 단축 프로퍼티도 사용 가능 하다.
// 프로퍼티는 for in 으로 확인 가능하다.