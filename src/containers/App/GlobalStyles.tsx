import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html {
    line-height: 1.15;
    text-size-adjust: 100%;
  }

  b,
  strong {
    font-weight: bolder;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    appearance: none;
  }

  :root {
    --max-page-width: 1300px;
    --color-primary: hsl(231 48% 48%);
  }

  body {
    background: #fff;
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    line-height: 1.4;
    margin: 0;
  }

  .wrapper {
    margin-left: auto;
    margin-right: auto;
    padding: 0 1em;
    max-width: var(--max-page-width);
    width: calc(100% - 2em);
  }

  a {
    color: inherit;
    text-decoration: underline;
  }
  
  .page-wrapper {
    display: grid;
    grid-template-columns: [full-start] minmax(1em, 1fr) [main-start] minmax(0, var(--max-page-width)) [main-end] minmax(1em, 1fr) [full-end];
    grid-template-rows: auto 1fr;
    min-height: 100vh;
  }
  
  header {
    grid-column: full;
    grid-row: 1;
  }
  
  main {
    grid-column: main;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;

export default GlobalStyles;
