import React from 'react'
import { Product_T } from '../type'
import { ProductCard } from './products'

const FeaturedProducts = () => {
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
        { id: 4, title: "Library Stool Chair", price: 20, image: "/Image.png" }
    ]
    return (
        <>
        <div className="container mx-auto px-4 py-20">
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>

        </>

    )
}

export default FeaturedProducts