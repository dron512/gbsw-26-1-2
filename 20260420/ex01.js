/*
정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 
1,000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요.
    num1	num2	result
    3	     2	    1500
    7	     3  	2333
    1	     16	    62
*/
function solution(num1, num2) {
    // console.log(`num1 ${num1}`);
    // console.log(`num2 ${num2}`);
    // int(10.33) => 10
    // list()
    // boolean(1)

    var answer = parseInt(num1 / num2 * 1000);
    return answer;
}

const ret = solution(7,3);
console.log(ret);



