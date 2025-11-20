import iconsSprite from "../assets/icons.svg";

const Icon = ({ name, size = 24, className = "", ...props }) => (
  <svg
    {...props}
    className={className}
    width={size}
    height={size}
    aria-hidden="true"
  >
    <use href={`${iconsSprite}#${name}`} />
  </svg>
);

export default Icon;