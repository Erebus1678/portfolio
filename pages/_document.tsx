import { Html, Head, Main, NextScript } from 'next/document'

// Apply a manually-chosen theme before first paint to avoid a flash of the
// wrong colours. No stored choice → the CSS media query decides.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}`

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
