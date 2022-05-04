// styles
import { BsFillMoonStarsFill } from "react-icons/bs";
import "./themetoggle.scss"

function ThemeToggle() {
  return (
    <div className="themetoggle">
      <BsFillMoonStarsFill className="themetoggle__switch" />
    </div>
  );
}

export default ThemeToggle;
