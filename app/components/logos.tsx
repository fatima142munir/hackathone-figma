import Image from "next/image";


const Logos = () => {
    let logos = [
        {
            imgAlt: "company logo",
            imgUrl: "/Logo.png"
        },
        {
            imgAlt: "company logo",
            imgUrl: "/Logo (1).png"
        },
        {
            imgAlt: "company logo",
            imgUrl: "/Logo (2).png"
        },
        {
            imgAlt: "company logo",
            imgUrl: "/Logo (3).png"
        },
        {
            imgAlt: "company logo",
            imgUrl: "/Logo (4).png"
        },
        {
            imgAlt: "company logo",
            imgUrl: "/Logo (5).png"
        },
        {
            imgAlt: "company logo",
            imgUrl: "/Logo (6).png"
        }
    ]
    return (
        <div className="container flex flex-wrap justify-center sm:gap-28  gap-3 items-center m-auto">
            {
                logos.map((item, index) => {
                    return (
                        <div key={index} className="justify-items-center sm:w-1/8">
                            <Image width={85} height={87} alt={item.imgAlt} src={item.imgUrl}></Image>
                        </div>
                    )
                })
            }
 
        </div>
    )
}

export default Logos;