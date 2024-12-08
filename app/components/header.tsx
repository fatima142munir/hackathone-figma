import Image from "next/image";
import cart from "../public/images/Buy 2.png"
import logo from "../public/images/Logo Icon.png"

const Header = () => {
    return (
        <div className="bg-backgroundDark">
            <div className="md:mx-auto container m-auto navbar bg-backgroundDark py-4">
                <div className="flex-1 gap-3">
                    <span><Image alt="logoimage" src={logo}></Image></span>
                    <h1 className="text-[26px] font-medium">Comforty</h1>
                </div>
                <div className="bg-backgroundLight p-[11px] px-[16px] rounded-lg">
                    <div className="">
                        <div className="">
                            <div className=" flex gap-2" >
                                <span><Image alt="cart image" src={cart}></Image></span>
                                <span className="text-[12px] font-medium pt-[2px] justify-content-center ">Cart</span>
                                <span className="text-[10px] text-white px-2 py-1  bg-shopCount rounded-full">2</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )

}

export default Header;