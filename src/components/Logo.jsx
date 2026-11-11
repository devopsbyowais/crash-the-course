export default function Logo({ footer = false, compact = false }) {
  return (
    <span className={`logo ${footer ? 'logo--footer' : ''}`}>
      <span className="logo__mark" aria-hidden="true">
        <img src="/logo.png" alt="" />
      </span>
      {!compact && (
        <span className="logo__wordmark">
          Crash <span>the Course</span><span className="logo__dot">.</span>
        </span>
      )}
    </span>
  );
}
