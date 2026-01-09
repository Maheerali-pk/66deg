import { FunctionComponent } from "react";

interface SectionHeadingWithSquare {
  text: string;
}

const SectionHeadingWithSquare: FunctionComponent<SectionHeadingWithSquare> = ({
  text,
}) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-2 h-2 bg-black"></div>
      <p className="text-black uppercase tracking-widest text-sm font-family-secondary">
        {text}
      </p>
    </div>
  );
};

export default SectionHeadingWithSquare;
