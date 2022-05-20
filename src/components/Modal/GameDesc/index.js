// Dependencies
import { confirmAlert } from 'react-confirm-alert';
import { useDispatch, useSelector } from "react-redux";
// React-Redux
import Button from '@/components/Button';

// Styles
import "./gamedesc.scss"
import { deleteGame } from "@/actions/games";
import ModalLoader from '@/components/Loader/ModalLoader';


function GameDesc() {
    const dispatch = useDispatch();

    const { modalLoading } = useSelector((state) => state.app);
    const { games, selectedGame } = useSelector((state) => state.games);
    const game = games.filter(currentGame => {
        return currentGame.game.name === selectedGame;
    });


    return (
        <div className="singlegame">
            {modalLoading && <ModalLoader />}
            {!modalLoading &&
                <>
                    {game && game.map((item) => (
                        <div className="singlegame__ctn" key={item.game.name}>
                            <div className="singlegame__picture">
                                <img
                                    className="singlegame__img"
                                    src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_80/${item.game.image}`}
                                    alt={item.game.name}
                                />
                            </div>
                        </div>
                    ))}
                    <div className="singlegame__btn">
                        <Button
                            name="Supprimer"
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
