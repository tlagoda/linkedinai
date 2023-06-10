import './global.css'

export const metadata = {
  title: 'Sumariz: Watch Less, Know More',
  description: 'Watch Less, Know More',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
