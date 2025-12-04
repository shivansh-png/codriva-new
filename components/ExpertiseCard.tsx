import Image from "next/image";

interface ExpertiseCardProps {
  image: string;
  title: string;
  subtitle: string;
}

export default function ExpertiseCard({ image, title, subtitle }: ExpertiseCardProps) {
  return (
    <div className="rounded-2xl overflow-hidden bg-[#C9E0F1] dark:bg-[#0d1117] shadow-lg">
      <div className="w-full h-40 relative">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-[#24292f] dark:text-[#f0f6fc]">
          {title}
        </h3>
        <p className="text-sm text-[#656d76] dark:text-[#8b949e] mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

