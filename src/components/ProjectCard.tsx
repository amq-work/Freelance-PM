import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Project } from '../types'
import { ChevronRight, Briefcase } from 'lucide-react'

export function ProjectCard({ project, className = '' }: { project: Project; className?: string }) {
  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount)

  return (
    <Link to={`/project/${project.id}`} className="block h-full">
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className={`relative h-full bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-200 transition-all group overflow-hidden ${className}`}
      >
        {/* Subtle background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-8">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                <Briefcase className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-500 font-medium">{project.client}</p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 rounded-2xl p-4">
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                Paid
              </p>
              <p className="text-lg font-black text-emerald-500">{formatCurrency(project.paidAmount)}</p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 text-right">
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                Remaining
              </p>
              <p className="text-lg font-black text-slate-900">
                {formatCurrency(project.totalAmount - project.paidAmount)}
              </p>
            </div>
          </div>

          <div className="mt-auto space-y-3">
            <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
              <span className="text-slate-500">Progress</span>
              <span className="text-slate-900">{project.progress}%</span>
            </div>
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${project.progress}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="bg-gradient-to-r from-blue-500 to-blue-400 h-full rounded-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}