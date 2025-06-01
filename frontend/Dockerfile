# frontend/Dockerfile

# 1. 베이스 이미지로 Nginx 최신 안정화 버전을 사용합니다.
# 'alpine' 버전은 이미지를 가볍게 만들어줍니다.
FROM nginx:stable-alpine

# 2. 작업 디렉토리 설정 (선택 사항이지만 명시적으로 지정)
# Nginx 컨테이너 내부의 기본 HTML 서비스 경로로 작업 디렉토리를 설정할 수 있으나,
# 여기서는 직접 파일을 복사할 경로를 명시적으로 사용하겠습니다.
# WORKDIR /usr/share/nginx/html

# 3. 빌드된 정적 파일들(HTML, CSS, JS)을 Nginx의 기본 HTML 서비스 폴더로 복사합니다.
# Nginx는 기본적으로 /usr/share/nginx/html 폴더의 파일들을 서비스합니다.
# 현재 로컬 'frontend' 폴더에 있는 모든 파일(index.html, style.css, script.js 등)을
# 컨테이너 내부의 /usr/share/nginx/html 폴더로 복사합니다.
COPY . /usr/share/nginx/html

# 4. (선택 사항) 커스텀 Nginx 설정 파일 복사
# 만약 특별한 Nginx 설정이 필요하다면, 설정 파일을 만들고 아래처럼 복사할 수 있습니다.
# 지금은 기본 설정으로도 충분하므로 이 줄은 주석 처리하거나 생략해도 됩니다.
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 5. Nginx는 기본적으로 80번 포트를 사용합니다. 이 포트를 노출한다고 명시합니다.
EXPOSE 80

# 6. 컨테이너가 시작될 때 Nginx를 실행하는 기본 명령어입니다.
# Nginx 베이스 이미지에 이미 적절한 CMD가 설정되어 있으므로,
# 특별히 변경할 필요가 없다면 이 줄은 생략해도 Nginx가 자동으로 실행됩니다.
# CMD ["nginx", "-g", "daemon off;"]