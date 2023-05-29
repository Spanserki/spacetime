import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjure } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjure = BaiJamjure({ subsets: ['latin'], weight: '700', variable: '--font-bai-jamjure' })

export const metadata = {
  title: 'Spacetime',
  description: 'Aplicação desenvolvida em Next.Js com Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`
        ${roboto.variable}
        ${baiJamjure.variable}
        font-sans
        bg-gray-900
        text-gray-100
        `}>
        {children}
      </body>
    </html>
  )
}
