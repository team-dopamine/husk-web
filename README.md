# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Project Architecture

### apis

- 외부 API와의 통신을 담당하는 함수 및 클래스 포함
- REST API 호출, GraphQL 쿼리 등

### assets

- 정적 파일들을 저장하는 디렉토리
- 이미지, 폰트, 아이콘 등

### components

- 재사용 가능한 UI 컴포넌트들을 저장
- 버튼, 입력 필드, 카드 등 애플리케이션 전반에서 사용되는 UI 요소

### hooks

- 커스텀 React 훅을 저장
- 상태 관리, 사이드 이펙트 처리 등을 위한 재사용 가능한 로직

### pages

- 라우팅 가능한 페이지 컴포넌트들을 저장
- 홈페이지, 로그인 페이지, 프로필 페이지 등 각 라우트에 해당하는 최상위 컴포넌트

### styles

- 전역 스타일 또는 스타일 관련 유틸리티
- 글로벌 CSS, 테마 설정, 스타일 상수 등
