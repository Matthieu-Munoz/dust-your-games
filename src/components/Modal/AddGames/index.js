// Dependencies
import { useDispatch, useSelector } from "react-redux";
// React-Redux
import Field from "@/components/Field";
import Singlegame from "./Singlegame";
// styles
import "./addgames.scss"
import { changeField, searchGame, selectGame } from "@/actions/games";

function AddGames() {
    const dispatch = useDispatch();
    const { searchInput, searchGames, selectedGame } = useSelector((state) => state.games);

    const handleChange = (value, field) => {
        dispatch(changeField(value, field));
    }
    const handleSearch = (evt) => {
        evt.preventDefault();
        dispatch(selectGame(null));
        dispatch(searchGame(searchInput));
    }
    const handleGameSelect = (id) => {
        dispatch(selectGame(id));
    }
    return (
        <div className="addgames">
            <form className="addgames__input" onSubmit={handleSearch}>
                <Field
                    name="searchInput"
                    placeholder="Rechercher un jeu"
                    onChange={handleChange}
                    value={searchInput}
                />
            </form>
            {!selectedGame ?
                <div className='addgames--scroll'>
                    <div className="addgames__results"> résultats : </div>
                    <div className="addgames__pictures">
                        {searchGames && searchGames.map((item) => (
                            <div key={item.id} className="addgames__pictures__game" onClick={() => handleGameSelect(item.id)}>
                                <img
                                    className="addgames__pictures__game__img"
                                    src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_80/${item.image_url}`}
                                    alt={item.handle}
                                />
                            </div>
                        ))}
                    </div>
                </div> :
                <Singlegame />}
        </div>
    );
}

export default AddGames;
