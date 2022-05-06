import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu } from '@/actions/app';
import classNames from 'classnames';
import ThemeToggle from '../ThemeToggle';
import "./menu.scss"
import { NavLink } from 'react-router-dom';

function Menu() {
  const dispatch = useDispatch();
  const menuStatus = useSelector((state) => state.app.menuOpened);
  const menuCssClass = classNames('menu', { 'open': menuStatus });
  const burgerCssClass = classNames('burger burger-squeeze', { 'open': menuStatus });

  return (
    <>
      <div className="menu_toggle">
        <div className={burgerCssClass} onClick={() => dispatch(toggleMenu())}>
          <div className="burger-lines"></div>
        </div>
      </div>
      <div className={menuCssClass}>
        <ThemeToggle className="menu__theme_toggle" />
        <NavLink
          className={
            ({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={
            ({ isActive }) => (isActive ? 'menu__link menu__link--active' : 'menu__link')
          }
          to="/account"
        >
          Compte
        </NavLink>
        <button className="menu__btn" type="button">Se connecter</button>
      </div>
    </>
  );
}

export default Menu;
