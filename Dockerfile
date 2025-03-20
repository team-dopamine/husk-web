# 빌드 스테이지
FROM node:20-slim AS builder

WORKDIR /app

# package.json 복사
COPY package*.json ./

# 빌드를 위해 모든 의존성 설치
RUN npm ci

# 소스 코드 복사 
COPY . .

# 빌드 실행
RUN npm run build

# 프로덕션 스테이지 - nginx 사용
FROM nginx:alpine

# nginx 설정 - 기본 설정 사용하거나 필요시 커스텀 설정 추가 가능
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# nginx의 정적 파일 디렉토리 확인
RUN mkdir -p /usr/share/nginx/html

# 빌드된 파일을 nginx의 정적 파일 제공 디렉토리로 복사
COPY --from=builder /app/build /usr/share/nginx/html

# 포트 설정 (nginx 기본 포트 80)
EXPOSE 80

# nginx 실행
CMD ["nginx", "-g", "daemon off;"]