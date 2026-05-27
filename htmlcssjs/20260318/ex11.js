document.getElementById('chk').onclick = function () {
    console.log("test");

    const test = document.getElementById('num').value;
    console.log("test = " + test);

    if (test == '') {
        console.log("test값을 입력하세요");
        document.getElementById('print').textContent ='test값을 입력하세요';
        return; // 함수 종료하세요 
    }

    if (test < 3) {
        console.log(test + "은 3보다 작다");
    }
    else if (test == 3) {
        console.log(test + '는 3입니다.');
    }
    else {
        console.log(test + "은 3보다 크다");
    }
}
// option + shift + f 자동정렬

