'use client'

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface PostProps{
  id:number,
  title:string,
  body:string,
  tags:[],
  reactions:{
    likes:number,
    dislike:number
  },
  views:string,
  userId:number
}

async function fetchProducts(){
  const response = await axios.get('https://dummyjson.com/posts')
  return response.data.posts
}

export default function Home() {
  const {data,isError,isLoading} = useQuery({
    queryKey:["posts"],
    queryFn:fetchProducts,
    staleTime:3*1000
  })
  if(isError){
    return <p className="text-red-600">ERROR</p>
  }
  if(isLoading){
    return <p className="text-yellow-600 text-center">isLoading</p>
  }
  if(data){
    console.log("data",data);
    
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {
        data && (
          data.map((post:PostProps)=>(
            <div key={post.id} className="border">
              <p>{post.title}</p>
              <p>{post.body}</p>
              <p>{post.userId}</p>
            </div>
          ))
        )
      }
    </div>
  );
}
// https://dummyjson.com/post