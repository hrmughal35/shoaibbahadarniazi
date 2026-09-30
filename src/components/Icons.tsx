type IconProps = { size?: number };

export function ArrowRight({ size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M1 8h13M9.5 3.5 14 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function MenuIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M2 7h18M2 15h18" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function CloseIcon({ size = 22 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="m4 4 14 14M18 4 4 18" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
