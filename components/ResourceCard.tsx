import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ResourceCardProps {
  type: string;
  date: string;
  title: string;
  image: string;
  link: string;
}

const ResourceCard = ({
  type,
  date,
  title,
  image,
  link,
}: ResourceCardProps) => {
  return (
    <div className="h-full flex-1 flex flex-col group bg-card rounded-sm overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 sm:px-0 flex flex-col flex-1 justify-between gap-10">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-gray-100 text-muted-foreground text-xs uppercase tracking-wider px-2 py-1 rounded">
              {type}
            </span>
            <span className="text-muted-foreground text-xs">{date}</span>
          </div>
          <h3 className="text-2xl">{title}</h3>
        </div>
        <Button
          variant="link"
          size="link"
          className="text-text-primary border-b-text-text-primary"
        >
          {link}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ResourceCard;
