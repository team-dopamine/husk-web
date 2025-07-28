<div align="center">
<a href="https://husk.kr/">
  <img
    src="https://github.com/user-attachments/assets/7126f647-4d17-4747-b4a3-06215d5a689c"
    alt="husk_logo"
    width="351"
  />
</a>

# 🔐 [HUSK(Help Use Shell Kindly)](https://husk.kr/)

> SSH 키 등록과 웹 터미널 기반의 SSH 접속을 한 번에 제공하는 통합 서비스


</div>
<img width="1163" height="1731" alt="service intro" src="https://github.com/user-attachments/assets/15453de1-fa34-43b7-9e5a-374aa7d7cad1" />

HUSK를 통해 사용자가 개인 또는 팀용 **SSH 키(Keychain)를 등록**하면, 해당 키를 기반으로 다양한 서버에 **웹 상에서 SSH로 접속할 수 있는 터미널 환경**을 제공해줘요!

🧚 HUSK에서 복잡한 설정 없이 **브라우저 기반 웹 터미널**을 통해 편리하고 안전하게 서버에 접근할 수 있어요

- 🔐 **SSH Keychain 등록/관리**
  - 개인/팀용 SSH 개인 키 등록 및 암호화 저장
  - 키를 이용한 서버 연결 흐름 자동화

- 💻 **웹 터미널을 통한 SSH 접속**
  - 브라우저 상에서 직접 서버에 SSH 접속 가능
  - 실시간 명령어 입력 및 응답 처리

- 🔒 **보안 중심 설계**
  - 키 등록 시 AES 기반 서버측 암호화 처리
  - WSS 기반 종단 간 암호화
<br/>

## 🎯 서비스 기획 배경

> "SSH 접속, 왜 이렇게 복잡해야 할까 🤷‍♂️"

개발자나 서버 운영자는 각기 다른 서버에 접속하기 위해 키를 설정하고, CLI를 통해 접속하고, 환경을 구성하는 등 번거로운 절차를 반복합니다.  

HUSK는 **브라우저 기반 터미널**, **SSH 키 등록 관리**, **간편한 연결 절차**를 통해 이러한 불편함을 해결하고,  **보다 쉬운 DevOps 환경을 제공**하는 것을 목표로 합니다!

<br/>

## 🔐 보안 처리 방식

- SSH Key는 서버 측에서 **AES 알고리즘으로 즉시 암호화**된 후 저장되며 복호화 없이 직접 연결에 사용
- WebSocket 연결은 **WSS 프로토콜**(HTTPS 기반)으로 암호화되어 클라이언트-서버 간 통신의 보안성 확보
  
<br/>

## 🔧 시스템 아키텍처
  <img
    src="https://github.com/user-attachments/assets/0ac1e832-742c-46e7-b749-d440f3388419"
    alt="husk_system-arch"
    width="600"
  />

## 🛠️ 기술 스택
<img width="350" alt="techstack" src="https://github.com/user-attachments/assets/df740719-e6a7-41ca-9246-b9254bfd6d87" />





