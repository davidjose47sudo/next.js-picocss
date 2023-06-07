import '@/styles/global/globals.css'
import type { AppProps } from 'next/app'
import '../styles/global/globals.css'
import '@picocss/pico'
import {useEffect} from 'react'


export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    const tema = window.matchMedia('(prefers-color-scheme:light)').matches
    document.querySelector("html")?.setAttribute("data-theme",`${tema ? "light" : "dark"}`)
  }, [])

  return <Component {...pageProps} />
}
