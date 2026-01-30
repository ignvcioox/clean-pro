interface NavigationLink {
   id   : string;
   label: string;
   href : string;
}

export const NAVIGATION_LINKS: NavigationLink[] = [
   {
      id   : 'products',
      label: 'Productos',
      href : '/products'
   },
   {
      id   : 'interior-care',
      label: 'Cuidado Interior',
      href : '/category/interior-care',
   },
   {
      id   : 'exterior-care',
      label: 'Cuidado Exterior',
      href : '/category/exterior-care'
   },
   {
      id   : 'accessories',
      label: 'Accesorios',
      href : '/category/accessories'
   }
];