'use client'
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { headers } from "next/headers"

import  {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { signInSchema } from "@/schema/signIn-schema"
import { signIn } from "@/auth"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { useState } from "react"
import { Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,} from "@/components/ui/form"
import { Loader2 } from "lucide-react"
import { doCredentialLogin } from "../actions"
import FetchImg from "@/components/Pexels-img"

// export default async function LoginPage() {
//     const msgImgResponse = await axios.get('https://api.pexels.com/v1/search?query=messaging&per_page=1',
//         {
//             headers:{
//                 Authorization:process.env.AUTH_PEXELS_API_KEY
//             }
//         }
//     )
//     console.log(msgImgResponse.data);
//     console.log(msgImgResponse.data.photos[0].url);

//     const imgUrl:string = msgImgResponse.data.photos[0].src.original
//     console.log("imgUrl",imgUrl);
    
//   return (
//     // <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[870px]">
//     //   <div className="flex items-center justify-center py-12">
//     //     <div className="mx-auto grid w-[350px] gap-6">
//     //       <div className="grid gap-2 text-center">
//     //         <h1 className="text-3xl font-bold">Login</h1>
//     //         <p className="text-balance text-muted-foreground">
//     //           Enter your email below to login to your account
//     //         </p>
//     //       </div>
//     //       <div className="grid gap-4">
//     //         <div className="grid gap-2">
//     //           <Label htmlFor="email">Email</Label>
//     //           <Input
//     //             id="email"
//     //             type="email"
//     //             placeholder="m@example.com"
//     //             required
//     //           />
//     //         </div>
//     //         <div className="grid gap-2">
//     //           <div className="flex items-center">
//     //             <Label htmlFor="password">Password</Label>
//     //             <Link
//     //               href="/forgot-password"
//     //               className="ml-auto inline-block text-sm underline"
//     //             >
//     //               Forgot your password?
//     //             </Link>
//     //           </div>
//     //           <Input id="password" type="password" required />
//     //         </div>
//     //         <Button type="submit" className="w-full">
//     //           Login
//     //         </Button>
//     //         <Button variant="outline" className="w-full">
//     //           Login with Google
//     //         </Button>
//     //       </div>
//     //       <div className="mt-4 text-center text-sm">
//     //         Don&apos;t have an account?{" "}
//     //         <Link href="#" className="underline">
//     //           Sign up
//     //         </Link>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="hidden bg-muted lg:block">
//     //     <Image
//     //       src="/placeholder.svg"
//     //       alt="Image"
//     //       width="1920"
//     //       height="1080"
//     //       className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
//     //     />
//     //   </div>
//     // </div>
//     <div className="border">
//         <h1>hi</h1>
//         <Image
//         src={imgUrl}
//         width={500}
//         height={500}
//         alt="asd"
//         />
//     </div>
//   )
// }

// export default  function LoginPage(){
//     const router = useRouter()
//     const {toast} = useToast()

//     const [isSubmitting,setIsSubmitting] = useState(false)

//     const form = useForm<z.infer<typeof signInSchema>>({
//         resolver:zodResolver(signInSchema),
//         defaultValues:{
//             identifier:'',
//             password:''
//         }
//     })
//     console.log("before onSubmit");
    
//     // submit handler
//     const onSubmit = async (data:z.infer<typeof signInSchema>)=>{
//         console.log("AFTER onSubmit");
//         setIsSubmitting(true)
//         const result = await signIn("credentials",{
//             redirect:false,
//             identifier:data.identifier,
//             password:data.password
//         })

//         console.log("LoginPage => result of credentials:", result);

//         if(result?.error){
//             console.log("LoginPage => result?.error :",result?.error);
            
//             if(result.error === "CredentialsSignin"){
//                 toast({
//                     title:"Login Failed",
//                     description:"Incorrect username or password",
//                     variant:"destructive"
//                 })
//                 setIsSubmitting(false)
//             }else{
//                 toast({
//                     title:"Login Failed",
//                     description:"Something went wrong on login.Try it again!",
//                     variant:"destructive"
//                 })
//                 setIsSubmitting(false)
//             }
            
//         }

//         if(result?.url){
//             router.replace('/Bog')
//         }

        
//     }

//     return (
//         // <div className="flex justify-center items-center min-h-screen bg-gray-200 border">
//         //     <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
//         //       <div className="text-center">
//         //         <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
//         //           Join Mystery Message
//         //         </h1>
//         //         <p className="mb-4">Sign in to start your anonymous adventur</p>
//         //       </div>
//         //       <Form {...form}>
//         //           <form onSubmit={form.handleSubmit(onSubmit)}
//         //           className="space-y-6"
//         //           >
                    
    
//         //             <FormField
//         //               name="identifier"
//         //               control={form.control}
                      
//         //               render={({ field }) => (
//         //                 <FormItem>
//         //                   <FormLabel>Email/Username</FormLabel>
//         //                   <FormControl>
//         //                     <Input type="text" placeholder="Email/Username" {...field} 
//         //                      />
//         //                   </FormControl>
                          
//         //                   <FormMessage />
//         //                 </FormItem>
//         //               )}
//         //             />
//         //             <FormField
//         //               name="password"
//         //               control={form.control}
                      
//         //               render={({ field }) => (
//         //                 <FormItem>
//         //                   <FormLabel>Password</FormLabel>
//         //                   <FormControl>
//         //                     <Input type="password" placeholder="Password" {...field} 
//         //                      />
//         //                   </FormControl>
//         //                   <FormDescription>
//         //                     Enter your Password .
//         //                   </FormDescription>
//         //                   <FormMessage />
//         //                 </FormItem>
//         //               )}
//         //             />
//         //             <Button
//         //             type="submit"
//         //             disabled={isSubmitting}
//         //             >
//         //               {
//         //                 isSubmitting?(
//         //                   <>
//         //                   <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
//         //                   Please wait
//         //                   </>
//         //                 ):("SignIn")
//         //               }
//         //             </Button>
//         //           </form>
//         //       </Form>
//         //       <div className="text-center mt-4">
//         //       <p>
//         //         Not a member?{' '}
//         //         <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
//         //           Sign up
//         //         </Link>
//         //       </p>
//         //     </div>
//         //     </div>
//         // </div>
//     //     <>
//     //  <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[870px]">
//     //   
//     //         <div className="flex items-center justify-center py-12">
//     //     <div className="mx-auto grid w-[350px] gap-6">
//     //       <div className="grid gap-2 text-center">
//     //         <h1 className="text-3xl font-bold">Login</h1>
//     //         <p className="text-balance text-muted-foreground">
//     //           Enter your email below to login to your account
//     //         </p>
//     //       </div>
//     //       <div className="grid gap-4">
//     //         <div className="grid gap-2">
//     //           <Label htmlFor="email">Email</Label>
//     //           <Input
//     //             id="email"
//     //             type="email"
//     //             placeholder="m@example.com"
//     //             required
//     //           />
//     //         </div>
//     //         <div className="grid gap-2">
//     //           <div className="flex items-center">
//     //             <Label htmlFor="password">Password</Label>
//     //             <Link
//     //               href="/forgot-password"
//     //               className="ml-auto inline-block text-sm underline"
//     //             >
//     //               Forgot your password?
//     //             </Link>
//     //           </div>
//     //           <Input id="password" type="password" required />
//     //         </div>
//     //         <Button type="submit" className="w-full">
//     //           Login
//     //         </Button>
//     //         <Button variant="outline" className="w-full">
//     //           Login with Google
//     //         </Button>
//     //       </div>
//     //       <div className="mt-4 text-center text-sm">
//     //         Don&apos;t have an account?{" "}
//     //         <Link href="#" className="underline">
//     //           Sign up
//     //         </Link>
//     //       </div>
//     //     </div>
//     //   </div>
//     //   <div className="hidden bg-muted lg:block">
//     //     <Image
//     //       src="/placeholder.svg"
//     //       alt="Image"
//     //       width="1920"
//     //       height="1080"
//     //       className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
//     //     />
//     //   </div>
    
//     //   </>
//       )

// }

export default  function LoginPage(){

    // const {register,handleSubmit,formState:{errors}} = useForm({
    //     resolver:zodResolver(signInSchema),
    //     defaultValues:{
    //         identifier:'',
    //         password:''
    //     }
    // })
    
    // const onSubmit = (data) => console.log(data);

    // let fetchImgUrl =""
    // async function fetchImg2() {
        
    //     const response = await axios.get("https://api.pexels.com/v1/search?query=messaging&per_page=1",
    //         {headers:{
    //             Authorization:process.env.AUTH_PEXELS_API_KEY
    //         }}
    //     )

    //     fetchImgUrl = response.data.photos[0].src.original

    //     console.log('testing ,imgUrl:',fetchImgUrl);
    //     return fetchImgUrl
    // }

    // const imgUrl = await fetchImg2()
    // console.log("Login page fetch img",fetchImgUrl);
    
    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
          identifier: "",
          password:""
        },
      })
    
    async function  onSubmit(values: z.infer<typeof signInSchema>) {
        
        console.log("AFTER onSubmit");
        

        const result = await doCredentialLogin(values)

      }
    
    return (
        
        <div className=" mt-[10rem] lg:grid lg:grid-cols-2 justify-center items-center  h-full pl-4 pr-4 gap-2  z-[-10] shadow-2xl">
            <div className="p-8  flex flex-col justify-center">
            <h1 className="text-center text-4xl  border-b pb-4 mb-12 border-gray-600 font-bold">Login</h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-lg">
                    <FormField
                    control={form.control}
                    name="identifier"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Username/Email</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter Username or Email" {...field} />
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input placeholder="password" {...field} />
                        </FormControl>
                        
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button type="submit" className="w-full">Submit</Button>
                    
                </form>
            </Form>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="underline">
                        Sign up
                        </Link>
                    </div>
                    <Button variant="outline" className="w-full">
                         Login with Google
                    </Button>
            </div>
            <div className=" hidden bg-muted lg:block h-full">
                    <FetchImg/>
            </div>
        </div>

        
    )
}

//  lg:min-h-[600px] xl:min-h-[800px]