// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { loadTheme } from '@/actions/app';
import classNames from 'classnames';
// component
import Home from '../Home';
import Account from '../Account';
import Error from '../Error';
import Modal from '../Modal';
import Header from '../Header';
// Styles
import './app.scss';



function App() {
  const dispatch = useDispatch();
  // Load the theme from localStorage when the app initialize
  useEffect(
    () => {
      dispatch(loadTheme());
    },
    [dispatch],
  );

  // Use the state to determine the current theme and apply the class accordingly
  const currentTheme = useSelector((state) => state.app.darkTheme);
  const cssClass = classNames('theme', { 'theme--dark': currentTheme }, { 'theme--light': !currentTheme });

  return (
    <div className={cssClass}>
      <div className="app">
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
