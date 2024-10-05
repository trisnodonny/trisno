import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [visibility, setVisibility] = useState({
    home: false,
    project: true,
    shelf: true,
  });

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "home", path: "/", label: "Home" },
    { name: "project", path: "/project", label: "My Project" },
    { name: "shelf", path: "/shelf", label: "My Shelf" },
  ];

  const handleLinkClick = (link) => {
    setIsOpen(false);
    setVisibility({
      home: link === "home" ? false : true,
      project: link === "project" ? false : true,
      shelf: link === "shelf" ? false : true,
    });
  };

  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-top">
          <div className="contact">
            <div className="hello">Say Hello</div>
            <Link className="anchor-hover" to="#">
              mail
            </Link>
            <Link className="anchor-hover" to="#">
              contact.me/demo
            </Link>
          </div>
          <ul className="personal">
            {links.map(
              (link) =>
                visibility[link.name] && (
                  <li key={link.name}>
                    <Link
                      className="anchor-hover"
                      to={link.path}
                      onClick={() => handleLinkClick(link.name)}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
            )}
            <li>
              <Link className="anchor-hover" to="/">
                My Résumé
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-bottom"></div>
      </div>
    </footer>
  );
}
