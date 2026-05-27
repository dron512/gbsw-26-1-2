const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('입력하세요\n', function (ans) {
    console.log(ans);
    if (ans > 10) {
        console.log('ans는 10보다 큽니다.');
    }else{
        console.log('ans는 10보다 작습니다.');
    }
    rl.close();
});
