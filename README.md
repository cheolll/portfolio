# 👨‍💻 장철 | Frontend & Backend Developer Portfolio

> 문제를 해결하고, 더 나은 사용자 경험을 고민하는 개발자 **장철**의 개인 포트폴리오입니다.

<br />

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react\&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite\&logoColor=white)](https://vite.dev/)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github\&logoColor=white)](https://github.com/)

---

## 🌐 Portfolio

🚧 **현재 개발 중입니다.**

> 완성된 포트폴리오 사이트는 배포 후 아래 주소에서 확인할 수 있습니다.

**[🔗 Portfolio Website](#)**

---

## 🙋 About Me

안녕하세요. 다양한 기술을 직접 적용하고 문제를 해결하는 것을 좋아하는 개발자입니다.

웹 애플리케이션 개발을 중심으로 **Frontend와 Backend를 함께 이해하고 연결하는 개발**을 지향합니다.

특히 실제 서비스에서 발생하는 문제를 분석하고 해결하는 과정에 관심이 많습니다.

---

## 🛠️ Tech Stack

### Frontend

| Technology | Experience |
| ---------- | ---------- |
| React      | ⭐⭐⭐⭐       |
| TypeScript | ⭐⭐⭐⭐       |
| JavaScript | ⭐⭐⭐⭐⭐      |
| HTML / CSS | ⭐⭐⭐⭐⭐      |
| jQuery     | ⭐⭐⭐⭐⭐      |

### Backend

| Technology  | Experience |
| ----------- | ---------- |
| Java        | ⭐⭐⭐⭐       |
| Spring Boot | ⭐⭐⭐⭐       |
| Node.js     | ⭐⭐⭐⭐       |
| Express     | ⭐⭐⭐⭐       |

### Database

| Technology | Experience |
| ---------- | ---------- |
| MariaDB    | ⭐⭐⭐⭐       |
| MongoDB    | ⭐⭐⭐⭐       |
| Oracle     | ⭐⭐⭐        |

### DevOps / Tools

| Technology   | Experience |
| ------------ | ---------- |
| Git / GitHub | ⭐⭐⭐⭐       |
| Docker       | ⭐⭐⭐⭐       |
| Linux        | ⭐⭐⭐⭐       |
| PM2          | ⭐⭐⭐        |
| Vite         | ⭐⭐⭐⭐       |

---

## 🚀 Projects

### 💬 Real-time Chat Service

**Node.js + Express + MongoDB 기반 실시간 채팅 서비스**

* 1:1 / 그룹 채팅
* Socket.IO 기반 실시간 메시지
* 파일 업로드
* 이미지 / 동영상 썸네일 생성
* 메시지 공유
* 읽음 처리
* 채팅방 관리
* FCM / APNS 푸시 알림
* Android / iOS 플랫폼별 알림 처리

**Tech**

`Node.js` `Express` `MongoDB` `Socket.IO` `FCM` `APNS` `Docker`

[🔗 프로젝트 보기](#)

---

### ✈️ Into Korea

**여행 정보를 제공하는 웹 서비스**

외부 API를 활용하여 여행지, 관광지 등의 정보를 제공하는 팀 프로젝트입니다.

* 여행지 검색
* 관광 정보 조회
* 추천 장소
* API 데이터 연동
* 반응형 UI

**Tech**

`React` `TypeScript` `Spring Boot` `Oracle`

[🔗 프로젝트 보기](#)

---

## 💡 Troubleshooting

개발 과정에서 발생한 문제와 해결 과정을 기록합니다.

### 📱 iPhone Modal 화면 문제

**Problem**

iPhone에서 Modal 내부의 버튼 영역이 화면에 표시되지 않는 문제 발생.

**Cause**

모바일 Safari의 viewport 높이 및 동적 브라우저 UI 영역으로 인해 `vh` 기반 높이 계산에 문제가 발생.

**Solution**

```css
.modal_content {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    height: 84dvh;
    max-height: 84dvh;

    box-sizing: border-box;
}
```

`dvh`를 적용하여 실제 동적 viewport 높이를 기준으로 Modal의 크기를 계산하도록 수정했습니다.

---

### 📤 대용량 파일 업로드 Timeout

**Problem**

약 135MB 이상의 동영상 업로드 시 요청이 timeout되는 문제 발생.

**Cause**

클라이언트의 HTTP 요청 timeout 설정이 너무 짧게 설정되어 있었습니다.

**Solution**

요청 timeout을 조정하여 대용량 파일 업로드가 완료될 수 있도록 수정했습니다.

---

### 🔔 플랫폼별 Push Notification 처리

FCM을 이용한 Push Notification 구현 과정에서 Android와 iOS의 알림 처리 방식이 다른 문제를 해결했습니다.

* Android → Notification Channel 적용
* iOS → APNS `sound` 설정
* 사용자별 `allow_push` 설정 확인
* 디바이스별 `platform` 확인
* FCM Token 기반 사용자 디바이스 조회

---

## 📁 Project Structure

```text
portfolio/
├── public/
│   └── images/
│
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🖥️ Development

### Requirements

* Node.js
* npm

### Installation

```bash
git clone https://github.com/your-username/portfolio.git

cd portfolio

npm install
```

### Start Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

---

## 📌 Roadmap

* [x] Vite + React + TypeScript 프로젝트 생성
* [ ] Portfolio UI 설계
* [ ] Responsive Web 구현
* [ ] About Section
* [ ] Skills Section
* [ ] Projects Section
* [ ] Project Detail Page
* [ ] Dark Mode
* [ ] SEO 최적화
* [ ] Open Graph 적용
* [ ] GitHub Pages / Vercel 배포
* [ ] Custom Domain 연결

---

## 📫 Contact

**GitHub**

[GitHub Profile](https://github.com/your-username)

**Email**

[your-email@example.com](mailto:your-email@example.com)

---

## 📄 License

This project is for personal portfolio purposes.
