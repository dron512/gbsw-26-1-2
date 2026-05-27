function solution(arr) {
    let sum = "";
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        sum = sum + arr[i];
    }
    return sum;
}
const ret = solution(["a", "b", "c"]);
console.log(ret);

// console.log(solution(["a","b","c"]));