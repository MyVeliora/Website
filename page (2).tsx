type VelioraLogoProps = {
  className?: string;
  decorative?: boolean;
};

export function VelioraLogo({
  className = "h-10 w-10",
  decorative = false
}: VelioraLogoProps) {
  return (
    <svg
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : "MyVeliora Logo"}
      className={className}
      fill="none"
      role={decorative ? undefined : "img"}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="url(#veliora-logo-gradient)" height="64" rx="14" width="64" />
      <circle cx="31.6" cy="18.2" fill="white" r="5.1" />
      <path
        d="M18.9 27.6C23.8 28.2 27.8 31.7 31 36.6C32.1 38.3 33.1 40.1 34 41.9C36.4 36.9 40.1 32.6 45 29.4C49.1 26.7 53.4 24.9 57 23.6C56.4 30.1 53.6 36.4 48.6 41C45.6 43.8 42 45.7 38.4 47.7C36.8 48.6 35.2 49.6 33.7 50.7C31.3 52.4 29.4 51.4 28.5 48.6C27.3 45 26.1 41.3 24.9 37.7C23.4 33.4 21.6 29.8 18.9 27.6Z"
        fill="white"
      />
      <path
        d="M38 37.8C41.8 33.6 46.6 30.4 52 28.2"
        stroke="#349569"
        strokeLinecap="round"
        strokeWidth="3.4"
      />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="veliora-logo-gradient"
          x1="4"
          x2="60"
          y1="4"
          y2="60"
        >
          <stop stopColor="#1E8CB0" />
          <stop offset="1" stopColor="#349569" />
        </linearGradient>
      </defs>
    </svg>
  );
}
