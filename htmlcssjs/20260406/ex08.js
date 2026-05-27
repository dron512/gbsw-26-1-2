function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        answer.push(numbers[i] * 2);
    }
    return answer;
}

const result1 = solution([1, 2, 3, 4, 5]);
console.log(result1);
const result2 = solution([1, 2, 100, -99, 1, 2, 3])
console.log(result2);