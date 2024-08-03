import { useState } from "react";

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const handleOnClickNav = () => {
    setIsOpen(prevState => !prevState)
  };

  const navClass = isOpen ? "nav is-open" : "nav"
  const btnClass = isOpen ? "header-cta is-open" : "header-cta"

  return (
    <header className="header-container">
      <div className="header-content">
        <a className="header-logo" href="/">
          Trisno.
        </a>
        <button className={btnClass} onClick={handleOnClickNav}>
          <span className="block"></span>
          <span className="block"></span>
        </button>
        <nav className={navClass}>
          <ul className="nav-list">
            <li className="nav-list-link">
              <a className="anchor-hover" href="/">My Work</a>
            </li>
            <li className="nav-list-link">
              <a className="anchor-hover" href="/">My Shelf</a>
            </li>
            <li className="nav-list-link">
              <a className="anchor-hover" href="/">My Resume</a>
            </li>
          </ul>
          <ul className="nav-list">
            <li className="nav-list-link get-in-touch">GET IN TOUCH</li>
            <li className="nav-list-link">
              <a className="anchor-hover" href="/">demo@gmail.com</a>
              </li>
            <li className="nav-list-link">
              <a className="anchor-hover" href="/">contact.me/demo</a>
            </li>
          </ul>
          <ul className="nav-list">
            <li className="nav-list-link row-link">
              <a className="anchor-hover" href="/">GH</a>
              </li>
            <li className="nav-list-link row-link">
              <a className="anchor-hover" href="/">LN</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
