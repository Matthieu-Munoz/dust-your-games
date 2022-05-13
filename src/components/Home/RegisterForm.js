// Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { toggleLoginForm } from '../../actions/home';
import { BsPerson } from "react-icons/bs";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
// React-Redux
import Field from "@/components/Field";
import Button from '../Button';
import { changeHomeField } from '@/actions/user';
// Styles

function RegisterForm() {
  const dispatch = useDispatch();

  const { pseudo, email, password, confirmedpassword } = useSelector((state) => state.user);
  
  const handleChange = (value, field) => {
    dispatch(changeHomeField(value, field));
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
        value={password}
        onChange={handleChange}
      />
      <Field
        name="confirmedpassword"
        type="password"
        placeholder="Confirmer le mot de passe"
        Icon={AiOutlineLock}
        value={confirmedpassword}
        onChange={handleChange}
      />
      <Button
        name="S'inscrire"
        type="submit"
        classname="primary"
        onclick={() => console.log('register')}
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
