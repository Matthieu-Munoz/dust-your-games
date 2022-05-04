import { BsPerson } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";

function Loginform() {
    return (
        <form className="userform__login">
            <div className="field">
                <BsPerson className="field__icon" />
                <input className="field__input" type="text" placeholder="Identifiant" />
            </div>
            <div className="field">
                <AiOutlineLock className="field__icon" />
                <input className="field__input" type="password" placeholder="Mot de passe" />
            </div>
            <a className="userform__login__link" href="lien">Mot de passe oublié ?</a>
            <button className="userform__btn userform__btn--login" type="submit">Se connecter</button>
            <div className="userform__seperator" />
            <button className="userform__btn userform__btn--register" type="button">S'inscrire</button>
        </form>
    );
}

export default Loginform;
