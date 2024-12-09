import Image from "next/image";

const Explore = () => {
    let sen = "EXPLORE NEW AND POPULAR STYLES";
    let toVerticle = sen.split("");


    return (
        <header className="container mx-auto px-4 py-10 lg:py-16">
            <div className="relative grid grid-cols-1 md:grid-cols-[3]">

                <div className=" md:text-3xl text-xl font-medium text-zinc-900 md:-rotate-90 md:w-full md:-translate-x-2/4 md:px-7 md:h-[80px]">
                    EXPLORE NEW AND POPULAR STYLES
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-[48%]">
                        <Image
                            src="/item-category-1.png"
                            alt="Orange modern chair"
                            className="h-full w-full object-cover"
                            width={648}
                            height={648}

                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 w-full md:w-[60%] lg:w-[48%]">
                        <div className="">
                            <Image
                                src="/item-category-3.png" alt="White tufted chair" className="h-full w-full object-cover" width={312} height={312}
                            />
                        </div>
                        <div className="">
                            <Image
                                src="/item-category-0.png" alt="Gray upholstered chair" className="h-full w-full object-cover" width={312} height={312}
                            />
                        </div>
                        <div className="">
                            <Image
                                src="/item-category-2.png" alt="Vintage white chair" className="h-full w-full object-cover" width={312} height={312}
                            />
                        </div>
                        <div className="">
                            <Image
                                src="/item-category-0.png" alt="Vintage white chair duplicate" className="h-full w-full object-cover" width={312} height={312}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Explore;
