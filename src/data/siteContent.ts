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
    name: 'Charred Salmon Citrus Glaze',
    price: 35,
  },
  {
    src: '/images/Gallery/gallery-02.png',
    name: 'Heirloom Tomato Burrata',
    price: 27,
  },
  {
    src: '/images/Gallery/gallery-03.png',
    name: 'Truffle Mushroom Tartine',
    price: 45,
  },
  {
    src: '/images/Gallery/gallery-04.png',
    name: 'Seasonal Fruit Mille-feuille',
    price: 29,
  },
]

export const FullMenuData: FullMenuType[] = [
  {
    name: 'Mesquite Al Pastor',
    style: 'Signature Taco',
    price: '$6.75',
    description:
      'Charred pork shoulder shaved fresh off the trompo, grilled pineapple, and cilantro-lime salsa on blue corn tortillas.',
  },
  {
    name: 'Braised Birria Dipper',
    style: 'Signature Taco',
    price: '$7.25',
    description:
      'Slow-braised beef folded with Oaxacan cheese, served with a rich consommé for dipping.',
  },
  {
    name: 'Crispy Baja Fish',
    style: 'Seafood Taco',
    price: '$6.95',
    description:
      'Beer-battered halibut, shaved cabbage, smoked chili crema, and charred lime on flour tortillas.',
  },
  {
    name: 'Tejano Carne Asada',
    style: 'Plates',
    price: '$22.00',
    description:
      'Grilled skirt steak finished with roasted bone marrow butter, served with black bean purée and warm tortillas.',
  },
  {
    name: 'Esquites Street Corn',
    style: 'Shareable',
    price: '$9.50',
    description:
      'Roasted white corn tossed with jalapeño aioli, cotija crumble, and crispy hoja santa.',
  },
  {
    name: 'Charred Nopales Salad',
    style: 'Shareable',
    price: '$11.00',
    description:
      'Grilled cactus paddles, heirloom tomatoes, queso fresco, and citrus vinaigrette.',
  },
  {
    name: 'Citrus Cured Hamachi',
    style: "Chef's Selection",
    price: '$16.00',
    description:
      'Sustainably caught hamachi with charred orange, avocado purée, and yuzu kosho oil.',
    dietary: ['chefs-pick', 'gluten-free', 'low-calorie'],
  },
  {
    name: 'Cold-Smoked Ribeye Taco',
    style: "Chef's Selection",
    price: '$8.50',
    description:
      'Thin-sliced ribeye, black garlic salsa macha, and crispy shallots on nixtamalized tortillas.',
  },
  {
    name: 'Tamarind Glazed Brussels',
    style: 'Plant-Based',
    price: '$12.00',
    description:
      'Crispy Brussels sprouts finished with tamarind piloncillo glaze, pepitas, and pickled red onion.',
    dietary: ['vegan', 'gluten-free', 'nut-free'],
  },
  {
    name: 'Cacao Tres Leches',
    style: 'Dessert',
    price: '$8.75',
    description:
      'Dark chocolate sponge soaked in tres leches with cinnamon chantilly and burnt sugar tuile.',
    dietary: ['vegetarian'],
  },
]

export const FooterLinkData: FooterLinkType[] = []

