// Dependencies

// React-Redux
import Button from "../Button";
// Styles
import "./error.scss"
// Logo
import pugs from "@/assets/images/pugs.png"
import leftBlob from "@/assets/images/red-beige-blob.png"
import rightBlob from "@/assets/images/yellow-blob.png"

function Error() {
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
        />
      </div>
      <img src={leftBlob} className="error__picture error__picture--left" alt="" />
      <img src={pugs} className="error__picture error__picture--pugs" alt="" />
      <img src={rightBlob} className="error__picture error__picture--right" alt="" />
    </div>
  );
}

export default Error;
