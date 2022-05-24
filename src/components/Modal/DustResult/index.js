// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { BsPeopleFill } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
// React-Redux
import Button from '@/components/Button';
import ModalLoader from "@/components/Loader/ModalLoader";
import { confirmDust, dustAll, dustBy } from "@/actions/games";
import { toggleModal } from "@/actions/app";
// Styles
import "./dustresult.scss"
// Locals
import dust from '@/assets/images/dust.png';
import sparklingleft from '@/assets/images/sparkling-left.png';
import sparklingright from '@/assets/images/sparkling-right.png';

function DustResult() {
    const dispatch = useDispatch();
    const { modalLoading } = useSelector((state) => state.app);
    const { dustgame, checkedGames, filteredGames } = useSelector((state) => state.games);
    const { checkFilter } = useSelector((state) => state.games.toggles);

    const handleRelaunch = () => {
        dispatch(toggleModal(''));
        console.log(filteredGames.length);
        if (filteredGames.length > 0) {
            console.log('filteredGames');
            dispatch(dustBy(filteredGames));
        } else if (checkFilter) {
            console.log('checkFilter');
            dispatch(dustBy(checkedGames))
        } else {
            console.log('dustAll');
            dispatch(dustAll())
        }
    }
    const handleConfirm = () => {
        dispatch(toggleModal(''));
        dispatch(confirmDust());
    }
    console.log(dustgame);
    return (
        <div className="dustresult">
            {modalLoading && <ModalLoader />}
            {!modalLoading &&
                <>
                    <div className="dustresult__game">
                        <img className="dustresult__dust" src={dust} alt="dust" />
                        <div className="dustresult__circle">
                            <img className="dustresult__circle__picture" src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_200,q_80,w_200/${dustgame.image}`} alt="game" />
                            <img className="dustresult__sparkling dustresult__sparkling--left" src={sparklingleft} alt="sparklingleft" />
                            <img className="dustresult__sparkling dustresult__sparkling--right" src={sparklingright} alt="sparklingright" />
                        </div>
                    </div>
                    <div className="dustresult__information">
                        <h2 className="dustresult__title">{dustgame.name}</h2>
                        <div className="dustresult__statistics">
                            <div className="dustresult__statistics__people">
                                <BsPeopleFill className="dustresult__statistics__icon--people" />
                                <div className="dustresult__statistics__people__number">
                                    {dustgame.min_player}-{dustgame.max_player}
                                </div>
                            </div>
                            <div className="dustresult__statistics__time">
                                <CgSandClock className="dustresult__statistics__icon--time" />
                                <div className="dustresult__statistics__time__number">
                                    ±{dustgame.play_time}
                                </div>
                            </div>
                        </div>
                        <div className="dustresult__buttons">
                            <Button
                                name="relancer"
                                classname="secondary"
                                type="button"
                                style={{ width: '40%', marginTop: '1em', fontSize: '0.8em' }}
                                onclick={handleRelaunch}
                            />
                            <Button
                                name="confirmer"
                                classname="primary"
                                type="button"
                                style={{ width: '40%', marginTop: '1em', fontSize: '0.8em' }}
                                onclick={handleConfirm}
                            />
                        </div>
                    </div>
                </>
            }
        </div>
    );
}

export default DustResult;
