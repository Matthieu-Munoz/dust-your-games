// Dependencies
import { useDispatch, useSelector } from "react-redux";
// React-Redux
import Button from '@/components/Button';
import ModalLoader from '@/components/Loader/ModalLoader';
import { deleteGame } from "@/actions/games";
// Styles
import "./gamedesc.scss"


function GameDesc() {
    const dispatch = useDispatch();
    const { modalLoading } = useSelector((state) => state.app);
    const { games, selectedGame } = useSelector((state) => state.games);
    const gameFiltered = games.filter(currentGame => {
        return currentGame.game.id === selectedGame;
    });
    // Dans la variable game, il y a le jeu cliqué.
    const game = gameFiltered[0].game


    return (
        <div className="gamedesc">
            {modalLoading && <ModalLoader />}
            {!modalLoading &&
                <>
                    {/* // votre code ici */}
                    <img
                        className="gamedesc__img"
                        src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_80/${game.image}`}
                        alt={game.name}
                    />
                    <Button
                        name="Supprimer"
                        classname="primary"
                        onclick={() => dispatch(deleteGame())}
                    />
                </>
            }
        </div>
    );
}

export default GameDesc;
