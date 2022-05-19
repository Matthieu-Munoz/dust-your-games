// Dependencies
// React-Redux
import Field from "@/components/Field";
import Singlegame from "./Singlegame";
// styles
import "./addgames.scss"
import games from "@/data/games9";



function AddGames() {
    return (
        <div className="addgames">
            <form className="addgames__input" >
                <Field
                    name="searchInput"
                    placeholder="Rechercher un jeu"
                />
            </form>
            <div className='addgames--scroll'>
                <div className="addgames__results"> résultats : </div>
                <div className="addgames__pictures">
                    {games.map((item) => (
                        <div key={item.id} className="addgames__pictures__game">
                            <img
                                className="addgames__pictures__game__img"
                                src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,w_150,q_80/${item.image_url}`}
                                alt={item.handle}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* <Singlegame /> */}
        </div>
    );
}

export default AddGames;
