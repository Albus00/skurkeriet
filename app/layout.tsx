import localFont from 'next/font/local'
import Footer from '@/components/Footer'
import './style/fonts.css'
import './style/globals.css'

export const metadata = {
  title: 'Skurkeriet',
  description: 'All makt åt Tengil'
}

// Add local fonts
const vinyl = localFont({
  src: [
    {
      path: './fonts/vinyl.ttf',
      weight: '400'
    }
  ],
  variable: '--font-vinyl'
})
const cascadia = localFont({
  src: [
    {
      path: './fonts/cascadia.ttf',
      weight: '400'
    }
  ],
  variable: '--font-cascadia'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={'w-full min-h-screen flex flex-col ' + `${vinyl.variable} ${cascadia.variable}`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
