import '../../../output.css'

export const metadata = {
  title: 'Mullateam Studio',
  description:
    'Build, edit, and create new products on your own time with the studio.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
