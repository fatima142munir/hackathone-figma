import Image from "next/image";
import logo1 from "../public/images/Logo.png"
import logo2 from "../public/images/Logo (1).png"
import logo3 from "../public/images/Logo (2).png"
import logo4 from "../public/images/Logo (3).png"
import logo5 from "../public/images/Logo (4).png"
import logo6 from "../public/images/Logo (5).png"
import logo7 from "../public/images/Logo (6).png"

const Logos = ()=>{
    return(
        <div className="container flex flex-wrap justify-center sm:gap-20 md:gap-24 gap-3 items-center m-auto">
            <div className="w-1/8 sm:w-1/8">
                <Image alt="company logo" src={logo1}></Image>
            </div>
            <div className="w-1/8 sm:w-1/8">
                <Image alt="company logo" src={logo2}></Image>
            </div>
            <div className="w-1/8 sm:w-1/8">
                <Image alt="company logo" src={logo3}></Image>
            </div>
            <div className="w-1/8 sm:w-1/8">
                <Image alt="company logo" src={logo4}></Image>
            </div>
            <div className="w-1/8 sm:w-1/8">
                <Image alt="company logo" src={logo5}></Image>
            </div>
            <div className="w-1/8 sm:w-1/8">
                <Image alt="company logo" src={logo6}></Image>
            </div>
            <div className="w-1/8 sm:w-1/8">
                <Image alt="company logo" src={logo7}></Image>
            </div>
    
            
            
            
            

        </div>
    )
}

export default Logos;