function solution(strlist) {
    var answer = [];
    // answer 에 넣기
    // strlist[i] 문자열의 길이 값을 넣기
    for (let i = 0; i < strlist.length; i++) {
        // console.log(strlist[i]);
        answer.push(strlist[i].length);
    }
    return answer;
}

const ret =
    solution(["We", "are", "the", "world!"])
console.log(ret);