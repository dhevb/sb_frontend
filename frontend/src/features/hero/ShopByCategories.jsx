import React from 'react'
import book1 from "../../assets/book1.jpg"
import book2 from "../../assets/book2.jpg"
import book3 from "../../assets/book3.jpg"
import cycle1 from "../../assets/cycle1.jpg"
import cycle2 from "../../assets/cycle2.jpg"
import diye1 from "../../assets/diya1.jpg"
import diye2 from "../../assets/diya2.jpg"

export default function ShopByCategories() {

    const products = [
        {
          id: 1,
          name: 'E-cycle',
          href: '#',
          offer: '20 - 30% OFF',
          imageSrc: cycle1,
          imageAlt: 'e-cycle',
        },
        {
          id: 2,
          name: 'book',
          href: '#',
          offer: '20 - 30% OFF',
          imageSrc: book3,
          imageAlt: 'book',
        },
        {
          id: 3,
          name: 'Godhan Diye',
          href: '#',
          offer: '20 - 30% OFF',
          imageSrc: diye1,
          imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },

        {
            id: 4,
            name: 'Godhan Diye',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: diye2,
            imageAlt: 'diya',
          },
          {
            id: 5,
            name: 'Start-up Books',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: book1,
            imageAlt: 'Book',
          },
          {
            id: 6,
            name: 'E-cycle',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: cycle2,
            imageAlt: 'cycle',
          },
          {
            id: 7,
            name: 'Academic Books',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: book2,
            imageAlt: 'book',
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
            name: 'Book',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: book3,
            imageAlt: 'book3',
          },
          {
            id: 10,
            name: 'Academic Books',
            href: '#',
            offer: '20 - 30% OFF',
            imageSrc: book2,
            imageAlt: 'book',
          },

        // More products...
      ]

  return (
    <div className='bg-base-200 py-1'>
    <h1 className="text-xl mt-20  text-center font-bold ml-12 py-4">SHOP BY CATEGORIES</h1>

    <div className=" mx-12 rounded">
      
    <div className="mx-auto max-w-2xl px-2 py-12 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8">

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
