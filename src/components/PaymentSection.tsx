import { Card } from './UI'

interface PaymentSectionProps {
  total: number
  paid: number
  compact?: boolean
}

export function PaymentSection({ total, paid, compact = false }: PaymentSectionProps) {
  const remaining = total - paid
  const percentage = total > 0 ? (paid / total) * 100 : 0

  const formatCurrency = (amount: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)

  if (compact) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-[10px] text-[#64748B] font-bold uppercase tracking-widest mb-1">Total Paid</p>
            <p className="text-2xl font-bold text-[#22C55E]">{formatCurrency(paid)}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#64748B]">
            <span>Collection Progress</span>
            <span className="text-[#0F172A]">{Math.round(percentage)}%</span>
          </div>
          <div className="w-full bg-[#F1F5F9] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#22C55E] h-full transition-all duration-700 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
        <div className="pt-2 border-t border-[#F1F5F9]">
          <p className="text-xs text-[#64748B] font-medium">{formatCurrency(remaining)} still to be collected</p>
        </div>
      </div>
    )
  }

  return (
    <Card className="space-y-14 p-14">
      <h3 className="font-bold text-lg text-[#0F172A]">Payment Status</h3>
      <div className="grid grid-cols-1 gap-12">
        <div className="flex justify-between items-center">
          <p className="text-sm text-[#64748B] font-medium">Total Amount</p>
          <p className="text-lg font-bold text-[#0F172A]">{formatCurrency(total)}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-[#64748B] font-medium">Paid</p>
          <p className="text-lg font-bold text-[#22C55E]">{formatCurrency(paid)}</p>
        </div>
        <div className="flex justify-between items-center border-t border-[#E2E8F0] pt-4">
          <p className="text-sm text-[#64748B] font-medium">Remaining</p>
          <p className="text-lg font-bold text-[#0F172A]">{formatCurrency(remaining)}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-[#64748B]">Payment Progress</span>
          <span className="text-[#0F172A]">{Math.round(percentage)}%</span>
        </div>
        <div className="w-full bg-[#E2E8F0] h-3 rounded-full overflow-hidden">
          <div className="bg-[#22C55E] h-full transition-all duration-500" style={{ width: `${percentage}%` }} />
        </div>
      </div>
    </Card>
  )
}