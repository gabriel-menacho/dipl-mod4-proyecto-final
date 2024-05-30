export interface IMainProps {
  className?: string
  products?: IProduct[]
}

export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  createdAt: string
  updatedAt: string
  userId: number
}
