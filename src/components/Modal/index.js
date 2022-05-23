// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { IoClose } from "react-icons/io5";
// Local | React-Redux
import {
    toggleModal
} from '@/actions/app';
import AddGames from './AddGames';
import DustResult from './DustResult';
import GameDesc from './GameDesc';
import FriendsList from './FriendsList';
// Styles
import "./modal.scss"
import { resetSearchGames } from '@/actions/games';

function Modal() {
    const dispatch = useDispatch();


    const { modalOpened, modalComponent } = useSelector((state) => state.app);
    const handleModalToggle = () => {
        dispatch(toggleModal(''));
        dispatch(resetSearchGames());
    }

    return (
        <>
            {modalOpened &&
                <>
                    <div className="modal">
                        <IoClose className="modal__close" onClick={handleModalToggle} />
                        {(modalComponent === 'addgames') && <AddGames />}
                        {(modalComponent === 'dustresult') && <DustResult />}
                        {(modalComponent === 'gameDesc') && <GameDesc />}
                        {(modalComponent === 'friendslist') && <FriendsList />}
                    </div>
                    <div id="modal_background" onClick={handleModalToggle} />

                </>
            }
        </>
    );
}

export default Modal;



