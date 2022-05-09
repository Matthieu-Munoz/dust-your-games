// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { BsPerson } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
// React-Redux
import Field from "@/components/Field";
import { toggleLoginForm } from '@/actions/home';
import { changeUserField, login } from '@/actions/user';
import Button from '../Button';
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
            <Button
                name="Se connecter"
                type="submit"
                classname="primary"
                onclick={handleLogin}
            />
            <div className="userform__seperator" />
            <Button
                name="S'inscrire"
                classname="secondary"
                style={{ width: '70%' }}
                onclick={() => dispatch(toggleLoginForm(false))}
            />
        </form>
    );

}

export default Loginform;
