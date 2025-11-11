

type ImageCardProps = {
    image: string;
    headText: string;
    subtext?: string;
    reverse?: boolean;
}

export function ImageCard({ image, headText, subtext, reverse }: ImageCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-10 px-12 py-10  ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="rounded-3xl overflow-hidden box">
  <img src={image} alt="" className="w-full h-full object-cover" />
</div>
      <div className="md:w-1/2 text-[#4a4a4a] font-serif">
        <h3 className="text-3xl  font-semibold mb-4">{headText}</h3>
        {subtext && <p >{subtext}</p>}
      </div>
    </div>
  );
}
