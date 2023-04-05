export const tabs = ['Mens', 'Womens']
export const slideImages = ['https://cdn.shopify.com/s/files/1/0731/2739/5645/files/slide1.webp?v=1679342056', 'https://cdn.shopify.com/s/files/1/0731/2739/5645/files/slide2.webp?v=1679342056', 'https://cdn.shopify.com/s/files/1/0731/2739/5645/files/slide3.webp?v=1679342056', 'https://cdn.shopify.com/s/files/1/0731/2739/5645/files/slide4.webp?v=1679342056', 'https://cdn.shopify.com/s/files/1/0731/2739/5645/files/slide5.webp?v=1679342056' ]
export const slideMobileImages = ['https://cdn.shopify.com/s/files/1/0731/2739/5645/files/slide1-mobile.webp?v=1679351781', 'https://cdn.shopify.com/s/files/1/0731/2739/5645/files/slide2-mobile.webp?v=1679351781', 'https://cdn.shopify.com/s/files/1/0731/2739/5645/files/slide3-mobile.webp?v=1679351781', 'https://cdn.shopify.com/s/files/1/0731/2739/5645/files/silde4-mobile.webp?v=1679351781', 'https://cdn.shopify.com/s/files/1/0731/2739/5645/files/slide5-mobile.webp?v=1679351781']

export type TabMenu = {
  id: string;
  products: string[];
  featured: string[];
  images: string[];
}

export type TabMenus = {
  [tab: string]: TabMenu;
}

export const tabMenus: TabMenus = {
  Mens: {
    id: 'Mens',
    products: ['Tanks', 'Shirts', 'Pants', 'Outerwear', 'Joggers', 'All Products'],
    featured: ['New Drops'],
    images: ['https://cdn.shopify.com/s/files/1/0731/2739/5645/files/comingsoon.webp?v=1678798392']
  },
  Womens: {
    id: 'Womens',
    products: ['Tanks', 'Shirts', 'Skirts', 'Outerwear', 'Leggings', 'All Products'],
    featured: ['New Drops'],
    images: ['https://cdn.shopify.com/s/files/1/0731/2739/5645/files/comingsoon.webp?v=1678798392']
  },
}

