export default function Button({
  as = 'button',
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) {
  const Tag = as;

  return (
    <Tag
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
    </Tag>
  );
}
