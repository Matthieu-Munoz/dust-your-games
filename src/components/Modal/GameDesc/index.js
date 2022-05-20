// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { BsPeopleFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
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
                    <div className="gamedesc__game">
                        <img
                            className="gamedesc__img"
                            src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_80/${game.image}`}
                            alt={game.name}
                        />
                        <div className='addgames--scroll'>
                            <div className="gamedesc__desc">
                                Description
                            </div>
                        </div>
                        <div className="gamedesc__information">
                            <h2 className="gamedesc__title">{game.name}</h2>
                            <div className="gamedesc__statistics">
                                <div className="gamedesc__statistics__people">
                                    <BsPeopleFill className="gamedesc__statistics__icon--people" />
                                    <div className="gamedesc__statistics__people__number">
                                        {game.min_player}-{game.max_player}
                                    </div>
                                </div>
                                <div className="gamedesc__statistics__time">
                                    <CgSandClock className="gamedesc__statistics__icon--time" />
                                    <div className="gamedesc__statistics__time__number">
                                        ±{game.play_time}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button
                            name="Supprimer ce jeu"
                            classname="secondary"
                            onclick={() => dispatch(deleteGame())}
                        />
                        <Button
                            name="Choisir ce jeu"
                            classname="primary"
                            onclick={() => dispatch(deleteGame())}
                        />
                    </div>
                </>
            }
        </div>
    );
}

export default GameDesc;
