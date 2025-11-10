import { reverse } from "dns";

type ImageCardProps = {
    image: string;
    headText: string;
    subtext?: string;
    reverse?: boolean;
}

export function ImageCard({ image, headText, subtext, reverse }: ImageCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 px-12 py-10 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <img
        className="w-full md:w-1/2 rounded-3xl shadow-lg object-cover"
        src={image}
        alt=""
      />
      <div className="md:w-1/2 text-[#4a4a4a] font-serif">
        <h3 className="text-3xl font-semibold mb-4">{headText}</h3>
        {subtext && <p>{subtext}</p>}
      </div>
    </div>
  );
}
