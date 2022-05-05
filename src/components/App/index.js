import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadTheme } from '@/actions/app';
import classNames from 'classnames';
import Userform from '../Userform';
import ThemeToggle from '../ThemeToggle';
import './app.scss';

function App() {
  const currentTheme = useSelector((state) => state.app.darkTheme);
  const cssClass = classNames('theme', { 'theme--dark': currentTheme }, { 'theme--light': !currentTheme });

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(loadTheme());
    },
    [],
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
