const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 함수 선언 옛날 방법
// function aa(){}
// 함수 선언 es2015 새로 나온 방법
// const aa = ()=>{ }

rl.question('숫자 입력', (data) => {
    for (let num = 1; num < 10; num = num + 1) {
        console.log(`${data} * ${num} = ${data * num}`);
    }
    rl.close();
});