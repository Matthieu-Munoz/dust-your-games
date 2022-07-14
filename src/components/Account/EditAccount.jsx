// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { confirmAlert } from "react-confirm-alert";
import { BsPerson } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { AiOutlineLock, AiOutlineMail, AiOutlineEdit } from "react-icons/ai";
// Local | React-Redux
import { deleteUser, editUser } from "Actions/user";
import Field from "Components/Field";
import {
  toggleEditAccount,
  changeField,
  toggleAccountError,
} from "Actions/account";
import { togglePassword } from "Actions/app";
import Button from "../Button";
// styles
import "./account.scss";
import "react-confirm-alert/src/react-confirm-alert.css";
// Locals

function EditAccount() {
  const dispatch = useDispatch();
  const {
    pseudo_name,
    email,
    password,
    confirmedPassword,
    pseudoError,
    emailError,
    passwordError,
    confirmedPasswordError,
  } = useSelector((state) => state.account);
  let { image } = useSelector((state) => state.user);
  if (image === null) {
    image = "default-avatar_ld0jlt.png";
  }

  const formValidation = () => {
    const pseudoValidREgex = /^[a-zA-Z]{1,20}\d{0,3}$/;
    const passwordValidREgex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const emailValidREgex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    dispatch(toggleAccountError("pseudo", false));
    dispatch(toggleAccountError("email", false));
    dispatch(toggleAccountError("password", false));
    let check = true;
    if (
      !pseudo_name.match(pseudoValidREgex) ||
      pseudo_name.length < 3 ||
      pseudo_name.length > 12
    ) {
      check = false;
      dispatch(toggleAccountError("pseudo", true));
    }
    if (!email.match(emailValidREgex)) {
      check = false;
      dispatch(toggleAccountError("email", true));
    }
    if (password !== "") {
      if (!password.match(passwordValidREgex)) {
        check = false;
        dispatch(toggleAccountError("password", true));
      }
      if (password !== confirmedPassword) {
        check = false;
        dispatch(toggleAccountError("confirmedPassword", true));
      }
    }
    return check;
  };

  const handleChange = (value, field) => {
    dispatch(changeField(value, field));
  };

  // Handle when the user click the login button
  const handleEdit = (evt) => {
    evt.preventDefault();
    if (formValidation()) {
      dispatch(togglePassword(false));
      dispatch(editUser());
    }
  };

  const handleDelete = (evt) => {
    confirmAlert({
      title: "Vous êtes sur le point de supprimer votre compte",
      message: "Attention, cette action est irréversible",
      buttons: [
        {
          label: "Supprimer",
          onClick: () => dispatch(deleteUser()),
        },
        {
          label: "Annuler",
        },
      ],
    });
  };

  return (
    <form className="useraccount useraccount--register">
      <IoClose
        className="useraccount__close"
        onClick={() => {
          dispatch(togglePassword(false));
          dispatch(toggleEditAccount(false));
        }}
      />
      <div className="useraccount__picture">
        <div className="useraccount__picture__redcircle" />
        <div className="useraccount__picture__yellowcircle" />
        <img
          className="useraccount__picture__img"
          src={`https://res.cloudinary.com/dyg/c_scale,h_150,q_80,w_150/${image}`}
          alt="avatar"
        />
      </div>
      <div className="useraccount__info__edit">
        <div className="description_input"> Mon pseudo </div>
        <Field
          name="pseudo_name"
          placeholder="Modifier mon pseudo"
          onChange={handleChange}
          value={pseudo_name}
          Icon={BsPerson}
          error={pseudoError}
          tip="IUJSDFGHBQDBGB"
        />
        <div className="description_input"> Mon adresse e-mail </div>
        <Field
          name="email"
          type="email"
          placeholder="modifier mon e-mail"
          onChange={handleChange}
          value={email}
          Icon={AiOutlineMail}
          error={emailError}
          tip="Merci de saisir un e-mail valide."
        />
        <div className="description_input"> Mon mot de passe </div>
        <Field
          name="password"
          type="password"
          placeholder="modifier mon mot de passe"
          onChange={handleChange}
          field="password"
          value={password}
          Icon={AiOutlineLock}
          error={passwordError}
          tip="Merci de saisir un mot de passe valide."
          info={true}
          infoTip={
            <div>
              Votre mot de passe doit contenir au minimum :<br />- 8 caractères
              <br />- une minuscule
              <br />- une majuscule <br />- un chiffre
            </div>
          }
        />
        <div className="description_input"> Confirmer mon mot de passe </div>
        <Field
          name="confirmedPassword"
          type="password"
          placeholder="confirmer mon mot de passe"
          onChange={handleChange}
          field="password"
          value={confirmedPassword}
          Icon={AiOutlineLock}
          error={confirmedPasswordError}
          tip="Les mots de passe doivent être identiques."
        />
      </div>
      <div className="useraccount__buttons">
        <Button
          name="Valider les modifications"
          classname="secondary"
          type="submit"
          style={{ width: "78%", marginTop: "1em", fontSize: "0.8em" }}
          onclick={handleEdit}
        />
        <Button
          name="Supprimer mon compte"
          classname="primary"
          style={{ width: "70%", marginTop: "1em", fontSize: "0.8em" }}
          onclick={handleDelete}
        />
      </div>
    </form>
  );
}

export default EditAccount;
