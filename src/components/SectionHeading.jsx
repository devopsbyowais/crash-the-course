export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  actions,
  id,
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <div className="section-heading__copy">
        {eyebrow && (
          <span className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {actions && <div className="section-heading__actions">{actions}</div>}
    </div>
  );
}
