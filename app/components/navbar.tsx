import Link from "next/link";

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font m-auto bg-backgroundLight border-b-2 border-gray-200 ">
            <div className="md:mx-auto container mx-auto justify-between flex flex-wrap py-5 flex-col md:flex-row items-center">
                
                <nav className="md:ml-0 flex flex-wrap items-center text-base justify-center">
                    <Link href={"./"} className="mr-5 hover:text-shopCount">Home</Link>
                    <Link href={"./"} className="mr-5 hover:text-shopCount">Shop</Link>
                    <Link href={"./"} className="mr-5 hover:text-shopCount">Product</Link>
                    <Link href={"./"} className="mr-5 hover:text-shopCount">Pages</Link>
                    <Link href={"./"} className="mr-5 hover:text-shopCount">About</Link>
                </nav>
                <div>
                    <p className="text-[14px] font-normal">Contact: <span className="font-medium text-[14px] text-black"> (808) 555-0111</span></p> 
                </div>
            </div>
        </header>
    )
}

export default Navbar;