function solution(array, height) {
    var answer = 0;
    // array[i]와 height 비교를 해서
    // array[i] 더 크면 answer값을 증가
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i] > height) {
            answer += 1;
        }
    }
    return answer;
}
const ret =
    solution([139, 148, 150, 190, 200], 150);

console.log(ret);
