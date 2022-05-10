// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import { toggleLoginForm } from '../../actions/home';
import { BsPerson } from "react-icons/bs";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
// React-Redux
import Field from "@/components/Field";
import { changeUserField } from '@/actions/user';
import Button from '../Button';
// Styles

function RegisterForm() {
  const dispatch = useDispatch();

  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);

  const handleChangeField = (value, name) => {
    dispatch(changeUserField(value, name));
  };
  return (
    <form className="userform__ctn userform__ctn--register">
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
      <Field
        name="confirmedpassword"
        type="password"
        placeholder="Confirmer le mot de passe"
        onChange={handleChangeField}
        value={''}
        Icon={AiOutlineLock}
      />
      <Field
        name="email"
        type="email"
        placeholder="Email"
        onChange={handleChangeField}
        value={''}
        Icon={AiOutlineMail}
      />
      <Button
        name="S'inscrire"
        type="submit"
        classname="primary"
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
