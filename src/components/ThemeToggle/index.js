// styles
import { BsFillMoonStarsFill } from "react-icons/bs";
import "./themetoggle.scss"

/** 
 * A React component used to switch between light and dark themes. 
 */
function ThemeToggle() {
  return (
    <div className="themetoggle">
      <BsFillMoonStarsFill className="themetoggle__switch" />
    </div>
  );
}

export default ThemeToggle;
