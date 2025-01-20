import Image from "next/image";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { Product_T } from "../type";


export const ProductCard = ({ product }: { product: Product_T }) => (
    <div key={product.id} className="group relative rounded-lg bg-white">
        <div className="relative aspect-square overflow-hidden rounded-lg">
            {product.isNew && (
                <button className="absolute bg-newTagColor w-[29] h-[14] font-medium text-white py-[2px] px-3 rounded text-[13px] m-4">New</button>

            )}
            {product.isSale && (
                <button className="absolute bg-salesTagColor w-[29] h-[14] font-medium text-white py-[2px] px-3 rounded text-[13px] m-4">Sales</button>

            )}
            <Link href={`/product/${product.id}`}>
                <Image
                    src={product.image}
                    alt={product.title}
                    height={400}
                    width={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    aria-label={`View details of ${product.title}`}
                />
            </Link>
        </div>
        <div className="mt-4 flex items-center justify-between">
            <div>
                <h3 className="text-sm text-black">{product.title}</h3>
                <div className="mt-1 flex items-center gap-2">
                    <span className="text-lg font-medium text-black">
                        ${product.price}
                    </span>
                    {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                            ${product.originalPrice}
                        </span>
                    )}
                </div>
            </div>
            <button
                className="rounded-xl bg-backgroundDark p-2 text-black hover:text-white transition-colors hover:bg-shopCount"
                aria-label={`Add ${product.title} to cart`}>
                <LuShoppingCart className="h-5 w-5" />
                
            </button>
        </div>
    </div>
);

export default function AllProduct() {
    const products: Product_T[] = [
        {
            id: 1,
            title: "Library Stool Chair",
            price: 20,
            image: "/Image.png",
            isNew: true,
        },
        {
            id: 2,
            title: "Library Stool Chair",
            price: 20,
            originalPrice: 30,
            image: "/Image (1).png",
            isSale: true,
        },
        {
            id: 5,
            title: "Library Stool Chair",
            price: 20,
            image: "/Image (2).png",
            isNew: false,
        },
        { id: 4, title: "Library Stool Chair", price: 20, image: "/Image (3).png" },
        {
            id: 6,
            title: "Library Stool Chair",
            price: 20,
            originalPrice: 30,
            image: "/cat1.png",
            isNew: true,
            isSale: false,
        },
        { id: 7, title: "Library Stool Chair", price: 20, image: "/item-category-2.png", isSale: true },
        { id: 8, title: "Library Stool Chair", price: 20, image: "/chair_cushion.png" },
        { id: 3, title: "Library Stool Chair", price: 20, image: "/Image.png" },
    ];

    return (
        <div className="container mx-auto px-4 py-20">
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}


