import {  MessageCircleCode } from "lucide-react";
import Image from "next/image"

export async function fetchImgUrl(){
            const apiKey = process.env.PEXELS_API_KEY
            console.log("API KEY $$$ :",apiKey);
            
            const url = "https://api.pexels.com/v1/search?query=ai&per_page=1"
            if (!apiKey) {
                console.log("API key is not defined");
                return
            }
            
            
            try {
                const response = await fetch(url,{
                    method:"GET",
                    headers:{
                        "Authorization":apiKey
                    }
                })

                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const data = await response.json()
                console.log("Img data :",data);
                return data

                
            } catch (error) {
                console.error("Error in fetching Image:");
            }
}


// export default async function ImgContainer() {
    
                   
//             const imgData = await fetchImgUrl()
            
//             const randomNum = Math.floor(Math.random()*6)
//             console.log("randomNum",randomNum);
            
        
//             const imgUrl:string = imgData.photos[0].src.large2x
//             const imgHeight = imgData.photos[0].height
//             const imgWidth = imgData.photos[0].width
//             const imgAlt = imgData.photos[0].alt
//             const imgProps ="&h=650&w=800"
//             const test = imgUrl.split("&h")
//             console.log("SPLIT IMG URL : ",test);
//             const finalImgUrl = `${test[0]}${imgProps}`

    
        
//     return(
//         <>
//             {
//             imgUrl ? (
//                 <div className="border shadow-lg h-full">
//                     <Image
//                     src={finalImgUrl}
//                     width={imgWidth}
//                     height={imgHeight}
//                     className="w-full h-full  brightness-[0.5]  dark:brightness-[0.2] "
//                     alt={"Login pic"}
//                     // layout="fit"
//                     />
//                 </div>
//             ):(
//                 <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full brightness-[0.5] flex justify-center items-center">
//                     <div className=" ">
//                         <MessageCircleCode className="text-white h-12 w-12"/>
//                     </div>
                
//                 </div>
//             )
//         }
//         </>
//     )
    
// }

export default async function ImgContainer() {
    const imgData = await fetchImgUrl();

    if (!imgData || !imgData.photos || imgData.photos.length === 0) {
        return (
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full brightness-[0.5] flex justify-center items-center">
                <div>
                    <MessageCircleCode className="text-white h-12 w-12" />
                </div>
            </div>
        );
    }

    const randomNum = Math.floor(Math.random() * imgData.photos.length);
    console.log("randomNum", randomNum);

    const imgUrl = imgData.photos[randomNum].src.large2x;
    const imgHeight = imgData.photos[randomNum].height;
    const imgWidth = imgData.photos[randomNum].width;
    const imgAlt = imgData.photos[randomNum].alt;
    const imgProps = "&h=650&w=800";
    const test = imgUrl.split("&h");
    console.log("SPLIT IMG URL :", test);
    const finalImgUrl = `${test[0]}${imgProps}`;

    return (
        <div className="border shadow-lg h-full">
            <Image
                src={finalImgUrl}
                width={imgWidth}
                height={imgHeight}
                className="w-full h-full brightness-[0.5] dark:brightness-[0.2]"
                alt={imgAlt}
            />
        </div>
    );
}
