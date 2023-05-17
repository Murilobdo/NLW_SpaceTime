import { User } from "lucide-react"
import Image from 'next/image'
import nlwLogo from '../assets/nlw-space-time-logo.svg';

export default function Home() {
  return (
   <main className="grid grid-cols-2 min-h-screen bg-[url(../assets/bg-stars.svg)] bg-cover">
     
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-r border-white/10">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] bg-purple-700 -translate-y-1/2 translate-x-1/2 opacity-50 rounded-full blur-full"></div>

        {/* Strippes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes "></div>

        {/* Sign In */}
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 text-gray-500"/>
          </div>

          <p className="text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve < br/> 
            suas memórias!
          </p>
        </a>

        {/* Hero */}
        <div>
          <Image src={nlwLogo} alt="NLW Spacetime" />
        </div>

      </div>
      
      <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">

        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, <br/>
            comece a <a href="" className="underline hover:text-gray-50"> criar agora!</a>
          </p>
        </div>

      </div>
   </main>
  )
}
