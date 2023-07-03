import Footer from '@/components/Footer'
import './style/globals.css'

// TODO:Add favicon
export const metadata = {
  title: 'Skurkeriet',
  description: 'All makt åt Tengil'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className='w-full min-h-screen flex flex-col'>
        {children}
        <Footer />
      </body>
    </html>
  )
}
