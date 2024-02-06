import React from 'react'

export default function ShopByCategories() {

    const products = [
        {
          id: 1,
          name: 'Earthen Bottle',
          href: '#',
          offer: '20 - 30% OFF',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
          imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
          id: 2,
          name: 'Nomad Tumbler',
          href: '#',
          offer: '20 - 30% OFF',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
          imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
          id: 3,
          name: 'Focus Paper Refill',
          href: '#',
          offer: '20 - 30% OFF',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
          id: 4,
          name: 'Machined Mechanical',
          href: '#',
          offer: '20 - 30% OFF',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
          imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        },
        {
            id: 5,
            name: 'Machined Mechanical',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
          {
            id: 6,
            name: 'Machined Mechanical',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
          {
            id: 7,
            name: 'Machined Mechanical',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
          {
            id: 8,
            name: 'Machined Mechanical',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
          {
            id: 9,
            name: 'Machined Mechanical',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
          {
            id: 10,
            name: 'Machined Mechanical',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
          {
            id: 11,
            name: 'Machined Mechanical',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
          {
            id: 12,
            name: 'Machined Mechanical',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
          },
        // More products...
      ]

  return (
    <div>
    <h1 className="text-xl font-bold ml-12 py-4">SHOP BY CATEGORIES</h1>

    <div className="bg-base-200 mx-12 rounded">
      
    <div className="mx-auto max-w-2xl px-2 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className='bg-base-100 p-2 rounded-lg'>
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded bg-white xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
              />
            </div>
            <div className='py-2 px-4 mt-2 bg-black rounded'>
            <h3 className="mt-4 text-sm font-medium text-center text-gray-500">{product.name}</h3>
            <p className='bg-white text-center m-2 text-gray-800 text-lg font-bold p-1 rounded'>{product.offer}</p>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  </div>
  </div>
  )
}
