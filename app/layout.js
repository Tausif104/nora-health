import { DM_Sans, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/global/header'
import Footer from '@/components/global/footer'

const dmSams = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Nora Health',
  description: 'Free Oral Contraception, Delivered to Your Door',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${dmSams.variable} ${inter.variable} antialiased`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
