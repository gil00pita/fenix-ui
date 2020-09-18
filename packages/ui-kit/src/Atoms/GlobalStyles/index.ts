
import { createGlobalStyle } from 'styled-components';
import { getColor } from '../Palette';

export const GlobalStyles = createGlobalStyle`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  @-ms-viewport {
    width: device-width;
  }

  html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    background-color: ${({ theme }) => theme.colors.white};
    font-feature-settings: "tnum";
    font-variant: tabular-nums;
    line-height: 1.5715;
    margin: 0;
  }

  html,
  body {
    color: ${({ theme }) => theme.font.textColor};
    display: flex;
    flex-direction: column;
    font-family: ${({ theme }) => theme.font.fontFamily};
    font-size: ${({ theme }) => theme.font.fontSizeBase}px;
    height: 100vh;
    line-height: ${({ theme }) => theme.font.lineHeightBase};
    margin: 0;
    overflow: hidden;
    padding: 0;
    width: 100vw;
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  code,
  form,
  fieldset,
  legend,
  input,
  textarea,
  p,
  blockquote,
  th,
  td,
  hr,
  button,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    margin: 0;
    padding: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  input {
    overflow: visible;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.font.headingColor};
    font-weight: 500;
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  p {
    margin-bottom: 1em;
    margin-top: 0;
  }

  address {
    font-style: normal;
    line-height: inherit;
    margin-bottom: 1em;
  }

  input[type="number"],
  input[type="password"],
  input[type="text"],
  textarea {
    -webkit-appearance: none;
  }

  dl,
  ol,
  ul {
    margin-bottom: 1em;
    margin-top: 0;
  }

  ol ol,
  ol ul,
  ul ol,
  ul ul {
    margin-bottom: 0;
  }

  dt {
    font-weight: 500;
  }

  dd {
    margin-bottom: 0.5em;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1em;
  }

  dfn {
    font-style: italic;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a {
    -webkit-text-decoration-skip: objects;
    -webkit-transition: color 0.3s;
    background-color: transparent;
    color: ${getColor('blue', 6)};
    cursor: pointer;
    outline: none;
    text-decoration: none;
    transition: color 0.3s;
  }

  a:hover {
    color: ${getColor('blue', 5)};
  }

  a:active {
    color: ${getColor('blue', 7)};
  }

  a:active,
  a:focus,
  a:hover {
    outline: 0;
    text-decoration: none;
  }

  a[disabled] {
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
    pointer-events: none;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: ${({ theme }) => theme.font.codeFamily};
    font-size: 1em;
  }

  pre {
    margin-bottom: 1em;
    margin-top: 0;
    overflow: auto;
  }

  figure {
    margin: 0 0 1em;
  }

  img {
    border-style: none;
    vertical-align: middle;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  [role="button"],
  a,
  area,
  button,
  input:not([type="range"]),
  label,
  select,
  summary,
  textarea {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    caption-side: bottom;
    color: rgba(0, 0, 0, 0.45);
    padding-bottom: 0.3em;
    padding-top: 0.75em;
    text-align: left;
  }

  th {
    text-align: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  [type="reset"],
  [type="submit"],
  button,
  html [type="button"] {
    -webkit-appearance: button;
  }

  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner,
  button::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  input[type="checkbox"],
  input[type="radio"] {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0;
  }

  input[type="date"],
  input[type="datetime-local"],
  input[type="month"],
  input[type="time"] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    border: 0;
    margin: 0;
    min-width: 0;
    padding: 0;
  }

  legend {
    color: inherit;
    display: block;
    font-size: 1.5em;
    line-height: inherit;
    margin-bottom: 0.5em;
    max-width: 100%;
    padding: 0;
    white-space: normal;
    width: 100%;
  }

  progress {
    vertical-align: baseline;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: none;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  mark {
    background-color: ${getColor('yellow', 1)};
    padding: 0.2em;
  }

  ::-moz-selection {
    background: ${getColor('blue', 6)};
    color: ${getColor('common', 'white')};
  }

  ::selection {
    background-color: ${getColor('blue', 6)};
    color: ${getColor('common', 'white')};
  }
`;
