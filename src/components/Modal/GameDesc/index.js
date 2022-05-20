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
                            className="gamedesc__game__img"
                            src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_80/${game.image}`}
                            alt={game.name}
                        />
                        <div className='gamedesc--scroll'>
                            <div className="gamedesc__desc">
                                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise
                                en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis
                                les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour
                                réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles,
                                mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié.
                                Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des
                                passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise
                                en page de texte, comme Aldus PageMaker.
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
                        <div className="gamedesc__buttons">
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
                                onclick={() => dispatch(deleteGame())}
                            />
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default GameDesc;
