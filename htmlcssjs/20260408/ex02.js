// 함수...
// 지역변수,매개변수,전역변수

// 매개변수 개수 불일치상황

// 매개변수 받는 부분이 없어서
// 개수가 불일치 된다.
function doA(a){
    console.log(`a = ${a}`);
    console.log(arguments);
    const obj = {
        a:10
    }
    console.log(obj);
    console.log(obj.a);
    console.log(arguments['0']);
    console.log(arguments['1']);
    console.log(arguments['2']);
}

doA(10,20,30);