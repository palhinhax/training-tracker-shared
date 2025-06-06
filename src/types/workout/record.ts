export interface RecordSet {
  id: string
  recordId: string
  reps: number
  weight: number
  unit: string
}

export interface Record {
  id: string
  userId: string
  movementId: string
  date: string
  sets: RecordSet[]
}
