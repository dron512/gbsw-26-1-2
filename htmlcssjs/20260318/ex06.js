// for ( 초기값; 조건; 변경)
// for a in Range(5):
// for구문 시작해줘 i=0부터... i<5작은 동안 ... i+=1해서 1씩 증가해줘
let x = 10;
for (let i = 0; i < 5; i += 1) {
    console.log("i = "+i);
    // console.log("x = "+ x++);// x값을출력 x값증가
    console.log("x = "+ ++x);// x값을증가 x값출력
}