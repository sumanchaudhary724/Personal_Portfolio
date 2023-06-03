export const MenuItem = ({ href, label }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" aria-current="page" href={href}>
        {label}
      </a>
    </li>
  );
};
