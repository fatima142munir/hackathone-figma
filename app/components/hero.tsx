import Image from "next/image";
import arrow from "../public/images/Right 24px.png"
import productHero from "../public/images/Product Image.png"

const Hero = () => {
    return (
        <section className="container text-gray-600 body-font bg-backgroundDark mx-auto p-10 rounded-es-[50px]">
            <div className="mx-auto md:mx-8 flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <p className="mb-8 leading-tight font-normal text-[14px]">WELCOME TO CHAIRY</p>
                    <h1 className="title-font sm:text-[60px] leading-[1.15] text-4xl mb-4 font-bold text-gray-900">Best Furniture
                        <br></br>
                        <span className="hidden lg:inline-block">Collection For Your</span>
                        <br></br>
                        <span className="hidden lg:inline-block">interior.</span>

                    </h1>
                    <div className="flex justify-center my-10">
                        <button className="inline-flex text-white bg-btnBackground border-0 py-3 px-7 focus:outline-none hover:bg-indigo-600 rounded-lg justify-center font-semibold text-[16px]">Shop Now <Image className="ml-4" alt="arrow" src={arrow}></Image></button>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
                    <Image alt="product image" src={productHero}></Image>
                </div>
            </div>
        </section>
    )
}

export default Hero;