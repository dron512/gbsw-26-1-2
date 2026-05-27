// ctrl + z 뒤로 돌아가기
// ctrl + shift + z 앞으로 돌아가기

function solution(my_string, letter) {
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if(my_string[i] != letter)
            answer += my_string[i];
    }
    return answer;
}
// my_string[i] != f true이면 answer 넣고
// false 이면 answer 넣지 않고
const result = solution("abcdef", "f") // "abcde"
console.log(result);


