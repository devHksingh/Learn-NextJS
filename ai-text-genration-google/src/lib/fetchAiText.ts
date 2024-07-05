'use server'
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { GoogleGenerativeAI } from "@google/generative-ai"


async function fetchAiText(prompt:string){
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_KEY as string)

    
    try {
        

        const generationConfig = {
            // stopSequences: ["red"],
            // maxOutputTokens: 400,
            temperature: 0.9,
            topP: 0.1,
            topK: 16,
          };
        
        const safetySettings = [
            {
              category: HarmCategory.HARM_CATEGORY_HARASSMENT,
              threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
            },
            {
              category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
              threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
            },
        ];

        // model

        const model = genAI.getGenerativeModel({model:"gemini-1.0-pro" ,generationConfig,safetySettings})

        // streaming with text-only input

        const result = await model.generateContentStream(prompt)

        let text = ""

        for await (const chunk of result.stream){
            const chunkText = chunk.text()
            console.log("chunkText :",chunkText);
            text += chunkText
        }

        console.log(" complete para : ",text);
        
        return text
        
        
    } catch (error) {
        console.log(" errror occured while genrating text :",error);
        
    }
}

// const fetchAiText = () => {
  
// }

export default fetchAiText