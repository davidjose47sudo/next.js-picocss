import '@/styles/global/globals.css'
import type { AppProps } from 'next/app'
import '../styles/global/globals.css'
import '@picocss/pico'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
