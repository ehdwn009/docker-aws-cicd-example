# frontend/Dockerfile

# 1. 베이스 이미지로 Nginx 최신 안정화 버전을 사용합니다.
FROM nginx:stable-alpine

# 2. 작업 디렉토리 설정 (선택 사항이지만 명시적으로 지정)
# WORKDIR /usr/share/nginx/html

# 3. 빌드된 정적 파일들(HTML, CSS, JS)을 Nginx의 기본 HTML 서비스 폴더로 복사합니다.
COPY . /usr/share/nginx/html

# 4. (선택 사항) 커스텀 Nginx 설정 파일 복사
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 5. Nginx는 기본적으로 80번 포트를 사용합니다. 이 포트를 노출한다고 명시합니다.
EXPOSE 80

# 6. 컨테이너가 시작될 때 Nginx를 실행하는 기본 명령어입니다.
# CMD ["nginx", "-g", "daemon off;"]