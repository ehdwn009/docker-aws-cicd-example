// backend/index.js (심플 버전에 CORS만 추가)
const express = require('express');
const cors = require('cors'); // 1. cors 패키지를 불러옵니다.
const app = express();
const port = 3001;

// 2. CORS 미들웨어 사용 설정
app.use(cors({
  origin: 'http://localhost:8080' // 프론트엔드 출처만 허용
}));
// 또는 모든 출처 허용 (개발 시): app.use(cors());

// JSON 요청 본문을 파싱하기 위한 미들웨어가 필요하다면 추가 (지금 당장은 GET만 있어서 필수는 아님)
// app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.get('/api/data', (req, res) => {
  // 응답 메시지를 살짝 바꿔서 CORS 처리 후 응답임을 확인해볼 수 있습니다.
  res.json({
    message: '이것은 백엔드에서 온 데이터입니다! (심플 버전 + CORS 처리됨)',
    timestamp: new Date()
  });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port} (심플 버전 + CORS)`);
});