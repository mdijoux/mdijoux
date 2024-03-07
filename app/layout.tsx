import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import '../styles/globals.css';


 
// const roboto = Roboto({
//     weight: ['100','300','400','500','700','900'],
//     style: ['normal', 'italic'],
//     subsets: ['latin'],
//     display: 'swap',
// })

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="fr">
            <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
                {children}
            </body>
        </html>
    )
  }