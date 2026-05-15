import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, PlusCircle, Briefcase, BarChart3, User } from 'lucide-react'
import { motion } from 'framer-motion'

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Earnings', path: '/earnings', icon: BarChart3 },
    { name: 'Profile', path: '/profile', icon: User },
  ]

  const mobileNavItems = [
    ...navItems,
    { name: 'New', path: '/create', icon: PlusCircle },
  ]

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg md:rounded-xl flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-lg group-hover:shadow-blue-500/40 group-hover:-translate-y-0.5 transition-all duration-300">
              <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-white" />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              FreeFlow<span className="text-blue-500">.</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center h-full gap-8">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative h-full flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-blue-600' : 'text-slate-500 hover:text-slate-900'}`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-t-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center gap-4">
             <Link to="/create" className="hidden md:flex">
               <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 shadow-sm transition-colors"
               >
                 <PlusCircle className="w-4 h-4" />
                 New Project
               </motion.button>
             </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 py-8 md:py-12 px-4 sm:px-6 lg:px-8 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </main>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50 pb-safe">
        <div className="flex justify-around items-center h-16">
          {mobileNavItems.map((item) => {
            const Icon = item.icon
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center w-full h-full gap-1 ${isActive ? 'text-blue-600' : 'text-slate-500'}`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                <span className="text-[10px] font-semibold">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}