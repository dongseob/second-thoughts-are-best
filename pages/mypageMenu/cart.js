/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon, ClockIcon } from '@heroicons/react/solid';
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: 'Zeroize 1/2 T-Shirt',
    href: '#',
    price: '38,000 KRW',
    color: 'White',
    size: 'Medium',
    inStock: true,
    imageSrc: '/images/original/Zeroize/Zeroize1.png',
    imageAlt: 'Zeroize1',
  },
  {
    id: 2,
    name: 'Zeroize 1/2 T-Shirt',
    href: '#',
    price: '38,000 KRW',
    color: 'White',
    inStock: false,
    leadTime: '7-8 days',
    size: 'Large',
    imageSrc: '/images/original/Zeroize/Zeroize1.png',
    imageAlt: 'Zeroize1',
  },
  // More products...
]

export default function Cart() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-8 px-4 sm:px-6 lg:px-0">
        <h1 className="text-xl font-extrabold text-center tracking-tight text-gray-900 sm:text-2xl">Shopping Cart</h1>

        <form className="mt-12">
          <section aria-labelledby="cart-heading">
            <h2 id="cart-heading" className="sr-only">
              Items in your shopping cart
            </h2>

            <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6">
                  <div className="flex-shrink-0">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
                      height={200}
                      width={200}
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col sm:ml-6">
                    <div>
                      <div className="flex justify-between">
                        <h4 className="text-sm">
                          <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                            {product.name}
                          </a>
                        </h4>
                        <p className="ml-4 text-sm font-medium text-gray-900">{product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                      <p className="mt-1 text-sm text-gray-500">{product.size}</p>
                    </div>

                    <div className="mt-4 flex-1 flex items-end justify-between">
                      <p className="flex items-center text-sm text-gray-700 space-x-2">
                        {product.inStock ? (
                          <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                        ) : (
                          <ClockIcon className="flex-shrink-0 h-5 w-5 text-gray-300" aria-hidden="true" />
                        )}

                        <span>{product.inStock ? 'In stock' : `Will ship in ${product.leadTime}`}</span>
                      </p>
                      <div className="ml-4">
                        <button type="button" className="text-sm font-medium text-gray-600 hover:text-gray-500">
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section aria-labelledby="summary-heading" className="mt-10">
            <h2 id="summary-heading" className="sr-only">
              Order summary
            </h2>

            <div>
              <dl className="space-y-4">
                <div className="flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Subtotal</dt>
                  <dd className="ml-4 text-base font-medium text-gray-900">76,000 KRW</dd>
                </div>
              </dl>
              <p className="mt-1 text-sm text-gray-500">Shipping and taxes will be calculated at checkout.</p>
            </div>

            <Link href="/checkOut">
              <div className="mt-10">
                <button
                  type="button"
                  className="w-full bg-gray-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-500"
                >
                  Checkout
                </button>
              </div>
            </Link>
          </section>
        </form>
      </div>
    </div>
  )
}
