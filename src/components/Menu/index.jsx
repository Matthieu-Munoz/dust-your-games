// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import classNames from "classnames";
// React-Redux
import { toggleMenu, toggleModal } from "Actions/app";
import ThemeToggle from "../ThemeToggle";
import { logout } from "Actions/user";
import Button from "../Button";
// Styles
import "./menu.scss";

function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.user.loginChecked);
  const menuStatus = useSelector((state) => state.app.menuOpened);
  const menuCssClass = classNames("menu", { open: menuStatus });
  const burgerCssClass = classNames("burger burger-squeeze", {
    open: menuStatus,
  });

  return (
    <>
      <div className="menu_toggle">
        <div
          className={burgerCssClass}
          onClick={() => dispatch(toggleMenu(!menuStatus))}
        >
          <div className="burger-lines"></div>
        </div>
      </div>
      <div className={menuCssClass}>
        <ThemeToggle className="menu__theme_toggle" />
        {isLoggedIn ? (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu__link menu__link--active" : "menu__link"
              }
              to="/"
            >
              Tableau de bord
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu__link menu__link--active" : "menu__link"
              }
              to="/games"
            >
              Liste de jeux
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu__link menu__link--active" : "menu__link"
              }
              to="/account"
            >
              Mon compte
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu__link menu__link--active" : "menu__link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <Button
              name="Fonctionnement"
              classname="secondary"
              style={{ width: "180px", marginTop: "1em" }}
              onclick={() => dispatch(toggleModal("intro"))}
            />
            <Button
              name="Se déconnecter"
              classname="primary"
              style={{ width: "180px", marginTop: "1em" }}
              onclick={() => {
                navigate("/", { replace: true });
                dispatch(logout());
              }}
            />
          </>
        ) : (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu__link menu__link--active" : "menu__link"
              }
              to="/"
            >
              Accueil
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "menu__link menu__link--active" : "menu__link"
              }
              to="/contact"
            >
              Contact
            </NavLink>
            <Button
              name="Se Connecter"
              classname="primary"
              style={{ width: "180px", marginTop: "1em" }}
              onclick={() => {
                navigate("/", { replace: true });
              }}
            />
          </>
        )}
        <footer className="footer">
          <a href="/legals" className="footer__link">
            Mentions légales
          </a>
          <div className="footer__separator" />
          Copyright &copy; {new Date().toISOString().slice(0, 4)} Tous droits
          reservés
        </footer>
      </div>
    </>
  );
}

export default Menu;
