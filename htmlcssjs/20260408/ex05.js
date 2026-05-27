// 1.html,css 화면구현 (인터넷없이)
// 2.js문법 시험 (인터넷없이)
// 3.기말고사
function solution(num_list) {
    console.log(num_list);
    var answer = [0, 0];
    // num_list[i]짝수이면..
    // answer 0번째값증가
    // num_list[i]홀수이면..
    // answer 1번째값증가
    for (let i = 0; i < num_list.length; i++) {
        console.log(num_list[i]);
        if(num_list[i]%2==0)
            answer[0] = answer[0]+1;
        else
            answer[1] = answer[1]+1;
    }
    return answer;
}

const ret = solution([1, 2, 3, 4, 5])
console.log(ret);