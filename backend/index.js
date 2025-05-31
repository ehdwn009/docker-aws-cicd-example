// backend/index.js

// 1. Express 라이브러리 불러오기
const express = require('express');

// 2. Express 애플리케이션 생성
const app = express();

// 3. 포트 번호 설정
const port = 3001;

// 4. 첫 번째 API 경로(Endpoint) 설정: 루트 경로 ('/')
app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

// 5. 두 번째 API 경로 설정: '/api/data'
app.get('/api/data', (req, res) => {
  res.json({
    message: '이것은 백엔드에서 온 데이터입니다!',
    timestamp: new Date()
  });
});

// 6. 서버 실행
app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});