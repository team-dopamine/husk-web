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

# 프로덕션 스테이지
FROM node:20-slim

WORKDIR /app

# serve 패키지 전역 설치
RUN npm install -g serve

# 빌드된 파일만 복사
COPY --from=builder /app/build ./build

EXPOSE 3000

# serve 명령어로 정적 파일 제공
CMD ["serve", "-s", "build", "-l", "3000"]