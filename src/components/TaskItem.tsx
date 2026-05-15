import React from 'react'
import { CheckCircle2, Circle } from 'lucide-react'
import { Task, Priority } from '../types'
import { Badge } from './UI'

interface TaskItemProps {
  task: Task
  onToggle: (id: string) => void
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  const getPriorityVariant = (priority: Priority) => {
    switch (priority) {
      case 'High': return 'red'
      case 'Medium': return 'yellow'
      case 'Low': return 'gray'
      default: return 'gray'
    }
  }

  return (
    <div className="flex items-center justify-between py-10 group">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className="text-[#CBD5E1] hover:text-[#2563EB] transition-colors focus:outline-none"
        >
          {task.completed ? (
            <CheckCircle2 className="w-5 h-5 text-[#22C55E]" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>
        <span
          className={`text-base font-medium transition-all ${task.completed ? 'text-[#64748B] line-through opacity-60' : 'text-[#0F172A]'}`}
        >
          {task.name}
        </span>
      </div>
      <Badge variant={getPriorityVariant(task.priority)}>{task.priority}</Badge>
    </div>
  )
}