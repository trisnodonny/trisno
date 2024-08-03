import { useState } from "react";

export default function NavigationBar() {
  const [isActive, setIsActive] = useState(false)
  const handleOnClickNav = () => {
    setIsActive(prevState => !prevState)
  };

  const navClass = isActive ? "nav is-active" : "nav"

  return (
    <header className="header-container">
      <div className="header-content">
        <a className="header-logo" href="/">
          Trisno.
        </a>
        <button className="header-cta" onClick={handleOnClickNav}>
          <span className="block"></span>
          <span className="block"></span>
        </button>
        <nav className={navClass}>
          <ul className="nav-site">
            <li className="nav-site-link">
              <a href="/">My Work</a>
            </li>
            <li className="nav-site-link">
              <a href="/">My Shelf</a>
            </li>
            <li className="nav-site-link">
              <a href="/">My Resume</a>
            </li>
          </ul>
          <div className="contact">
            <span className="get-in-touch">GET IN TOUCH</span>
            <ul className="contact-link">
              <li><a href="/">demo@gmail.com</a></li>
              <li><a href="/">contact.me/demo</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
