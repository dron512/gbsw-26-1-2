const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

console.log(__dirname);
console.log(path.join(__dirname,"test.html"))

const app = express();
const PORT = 3000;

// mysql 3306
// 1.localhost 2.127.0.0.1 3.172.28.2.57

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "a3",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// conn.connect((err) => {
//     if (err) {
//         console.error('디비 연결실패');
//         return;
//     }
//     console.log('디비 연결 성공');
// });

// 미들웨어 설정: HTTP 요청의 본문(body)에 있는 JSON 데이터를 파싱
app.use(express.json());

// 소스 변경 -> ctrl+c 중단 => node app.js

// 임시 데이터베이스 (메모리 배열)
// let users = [
//     { id: 1, name: '홍길동', email: 'hong@example.com' },
//     { id: 2, name: '이순신', email: 'lee@example.com' }
// ];
// 소스 변경-> 소스 저장 -> crtl+ c 서버 중지 -> node app.js
// "/"페이지 호출

// req 안에는 요청 데이터가 들어온다.
// res 응답하는 데이터가 들어간다.
// res.send() -> 문자열 보내기
// res.json() -> json 변수안에 값보내기

app.get("/",(req,res)=>{
    res.send("main페이지");
});

// res.send() -> 브라우저 글자 전송
// res.json() -> 자바스크립트 객체를 전송
// res.sendFile -> 파일 전송...

app.get("/test",(req,res)=>{
    res.sendFile("test.html");
})

app.get("/users", async (req, res) => {
    // console.log(req.ip + "누가 백엔드로 요청함");
    // res.json({ msg: "성공" });
    try{
        // const [a,b] = [10,20];
        // const [rows] = [[{id:1,name:"홍길동",email:"aaa@naver.com"}],[]]
        const [rows] = await pool.query('select * from users');
        console.log(rows);
        res.json(rows);
    }catch(e){
        console.log(e);
        res.json( {'msg':'에러발생'+e} );
    }
});

app.post("/adduser", (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.send("1-2반 잘하고 있습니다.");
});



app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});