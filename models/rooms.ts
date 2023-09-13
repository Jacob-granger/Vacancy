export interface Room {
  id: number
  address: string
  rent: number
  avail: string
  until: string
  description: string
  image: string
}

export interface RoomSearch {
  address: string | undefined
  min: string | undefined
  max: string | undefined
}
