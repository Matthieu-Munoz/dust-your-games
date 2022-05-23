// Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { BsPerson, BsCalendarDate } from "react-icons/bs";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
// React-Redux
import Field from "@/components/Field";
import Button from '../Button';
import { toggleLoginForm, changeHomeField, toggleHomeError } from '../../actions/home';
import { register } from '@/actions/user';
// Styles

function RegisterForm() {
  const dispatch = useDispatch();

  const { pseudo_name, birthday, email, password, confirmedPassword, pseudoError, emailError, passwordError, confirmedPasswordError } = useSelector((state) => state.home);

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
    const pseudoValidREgex = /^[a-zA-Z]{1,20}\d{0,3}$/;
    const passwordValidREgex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const emailValidREgex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    dispatch(toggleHomeError('pseudo', false));
    dispatch(toggleHomeError('email', false));
    dispatch(toggleHomeError('password', false));
    let check = true;
    if (!pseudo_name.match(pseudoValidREgex) || pseudo_name.length < 3 || pseudo_name.length > 12) {
      check = false;
      dispatch(toggleHomeError('pseudo', true));
    }
    if (!email.match(emailValidREgex)) {
      check = false;
      dispatch(toggleHomeError('email', true));
    }
    if (!password.match(passwordValidREgex)) {
      check = false;
      dispatch(toggleHomeError('password', true));
    }
    if ((password !== confirmedPassword)) {
      check = false;
      dispatch(toggleHomeError('confirmedPassword', true));
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
        error={pseudoError}
        tip="Merci de saisir un pseudo valide."
        info={true}
        infoTip={<div>Votre pseudo doit contenir : <br />- au minimum 3 caractères<br />- au maximun 16 caractères<br />- et maximun 3 chiffres</div>}
      />
      <Field
        name="birthday"
        type="date"
        placeholder="Date de naissance"
        Icon={BsCalendarDate}
        value={birthday}
        onChange={handleChange}
        max={getDate()}
        info={true}
        infoTip={<div>L'utilisateur doit avoir au moins 13ans pour s'inscrire.</div>}
      />
      <Field
        name="email"
        type="email"
        placeholder="Email"
        Icon={AiOutlineMail}
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
        infoTip={<div>Votre mot de passe doit contenir<br />au minimum 8 caractères<br />composées d'au moins : <br />- au moins une minuscule<br />- une majuscule <br />- un chiffre</div>}
      />
      <Field
        name="confirmedPassword"
        type="password"
        placeholder="Confirmer le mot de passe"
        Icon={AiOutlineLock}
        field="password"
        value={confirmedPassword}
        onChange={handleChange}
        error={confirmedPasswordError}
        tip="Les mots de passe doivent être identiques."
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
