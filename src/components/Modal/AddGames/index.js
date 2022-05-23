// Dependencies
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// React-Redux
import Field from "@/components/Field";
import Singlegame from "./Singlegame";
import ModalLoader from "@/components/Loader/ModalLoader";
import { changeSearchField, resetSearchGames, searchGame, selectSearchGame } from "@/actions/games";
import { IoIosBackspace } from "react-icons/io";
// styles
import "./addgames.scss"
function AddGames() {
    const dispatch = useDispatch();
    // We defined three variables to be used throughout the component
    // searchInput: Corresponding to the value of the search input
    // searchGames: will contain an array of games returned by BGA API
    // selectedGame : null by default, equals to the id of a game if clicked
    const { searchInput, searchGames, selectedGame } = useSelector((state) => state.games.addgame);
    const { modalLoading } = useSelector((state) => state.app);

    const inputRef = useRef(null);

    useEffect(() => {
        if (!selectedGame && !searchInput) {
            inputRef.current.focus();
        }
    });

    // Handle the search input value
    const handleChange = (value, field) => {
        dispatch(changeSearchField(value, field));
    }
    // Fired when search input is submited
    const handleSearchSubmit = (evt) => {
        evt.preventDefault();
        // Reset selectedGame if selected
        dispatch(selectSearchGame(null));
        // Fire an API request
        dispatch(searchGame());
    }
    // Dispatch in the state, the id of the game selected
    const handleGameSelect = (id) => {
        dispatch(selectSearchGame(id));
    }
    return (
        <div className="addgames">

            {modalLoading && <ModalLoader />}
            {!modalLoading &&
                <>
                    <form className="addgames__input" onSubmit={handleSearchSubmit} onFocus={() => dispatch(selectSearchGame(null))}>
                        <Field
                            innerRef={inputRef}
                            name="searchInput"
                            placeholder="Rechercher un jeu"
                            onChange={handleChange}
                            value={searchInput}
                        />
                        <IoIosBackspace className="addgames__input__back" onClick={() => dispatch(resetSearchGames())} />
                    </form>
                    {!selectedGame ?
                        <div className='addgames--scroll'>
                            <div className="addgames__results"> résultats : </div>
                            <div className="addgames__pictures">
                                {searchGames && searchGames.map((item) => (
                                    <div key={item.id} className="addgames__pictures__game" onClick={() => handleGameSelect(item.id)}>
                                        <img
                                            className="addgames__pictures__game__img"
                                            src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_60/${item.image_url}`}
                                            alt={item.handle}
                                        />
                                        <div className="addgames__pictures__game__overlay">
                                            <div className="addgames__pictures__game__overlay--bg" />
                                            <div className="addgames__pictures__game__overlay--text">
                                                {item.name}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div> :
                        <Singlegame />
                    }
                </>
            }
        </div>
    );
}

export default AddGames;
