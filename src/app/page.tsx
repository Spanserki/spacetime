import Blur from "@/components/Blur"
import Stripes from "@/components/Stripes"
import SIgnIn from '@/components/SignIn'
import Hero from "@/components/Hero"
import EmptyMemories from "@/components/EmptyMemories"

export default function Home() {
  return (
    <main
      className="grid grid-cols-2 min-h-screen bg-[url(../assets/bg-stars.svg)] bg-cover"
    >
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden">
        <Blur />
        <Stripes />
        <SIgnIn />
        <Hero />
        <div className="text-sm leading-relaxed text-gray-200">
          Developed by SS digital agency 🚀
        </div>
      </div>
      <EmptyMemories />
    </main>
  )
}
