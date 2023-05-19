import { pageLinks } from "../data";

const PageLinks = ({ParentClass, itemClass}) => {
  return (
    <ul className={ParentClass} id="nav-links">
      {pageLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} className={itemClass}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default PageLinks;
