import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  font-family: Inter, sans-serif;
  line-height: 1.4;
  font-weight: 400;

  --gray-100: #F2F2F2;
  --gray-200: #D9D9D9;
  --gray-300: #808080;
  --gray-400: #333333;
  --gray-500: #262626;
  --gray-600: #1A1A1A;
  --gray-700: #0D0D0D;

  --blue-dark: '#1E6F9F';
  --blue: '#4EA8DE';
  --purple-dark: '#5E60CE';
  --purple: '#8284FA';

  --danger: '#E25858';
  
  background-color: var(--gray-600);
  color: var(--gray-100);

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*{
  padding: 0;
  margin:0;
  box-sizing: border-box;
}

`

