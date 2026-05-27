// function aa(){}
const aa = function () {
    // 지역변수 local variable
    const num = 10;
    console.log('aa');
    return num * num;
}

const ret1 = aa();
console.log(ret1);

const ret2 = aa();
console.log(ret2);

console.log(num);