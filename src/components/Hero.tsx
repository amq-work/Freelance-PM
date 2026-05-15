import { motion } from 'framer-motion'
import { Sparkles, ArrowUpRight } from 'lucide-react'

interface HeroProps {
  name: string
}

export function Hero({ name }: HeroProps) {
  const currentHour = new Date().getHours()
  const greeting = currentHour < 12 ? 'Good morning' : currentHour < 18 ? 'Good afternoon' : 'Good evening'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] rounded-3xl md:rounded-[2.5rem] p-8 md:p-16 text-white shadow-xl shadow-blue-200/50"
    >
      {/* Decorative background circles */}
      <div className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[10%] w-48 h-48 bg-blue-400/20 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8">
          <Sparkles className="w-4 h-4 text-blue-200" />
          <span className="text-xs font-bold uppercase tracking-widest text-blue-50">Freelance Dashboard</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-[1.1]">
          {greeting}, <br />
          <span className="text-blue-200">{name}</span>
        </h1>

        <p className="text-lg md:text-xl text-blue-100/80 font-medium leading-relaxed mb-10 max-w-lg">
          Track your projects, manage tasks, and watch your earnings grow. Ready to make today productive?
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-bold">3 Active Projects</span>
          </div>
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/10">
            <ArrowUpRight className="w-4 h-4 text-blue-200" />
            <span className="text-sm font-bold">Next Payout: $1,250</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
