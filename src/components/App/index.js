// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { loadTheme, toggleMenu } from '@/actions/app';
import classNames from 'classnames';
// React-Redux
import Home from '../Home';
import Account from '../Account';
import Error from '../Error';
import Modal from '../Modal';
import Header from '../Header';
// Styles
import './app.scss';


function App() {
  // To dispatch action to the store
  const dispatch = useDispatch();

  // Load the theme from localStorage when the app initialize
  useEffect(
    () => {
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

  // Use the state to determine the current theme and apply the class accordingly
  const currentTheme = useSelector((state) => state.app.darkTheme);
  const cssClass = classNames('theme', { 'theme--dark': currentTheme }, { 'theme--light': !currentTheme });

  /**
   * Close the menu when anything BUT the menu/burgerIcon is clicked
   * @param {*} evt 
   */
  const handleMenu = (evt) => {
    const str = evt.target.className
    const res = str.includes("menu") || str.includes("burger");
    if (!res) {
      dispatch(toggleMenu(false))
    }
  }

  return (
    <div className={cssClass}>
      <div className="app" onClick={(evt) => handleMenu(evt)}>
        <Modal />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
