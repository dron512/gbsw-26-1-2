const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const PORT = 3000;

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "gbsw",
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

app.get("/users", async (req, res) => {
    // console.log(req.ip + "누가 백엔드로 요청함");
    // res.json({ msg: "성공" });
    try{
        const [rows] = await pool.query('select * from users');
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