import { Head, Html, Main, NextScript } from 'next/document'
import { useEffect, useState } from 'react'


function Document() {
  const [themeLight, setThemeLight] = useState(false)

  useEffect(() => {
    setThemeLight(window.matchMedia('(prefers-color-scheme:light)').matches)
  }, [])

  return (
    <Html lang="en" data-theme={themeLight ? "light" : "dark"}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
