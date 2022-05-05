import { useDispatch } from 'react-redux';
import { toggleLoginForm } from '../../actions/home';
import { BsPerson } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
import Field from "./Field";

function Loginform() {
    const dispatch = useDispatch();

    const handleChangeField = (value, name) => {
        console.log(value, name);
    };
    return (
        <form className="userform__ctn userform__ctn--login">
            <Field
                name="pseudo"
                placeholder="Identifiant"
                onChange={handleChangeField}
                value={''}
                Icon={BsPerson}
            />
            <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={handleChangeField}
                value={''}
                Icon={AiOutlineLock}
            />
            <a className="userform__ctn__link" href="lien">Mot de passe oublié ?</a>
            <button className="userform__btn userform__btn--primary" type="submit">Se connecter</button>
            <div className="userform__seperator" />
            <button onClick={() => dispatch(toggleLoginForm(false))} className="userform__btn userform__btn--secondary" type="button">S'inscrire</button>
        </form>
    );

}

export default Loginform;
