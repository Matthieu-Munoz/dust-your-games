// Dependencies
import { useSelector, useDispatch } from "react-redux";
import { BsPerson } from "react-icons/bs";
// React-Redux
import Field from "Components/Field";
import { toggleHomeForm, changeHomeField } from "Actions/home";
import { passwordRecovery } from "Actions/user";
import Button from "../Button";
import { toggleHomeError } from "Actions/home";
// Styles

function PasswordRecovery() {
  const dispatch = useDispatch();
  const { email, emailError } = useSelector((state) => state.home);

  const handleChange = (value, field) => {
    dispatch(changeHomeField(value, field));
  };

  const formValidation = () => {
    const emailValidREgex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    dispatch(toggleHomeError("email", false));
    let check = true;
    if (!email.match(emailValidREgex)) {
      check = false;
      dispatch(toggleHomeError("email", true));
    }
    return check;
  };

  // Handle when the user click the login button
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (formValidation()) {
      dispatch(passwordRecovery());
    }
  };

  return (
    <form className="userform__ctn userform__ctn--recovery">
      <h3 className="userform__ctn__title">
        Merci de saisir l'e-mail de votre compte, un nouveau mot de passe vous
        sera envoyé.
      </h3>
      <Field
        name="email"
        placeholder="e-mail"
        Icon={BsPerson}
        value={email}
        onChange={handleChange}
        error={emailError}
        tip="Merci de saisir un e-mail valide."
      />
      <Button
        name="Valider"
        type="submit"
        classname="primary"
        onclick={handleSubmit}
      />
      <div className="userform__separator">
        <div className="userform__separator__line" />
        ou
        <div className="userform__separator__line" />
      </div>
      <Button
        name="Annuler"
        classname="secondary"
        style={{ width: "70%" }}
        onclick={() => dispatch(toggleHomeForm("isLoginForm", true))}
      />
    </form>
  );
}

export default PasswordRecovery;
