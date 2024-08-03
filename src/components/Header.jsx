import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visibility, setVisibility] = useState({
    home: false,
    project: true,
    shelf: true,
  });

  const navClass = isOpen ? "nav is-open" : "nav";
  const btnClass = isOpen ? "header-cta is-open" : "header-cta";
  const links = [
    { name: "home", path: "/", label: "Home" },
    { name: "project", path: "/project", label: "My Project" },
    { name: "shelf", path: "/shelf", label: "My Shelf" },
  ];

  const handleOnClickNav = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLinkClick = (link) => {
    setIsOpen(false);
    setVisibility({
      home: link === "home" ? false : true,
      project: link === "project" ? false : true,
      shelf: link === "shelf" ? false : true,
    })
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <Link className="header-logo" to="/" onClick={handleLinkClick}>
          Trisno.
        </Link>
        <button className={btnClass} onClick={handleOnClickNav}>
          <span className="block"></span>
          <span className="block"></span>
        </button>
        <nav className={navClass}>
          <ul className="nav-list">
            {links.map(link => (
              visibility[link.name] && (
                <li key={link.name} className="nav-list-link">
                  <Link
                    className="anchor-hover"
                    to={link.path}
                    onClick={() => handleLinkClick(link.name)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            ))}
            {/* <li className={homeLinkClass}>
              <Link className="anchor-hover" to="/" onClick={handleClickHome}>
                Home
              </Link>
            </li>
            <li className={projectLinkClass}>
              <Link
                className="anchor-hover"
                to="/project"
                onClick={handleClickProject}
              >
                My Project
              </Link>
            </li>
            <li className={shelfLinkClass}>
              <Link
                className="anchor-hover"
                to="/shelf"
                onClick={handleClickShelf}
              >
                My Shelf
              </Link>
            </li> */}
            <li className="nav-list-link">
              <Link className="anchor-hover" to="/">
                My Resume
              </Link>
            </li>
          </ul>
          <ul className="nav-list">
            <li className="nav-list-link get-in-touch">GET IN TOUCH</li>
            <li className="nav-list-link">
              <Link className="anchor-hover" to="mailto:trisnodonny@gmail.com">
                trisnodonny@gmail.com
              </Link>
            </li>
            <li className="nav-list-link">
              <Link className="anchor-hover" to="/">
                contact.me/demo
              </Link>
            </li>
          </ul>
          <ul className="nav-list">
            <li className="nav-list-link row-link">
              <Link
                className="anchor-hover"
                to="https://github.com/trisnodonny"
                target="_blank"
              >
                GH
              </Link>
            </li>
            <li className="nav-list-link row-link">
              <Link className="anchor-hover" to="/">
                LN
              </Link>
            </li>
            <li className="nav-list-link row-link">
              <Link
                className="anchor-hover"
                to="https://www.youtube.com/@donnytrisno7652"
                target="_blank"
              >
                YT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
