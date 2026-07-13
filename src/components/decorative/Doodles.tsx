type DoodleProps = {
  className?: string;
};

export function DoodleStar({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0l2.4 8.1L22 12l-7.6 3.9L12 24l-2.4-8.1L2 12l7.6-3.9L12 0z" />
    </svg>
  );
}

export function DoodleSparkle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M11 0c.6 3.9 1.5 6.5 2.8 7.8 1.3 1.3 3.9 2.2 7.8 2.8-3.9.6-6.5 1.5-7.8 2.8C12.5 14.7 11.6 17.3 11 21c-.6-3.7-1.5-6.3-2.8-7.6C6.9 12.1 4.3 11.2.4 10.6c3.9-.6 6.5-1.5 7.8-2.8C9.5 6.5 10.4 3.9 11 0z" />
    </svg>
  );
}

export function DoodleZigzag({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 60 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M1 10L11 2L21 10L31 2L41 10L51 2L59 10" />
    </svg>
  );
}

export function DoodleDots({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 44 16"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <circle cx="4" cy="8" r="3.2" />
      <circle cx="22" cy="8" r="3.2" />
      <circle cx="40" cy="8" r="3.2" />
    </svg>
  );
}

export function DoodleBolt({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M13 0L2 14h8l-1 10 11-14h-8l1-10z" />
    </svg>
  );
}

export function DoodleBlob({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M45.6,-58.3C58.4,-49.5,67.5,-34.4,71.4,-18.1C75.3,-1.8,74.1,15.7,66.5,30.1C58.9,44.5,44.9,55.9,29.4,62.6C13.9,69.3,-3.1,71.4,-19.5,67.7C-35.9,64,-71.8,54.6,-77.5,40.5C-83.2,26.4,-58.6,7.6,-51.3,-9.5C-44,-26.6,-44,-42,-35.9,-51.9C-27.8,-61.8,-13.9,-66.2,2.4,-69.1C18.7,-72,32.9,-67.1,45.6,-58.3Z" transform="translate(100 100)" />
    </svg>
  );
}

export function DoodleCircleRing({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export function DoodleWave({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 12c8-10 16-10 24 0s16 10 24 0 16-10 24 0 16 10 24 0 16-10 24 0" />
    </svg>
  );
}

export function DoodleCurve({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 30c0-15.5 12.5-28 28-28" />
    </svg>
  );
}

export function DoodleSmiley({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <circle cx="8.5" cy="10" r="1" fill="currentColor" />
      <circle cx="15.5" cy="10" r="1" fill="currentColor" />
      <path d="M7.5 14.5c1 1.3 2.6 2 4.5 2s3.5-.7 4.5-2" />
    </svg>
  );
}
