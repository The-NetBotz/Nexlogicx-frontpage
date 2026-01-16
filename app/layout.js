import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata = {
  title: "Nexlogicx - Sales Management Platform",
  description: "Encourage your sales team to excel with Nexlogicx",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
