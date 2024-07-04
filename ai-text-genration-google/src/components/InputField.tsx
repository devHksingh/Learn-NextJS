"use client"
 import { z } from "zod"
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
    topic:z.string().min(2).max(20)
})

function InputField() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            topic:""
        }
    })
    function onSubmit(values: z.infer<typeof formSchema>){

        console.log("topic value :",values);
        
    }
  return (
    <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit)} className=" flex justify-center items-baseline gap-4">
        <FormField
          control={form.control}
          name="topic"
          
          render={({ field }) => (
            <FormItem className="flex   w-3/4 p-4 items-baseline gap-4">
              <FormLabel>Topic</FormLabel>
              <FormControl>
                <Input placeholder="Enter a topic" {...field} className="w-full" />
              </FormControl>
              {/* <FormDescription>
                Enter a topic for the blog post you want to generate.
              </FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Genrate</Button>
      </form>
    </Form>
  )
}

export default InputField