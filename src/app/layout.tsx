import '@/styles/globals.css'

export const metadata = {
  title: 'Connectit',
  description: 'Unleash the Power of Online Community. Connecting people through vibrant discussions, diverse perspectives, and endless possibilities. Join the conversation and experience a digital community like no other.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
