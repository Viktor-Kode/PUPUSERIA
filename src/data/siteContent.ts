import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

// Header labels are now translated in components using translation keys:
// 'nav.aboutUs', 'nav.menu', 'nav.contactUs'
export const HeaderData: HeaderItem[] = [
  { label: 'nav.aboutUs', href: '/#aboutus' },
  { label: 'nav.menu', href: '/#menu-section' },
  { label: 'nav.contactUs', href: '/#contact' },
]

// Feature labels are now translated in components using translation keys:
// 'features.feature1.heading', 'features.feature1.subheading', etc.
export const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'features.feature1.heading',
    subheading: 'features.feature1.subheading',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'features.feature2.heading',
    subheading: 'features.feature2.subheading',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'features.feature3.heading',
    subheading: 'features.feature3.subheading',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'features.feature4.heading',
    subheading: 'features.feature4.subheading',
  },
]

export const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Senior Chef',
    name: 'Marco Benton',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Junior Chef',
    name: 'Elena Rivera',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Junior Chef',
    name: 'John Doe',
    imgSrc: '/images/Expert/boytwo.png',
  },
]

export const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/gallery-01.png',
    name: 'Fresh Pupusa Preparation',
    price: 0,
  },
  {
    src: '/images/Gallery/gallery-02.png',
    name: 'Handmade Traditional Pupusas',
    price: 0,
  },
  {
    src: '/images/Gallery/gallery-03.png',
    name: 'Organic Ingredients Selection',
    price: 0,
  },
  {
    src: '/images/Gallery/gallery-04.png',
    name: 'Salvadoran Breakfast Spread',
    price: 0,
  },
]

export const FullMenuData: FullMenuType[] = [
  // Pupusas
  {
    name: 'Pupusa Revuelta',
    style: 'Pupusas',
    price: '$4.10',
    description: 'The classic favorite, packed with hearty flavor. Made with fresh masa (whole corn), slow-cooked beans, savory cheese, and seasoned pork (chicharrón).',
    dietary: ['containsMeat', 'containsDairy'],
  },
  {
    name: 'Pupusa de Frijol y Queso',
    style: 'Pupusas',
    price: '$4.10',
    description: 'Simple, comforting, and perfectly balanced. Fresh masa with our signature creamy beans and melted Salvadoran cheese.',
    dietary: ['vegetarian', 'containsDairy'],
  },
  {
    name: 'Pupusa de Chicharrón y Queso',
    style: 'Pupusas',
    price: '$4.10',
    description: 'A savory union of traditional flavors. Fresh masa, seasoned pork (chicharrón), and melted cheese.',
    dietary: ['containsMeat', 'containsDairy'],
  },
  {
    name: 'Pupusa de Espinaca y Queso',
    style: 'Pupusas',
    price: '$4.10',
    description: 'Garden-fresh spinach paired with creamy cheese. Made with fresh masa and tender spinach leaves.',
    dietary: ['vegetarian', 'containsDairy'],
  },
  {
    name: 'Pupusa de Ayote y Queso',
    style: 'Pupusas',
    price: '$4.10',
    description: 'Featuring tender zucchini for a light, satisfying bite. Made with locally-sourced zucchini and fresh masa.',
    dietary: ['vegetarian', 'containsDairy'],
  },
  {
    name: 'Pupusa de Loroco y Queso',
    style: 'Pupusas',
    price: '$4.10',
    description: 'A taste of Central America with the unique, floral loroco flower. Fresh masa with fragrant loroco buds.',
    dietary: ['vegetarian', 'containsDairy'],
  },
  {
    name: 'Pupusa Vegana',
    style: 'Pupusas',
    price: '$5.10',
    description: 'Our wholesome plant-based creation, bursting with garden flavors. Gluten-free corn masa with spinach, beans, loroco, cauliflower, and premium vegan cheese.',
    dietary: ['vegan', 'vegetarian', 'glutenFreeOptional'],
  },
  {
    name: 'Pupusa de Jalapeño y Queso',
    style: 'Pupusas',
    price: '$4.10',
    description: 'For those who love a spirited kick of fresh jalapeño. Hand-sliced jalapeños with fresh masa and cheese.',
    dietary: ['vegetarian', 'containsDairy', 'spicy'],
  },
  {
    name: 'Pupusa de Camarón y Queso',
    style: 'Pupusas',
    price: '$5.10',
    description: 'A coastal twist on the traditional pupusa. Fresh masa with succulent shrimp and Salvadoran cheese.',
    dietary: ['containsShellfish', 'containsDairy'],
  },
  // Sides
  {
    name: 'Frijoles Salvadoreños',
    style: 'Sides',
    price: '$4.00',
    description: 'Slow-simmered beans with a fresh tomato, green chile, and onion salsa.',
    dietary: ['vegan', 'vegetarian', 'glutenFreeOptional'],
  },
  {
    name: 'Canoas de Plátano',
    style: 'Sides',
    price: '$5.50',
    description: 'Sweet, ripe plantains baked to caramelized perfection. A naturally gluten-free delight.',
    dietary: ['vegetarian'],
  },
  {
    name: 'Empanadas de Plátano',
    style: 'Sides',
    price: '$5.50',
    description: 'A sweet dessert empanada filled with our spiced bean paste and fried to perfection.',
    dietary: ['vegetarian'],
  },
  {
    name: 'Arroz Salvadoreño',
    style: 'Sides',
    price: '$3.50',
    description: 'A simple, flavorful side of steamed rice with a hint of onion.',
    dietary: ['vegan', 'vegetarian', 'glutenFreeOptional'],
  },
  // Plates
  {
    name: 'Pan con Pollo Salvadoreño',
    style: 'Plates',
    price: '$13.99',
    description: 'A vibrant, loaded sandwich celebrating fresh textures and flavors. Fresh bolillo bread with shredded chicken, vegetables, and house sauce.',
    dietary: ['containsMeat'],
  },
  {
    name: 'Desayuno Tradicional Ligero',
    style: 'Plates',
    price: '$12.99',
    description: 'A lighter, wholesome start to your day. Savory beans, two eggs your way, sweet fried plantains, and fresh curtido.',
    dietary: ['vegetarian', 'containsEgg'],
  },
  {
    name: 'Desayuno Típico Salvadoreño',
    style: 'Plates',
    price: '$14.99',
    description: 'The hearty, classic Salvadoran breakfast plate. Beans, plantains, your choice of chorizo or longaniza, and warm tortillas.',
    dietary: ['containsMeat'],
  },
  // Specialties
  {
    name: 'Chiles Rellenos con Carne',
    style: 'Specialties',
    price: '$15.99',
    description: 'Poblano chiles stuffed with seasoned ground beef, in a rich tomato-egg sauce.',
    dietary: ['containsMeat', 'containsEgg', 'spicy'],
  },
  {
    name: 'Chiles Rellenos con Queso',
    style: 'Specialties',
    price: '$14.99',
    description: 'A vegetarian delight of cheese-stuffed poblano chiles in a savory tomato sauce.',
    dietary: ['vegetarian', 'containsDairy', 'containsEgg', 'spicy'],
  },
  // Drinks
  {
    name: 'Horchata Salvadoreña',
    style: 'Drinks',
    price: '$4.50',
    description: 'Our refreshing, fruity interpretation of the classic drink. Made with fresh pineapple, hibiscus, and organic cane sugar.',
    dietary: ['vegan', 'vegetarian', 'glutenFreeOptional'],
  },
  {
    name: 'Atole de Piña',
    style: 'Drinks',
    price: '$4.50',
    description: 'A warm, comforting pineapple and plantain drink, lightly spiced with cloves.',
    dietary: ['vegetarian', 'glutenFreeOptional'],
  },
]

export const FooterLinkData: FooterLinkType[] = []