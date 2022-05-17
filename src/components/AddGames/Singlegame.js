// React-Redux
import games from "@/data/game1";
import Button from "../Button";
// styles
import "./addgames.scss"


function Singlegame() {
  return (
    <div className="singlegame">
      <div className="singlegame__text"> voulez-vous ajouter ce jeu à votre liste ?  </div>
      {games.map((item) => (
        <div key={item.id} className="singlegame__picture">
          <img
            className="singlegame__img"
            src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_80/${item.image_url}`}
            alt={item.handle}
          />
        </div>
      ))}
      <div className="singlegame__btn">
        <Button
          name="oui"
          classname="secondary"
        />
        <Button
          name="non"
          classname="primary"
        />
      </div>
    </div>
  );
}

export default Singlegame;
