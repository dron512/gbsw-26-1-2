function showmsg(){
    console.log('메시지 출력');
}

showmsg();

function plus(a,b){
    console.log(`a+b = ${a+b}`);
    return a+b; // 함수 종료 역활... 아무것도 돌려주지 않는다.
}

const result = plus(3,5);
console.log(`result ${result}`);

// 개발 입문자 for while if else function