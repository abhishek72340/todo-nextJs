
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {ReduxProvider} from './redux/ReduxProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Abhishek Singh Rana',
}

export default function RootLayout({children}: {children: React.ReactNode})

{
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider> {children}</ReduxProvider>
        </body>
    </html>
  )
}


