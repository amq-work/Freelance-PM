export type Priority = 'High' | 'Medium' | 'Low'

export interface Task {
  id: string
  name: string
  priority: Priority
  completed: boolean
}

export interface Category {
  id: string
  title: string
  tasks: Task[]
}

export interface Project {
  id: string
  name: string
  client: string
  totalAmount: number
  paidAmount: number
  progress: number
  categories: Category[]
  createdAt: string
}