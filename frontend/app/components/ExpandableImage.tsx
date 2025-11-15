import { useState } from "react";

export function ExpandableImage({src} : {src:string})
{
    const [open, setOpen] = useState(false);

    return(
        <>
      {/* Small image */}
      <img
        src={src}
        onClick={() => setOpen(true)}
        className="w-40 h-40 object-cover cursor-pointer transition-transform hover:scale-105"
      />

      {/* Fullscreen overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={() => setOpen(false)}
        >
          <img
            src={src}
            className="max-w-[90%] max-height-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </>
    );
}