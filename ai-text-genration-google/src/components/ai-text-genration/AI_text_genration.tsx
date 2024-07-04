"use client"
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { GoogleGenerativeAI } from "@google/generative-ai"
import InputField from "../InputField";
import { z } from "zod"
import React, { useState } from 'react'
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
import fetchAiText from "@/lib/fetchAiText";


const formSchema = z.object({
    topic:z.string().min(2).max(20)
})

// 

// async function fetchAIText(prompt:string){
//     const genAI = new GoogleGenerativeAI(process.env.GOOGLE_KEY as string)
//     console.log("hi");
    
//     try {
//         // const model = genAI.getGenerativeModel({model:"gemini-1.0-pro"})

//         const generationConfig = {
//             // stopSequences: ["red"],
//             // maxOutputTokens: 400,
//             temperature: 0.9,
//             topP: 0.1,
//             topK: 16,
//           };
        
//         const safetySettings = [
//             {
//               category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//               threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
//             },
//             {
//               category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//               threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//             },
//         ];

//         // model

//         const model = genAI.getGenerativeModel({model:"gemini-1.0-pro" ,generationConfig,safetySettings})

//         // streaming with text-only input

//         const result = await model.generateContentStream(prompt)

//         let text = ""

//         for await (const chunk of result.stream){
//             const chunkText = chunk.text()
//             console.log("chunkText :",chunkText);
//             text += chunkText
//         }

//         console.log(" complete para : ",text);
        
//         return text
        
        
//     } catch (error) {
//         console.log(" errror occured while genrating text :",error);
        
//     }
// }

async function getAIText(prompt:string){
  try {
    
    const text = await fetchAiText(prompt)
    console.log("$$$$ AI TEXT $$$ :",text);
    return text
  } catch (error) {
    console.log('Unable to genrate the Text',error);
    
  }
}

//
const AITextGenration = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
            topic:""
        }
    })
    function onSubmit(values: z.infer<typeof formSchema>){

        console.log("topic value :",values,values.topic);
        const tpoic = values.topic
        setBlogTopic(tpoic)
        console.log('Blog topic',blogTopic);
        
        
    }
    
    const [blogTopic,setBlogTopic] = useState('')
    const [loading,setLoading] = useState(false)
    
    const prompt = `
          Write a blog post about ${blogTopic}. The blog post should be informative and engaging, targeting an audience interested in this topic. The tone should be appropriate for the subject matter, providing valuable insights and information.

          Include the following points:
          1. An introduction to ${blogTopic} and its significance.
          2. Key features or aspects related to ${blogTopic}.
          3. Comparisons with related topics or alternatives.
          4. Benefits and potential drawbacks.
          5. The expected impact and audience reception.
          6. Future developments or potential trends.

          Conclude with a brief summary of why ${blogTopic} is important and what readers should take away from the blog post.
        `
    const prompt2 =`
        Write a blog post about "${blogTopic}". The blog post should be informative and engaging, targeting an audience interested in this topic. The tone should be appropriate for the subject matter, providing valuable insights and information.

          Structure the blog post as follows:

          # Introduction
          - Paragraph: Introduce the topic "${blogTopic}" and its significance.

          ## Key Features or Aspects
          - Subheading: Highlight the main features or aspects related to "${blogTopic}".
          - Paragraph: Provide detailed information about these features or aspects.

          ## Comparisons with Related Topics or Alternatives
          - Subheading: Compare "${blogTopic}" with related topics or alternatives.
          - Paragraph: Discuss the similarities and differences, and why "${blogTopic}" stands out.

          ## Benefits and Potential Drawbacks
          - Subheading: Explain the benefits of "${blogTopic}".
          - Paragraph: Describe the positive aspects.
          - Subheading: Discuss potential drawbacks.
          - Paragraph: Mention any downsides or challenges.

          ## Expected Impact and Audience Reception
          - Subheading: Discuss the impact of "${blogTopic}".
          - Paragraph: Explain how it is expected to influence the audience and its reception.

          ## Future Developments or Potential Trends
          - Subheading: Explore future developments or trends related to "${blogTopic}".
          - Paragraph: Provide insights into what to expect in the future.

          # Conclusion
          - Paragraph: Summarize the importance of "${blogTopic}" and key takeaways for the readers.
    `
    // "can you please genrate an blog Post with mention heading and paragraph"

    // const text = fetchAIText(prompt2)

    // console.log(prompt2);

    let text 

    if(blogTopic){
      console.log("BLOG POST");
      
      text = getAIText(prompt2)
    }


    


  return (
    <div className=" text-center ">
        
        <div>
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
        </div>
        <span className="text-[0.8rem] text-muted-foreground">Enter a topic for the blog post you want to generate.</span>
        <div className="mt-4 border p-6 w-1/2 mx-auto">
                  {
                    blogTopic? <h2>`${blogTopic}`</h2>:<p className="text-muted-foreground">Enter topic</p>
                  }

                  <div>
                    <p>
                      {text ? <p>`${text}`</p>:""}
                    </p>
                  </div>
          <p>
            
          </p>
        </div>
    </div>
  )
}

export default AITextGenration