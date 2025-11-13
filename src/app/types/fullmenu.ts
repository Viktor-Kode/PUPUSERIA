import { DietaryType } from '@/app/components/Common/DietaryIcons'

export type FullMenuType = {
  name: string
  style: string
  price: string
  description: string
  dietary?: DietaryType[]
}
