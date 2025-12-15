/**
 * Dietary tags used to describe menu items.
 * Tags represent suitability, not guarantees.
 * Some items may depend on preparation or vendor confirmation.
 */
export type DietaryTag =
  | 'vegan'
  | 'vegetarian'
  | 'containsDairy'
  | 'containsEgg'
  | 'containsMeat'
  | 'containsShellfish'
  | 'glutenFree'
  | 'glutenFreeOptional'
  | 'spicy'

/**
 * Props for displaying a dietary indicator icon
 */
export interface DietaryIconProps {
  /** Dietary tag to render */
  tag: DietaryTag
  /** Icon size in pixels (default: 18) */
  size?: number
  /** Optional styling classes */
  className?: string
}
