export const metadata = {
  title: 'Miguel Kesego Keitseng | Portfolio',
  description: 'Aspiring Network Engineer and Data Analyst portfolio showcasing infrastructure builds and digital experiences.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {/* Link to global CSS stylesheet */}
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}