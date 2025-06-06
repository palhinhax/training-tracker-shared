import { UserSummary } from '../../user/user'
import { GymSummary } from './gym'
import { GymPlanSummary } from '../../plan/gym-plan'

export interface GymMembershipSummary {
  id: string
  user: UserSummary
  gym: GymSummary
  plan: GymPlanSummary
  startDate: string
  endDate?: string
  active: boolean
}

export interface MembershipWithAccessibleGyms extends GymMembershipSummary {
  accessibleGyms: GymSummary[]
}
