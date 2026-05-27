const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('입력하세요\n', function (ans) {
    console.log(ans);
    // 나누었을때 나머지가 0 이면 짝수
    if (ans % 2 == 0 ) {
        console.log('ans는 짝수');
    }else{
        console.log('ans는 홀수');
    }
    rl.close();
});
