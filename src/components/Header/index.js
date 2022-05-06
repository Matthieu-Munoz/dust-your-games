// Dependencies
// React-Redux
import Menu from "../Menu";
import ThemeToggle from "../ThemeToggle";
// Styles
import "./header.scss"

function Header() {
  return (
    <div className="header">
      <div className="header__logo" />
      <ThemeToggle />
      <Menu />
    </div>
  );
}

export default Header;
