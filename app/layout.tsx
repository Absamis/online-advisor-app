import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MAPOLY Support Portal',
  description: 'Integrated Academic Advising and Psychological Counseling Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}