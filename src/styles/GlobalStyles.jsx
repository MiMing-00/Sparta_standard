// GlobalStyle 컴포넌트를 만들고 styled-reset 패키지로 스타일 초기화하고 App 컴포넌트에 적용해 보세요.
import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body, #root {
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
}`;

export default GlobalStyles;
