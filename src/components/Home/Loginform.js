// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { BsPerson } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
// React-Redux
import Field from "@/components/Field";
import { toggleLoginForm } from '@/actions/home';
import { changeUserField, login } from '@/actions/user';

// Styles

function Loginform() {
    const dispatch = useDispatch();

    const email = useSelector((state) => state.user.email);
    const password = useSelector((state) => state.user.password);

    const handleChangeField = (value, name) => {
        dispatch(changeUserField(value, name));
    };

    const handleLogin = (evt) => {
        evt.preventDefault();
        dispatch(login())
    }

    return (
        <form className="userform__ctn userform__ctn--login">
            <Field
                name="email"
                placeholder="Identifiant"
                onChange={handleChangeField}
                value={email}
                Icon={BsPerson}
            />
            <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                onChange={handleChangeField}
                value={password}
                Icon={AiOutlineLock}
            />
            <a className="userform__ctn__link" href="lien">Mot de passe oublié ?</a>
            <button onClick={handleLogin} className="userform__btn userform__btn--primary" type="submit">Se connecter</button>
            <div className="userform__seperator" />
            <button onClick={() => dispatch(toggleLoginForm(false))} className="userform__btn userform__btn--secondary" type="button">S'inscrire</button>
        </form>
    );

}

export default Loginform;
