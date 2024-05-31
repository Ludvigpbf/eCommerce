import { Link } from "react-router-dom";

interface LinkProps {
  to: string;
  label: string;
}

interface DropdownProps {
  links: LinkProps[];
  dropdownClass?: string;
  ulClass?: string;
  liClass?: string;
  linkClass?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  links,
  dropdownClass,
  ulClass,
  liClass,
  linkClass,
}) => {
  return (
    <div className={`dropdown-menu ${dropdownClass}`}>
      <ul className={`dropdown-ul ${ulClass}`}>
        {links.map((link, index) => (
          <li className={`dropdown-li ${liClass}`} key={index}>
            <Link className={`dropdown-link ${linkClass}`} to={link.to}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
