'use client'
// import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import {useForm} from "react-hook-form"
import * as z from "zod"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDebounceValue, useDebounceCallback } from 'usehooks-ts'
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import axios,{AxiosError} from "axios"
import { signUpSchema } from "@/schemas/signUpSchema"
import { ApiResponse } from "@/types/ApiResponse"
import { Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { signInSchema } from "@/schemas/signInSchema"
import { signIn } from "next-auth/react"


export default function SignInForm(){
  const { toast } = useToast()
  const [username, setUsername] = useState('')
  
  const [isSubmitting, setIsSubmitting] = useState(false)

  
  const router = useRouter()

  // zod implementation
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver:zodResolver(signInSchema),
    defaultValues:{
      identifier:'',
      password:''
    },
  })


  const onSubmit = async (data:z.infer<typeof signInSchema> ) =>{
    setIsSubmitting(true)
    const result = await signIn('credentials',{
      redirect:false,
      identifier: data.identifier,
      password:data.password
    })
    console.log(result);
    if(result?.error){
      if(result.error === "CredentialsSignin"){
        toast({
          title:'Login Failed',
          description:"Incorrect username or password",
          variant:"destructive"
        })
        setIsSubmitting(false)
      }else{
        toast({
          title:'Error',
          description: result.error,
          variant:"destructive"
        })
        setIsSubmitting(false)
      }
    }
    if(result?.url){
      router.replace('/dashboard')
      setIsSubmitting(false)
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Join Mystery Message
            </h1>
            <p className="mb-4">Sign in to start your anonymous adventur</p>
          </div>
          <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
              >
                

                <FormField
                  name="identifier"
                  control={form.control}
                  
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email/Username</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Email/Username" {...field} 
                         />
                      </FormControl>
                      
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="Password" {...field} 
                         />
                      </FormControl>
                      <FormDescription>
                        Enter your Password .
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                type="submit"
                disabled={isSubmitting}
                >
                  {
                    isSubmitting?(
                      <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                      Please wait
                      </>
                    ):("SignIn")
                  }
                </Button>
              </form>
          </Form>
          <div className="text-center mt-4">
          <p>
            Not a member?{' '}
            <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
              Sign up
            </Link>
          </p>
        </div>
        </div>
    </div>
  )
}