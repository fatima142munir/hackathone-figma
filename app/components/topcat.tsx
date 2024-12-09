import Image from "next/image";
import Link from "next/link";

const TopCategory = () => {
    let categories = [
        {
            name: "Wing Chair",
            products: "3,584 Products",
            image: "/cat1.png",
            href: "./",
        },
        {
            name: "Wooden Chair",
            products: "157 Products",
            image: "/cat2.png",
            href: "./",
        },
        {
            name: "Desk Chair",
            products: "154 Products",
            image: "/cat3.png",
            href: "./",
        }
    ];

    return (
        <section className="w-full px-4 py-[7rem] md:px-6">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold tracking-tight  mb-8">
                    Top Categories
                </h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            href={category.href}
                            className="group relative overflow-hidden rounded-lg"
                        >
                            <div className="aspect-[4/3] w-full">
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    className=""
                                    width={424}
                                    height={424}
                                />
                            </div>
                            <div className="inset-0">
                                <div className="absolute w-full bottom-0 p-4 bg-black opacity-70">
                                    <h3 className="mb-2 font-inter text-[20px] font-semibold z-10 text-white">
                                        {category.name}
                                    </h3>
                                    <p className="font-inter text-sm text-gray-200">
                                        {category.products}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
                {/* <div className="max-w-xs mx-auto">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        {categories.map((category) => (
                        <Image
                            src={category.image} alt={category.name} className="object-cover w-full h-56"></Image>
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                            <h3 className="text-lg font-semibold">{title}</h3>
                            <p className="text-sm">{products} Products</p>
                        </div>
                        )
                    )};

                    </div>
                </div> */}
            </div>
        </section>
    );
}

export default TopCategory;
