function solution(money) {
    money = money.replace(',', ''); // ,삭제
    money = Number(money);  // 숫자형 변환    
    // 5500곱하기 1,2,3,4,5,6,7,8,
    // 5500 - 5500 * 1 > 0 큰경우까지 해야한다..
    let count = 0;
    while (true) {
        if (money - 5500 * count >= 0) {
            count++;
        } else {
            count--;
            break;
        }
    }
    console.log('아메리카노 살수 있는 개수', count);
    var answer = [count, money - 5500 * count];
    return answer;
}

console.log(solution('5,500'));
console.log(solution('15,000'));
