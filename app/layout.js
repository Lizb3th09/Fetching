import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './src/components/Footer'
import NavBar from './src/components/navbar'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
       


       <body className={inter.className}>

       <div className=''></div>
      <NavBar/>
      <main className='flex-grow p-8'>
              {children}
            </main>
            <Footer/>
        </body>

      
   
    </html>
    
  )
}
