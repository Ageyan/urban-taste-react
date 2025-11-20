
const Icon = ({ name, size = 24, className = "", ...props }) => (
  <svg
    {...props}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <use href={`/icons.svg#${name}`} />
  </svg>
);

export default Icon;