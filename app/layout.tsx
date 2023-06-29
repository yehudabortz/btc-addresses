import "server-only"
import { Analytics } from '@vercel/analytics/react';

import clsx from 'clsx'
import './globals.css'
import { Darker_Grotesque } from 'next/font/google'

const inter = Darker_Grotesque({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <Analytics />
      <body className={clsx(inter.className, "text-black max-w-screen-2xl w-[90vw] m-auto")} >
        <header className="pt-12">
          <div className="container m-auto flex-col gap-4">
            <h1 className="font-bold text-gray-900 text-4xl text-center">
              BTC Address Balances Over Time
            </h1>
          </div>
        </header>
        {children}
        <footer className='min-h-[100px]'></footer>
      </body>
    </html>
  )
}
