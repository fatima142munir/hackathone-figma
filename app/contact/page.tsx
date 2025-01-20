import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";

import { BsTrophy } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import { MdSupportAgent } from "react-icons/md";
const Contact = () => {
    return (
        <div className="w-full m-auto">
            <div className="md:w-1/2 w-full m-auto">
                <h1 className="text-[24px] font-semibold md:text-[30px] text-center pt-24">Get In Touch With Us</h1>
                <p className="text-[16px] text-gray-600 justify-self-center ">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className="flex flex-wrap w-full md:w-2/3 m-auto justify-between py-28 ">
                <div className="flex p-5 m-auto">
                    <div>
                        <div className="pb-5 h-[130px]"><FaLocationDot className="w-[22px] h-[27px]" /> </div>
                        <div className="pb-5 h-[100px]"><FaPhoneAlt className="w-[22px] h-[27px]" /> </div>
                        <div className="pb-5 h-[100px]"><MdAccessTimeFilled className="w-[22px] h-[27px]" /> </div>

                    </div>
                    <div>
                        <div className="h-[130px] w-[200px] pl-5">
                            <h3 className="text-[24px] font-medium">Address</h3>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div className="h-[100px] w-[200px] pl-5">
                            <h3 className="text-[24px] font-medium">Phone</h3>

                            <p>Mobile: +(84) 546-6789 </p>
                            <p>Hotline: +(84) 456-6789</p>
                        </div>
                        <div className="h-[150px] w-[200px] pl-5">
                            <h3 className="text-[24px] font-medium">Working Time</h3>

                            <p>Monday-Friday: 9:00 - 22:00 </p>
                            <p>Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>

                </div>
                <div >
                    <form className="w-full m-auto md:w-1/2 px-6">
                        <label htmlFor="name" className="font-medium ">Your Name<br />
                            <input type="text" name="name" id="" placeholder="Abc" className="border-2 font-medium md:w-[400px] p-3 rounded-md my-3" />
                        </label>
                        <br />
                        <label htmlFor="email">Email Address<br />
                            <input type="text" name="email" id="" placeholder="Abc@def.com" className="border-2 font-medium md:w-[400px] p-3 rounded-md my-3 " />
                        </label>
                        <br />
                        <label htmlFor="subject">Subject<br />
                            <input type="text" name="subject" id="" placeholder="This is an optional" className="border-2 font-medium md:w-[400px] p-3 rounded-md my-3 " />
                        </label>
                        <br />
                        <label htmlFor="message">Message<br />
                            <input type="text" name="message" id="" placeholder="Hi! I'd like to ask about" className="border-2 font-medium md:w-[400px] p-3 rounded-md my-3 " />
                        </label>
                        <br />
                        <button className="inline-flex text-white md:w-[250px] bg-btnBackground border-0 py-3 px-7 focus:outline-none hover:bg-[#028FAE] rounded-lg justify-center font-semibold text-[16px] my-3">Submit</button>

                    </form>
                </div>
            </div>
           
            <div className="w-full max-w-screen-xl h-auto md:h-[270px] bg-backgroundDark flex m-auto flex-wrap items-center justify-between px-8 py-6">
                <div className="flex items-center space-x-4 mb-6 sm:mb-0">
                    <BsTrophy className="w-[52.77px] h-[60px] text-black" />
                    <div>
                        <h2
                            className=" font-semibold text-[20px] sm:text-[25px]"
                        >
                            High Quality
                        </h2>
                        <p
                            className=" font-medium text-[16px] sm:text-[20px] text-gray-500"
                        >
                            crafted from top materials
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 mb-6 sm:mb-0">
                    <GoVerified className="w-[60px] h-[60px] text-black" />
                    <div>
                        <h2
                            className=" font-semibold text-[20px] sm:text-[25px]"
                        >
                            Warranty Protection
                        </h2>
                        <p
                            className=" font-medium text-[16px] sm:text-[20px] text-gray-500"
                        >
                            Over 2 years
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-4 mr-6">
                    <MdSupportAgent className="w-[52.77px] h-[60px] text-black" />
                    <div>
                        <h2
                            className=" font-semibold text-[20px] sm:text-[25px]"
                        >
                            24 / 7 Support
                        </h2>
                        <p
                            className=" font-medium text-[16px] sm:text-[20px] text-gray-500"
                        >
                            Dedicated support
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;