// React-Redux
import Field from "@/components/Field";
import games from "@/data/games9";
import Singlegame from "./Singlegame";
// Dependencies

// styles
import "./addgames.scss"

function AddGames() {
    return (
        <div className="addgames">
            <div className="addgames__input">
                <Field
                    name="search"
                    placeholder="Rechercher un jeu"
                />
            </div>
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
