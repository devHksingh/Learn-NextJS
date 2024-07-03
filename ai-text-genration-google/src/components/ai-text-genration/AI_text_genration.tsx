// import React from 'react'
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
import { GoogleGenerativeAI } from "@google/generative-ai"

async function fetchAIText(prompt:string){
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_KEY as string)
    console.log("hi");
    
    try {
        // const model = genAI.getGenerativeModel({model:"gemini-1.0-pro"})

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

const AITextGenration = () => {
    
    let topic = "Tesla"
    const prompt = `
          Write a blog post about ${topic}. The blog post should be informative and engaging, targeting an audience interested in this topic. The tone should be appropriate for the subject matter, providing valuable insights and information.

          Include the following points:
          1. An introduction to ${topic} and its significance.
          2. Key features or aspects related to ${topic}.
          3. Comparisons with related topics or alternatives.
          4. Benefits and potential drawbacks.
          5. The expected impact and audience reception.
          6. Future developments or potential trends.

          Conclude with a brief summary of why ${topic} is important and what readers should take away from the blog post.
        `
    const prompt2 =`
        Write a blog post about "${topic}". The blog post should be informative and engaging, targeting an audience interested in this topic. The tone should be appropriate for the subject matter, providing valuable insights and information.

          Structure the blog post as follows:

          # Introduction
          - Paragraph: Introduce the topic "${topic}" and its significance.

          ## Key Features or Aspects
          - Subheading: Highlight the main features or aspects related to "${topic}".
          - Paragraph: Provide detailed information about these features or aspects.

          ## Comparisons with Related Topics or Alternatives
          - Subheading: Compare "${topic}" with related topics or alternatives.
          - Paragraph: Discuss the similarities and differences, and why "${topic}" stands out.

          ## Benefits and Potential Drawbacks
          - Subheading: Explain the benefits of "${topic}".
          - Paragraph: Describe the positive aspects.
          - Subheading: Discuss potential drawbacks.
          - Paragraph: Mention any downsides or challenges.

          ## Expected Impact and Audience Reception
          - Subheading: Discuss the impact of "${topic}".
          - Paragraph: Explain how it is expected to influence the audience and its reception.

          ## Future Developments or Potential Trends
          - Subheading: Explore future developments or trends related to "${topic}".
          - Paragraph: Provide insights into what to expect in the future.

          # Conclusion
          - Paragraph: Summarize the importance of "${topic}" and key takeaways for the readers.
    `
    // "can you please genrate an blog Post with mention heading and paragraph"

    const text = fetchAIText(prompt2)


  return (
    <div className="border text-center">
        <h1>AI_text_genrations</h1>
        <div>
            <p>
                {text ? `${text}`:"Loading"}
            </p>
        </div>
    </div>
  )
}

export default AITextGenration