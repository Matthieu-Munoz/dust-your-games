// React-Redux
import Field from "@/components/Field";
// Dependencies
import { IoClose } from "react-icons/io5";
// styles
import "./addgames.scss"

function AddGames() {
  return (
    <div className="addgames">
     <IoClose className="addgames__close" />
     <div className="addgames__input"/>
     <Field
          name="recherche"
          placeholder="rechercher un jeu"
        />
    <div className="addgames__results"> resultats : </div>
    
    </div>
  );
}

export default AddGames;
