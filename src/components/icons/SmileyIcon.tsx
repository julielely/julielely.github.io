export function SmileyIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`animate-spin-slow ${className}`}
      viewBox="0 0 76.2537 76.2537"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="38.1267"
        cy="38.1268"
        r="28.5"
        transform="rotate(26.0771 38.1267 38.1268)"
        fill="#DE96FF"
      />
      <ellipse
        cx="34.7749"
        cy="32.0073"
        rx="2.01176"
        ry="5.02941"
        transform="rotate(26.0771 34.7749 32.0073)"
        fill="#1B1F24"
      />
      <ellipse
        cx="45.0147"
        cy="37.0185"
        rx="2.01176"
        ry="5.02941"
        transform="rotate(26.0771 45.0147 37.0185)"
        fill="#1B1F24"
      />
      <path
        d="M23.2945 37.1606C24.5523 45.0332 31.2608 58.4762 48.0328 49.2676"
        stroke="#1B1F24"
        strokeWidth="1.34118"
      />
      <path
        d="M48.4957 45.8147C47.771 47.5042 47.2091 50.9498 50.7588 51.2151"
        stroke="#1B1F24"
        strokeWidth="1.34118"
      />
    </svg>
  );
}
