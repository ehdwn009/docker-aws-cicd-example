# backend/Dockerfile

# 1. 베이스 이미지(Base Image) 선택
FROM node:18-alpine

# 2. 작업 디렉토리(Working Directory) 설정
WORKDIR /app

# 3. 의존성 파일 복사 및 설치 (효율적인 빌드를 위해)
COPY package*.json ./

RUN npm install

# 4. 소스 코드 전체 복사
COPY . .

# 5. 포트 노출(Expose)
EXPOSE 3001

# 6. 컨테이너 시작 시 실행될 기본 명령어(Default Command)
CMD [ "node", "index.js" ]