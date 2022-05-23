// Dependencies
import DOMPurify from "dompurify";
import { useDispatch, useSelector } from "react-redux";
import { BsPeopleFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
// React-Redux
import Button from '@/components/Button';
import ModalLoader from '@/components/Loader/ModalLoader';
import { deleteGame, manualConfirmDust } from "@/actions/games";
// Styles
import "./gamedesc.scss"


function GameDesc() {
    const dispatch = useDispatch();
    const { modalLoading, modalSource } = useSelector((state) => state.app);
    const { games, selectedGame } = useSelector((state) => state.games);
    const topGames = useSelector((state) => state.dashboard.games);
    let game;
    let fromDyg = true;
    if (modalSource === 'dashboard') {
        const gameFiltered = topGames.filter(currentGame => {
            return currentGame.id === selectedGame;
        });
        fromDyg = false
        game = {
            name: gameFiltered[0].name,
            image: gameFiltered[0].image_url,
            description: gameFiltered[0].description,
            min_player: gameFiltered[0].min_players,
            max_player: gameFiltered[0].max_players,
            play_time: ((gameFiltered[0].min_playtime + gameFiltered[0].max_playtime) / 2)
        }
    } else {
        const gameFiltered = games.filter(currentGame => {
            return currentGame.game.id === selectedGame;
        });
        game = {
            name: gameFiltered[0].game.name,
            image: gameFiltered[0].game.image,
            description: gameFiltered[0].game.description,
            min_player: gameFiltered[0].game.min_player,
            max_player: gameFiltered[0].game.max_player,
            play_time: gameFiltered[0].game.play_time
        }
    }
    return (
        <div className="gamedesc">
            {modalLoading && <ModalLoader />}
            {!modalLoading &&
                <>
                    <div className="gamedesc__game">
                        <img
                            className="gamedesc__game__img"
                            src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_80/${game.image}`}
                            alt={game.name}
                        />
                        <div className='gamedesc--scroll'>
                            <div className="gamedesc__game__desc" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(game.description) }}>
                            </div>
                        </div>
                        <div className="gamedesc__game__information">
                            <h2 className="gamedesc__game__information__title">{game.name}</h2>
                            <div className="gamedesc__game__information__statistics">
                                <div className="gamedesc__game__information__statistics__people">
                                    <BsPeopleFill className="gamedesc__game__information__statistics__icon--people" />
                                    <div className="gamedesc__game__information__statistics__people__number">
                                        {(game.min_player === game.max_player) ? game.min_player : `${game.min_player} - ${game.max_player}`}
                                    </div>
                                </div>
                                <div className="gamedesc__game__information__statistics__time">
                                    <CgSandClock className="gamedesc__game__information__statistics__icon--time" />
                                    <div className="gamedesc__game__information__statistics__time__number">
                                        ±{game.play_time}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {fromDyg && <div className="gamedesc__game__buttons">
                            <Button
                                name="Supprimer ce jeu"
                                classname="secondary"
                                style={{ width: '48%', fontSize: '0.85em' }}
                                onclick={() => dispatch(deleteGame())}
                            />
                            <Button
                                name="Choisir ce jeu"
                                classname="primary"
                                style={{ width: '45%', fontSize: '0.85em' }}
                                onclick={() => dispatch(manualConfirmDust())}
                            />
                        </div>}
                    </div>
                </>
            }
        </div>
    );
}

export default GameDesc;
