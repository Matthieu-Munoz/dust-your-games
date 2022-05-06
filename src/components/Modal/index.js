import { useSelector, useDispatch } from 'react-redux';
import {
    toggleModal
} from '@/actions/app';
import { AiOutlineClose } from "react-icons/ai";
import "./modal.scss"

function Modal() {
    const dispatch = useDispatch();
    const modalOpened = useSelector((state) => state.app.modalOpened);
    const handleModalToggle = () => {
        dispatch(toggleModal())
    }
    return (
        <>
            {modalOpened &&
                <>
                    <div className="modal">
                        <AiOutlineClose className="modal__close" onClick={handleModalToggle} />
                    </div>
                    <div id="modal_background" onClick={handleModalToggle} />
                </>
            }
        </>
    );
}

export default Modal;



