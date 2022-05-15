// Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginForm } from '../../actions/home';
import { BsPerson, BsCalendarDate } from "react-icons/bs";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
// React-Redux
import Field from "@/components/Field";
import Button from '../Button';
import { changeHomeField, register } from '@/actions/user';
// Styles

function RegisterForm() {
  const dispatch = useDispatch();

  const { pseudo, birthday, email, password, confirmedpassword } = useSelector((state) => state.user);

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

  // Handle when the user click the register button
  const handleRegister = (evt) => {
    evt.preventDefault();
    dispatch(register())
  }

  return (
    <form className="userform__ctn userform__ctn--register">
      <Field
        name="pseudo"
        placeholder="Identifiant"
        Icon={BsPerson}
        value={pseudo}
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
      <div className="userform__seperator">
        <div className="userform__seperator__lign" />
        ou
        <div className="userform__seperator__lign" />
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
