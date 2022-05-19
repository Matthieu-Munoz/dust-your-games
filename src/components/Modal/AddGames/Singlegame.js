// React-Redux
import { saveGame, selectGame } from "@/actions/games";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button";
// styles
import "./addgames.scss"


function Singlegame() {
  const dispatch = useDispatch();
  const { searchGames, selectedGame } = useSelector((state) => state.games);
  const game = searchGames.filter(obj => {
    return obj.id === selectedGame;
  });
  const handleCancel = () => {
    dispatch(selectGame(null));
  }
  return (
    <div className="singlegame">

      {game && game.map((item) => (
        <>
          <div className="singlegame__text">Voulez-vous ajouter {item.name} à votre liste ?  </div>
          <div key={item.id} className="singlegame__picture">
            <img
              className="singlegame__img"
              src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_80/${item.image_url}`}
              alt={item.handle}
            />
          </div>
        </>
      ))}
      <div className="singlegame__btn">
        <Button
          name="oui"
          classname="secondary"
          onclick={() => dispatch(saveGame())}
        />
        <Button
          name="non"
          classname="primary"
          onclick={handleCancel}
        />
      </div>
    </div>
  );
}

export default Singlegame;
