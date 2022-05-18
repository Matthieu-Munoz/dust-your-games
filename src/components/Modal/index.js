// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { IoClose } from "react-icons/io5";
// React-Redux
import {
    toggleModal
} from '@/actions/app';
// Styles
import "./modal.scss"
import AddGames from './AddGames';
import DustResult from './DustResult';

function Modal() {
    const dispatch = useDispatch();
    const { modalOpened, modalComponent } = useSelector((state) => state.app);
    const handleModalToggle = () => {
        dispatch(toggleModal(''))
    }
    return (
        <>
            {modalOpened &&
                <>
                    <div className="modal">
                        <IoClose className="modal__close" onClick={handleModalToggle} />
                        {(modalComponent === 'addgames') && <AddGames />}
                        {(modalComponent === 'dustresult') && <DustResult />}
                    </div>
                    <div id="modal_background" onClick={handleModalToggle} />
                </>
            }
        </>
    );
}

export default Modal;



