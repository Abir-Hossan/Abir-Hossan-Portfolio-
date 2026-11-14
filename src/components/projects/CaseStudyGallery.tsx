"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = { src: string; alt: string; label: string; width: number; height: number };

export default function CaseStudyGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") setActive((current) => current === null ? null : (current + images.length - 1) % images.length);
      if (event.key === "ArrowRight") setActive((current) => current === null ? null : (current + 1) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active, images.length]);

  const previous = () => setActive((current) => current === null ? null : (current + images.length - 1) % images.length);
  const next = () => setActive((current) => current === null ? null : (current + 1) % images.length);

  return (
    <>
      <div className={`case-gallery case-gallery-count-${images.length}`}>
        {images.map((image, index) => (
          <button className="case-gallery-item" key={image.src} type="button" onClick={() => setActive(index)} aria-label={`Open image: ${image.label}`}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 760px) 100vw, 820px" />
            <span className="case-gallery-overlay"><span><ZoomIn size={15} /> View full image</span><small>{image.label}</small></span>
          </button>
        ))}
      </div>
      {active !== null && (
        <div className="case-lightbox" role="dialog" aria-modal="true" aria-label="Project screenshot viewer" onClick={close}>
          <button className="case-lightbox-close" type="button" onClick={close} aria-label="Close image viewer"><X size={22} /></button>
          {images.length > 1 && <button className="case-lightbox-nav case-lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Previous image"><ChevronLeft size={25} /></button>}
          <div className="case-lightbox-content" onClick={(event) => event.stopPropagation()}>
            <Image src={images[active].src} alt={images[active].alt} width={images[active].width} height={images[active].height} sizes="95vw" />
            <p>{images[active].label} <span>{active + 1} / {images.length}</span></p>
          </div>
          {images.length > 1 && <button className="case-lightbox-nav case-lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Next image"><ChevronRight size={25} /></button>}
        </div>
      )}
    </>
  );
}
