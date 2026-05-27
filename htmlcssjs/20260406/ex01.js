function solution(start_num, end_num) {
     // let 기본자료형 변경 가능
     // const 기본자료형 변경 불가 오브젝트형은 변경가능
    const answer = []; // 배열 또한 오브젝트형 타입
    for (let i = start_num; i <= end_num; i++) {
        console.log(`i = ${i}`);
        answer.push(i);
    }
    console.log(answer);
    return answer;
}

// 만약에 3,5 입력하였으면 배열 [3,4,5]반환
// 만약에 1,3 입력하였으면 배열 [1,2,3]반환

const result = solution(3, 5);
console.log(result);