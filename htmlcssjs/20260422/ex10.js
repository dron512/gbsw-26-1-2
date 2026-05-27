const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let dic = {
    boy: "소년",
    girl: "소녀",
    friend: '친구',
};

rl.question('찾을단어입력하세요', function (data) {
    console.log(dic[data]);
    rl.close();
})
