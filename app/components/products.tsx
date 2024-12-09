import Image from "next/image";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";

const Products = () => {
    return (
        <section className="text-gray-600 body-font m-auto ">
            <div className="container px-5 py-12 mx-auto justify-center">
                <div className="flex flex-wrap m-auto  justify-center ">

                    <div className="lg:w-1/4 md:w-1/2 p-4">
                        <Link href={'/'} className="block relative rounded justify-center overflow-hidden">
                            <Image width={312} height={312} alt="product" src={'/Image.png'}></Image>
                        </Link>
                        <div className="flex justify-between">
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-[16px] tracking-widest font-normal mb-1">Library Stool Chair</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">$20</h2>
                            </div>
                            <div className="pt-4 px-4 mt-4 text-2xl justify-center hover:bg-shopCount hover:text-white bg-backgroundDark rounded-xl">
                                <LuShoppingCart />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4">
                        <Link href={'/'} className="block relative rounded overflow-hidden">
                            <Image width={312} height={312} alt="product" src={'/Image (1).png'}></Image>
                        </Link>
                        <div className="flex justify-between">
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-[16px] tracking-widest font-normal mb-1">Library Stool Chair</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">$20<span className="text-gray-400 text-sm line-through px-1">$39</span></h2>
                            </div>
                            <div className="pt-4 px-4 mt-4 text-2xl justify-center bg-backgroundDark rounded-xl hover:bg-shopCount hover:text-white">
                                <LuShoppingCart  />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4 ">
                        <Link href={'/'} className="block relative rounded overflow-hidden">
                            <Image width={312} height={312} alt="product" src={'/Image (2).png'}></Image>
                        </Link>
                        <div className="flex justify-between">
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-[16px] tracking-widest font-normal mb-1">Library Stool Chair</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">$20</h2>
                            </div>
                            <div className="pt-4 px-4 mt-4 text-2xl justify-center bg-backgroundDark rounded-xl hover:bg-shopCount hover:text-white">
                                <LuShoppingCart />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 p-4">
                        <Link href={'/'} className=" rounded">
                            <Image width={312} height={312} alt="product" src={'/Image (3).png'}></Image>
                        </Link>
                        <div className="flex justify-between">
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-[16px] tracking-widest font-normal mb-1">Library Stool Chair</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">$20</h2>
                            </div>
                            <div className="pt-4 px-4 mt-4 text-2xl justify-center bg-backgroundDark rounded-xl hover:bg-shopCount hover:text-white">
                                <LuShoppingCart />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products;