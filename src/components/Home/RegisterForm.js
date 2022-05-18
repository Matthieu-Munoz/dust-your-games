// Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { BsPerson, BsCalendarDate } from "react-icons/bs";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
// React-Redux
import Field from "@/components/Field";
import Button from '../Button';
import { toggleLoginForm, changeHomeField } from '../../actions/home';
import { register } from '@/actions/user';
import { toggleError } from '@/actions/app';
// Styles

function RegisterForm() {
  const dispatch = useDispatch();

  const { pseudo_name, birthday, email, password, confirmedpassword, emailError, passwordError } = useSelector((state) => state.home);

  const handleChange = (value, field) => {
    dispatch(changeHomeField(value, field));
  }
  /**
   * Get the current date, substract 13 years wich is our age limit
   * @returns max years for registration
   */
  const getDate = () => {
    let today = new Date().toISOString().slice(0, 10)
    let year = today.slice(0, 4)
    let rest = today.slice(4, 10)
    year = parseInt(year) - 13
    const max = year + rest
    return max
  }

  const formValidation = () => {
    const passwordValidREgex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const emailValidREgex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    dispatch(toggleError('email', false));
    dispatch(toggleError('password', false));
    let check = true;
    if (!email.match(emailValidREgex)) {
      check = false;
      dispatch(toggleError('email', true));
    }
    if (!password.match(passwordValidREgex) && (password === confirmedpassword)) {
      check = false;
      dispatch(toggleError('password', true));
    }
    return check;
  };

  // Handle when the user click the register button
  const handleRegister = (evt) => {
    evt.preventDefault();
    if (formValidation()) {
      dispatch(register())
    }
  }

  return (
    <form className="userform__ctn userform__ctn--register">
      <Field
        name="pseudo_name"
        placeholder="Identifiant"
        Icon={BsPerson}
        value={pseudo_name}
        onChange={handleChange}
      />
      <div className="field">
        <BsCalendarDate className="field__icon" />
        <input

          name="birthday"
          className="field__input"
          type="date"
          placeholder="Date de naissance"
          max={getDate()}
          value={birthday}
          onChange={(evt) => handleChange(evt.target.value, 'birthday')} />
      </div>
      <Field
        name="email"
        type="email"
        placeholder="Email"
        Icon={AiOutlineMail}
        value={email}
        onChange={handleChange}
        error={emailError}
        tip="Merci de saisir un email valide"
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
        tip="Merci de saisir un mot de passe valide"
      />
      <Field
        name="confirmedpassword"
        type="password"
        placeholder="Confirmer le mot de passe"
        Icon={AiOutlineLock}
        field="password"
        value={confirmedpassword}
        onChange={handleChange}
      />
      <Button
        name="S'inscrire"
        type="submit"
        classname="primary"
        onclick={handleRegister}
      />
      <div className="userform__separator">
        <div className="userform__separator__line" />
        ou
        <div className="userform__separator__line" />
      </div>
      <Button
        name="Se connecter"
        classname="secondary"
        style={{ width: '70%' }}
        onclick={() => dispatch(toggleLoginForm(true))}
      />
    </form>
  );
}

export default RegisterForm;
