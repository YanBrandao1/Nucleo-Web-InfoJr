import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// import { GoogleFonts } from 'next-google-fonts'

export default function App({ Component, pageProps }: AppProps) {

  // <GoogleFonts href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap" />
  return <Component {...pageProps} />
}
