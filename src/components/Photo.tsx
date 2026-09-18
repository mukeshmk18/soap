type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

function sized(src: string, w: number) {
  try {
    const url = new URL(src);
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "crop");
    url.searchParams.set("q", "72");
    url.searchParams.set("w", String(w));
    return url.toString();
  } catch {
    return src;
  }
}

export function Photo({
  src,
  alt,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  width,
  height,
}: PhotoProps) {
  return (
    <img
      src={sized(src, 1200)}
      srcSet={`${sized(src, 480)} 480w, ${sized(src, 800)} 800w, ${sized(src, 1200)} 1200w, ${sized(src, 1800)} 1800w`}
      sizes={sizes}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "low"}
    />
  );
}
