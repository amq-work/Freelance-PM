import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Dashboard } from './pages/Dashboard'
import { CreateProject } from './pages/CreateProject'
import { ProjectDetails } from './pages/ProjectDetails'
import { Earnings } from './pages/Earnings'
import { Profile } from './pages/Profile'
import { Project } from './types'

const INITIAL_DATA: Project[] = [
  {
    id: '1',
    name: 'E-commerce Redesign',
    client: 'Luxe Apparel',
    totalAmount: 4500,
    paidAmount: 2250,
    progress: 65,
    createdAt: '2024-03-15',
    categories: [
      {
        id: 'c1',
        title: 'Design Phase',
        tasks: [
          { id: 't1', name: 'Wireframes for Home Page', priority: 'High', completed: true },
          { id: 't2', name: 'Mobile UI Kit', priority: 'Medium', completed: true },
          { id: 't3', name: 'Checkout Flow Mockups', priority: 'High', completed: false },
        ],
      },
      {
        id: 'c2',
        title: 'Development',
        tasks: [
          { id: 't4', name: 'Setup React Project', priority: 'Medium', completed: true },
          { id: 't5', name: 'Product Grid Component', priority: 'Low', completed: false },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Brand Identity',
    client: 'Skyline Tech',
    totalAmount: 2800,
    paidAmount: 2800,
    progress: 100,
    createdAt: '2024-03-10',
    categories: [
      {
        id: 'c3',
        title: 'Branding',
        tasks: [
          { id: 't6', name: 'Logo Concepts', priority: 'High', completed: true },
          { id: 't7', name: 'Color Palette', priority: 'Medium', completed: true },
          { id: 't8', name: 'Brand Guidelines PDF', priority: 'Low', completed: true },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Mobile App API',
    client: 'FitTrack',
    totalAmount: 6000,
    paidAmount: 1500,
    progress: 25,
    createdAt: '2024-03-20',
    categories: [
      {
        id: 'c4',
        title: 'Backend',
        tasks: [
          { id: 't9', name: 'Auth System', priority: 'High', completed: true },
          { id: 't10', name: 'User Profile Endpoints', priority: 'High', completed: false },
          { id: 't11', name: 'Database Migration', priority: 'Medium', completed: false },
        ],
      },
    ],
  },
]

export default function App() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_DATA)
  
  const handleToggleTask = (projectId: string, taskId: string) => {
    setProjects((prev) =>
      prev.map((p) => {
        if (p.id !== projectId) return p
        const newCategories = p.categories.map((c) => ({
          ...c,
          tasks: c.tasks.map((t) =>
            t.id === taskId ? { ...t, completed: !t.completed } : t
          ),
        }))
        const allTasks = newCategories.flatMap((c) => c.tasks)
        const completedTasks = allTasks.filter((t) => t.completed).length
        const progress = allTasks.length > 0 ? Math.round((completedTasks / allTasks.length) * 100) : 0
        return { ...p, categories: newCategories, progress }
      })
    )
  }
  
  const handleCreateProject = (data: { name: string; client: string; totalAmount: number }) => {
    const newProject: Project = {
      id: Math.random().toString(36).substr(2, 9),
      name: data.name,
      client: data.client,
      totalAmount: data.totalAmount,
      paidAmount: 0,
      progress: 0,
      createdAt: new Date().toISOString().split('T')[0],
      categories: [{ id: 'cat-new', title: 'General Tasks', tasks: [] }],
    }
    setProjects([newProject, ...projects])
  }
  
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard projects={projects} onToggleTask={handleToggleTask} />} />
          <Route path="/earnings" element={<Earnings projects={projects} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create" element={<CreateProject onCreate={handleCreateProject} />} />
          <Route path="/project/:id" element={<ProjectDetails projects={projects} onToggleTask={handleToggleTask} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}