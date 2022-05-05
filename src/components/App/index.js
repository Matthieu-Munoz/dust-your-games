import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadTheme } from '@/actions/app';
import classNames from 'classnames';
import Userform from '../Userform';
import ThemeToggle from '../ThemeToggle';
import './app.scss';

function App() {
  // Use the state to determine the current theme and apply the class accordingly
  const currentTheme = useSelector((state) => state.app.darkTheme);
  const cssClass = classNames('theme', { 'theme--dark': currentTheme }, { 'theme--light': !currentTheme });

  const dispatch = useDispatch();


  // Load the theme from localStorage when the app initialize
  useEffect(
    () => {
      dispatch(loadTheme());
    },
    [dispatch],
  );

  return (
    <div className={cssClass}>
      <div className="app">
        <ThemeToggle />
        <Userform />
      </div>
    </div>
  );
}

export default App;
