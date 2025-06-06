import { GymRole } from '../common/enums'

export interface GymCoach {
  id: string
  userId: string
  gymId: string
  role: GymRole
  canCreateClasses: boolean
  canEditClasses: boolean
  canManageGym: boolean
  canManageMembers: boolean
  canViewAllData: boolean
  joinedAt: string
  coachRequestId?: string
}
