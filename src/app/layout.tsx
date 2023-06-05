import Blur from '@/components/Blur'
import Hero from '@/components/Hero'
import Profille from '@/components/Profille'
import SIgnIn from '@/components/SignIn'
import Stripes from '@/components/Stripes'
import { cookies } from 'next/dist/client/components/headers'
import { Bai_Jamjuree as BaiJamjure, Roboto_Flex as Roboto } from 'next/font/google'
import './globals.css'

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
  const IsAuthorization = cookies().has('token_client_github')
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${baiJamjure.variable} font-sans bg-gray-900 text-gray-100 `}>
        <main className="grid grid-cols-2 min-h-screen bg-[url(../assets/bg-stars.svg)] bg-cover" >
          <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden">
            <Blur />
            <Stripes />
            {!!IsAuthorization ? (
              <Profille />
            ) : (
              <SIgnIn />
            )}
            <Hero />
            <div className="text-sm leading-relaxed text-gray-200">
              Developed by SS digital agency 🚀
            </div>
          </div>
          <div className='flex flex-1 flex-col px-10 py-16 gap-6 h-screen overflow-y-auto'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
