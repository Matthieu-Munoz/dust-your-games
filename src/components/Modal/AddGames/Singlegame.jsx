// React-Redux
import { changeDustValue, saveGame, selectSearchGame } from "Actions/games";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button";
// styles
import "./addgames.scss";

function Singlegame() {
  const dispatch = useDispatch();

  const { searchGames, selectedGame, dustValue } = useSelector(
    (state) => state.games.addgame
  );

  const game = searchGames.filter((currentGame) => {
    return currentGame.id === selectedGame;
  });

  const handleChange = (evt) => {
    dispatch(changeDustValue(evt.target.value));
  };

  const handleCancel = () => {
    dispatch(selectSearchGame(null));
  };

  return (
    <div className="singlegame">
      {game &&
        game.map((item) => (
          <div className="singlegame__ctn" key={item.id}>
            <div className="singlegame__text">
              Voulez-vous ajouter {item.name} à votre liste ?{" "}
            </div>
            <div className="singlegame__picture">
              <img
                className="singlegame__img"
                src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_80/${item.image_url}`}
                alt={item.handle}
              />
            </div>
          </div>
        ))}
      <div className="singlegame__question">
        <h3 className="singlegame__question__title">
          dernière sortie de ce jeu :
        </h3>
        <div className="singlegame__question__answers">
          <span className="singlegame__question__answers__span">Récent</span>
          <span className="singlegame__question__answers__span">Normal</span>
          <span className="singlegame__question__answers__span">Vieux</span>
        </div>
        <input
          value={dustValue}
          onChange={handleChange}
          className="singlegame__question__input"
          type="range"
          name="dustLevel"
          min={3}
          max={7}
          step={2}
        />
      </div>
      <div className="singlegame__btn">
        <Button name="non" classname="secondary" onclick={handleCancel} />
        <Button
          name="oui"
          classname="primary"
          onclick={() => dispatch(saveGame())}
        />
      </div>
    </div>
  );
}

export default Singlegame;
