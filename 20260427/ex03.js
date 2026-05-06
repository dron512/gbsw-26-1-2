function solution(price) {
    // price 
    // 100000 이상일때는 5프로
    // 300000 이상일때는 10프로
    // 500000 이상일때는 20프로
    // parseInt
    // Math.floor 내림
    // Math.round 반올림
    // Math.ceil 올림
    if (price >= 500000) {
        return parseInt(price * 0.8);
    } else if (price >= 300000) {
        return parseInt(price * 0.9);
    } else if (price >= 100000) {
        return parseInt(price * 0.95);
    }else{
        return price;
    }
}

const ret = solution(580302);
console.log(ret);