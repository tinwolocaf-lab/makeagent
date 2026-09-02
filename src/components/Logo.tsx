export function Logo({ label }: { label: string }) {
  return (
    <span className="logo-lockup">
      <svg aria-hidden="true" className="logo-mark" viewBox="0 0 40 40">
        <rect height="40" rx="12" width="40" />
        <path d="M10 26.5 17.4 12h5.2L30 26.5h-5.5l-1.3-3H16.8l-1.4 3H10Zm8.4-7h3.2L20 15.7l-1.6 3.8Z" />
        <circle cx="29" cy="10" r="3.2" />
      </svg>
      <span>{label}</span>
    </span>
  );
}
