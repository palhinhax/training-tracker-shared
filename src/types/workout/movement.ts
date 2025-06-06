export interface MovementCategory {
  id: string
  name: string
}

export interface Movement {
  id: string
  name: string
  categoryId: string
  description?: string
}
