import { motion } from 'framer-motion'
import { DollarSign, TrendingUp, CreditCard, ArrowUpRight } from 'lucide-react'
import { Project } from '../types'
import { Card } from '../components/UI'
import { PaymentSection } from '../components/PaymentSection'

interface EarningsProps {
  projects: Project[]
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
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
}

export function Earnings({ projects }: EarningsProps) {
  const totalSummary = projects.reduce(
    (acc, p) => ({
      total: acc.total + p.totalAmount,
      paid: acc.paid + p.paidAmount,
    }),
    { total: 0, paid: 0 }
  )

  const stats = [
    { label: 'Total Revenue', value: totalSummary.total, icon: DollarSign, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Collected', value: totalSummary.paid, icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Outstanding', value: totalSummary.total - totalSummary.paid, icon: CreditCard, color: 'text-amber-600', bg: 'bg-amber-50' },
  ]

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

  return (
    <div className="space-y-12 pb-12">
      <motion.header 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-black text-slate-900 tracking-tight mb-2">Financial Overview</h1>
        <p className="text-slate-500 font-medium text-lg">Track your income and outstanding payments across all projects.</p>
      </motion.header>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={itemVariants}>
            <Card className="p-6 md:p-8 rounded-3xl border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.bg} p-3 rounded-xl`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-300" />
              </div>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <p className="text-3xl font-black text-slate-900">{formatCurrency(stat.value)}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.section 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-bold text-slate-900">Payment Breakdown</h2>
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
             <PaymentSection total={totalSummary.total} paid={totalSummary.paid} />
          </div>
        </motion.section>

        <motion.section 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-xl font-bold text-slate-900">Recent Project Values</h2>
          <div className="space-y-4">
            {projects.slice(0, 5).map((project) => (
              <Card key={project.id} className="p-4 md:p-6 rounded-2xl border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-900">{project.name}</p>
                    <p className="text-sm text-slate-500">{project.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-900">{formatCurrency(project.totalAmount)}</p>
                    <p className={`text-[10px] font-bold uppercase tracking-wider ${project.paidAmount === project.totalAmount ? 'text-emerald-500' : 'text-amber-500'}`}>
                      {project.paidAmount === project.totalAmount ? 'Fully Paid' : 'Partial'}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  )
}