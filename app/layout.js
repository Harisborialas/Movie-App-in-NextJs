import './globals.css'
import {Montserrat} from '@next/font/google'

const montsarrat = Montserrat({
  weights: [400,700],
  styles: ['latin'],
  subsets:['latin'],
  variable: "--font-montsarrat",

})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montsarrat.className} mx-10`}>{children}</body>
    </html>
  )
}
