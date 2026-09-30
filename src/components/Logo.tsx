type LogoProps = {
  size?: number;
  className?: string;
  title?: string;
};

const LOGO_SRC = '/images/logo-msb.png';
const LOGO_RATIO = 296 / 240;

/** MSB monogram with scales and column. Gold on transparent — intended for dark backgrounds. */
export function Logo({ size = 48, className, title }: LogoProps) {
  return (
    <img
      className={className}
      src={LOGO_SRC}
      width={Math.round(size * LOGO_RATIO)}
      height={size}
      alt={title ?? ''}
      aria-hidden={title ? undefined : true}
      decoding="async"
    />
  );
}
