import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Project } from '../types'
import { ProjectCard } from '../components/ProjectCard'
import { Hero } from '../components/Hero'

interface DashboardProps {
  projects: Project[]
  onToggleTask: (projectId: string, taskId: string) => void
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
}

export function Dashboard({ projects, onToggleTask }: DashboardProps) {
  return (
    <div className="space-y-12 pb-12">
      <Hero name="Aayan" />

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex justify-between items-end mb-8"
      >
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Active Projects</h1>
          <p className="text-slate-500 font-medium">You are managing {projects.length} projects right now.</p>
        </div>
        <Link to="/create" className="md:hidden">
           <motion.button 
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 shadow-sm transition-colors"
           >
             <Plus className="w-4 h-4" />
             New
           </motion.button>
        </Link>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}