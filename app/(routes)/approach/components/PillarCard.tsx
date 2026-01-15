interface PillarCardProps {
  number: string;
  pillarIndex: number;
  title: string;
  description: string;
}

const PillarCard = ({
  number,
  pillarIndex,
  title,
  description,
}: PillarCardProps) => {
  return (
    <div className=" border border-divider-1 rounded-sm p-16 sm:p-4 bg-brown-light flex flex-col sm:gap-2 gap-8">
      {/* Top Section - Pillar Tag */}
      <div className="mb-4">
        <span className="inline-block border border-divider-1 px-2 py-1 text-xs uppercase text-foreground font-family-secondary ">
          PILLAR {pillarIndex + 1}
        </span>
      </div>

      <div className="border-t border-divider-1 w-full"></div>
      {/* Bottom Section - Content */}
      <div className="flex gap-20 sm:flex-col sm:gap-4 items-start">
        {/* Large Number */}
        <div className="flex-shrink-0">
          <span className="text-9xl sm:text-5xl font-light text-pillar-card-title leading-none">
            {number}
          </span>
        </div>

        {/* Title and Description */}
        <div className="flex-1">
          <h3 className="text-2xl sm:text-base font-bold text-foreground mb-4">
            {title}
          </h3>
          <p className="text-base sm:text-xs text-text-primary/60 leading-tight">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PillarCard;
