import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      title: "AI-Powered Tower Inventory and Anomaly Detection",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/690b8b7d2afaeb75896d51a6_Cell%20Tower.png",
    },
    {
      title: "Enhancing the Guest Services Experience with Conversational AI",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/690b8e691e97f95cc76d36b3_AI-Powered%20Search%20Transforms%20Document%20Analysis%20(1).png",
    },
    {
      title: "Transforming Document Analysis Across the Enterprise with AI",
      image:
        "https://cdn.prod.website-files.com/68dd5adbcc75b2bc818c906f/690a795ffd932714a2b31368_AI-Powered%20Search%20Transforms%20Document%20Analysis.png",
    },
  ];

  return (
    <section className="py-40 bg-dark-background text-white">
      <div className="max-w-container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-6xl text-center text-white mb-8">
            Success Stories
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {stories.map((story, index) => (
            <a
              key={index}
              href="#"
              className="group bg-navy-light relative aspect-[2/3]  rounded-micro overflow-hidden "
            >
              <div className="absolute h-full w-full overflow-hidden brightness-[0.6]">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover  "
                />
              </div>
              <div className="p-6 bg-white/10 absolute bottom-4 mx-4 h-60 border-white/5 border flex justify-between flex-col">
                <h3 className="text-white  text-4xl">{story.title}</h3>
                <span className="text-white uppercase font-family-secondary border-b border-b-white w-fit text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <Button variant="secondary">ALL SUCCESS STORIES</Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
