// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { BsPerson } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
// React-Redux
import Field from "@/components/Field";
import { toggleHomeForm, changeHomeField, toggleHomeError } from '@/actions/home';
import { login } from '@/actions/user';
import Button from '../Button';

function LoginForm() {
    const dispatch = useDispatch();
    // We select and save Email and Password from the user state 
    // This is the only two properties which are needed in this component
    const { email, password, emailError, passwordError } = useSelector((state) => state.home);

    // can also be written as:
    // const email = useSelector((state) => state.user.email);
    // const password = useSelector((state) => state.user.password);

    const handleChange = (value, field) => {
        dispatch(changeHomeField(value, field));
    }

    const formValidation = () => {
        const passwordValidREgex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const emailValidREgex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        dispatch(toggleHomeError('email', false));
        dispatch(toggleHomeError('password', false));
        let check = true;
        if (!email.match(emailValidREgex)) {
            check = false;
            dispatch(toggleHomeError('email', true));
        }
        if (!password.match(passwordValidREgex)) {
            check = false;
            dispatch(toggleHomeError('password', true));
        }
        return check;
    };

    // Handle when the user click the login button
    const handleLogin = (evt) => {
        evt.preventDefault();
        if (formValidation()) {
            dispatch(login());
        }
    }

    return (
        <form className="userform__ctn userform__ctn--login">
            <Field
                name="email"
                placeholder="Email"
                Icon={BsPerson}
                value={email}
                onChange={handleChange}
                error={emailError}
                tip="Merci de saisir un email valide."
            />
            <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                Icon={AiOutlineLock}
                field="password"
                value={password}
                onChange={handleChange}
                error={passwordError}
                tip="Merci de saisir un mot de passe valide."
                info={true}
                infoTip={<div>Votre mot de passe doit contenir au minimum :<br />- 8 caractères<br />- une minuscule<br />- une majuscule <br />- un chiffre</div>}
            />
            <a
                className="userform__ctn__link"
                href="/"
                onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(toggleHomeForm('isPasswordRecovery', true));
                }}
            >
                Mot de passe oublié ?
            </a>
            <Button
                name="Se connecter"
                type="submit"
                classname="primary"
                onclick={handleLogin}
            />
            <div className="userform__separator">
                <div className="userform__separator__line" />
                ou
                <div className="userform__separator__line" />
            </div>
            <Button
                name="S'inscrire"
                classname="secondary"
                style={{ width: '70%' }}
                onclick={() => dispatch(toggleHomeForm('isRegisterForm', true))}
            />
        </form>
    );

}

export default LoginForm;
