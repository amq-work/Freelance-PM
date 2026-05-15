import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Plus } from 'lucide-react'
import { motion } from 'framer-motion'
import { Project } from '../types'
import { PaymentSection } from '../components/PaymentSection'
import { TaskItem } from '../components/TaskItem'
import { Button } from '../components/UI'

interface ProjectDetailsProps {
  projects: Project[]
  onToggleTask: (projectId: string, taskId: string) => void
}

export function ProjectDetails({ projects, onToggleTask }: ProjectDetailsProps) {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-black mb-4 text-slate-900">Project not found</h2>
        <Button onClick={() => navigate('/')}>Back to Dashboard</Button>
      </div>
    )
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8 pb-12"
    >
      <header className="space-y-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </button>

        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <motion.div initial={{ x: -20 }} animate={{ x: 0 }}>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">{project.name}</h1>
            <p className="text-lg text-slate-500 font-medium">{project.client}</p>
          </motion.div>
          <motion.div initial={{ x: 20 }} animate={{ x: 0 }} className="flex flex-wrap gap-4">
            <Button variant="secondary" className="flex-1 md:flex-none">Edit Project</Button>
            <Button variant="success" className="flex-1 md:flex-none shadow-sm shadow-emerald-500/20">Mark as Complete</Button>
          </motion.div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-10 items-start">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="space-y-12"
        >
          {project.categories.map((category) => (
            <section key={category.id} className="space-y-6 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                <h2 className="text-xl md:text-2xl font-black text-slate-900">{category.title}</h2>
                <button className="text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-1.5 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Task
                </button>
              </div>
              <div className="divide-y divide-slate-50">
                {category.tasks.map((task) => (
                  <TaskItem
                    key={task.id}
                    task={task}
                    onToggle={() => onToggleTask(project.id, task.id)}
                  />
                ))}
              </div>
            </section>
          ))}

          <Button
            variant="ghost"
            className="w-full border-2 border-dashed border-slate-300 py-6 text-slate-500 hover:bg-white hover:border-blue-500 hover:text-blue-600 rounded-3xl transition-all font-bold"
          >
            + Add New Category
          </Button>
        </motion.div>

        <motion.aside 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:sticky lg:top-28 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200"
        >
          <PaymentSection total={project.totalAmount} paid={project.paidAmount} />
        </motion.aside>
      </div>
    </motion.div>
  )
}