/**
 * Aspect-ratio-locked image frame. Uses a plain <img> (not next/image) on
 * purpose: the project must stay portable to a plain Node host, and these are
 * placeholder assets. The reserved aspect ratio prevents layout shift (CLS).
 * Swap the files under /public for real photos at the same paths later.
 */
export function ProductImage({
  src,
  alt,
  ratio = "4 / 5",
  priority = false,
  className = "",
  imgClassName = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-surface-2 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
