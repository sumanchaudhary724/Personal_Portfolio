import { Link } from "react-router-dom";

export const MenuItem = ({ href, label }) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" aria-current="page" to={href}>
        {label}
      </Link>
      {/* <a className="nav-link" aria-current="page" href={href}>
           {label}
       </a> */}
    </li>
  );
};
