import "server-only"
import clsx from 'clsx'
import './globals.css'
import { Darker_Grotesque } from 'next/font/google'

const inter = Darker_Grotesque({ subsets: ['latin'] })

export const metadata = {
  title: 'Yehuda Bortz | Software Engineer',
  description: "I'm a specialist in Frontend Engineering and UX Design, with a strong focus on delivering high-performance software rapidly and efficiently.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >

      <body className={clsx(inter.className, "bg-neutral-200 text-black max-w-screen-2xl w-[90vw] m-auto")} >

        {children}
        <footer className='min-h-[100px]'></footer>
      </body>
    </html>
  )
}
