import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 3,
    name: "AbyssalSerpent",
    name2: "Abyssal Serpent 1/2 T-Shirt",
    href: "#",
    price: "KRW 38,000",
    imageSrc: "/images/original/AbyssalSerpent/AbyssalSerpent1.png",
    imageAlt: "AbyssalSerpent",
  },
  {
    id: 2,
    name: "Zeroize",
    name2: "Zeroize 1/2 T-Shirt",
    href: "#",
    price: "KRW 38,000",
    imageSrc: "/images/original/Zeroize/Zeroize1.png",
    imageAlt: "Zeroize",
  },
  {
    id: 1,
    name: "DungEater",
    name2: "Dung Eater 1/2 T-Shirt",
    href: "#",
    price: "KRW 38,000",
    imageSrc: "/images/original/DungEater/DungEater1.png",
    imageAlt: "DungEater",
  },

  // More products...
];

function Original() {
  return (
    <>
      <Header></Header>

      <div className="bg-white">
        <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <Link
                    href={"/original/" + product.name.replace(/(\s*)/g, "")}
                  >
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover group-hover:opacity-75"
                      width={1000}
                      height={1000}
                    />
                  </Link>
                </div>
                <h3 className="mt-4 text-base text-gray-700">
                  {product.name2}
                </h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {product.price}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Original;
