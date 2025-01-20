import Image from "next/image";
import { FaFacebook, FaPinterest, FaYoutube } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { CiInstagram } from "react-icons/ci";
import logo from "../../public/Logo Icon.png"
import visa from "../../public/Union.png"
import vector from "../../public/Vector.png"
import paypal from "../../public/Group 12.png"
import logos from "../../public/Group 11.png"
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font border-t-2">
            <div className="container py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="xlg:w-1/4 md:w-2/6 w-full px-4">
                        <div className="flex gap-3">
                            <span><Image alt="logoimage" src={logo}></Image></span>
                            <h1 className="text-[26px] font-medium">Comforty</h1>
                        </div>
                        <nav className="list-none mb-10 ">
                            <p className="py-8">
                                Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
                                Cras egestas purus
                            </p>
                                    {/* {border-2 border-shopCount rounded-full}  */}

                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 pr-10 justify-center sm:justify-start">
                                <Link href={'/'} className="text-gray-500 w-[38] py-2 px-2 hover:text-shopCount hover:border-2 hover:border-shopCount hover:rounded-full">
                                    <FaFacebook/>
                                </Link>
                                <Link href={'/'} className="ml-3 text-gray-500 w-[38] py-2 px-2 hover:text-shopCount hover:border-2 hover:border-shopCount hover:rounded-full">
                                    <TiSocialTwitter/>

                                </Link>
                                <Link href={'/'} className="ml-3 text-gray-500 w-[38] py-2 px-2 hover:text-shopCount hover:border-2 hover:border-shopCount hover:rounded-full">
                                    <CiInstagram/>

                                </Link>
                                <Link href={'/'} className="ml-3 text-gray-500 w-[38] py-2 px-2 hover:text-shopCount hover:border-2 hover:border-shopCount hover:rounded-full">
                                    <FaPinterest />
                                </Link>
                                <Link href={'/'} className="ml-3 text-gray-500 w-[38] py-2 px-2 hover:text-shopCount hover:border-2 hover:border-shopCount hover:rounded-full">
                                    <FaYoutube />
                                </Link>
                            </span>

                        </nav>
                    </div>
                    <div className="xlg:w-1/4 md:w-1/6 w-full px-4">
                        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">CATEGORY</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href={'/'}  className="hover:border-b-2 hover:border-b-shopCount hover:text-shopCount text-gray-600 ">Sofa</Link>
                            </li>
                            <li>
                                <Link href={'/'} className="text-gray-600 hover:border-b-2 hover:border-b-shopCount hover:text-shopCount">Arm Chair</Link>
                            </li>
                            <li>
                                <Link href={'/'} className="text-gray-600 hover:border-b-2 hover:border-b-shopCount hover:text-shopCount">Wing Chair</Link>
                            </li>
                            <li>
                                <Link href={'/'} className="text-gray-600 hover:border-b-2 hover:border-b-shopCount hover:text-shopCount">Desk Chair</Link>
                            </li>
                            <li>
                                <Link href={'/'} className="text-gray-600 hover:border-b-2 hover:border-b-shopCount hover:text-shopCount">Wooden Chair</Link>
                            </li>
                            <li>
                                <Link href={'/'} className="text-gray-600 hover:border-b-2 hover:border-b-shopCount hover:text-shopCount">Park Bench</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="xlg:w-1/4 md:w-1/6 w-full px-4">
                        <h2 className="text-gray-400 title-font font-medium tracking-widest text-sm mb-3">SUPPORT</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href={'/'} className="text-gray-600 hover:border-b-2 hover:border-b-shopCount hover:text-shopCount">Help &#38; Support</Link>
                            </li>
                            <li>
                                <Link href={'/'} className="text-gray-600 hover:border-b-2 hover:border-b-shopCount hover:text-shopCount">Terms &#38; Conditions </Link>
                            </li>
                            <li>
                                <Link href={'/'} className="text-gray-600 hover:border-b-2 hover:border-b-shopCount hover:text-shopCount">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href={'/'} className="text-gray-600 hover:border-b-2 hover:border-b-shopCount hover:text-shopCount">Help</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="xlg:w-1/4 md:w-2/6 w-full px-4">
                        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">NEWSLETTER</h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-600"></label>
                                <input type="text" placeholder="Your email" id="footer-field" name="footer-field" className="w-72 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white z-10 bg-btnBackground py-2 px-6 focus:outline-none rounded">Subscribe</button>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit quis corrupti commodi.
                            {/* <span className="lg:block hidden">waistcoat green juice</span> */}
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-backgroundLight border-t-2">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">@ 2021 - Blogy - Designed & Develop by Zakirsoft
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link href={'/'} className="text-gray-500">
                            <Image alt="paypal image" src={logos}></Image>

                        </Link>
                        <Link href={'/'} className="ml-3 text-gray-500 items-center">
                            <Image alt="paypal image" src={paypal}></Image>

                        </Link>
                        <Link href={'/'} className="ml-3 text-gray-500">
                            <Image alt="vector image" src={vector}></Image>

                        </Link>
                        <Link href={'/'} className="ml-3 text-gray-500 ">
                            <Image className="bg-black opacity-55" alt="visa image" src={visa}></Image>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;