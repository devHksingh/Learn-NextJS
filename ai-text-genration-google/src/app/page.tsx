import AITextGenration from "@/components/ai-text-genration/AI_text_genration";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mt-12">
      <h1 className="text-center">AI text genration</h1>
      <AITextGenration/>
    </div>
  );
}
