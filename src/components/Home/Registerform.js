import { useDispatch } from 'react-redux';
import { toggleLoginForm } from '../../actions/home';
import { BsPerson } from "react-icons/bs";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";
import Field from "./Field";

function RegisterForm() {
  const dispatch = useDispatch();

  const handleChangeField = (value, name) => {
    console.log(value, name);
  };
  return (
    <form className="userform__ctn userform__ctn--register">
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
      <button className="userform__btn userform__btn--primary" type="submit">S'inscrire</button>
      <div className="userform__seperator" />
      <button onClick={() => dispatch(toggleLoginForm(true))} className="userform__btn userform__btn--secondary" type="button">Se connecter</button>
    </form>
  );
}

export default RegisterForm;
