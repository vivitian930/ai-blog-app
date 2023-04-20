import { Open_Sans } from "next/font/google"
import Footer from "./(shared)/Footer"
import Navbar from "./(shared)/Navbar"
import "./globals.css"

const openSans = Open_Sans({
  subsets: ["latin"]
})

export const metadata = {
  title: "AI Blogger",
  description: "Blog using AI and Next.js"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
