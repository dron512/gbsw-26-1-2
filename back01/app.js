const express = require('express');
const app = express();
const PORT = 3000;
// 미들웨어 설정: HTTP 요청의 본문(body)에 있는 JSON 데이터를 파싱
app.use(express.json());
// 임시 데이터베이스 (메모리 배열)
let users = [
 { id: 1, name: '홍길동', email: 'hong@example.com' },
 { id: 2, name: '이순신', email: 'lee@example.com' }
];