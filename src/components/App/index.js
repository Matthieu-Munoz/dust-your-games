// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import classNames from 'classnames';
// React-Redux
import Home from '../Home';
import Dashboard from '../Dashboard';
import Account from '../Account';
import Contact from '../Contact';
import GamesList from '../GamesList';
import Error from '../Error';
import Modal from '../Modal';
import Header from '../Header';
import Alerts from '../Alerts';
import { loadTheme, toggleMenu } from '@/actions/app';
import { fetchUser, loginCheck } from '@/actions/user';
// import Footer from '../Footer';
// Styles
import './app.scss';
import Loader from '../Loader';

function App() {
  // To dispatch action to the store
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(loginCheck());
      dispatch(loadTheme());
    },
    [dispatch],
  );

  // On location change, scroll the windows to the top and close the menu
  const location = useLocation();
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      dispatch(toggleMenu(false))

    },
    [location, dispatch],
  );

  const { loading } = useSelector((state) => state.app);
  // Use the state to determine the current theme and apply the class accordingly
  const currentTheme = useSelector((state) => state.app.darkTheme);
  const themeClass = classNames('theme', { 'theme--dark': currentTheme }, { 'theme--light': !currentTheme });
  const userLoggedIn = useSelector((state) => state.user.loginChecked);
  const appClass = classNames('app', { 'app--login': (location.pathname === "/" && !userLoggedIn) }, { 'app--games': (location.pathname === "/games") });
  const status = useSelector((state) => state.app.alert.status);
  const menuOpen = useSelector((state) => state.app.menuOpened)

  /**
   * Close the menu when anything BUT the menu/burgerIcon is clicked
   * @param {*} evt 
   */
  const handleMenu = (evt, menuOpen) => {
    const str = JSON.stringify(evt.target.className);
    const res = str.includes("menu") || str.includes("burger");
    if (!res && menuOpen) {
      dispatch(toggleMenu(false))
    }
  }

  return (
    <div className={themeClass}>
      <div className={appClass} onClick={(evt) => handleMenu(evt, menuOpen)}>
        <>
          {loading && <Loader />}
          {!loading &&
            <>
              {status && <Alerts />}
              <Modal />
              <Header />
              <Routes>
                <Route path="/" element={(!userLoggedIn) ? <Home /> : <Dashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/games" element={<GamesList />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<Error />} />
              </Routes>
            </>
          }
        </>
      </div>
    </div>
  );
}

export default App;
