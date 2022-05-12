// Dependencies
import { Link } from 'react-router-dom';
// React-Redux
import Menu from "../Menu";
import ThemeToggle from "../ThemeToggle";
// Styles
import "./header.scss"

function Header() {
  return (
    <div className="header">
      <Link className="header__logo" to="/" />
      <ThemeToggle />
      <Menu />
    </div>
  );
}

export default Header;
