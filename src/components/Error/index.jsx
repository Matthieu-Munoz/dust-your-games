// Dependencies
import { useNavigate } from "react-router-dom";
// Local | React-Redux
import Button from "../Button";
// Styles
import "./error.scss";
// Logo
import pugs from "Assets/images/pugs.png";
import leftBlob from "Assets/images/red-beige-blob.png";
import rightBlob from "Assets/images/yellow-blob.png";

function Error() {
  const navigate = useNavigate();
  return (
    <div className="error">
      <div className="error__ctn">
        <h2 className="error__404">404</h2>
        <div className="error__message">
          La page demandée n’a pas été trouvée ou n’existe plus...
        </div>
        <Button
          name="Revenir à l'accueil"
          classname="primary"
          style={{ width: "60%" }}
          onclick={() => {
            navigate("../", { replace: true });
          }}
        />
      </div>
      <img
        src={leftBlob}
        className="error__picture error__picture--left"
        alt=""
      />
      <img src={pugs} className="error__picture error__picture--pugs" alt="" />
      <img
        src={rightBlob}
        className="error__picture error__picture--right"
        alt=""
      />
      <img
        className="error__picture error__picture--man"
        src={`https://res.cloudinary.com/dyg/c_scale,q_80,w_250/logo_dyg-dark_hxqygx.png`}
        alt="avatar"
      />
    </div>
  );
}

export default Error;
