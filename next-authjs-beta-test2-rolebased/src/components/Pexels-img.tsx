
import axios from "axios"
import { LogInIcon, MessageCircleCode } from "lucide-react";
import Image from "next/image"

export default async function FetchImg() {
    try {
        
            const response = await axios.get("https://api.pexels.com/v1/search?query=ai&per_page=6",
                {headers:{
                    Authorization:process.env.AUTH_PEXELS_API_KEY
                }}
            )
            
            const randomNum = Math.floor(Math.random()*6)
            console.log("randomNum",randomNum);
            
        
            const imgUrl:string = response.data.photos[randomNum].src.large2x
            const imgHeight = response.data.photos[randomNum].height
            const imgWidth = response.data.photos[randomNum].width
            const imgAlt = response.data.photos[randomNum].alt
            const imgProps ="&h=650&w=800"
            const test = imgUrl.split("&h")
            console.log("SPLIT IMG URL : ",test);
            const finalImgUrl = `${test[0]}${imgProps}`

            return(
                <div className="border  shadow-lg h-full">
                    <Image
                    src={finalImgUrl}
                    width={imgWidth}
                    height={imgHeight}
                    className="w-full h-full  brightness-[0.5]  dark:brightness-[0.2] "
                    alt={"Login pic"}
                    // layout="fit"
                    />
                </div>
            )
    } catch (error) {
        console.error("Error fetching image:", error);
        return (
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full brightness-[0.5] flex justify-center items-center">
                <div className=" ">
                     <MessageCircleCode className="text-white h-12 w-12"/>
                </div>
                
            </div>
        )
    }
        

    
}
