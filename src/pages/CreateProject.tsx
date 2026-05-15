import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { Card, Input, Button } from '../components/UI'

export function CreateProject({ onCreate }: { onCreate: (data: any) => void }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    client: '',
    totalAmount: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.client || !formData.totalAmount) return
    onCreate({
      ...formData,
      totalAmount: parseFloat(formData.totalAmount),
    })
    navigate('/')
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto space-y-10 py-8"
    >
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>

      <div className="space-y-3">
        <h1 className="text-4xl font-black text-slate-900 tracking-tight">New Project</h1>
        <p className="text-slate-500 text-lg">Let's set up the details for your new freelance gig.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 25 }}
      >
        <Card className="p-8 md:p-12 rounded-3xl border-slate-200 shadow-xl shadow-slate-200/50">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <Input
                label="Project Name"
                placeholder="e.g. Website Redesign"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <Input
                label="Client Name"
                placeholder="e.g. Acme Corp"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                required
              />
              <Input
                label="Total Project Amount ($)"
                type="number"
                placeholder="0.00"
                value={formData.totalAmount}
                onChange={(e) => setFormData({ ...formData, totalAmount: e.target.value })}
                required
              />
            </div>

            <div className="pt-6 flex gap-4">
              <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 text-white rounded-2xl">
                Create Project
              </Button>
              <Button type="button" variant="secondary" onClick={() => navigate(-1)} className="rounded-2xl border-slate-200 hover:bg-slate-50">
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </motion.div>
    </motion.div>
  )
}