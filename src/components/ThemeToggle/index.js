// styles
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../actions/app';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./themetoggle.scss"
/** 
 * A React component used to switch between light and dark themes. 
 */
function ThemeToggle() {
  const currentTheme = useSelector((state) => state.app.darkTheme);
  const dispatch = useDispatch();

  return (
    <div className="themetoggle" onClick={() => dispatch(toggleTheme(!currentTheme))}>
      {(currentTheme) ? <BsFillMoonStarsFill className="themetoggle__switch" /> : <BsFillSunFill className="themetoggle__switch" />}
    </div >
  );
}

export default ThemeToggle;
