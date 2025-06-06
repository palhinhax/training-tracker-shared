export type MembershipType = 'monthly' | 'pack' | 'drop-in'

export interface GymStudent {
  id: string
  name: string
  email: string
  phone?: string
  avatarUrl?: string
  joinedAt?: Date
  isActive?: boolean
  membershipType?: MembershipType
  membershipExpiresAt?: Date
  birthDate?: Date
  notes?: string
  emergencyContactName?: string
}
