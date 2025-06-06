import { PlanType } from '../../common/enums'

export interface GymPlanSummary {
  id: string
  name: string
  description?: string
  price: number
  type: PlanType
  durationDays?: number
  classLimit?: number
  monthlyLimit?: number
  weeklyLimit?: number
  dailyLimit?: number
}
