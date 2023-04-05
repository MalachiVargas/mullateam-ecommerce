import '../output.css'
import HeaderGroup from './HeaderGroup'

export const metadata = {
  title: 'Mullateam Clothing Brand',
  description: 'Lifestyle clothing brand for the business moguls.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HeaderGroup />
        {children}
      </body>
    </html>
  )
}
