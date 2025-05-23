# 36-COLLABORATION-WEB-WATCHAPEDIA
SOPT 36기 합동 세미나 - 왓챠피디아 프로젝트
<br/>
## 👨‍💻 WEB Developers


<table>
  <tr>
    <td align="center">
      <a href="https://github.com/yeonilil">
        <img src="https://github.com/yeonilil.png" width="100px;" alt="곽서연" /><br />
        <sub><b>곽서연</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Jeong-Ag">
        <img src="https://github.com/Jeong-Ag.png" width="100px;" alt="김정은" /><br />
        <sub><b>김정은</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Leeyoonji23">
        <img src="https://github.com/Leeyoonji23.png" width="100px;" alt="이윤지" /><br />
        <sub><b>이윤지</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/jogpfls">
        <img src="https://github.com/jogpfls.png" width="100px;" alt="조혜린" /><br />
        <sub><b>조혜린</b></sub>
      </a>
    </td>
  </tr>
</table>
<br/>

## 🔧 역할 분담

### 곽서연
- 메인 뷰 구현
- 공통 컴포넌트 캐러셀/ 광고 위젯 구현
- 오늘의 TOP 랭킹(GET), 영화 공개 예정자 + 시리즈 공개 예정자(GET) API 연동

### 김정은
- 영화 상세 뷰 구현 - 영화 정보, 별점 및 태그, 설명, 갤러리, 동영상, 컬렉션, 비슷한 작품
- 공통 컴포넌트 리뷰칩/ 태그/ 텍스트필드/ 버튼 구현
- 영화 상세 조회(GET) API 연동

### 이윤지
- 리뷰 작성 뷰 구현
- 작품 추천 뷰 구현
- 헤더/바텀/ 탭 바/ 영화 위젯 구현
- 코멘트 작성(POST), 포스트 기반 내용 추천(GET) API 연동

### 조혜린
- 영화 상세 뷰 구현 - 그래프, 매거진, 코멘트, 출연/제작
- 홈 토글/ 스포일러 토글 구현
- 영화 코멘트 조회(GET) API 연동
<br/>

## 🛠️ Tech Stack

![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=Yarn&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white)
![Vanilla Extract](https://img.shields.io/badge/Vanilla--Extract-FFCB47?style=for-the-badge&logo=css3&logoColor=black)

  <br/>
  
## 🧭 Convention Guide

### 📁 폴더/파일
- Props 타입은 `Props` 접미사 → `CardProps`
- 폴더명: 소문자 + s 접미사 + 케밥케이스 → `components`, `hooks`
- 타입: `PascalCase`, `interface`와 `type` 구분

### 🔡 변수
- `const → let`, `var` 금지
- 문자열 조합은 백틱(``)
- 상수는 `SNAKE_CASE`, 불리언은 `is` 접두사

### 🧠 함수
- 명확한 기능 중심 네이밍: `get`, `create`, `check`
- 이벤트 핸들러: `handle` 접두사 → `handleClick`
- 유틸 함수: `utils/` 디렉토리 분리
- API 함수는 `use` 접두사 → `useLoginMutation`

### 🎨 스타일
- 시맨틱 태그, Wrapper는 `container` 명명
- 불필요한 `<div>` 지양
<br/>

## 🌱 Git 작업 Flow

1. 이슈 넘버로 브랜치 생성 → `feature/#issue/기능명`
2. 작업 완료 후 develop 브랜치로 PR
3. **2명 이상 approve** 받아야 merge

### 브랜치 네이밍 규칙

- `main`: 배포용 브랜치
- `feature/#issue/기능명`: 기능 개발
- `fix/#issue`: 버그 수정
- `refactor/#issue`: 리팩토링
- 기능명은 `camelCase`

## 💬 PR & 코드리뷰

- 하나의 PR에 너무 많은 기능 포함 ❌
- 리뷰 시 부드러운 말투, 구체적 설명 권장

```md
Request: 꼭 고쳐주세요.  
Suggest: 이런 식으로 바꾸면 어떨까요?  
Nit: 아주 사소한 의견입니다.  
Question: 이 부분이 잘 이해되지 않아요.
```
