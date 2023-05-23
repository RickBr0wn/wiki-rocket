import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lesson 05',
  description:
    'Lesson 05: https://www.youtube.com/watch?v=PcHY2Py6AQY&list=PL0Zuz27SZ-6Pk-QJIdGd1tGZEzy9RTgtj&index=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-800 ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
