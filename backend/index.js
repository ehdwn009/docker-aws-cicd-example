// backend/index.js (EC2 프론트엔드 출처 추가 허용)
const express = require('express');
const cors = require('cors'); // cors 패키지를 불러옵니다.
const app = express();
const port = 3001;

// 1. 허용할 출처(Origin) 목록 정의
const allowedOrigins = [
  'http://localhost:8080',      // 기존 로컬 프론트엔드 주소
  'http://13.239.225.31'        // EC2 프론트엔드 주소 (신동주님의 EC2 IP)
  // 필요한 경우 여기에 다른 허용할 출처를 추가할 수 있습니다.
];

// 2. CORS 미들웨어 사용 설정 (수정된 부분)
app.use(cors({
  origin: function (origin, callback) {
    // 요청 출처(origin)가 없거나(예: Postman 같은 도구, 서버 간 통신), 
    // 허용된 출처 목록(allowedOrigins)에 포함되어 있으면 요청을 허용합니다.
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// JSON 요청 본문을 파싱하기 위한 미들웨어가 필요하다면 추가
// app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.get('/api/data', (req, res) => {
  res.json({
    message: '이것은 백엔드에서 온 데이터입니다! (EC2 환경 CORS 처리됨)', // 응답 메시지 변경 (선택 사항)
    timestamp: new Date()
  });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port} (EC2 CORS 적용)`); // 로그 메시지 변경 (선택 사항)
});