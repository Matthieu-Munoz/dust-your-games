// Dependencies
import { useDispatch } from 'react-redux';
import { BsPerson } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { AiOutlineLock, AiOutlineMail, AiOutlineEdit } from "react-icons/ai";
// React-Redux
import Field from "@/components/Field";
import { toggleEditAccount } from '@/actions/account';
import Button from '../Button';
// styles
import "./account.scss"
// Locals
import hedgehog from '@/assets/images/hedgehog.jpg';

function EditAccount() {
  const dispatch = useDispatch();

  return (
    <form className="useraccount useraccount--register">
      <IoClose className="useraccount__close" onClick={() => dispatch(toggleEditAccount(false))} />
      <div className="useraccount__picture">
        <div className="useraccount__picture__redcircle" />
        <div className="useraccount__picture__yellowcircle" />
        <img className="useraccount__picture__img" src={hedgehog} alt="avatar" />
        <AiOutlineEdit className="useraccount__picture__edit" />
      </div>
      <div className="useraccount__info__edit">
        <div className="description_input"> Mon pseudo </div>
        <Field
          name="pseudo"
          placeholder="Modifier mon pseudo"
          //onChange={handleChangeField}
          value={''}
          Icon={BsPerson}
        />
        <div className="description_input"> Mon adresse e-mail </div>
        <Field
          name="email"
          type="email"
          placeholder="modifier mon e-mail"
          //onChange={handleChangeField}
          value={''}
          Icon={AiOutlineMail}
        />
        <div className="description_input"> Mon mot de passe </div>
        <Field
          name="password"
          type="password"
          placeholder="modifier mon mot de passe"
          //onChange={handleChangeField}
          value={''}
          Icon={AiOutlineLock}
        />
        <div className="description_input"> Confirmer mon mot de passe </div>
        <Field
          name="confirmedpassword"
          type="password"
          placeholder="confirmer mon mot de passe"
          //onChange={handleChangeField}
          value={''}
          Icon={AiOutlineLock}
        />
      </div>
      <div className="useraccount__buttons">
        <Button
          name="Valider les modifications"
          classname="secondary"
          type="submit"
          style={{ width: '78%', marginTop: '1em', fontSize: '0.8em' }}
        />
        <Button
          name="Supprimer mon compte"
          classname="primary"
          style={{ width: '70%', marginTop: '1em', fontSize: '0.8em' }}
        />
      </div>
    </form>
  );
}

export default EditAccount;
