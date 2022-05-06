// styles
import Menu from "../Menu";
import ThemeToggle from "../ThemeToggle";
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
