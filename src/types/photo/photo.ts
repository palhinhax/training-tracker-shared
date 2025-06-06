import { PhotoType } from '../../common/enums'

export interface Photo {
  id: string
  url: string
  title?: string
  description?: string
  type: PhotoType
  createdAt: string
  createdById: string
  userId?: string
  gymId?: string
}
