# 블로그 앱 프로젝트
## 🎶css의 BEM 모델
- BEM(Block-Element-Modifier) 모델: CSS 클래스 네이밍 방법
- 장점: 가독성, 재사용성, 유지보수성
- 단점: 클래스명 길어질 수 있음
- 구성
 1. Block (예를 들어 header)
 2. Element (예를 들어 logo)
 3. Modifier (예를 들어 primary)
- 예시
 1. "block"
 2. "block__title"
 3. "block__list"
 4. "block__list-item"
 5. "block__list-item--highlighted"

## 🎶상대경로 길어지는 문제
```
import Footer from "../../components/Footer";
import Header from "../../components/Header";
```

#### vite + typescript 환경에서의 해결 방법
- @types/node 설치
  ```
  yarn add @types/node
  ```
- tsconfig.json 파일 수정    
baseUrl: 절대경로("/")의 기준이 되는 디렉터리를 설정    
paths:  절대 경로로 지정하고 싶은 경로들을 "별칭": ["경로"] 순으로 설정

```
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"],
      "@pages/*": ["pages/*"],
      "@components/*": ["components/*"]
    },
    ...
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
  }
```
  
- vite.config.ts 파일 수정    
  find: 절대경로 별칭 설정    
  replacement: 절대경로 입력
```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
    ],
  },
});
```
- 결과
```
import Footer from "@components/Footer";
import Header from "@components/Header";
```

