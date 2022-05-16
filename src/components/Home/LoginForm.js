// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { BsPerson } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";
// React-Redux
import Field from "@/components/Field";
import { toggleLoginForm, changeHomeField } from '@/actions/home';
import { login } from '@/actions/user';
import Button from '../Button';
// Styles

function LoginForm() {
    const dispatch = useDispatch();
    // We select and save Email and Password from the user state 
    // This is the only two properties which are needed in this component
    const { email, password } = useSelector((state) => state.home);
    // can also be written as:
    // const email = useSelector((state) => state.user.email);
    // const password = useSelector((state) => state.user.password);

    const handleChange = (value, field) => {
        dispatch(changeHomeField(value, field));
    }

    // Handle when the user click the login button
    const handleLogin = (evt) => {
        evt.preventDefault();
        dispatch(login())
    }

    return (
        <form className="userform__ctn userform__ctn--login">
            <Field
                name="email"
                placeholder="Identifiant"
                Icon={BsPerson}
                value={email}
                onChange={handleChange}
            />
            <Field
                name="password"
                type="password"
                placeholder="Mot de passe"
                Icon={AiOutlineLock}
                field="password"
                value={password}
                onChange={handleChange}
            />
            <a className="userform__ctn__link" href="lien">Mot de passe oublié ?</a>
            <Button
                name="Se connecter"
                type="submit"
                classname="primary"
                onclick={handleLogin}
            />
            <div className="userform__seperator">
                <div className="userform__seperator__lign" />
                ou
                <div className="userform__seperator__lign" />
            </div>
            <Button
                name="S'inscrire"
                classname="secondary"
                style={{ width: '70%' }}
                onclick={() => dispatch(toggleLoginForm(false))}
            />
        </form>
    );

}

export default LoginForm;
