// import Newsletter from "../components/newsletter";
// import Products from "../components/products";

// const Compo = () => {
//     return (
//         <>
//             {/* <div className="container w-full m-auto">
//                 {/* <h2 className="text-3xl font-bold mt-20 ml-8">All Products</h2> */}
//                 <Products />
                
//                 <Newsletter />
//             </div> */}
//         </>
//     )
// }

// export default Compo;

import Newsletter from "../components/newsletter";
import { ProductCard } from "../components/products";
import { Product_T } from "../type";

const Compo = () => {
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
            id: 3,
            title: "Library Stool Chair",
            price: 20,
            image: "/Image (2).png",
            isNew: false,
        },
        { id: 4, title: "Library Stool Chair", price: 20, image: "/Image (3).png" },
        {
            id: 5,
            title: "Library Stool Chair",
            price: 20,
            originalPrice: 30,
            image: "/cat2.png",
            isNew: true,
            isSale: false,
        },
        { id: 6, title: "Library Stool Chair", price: 20, image: "/item-category-2.png", isSale: true },
        { id: 7, title: "Library Stool Chair", price: 20, image: "/chair_cushion.png" },
        { id: 8, title: "Library Stool Chair", price: 20, image: "/Image.png" },
        {
            id: 9,
            title: "Library Stool Chair",
            price: 20,
            image: "/cat1.png",
            isNew: true,
        },
        {
            id: 10,
            title: "Library Stool Chair",
            price: 20,
            originalPrice: 30,
            image: "/Image (1).png",
            isSale: true,
        },
        {
            id: 11,
            title: "Library Stool Chair",
            price: 20,
            image: "/Image (2).png",
            isNew: false,
        },
        { id: 12, title: "Library Stool Chair", price: 20, image: "/cat3.png" },
    ];
    return (
        <div className="container mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold  ml-8 mb-8">All Products</h2>


            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
                <Newsletter />
        </div>
    )
}

export default Compo;

