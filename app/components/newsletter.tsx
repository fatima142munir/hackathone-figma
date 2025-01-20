import Image from "next/image";
import Link from "next/link";
const Newsletter = () => {
    return (
        <div className="container bg-newsletterBackground w-full p-16 m-auto">
            <div className=" m-auto md:w-[760px] md:h-[165px]">
                <h2 className="text-[30px] font-semibold md:text-[50px] text-center">Or Subscribe To The Newsletter</h2>
                <div className="text-center mt-8">
                    <input type="text" placeholder="Email Address" className="border-b-2 px-3 py-2 md:w-[600px] border-black mx-4 bg-newsletterBackground" />
                    <button className="border-b-2 px-3 py-2 border-black w-[91px] ">SUBMIT</button>
                </div>
            </div>
            <div className="w-full">
                <section className="text-black body-font m-auto ">
                    <h2 className="text-[30px] font-semibold md:text-[50px] text-center pt-12 ">Follow Products And Discounts On Instagram</h2>
                    <div className="px-5 py-10 mx-auto justify-center">
                        <div className="flex flex-wrap m-auto  justify-center ">

                            <div className="lg:w-1/6 md:w-1/4 p-4">
                                <Link href={'/'} className="block relative rounded justify-center overflow-hidden">
                                    <Image width={312} height={312} alt="product" src={'/Image.png'}></Image>
                                </Link>

                            </div>
                            <div className="lg:w-1/6 md:w-1/4 p-4">
                                <Link href={'/'} className="block relative rounded overflow-hidden">
                                    <Image width={312} height={312} alt="product" src={'/Image (1).png'}></Image>
                                </Link>

                            </div>
                            <div className="lg:w-1/6 md:w-1/4 p-4 ">
                                <Link href={'/'} className="block relative rounded overflow-hidden">
                                    <Image width={312} height={312} alt="product" src={'/Image (2).png'}></Image>
                                </Link>

                            </div>
                            <div className="lg:w-1/6 md:w-1/4 p-4">
                                <Link href={'/'} className=" rounded">
                                    <Image width={312} height={312} alt="product" src={'/Image (3).png'}></Image>
                                </Link>

                            </div>
                            <div className="lg:w-1/6 md:w-1/4 p-4">
                                <Link href={'/'} className=" rounded">
                                    <Image width={312} height={312} alt="product" src={'/Image (3).png'}></Image>
                                </Link>

                            </div>
                            <div className="lg:w-1/6 md:w-1/4 p-4">
                                <Link href={'/'} className=" rounded">
                                    <Image width={312} height={312} alt="product" src={'/Image (3).png'}></Image>
                                </Link>

                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Newsletter;