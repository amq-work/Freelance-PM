import React from 'react'

export function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'success' | 'secondary' | 'ghost'
}) {
  const variants = {
    primary: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-sm shadow-blue-100',
    success: 'bg-[#10B981] text-white hover:bg-[#059669] shadow-sm shadow-emerald-100',
    secondary: 'bg-white border border-[#E2E8F0] text-[#0F172A] hover:bg-[#F8FAFC] hover:border-[#CBD5E1]',
    ghost: 'bg-transparent text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC]',
  }
  return (
    <button
      className={`px-8 py-4 rounded-xl text-sm font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98] ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export function Input({
  label,
  error,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}) {
  return (
    <div className="space-y-2 w-full">
      {label && (
        <label className="text-sm font-bold text-[#0F172A] tracking-tight">
          {label}
        </label>
      )}
      <input
        className={`w-full px-7 py-4.5 bg-white border ${error ? 'border-red-500' : 'border-[#E2E8F0]'} rounded-xl focus:outline-none focus:ring-4 focus:ring-[#2563EB]/5 focus:border-[#2563EB] transition-all placeholder:text-[#94A3B8] text-sm font-medium`}
        {...props}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export function Card({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`bg-white border border-[#E2E8F0] rounded-2xl p-10 shadow-[0_1px_3px_rgba(0,0,0,0.02)] ${className}`}
    >
      {children}
    </div>
  )
}

export function Badge({
  children,
  variant,
}: {
  children: React.ReactNode
  variant: 'red' | 'yellow' | 'gray' | 'blue' | 'green'
}) {
  const variants = {
    red: 'bg-rose-50 text-rose-700 border-rose-100',
    yellow: 'bg-amber-50 text-amber-700 border-amber-100',
    gray: 'bg-slate-50 text-slate-600 border-slate-100',
    blue: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  }
  return (
    <span
      className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider border ${variants[variant]}`}
    >
      {children}
    </span>
  )
}