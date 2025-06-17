import '../styles/styles.css'

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio de Caique Kenji',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <script src="https://kit.fontawesome.com/a1b2c3d4e5.js" crossOrigin="anonymous" defer></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
