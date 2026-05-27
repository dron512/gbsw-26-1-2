function solution(my_string, k) {
    let sum = "";
    for (let i = 0; i < k; i++) {
        console.log(i);
        sum = sum + my_string;
    }
    return sum;
}
// lovelovelove
const ret = solution('love', 3);
console.log(ret);