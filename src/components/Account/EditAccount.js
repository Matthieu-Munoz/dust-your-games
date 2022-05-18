// Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import { BsPerson } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { AiOutlineLock, AiOutlineMail, AiOutlineEdit } from "react-icons/ai";
import { WidgetLoader, Widget } from 'react-cloudinary-upload-widget';
// Local | React-Redux
import { deleteUser, editUser } from '@/actions/user';
import Field from "@/components/Field";
import { toggleEditAccount, changeField } from '@/actions/account';
import Button from '../Button';
// styles
import "./account.scss"
import 'react-confirm-alert/src/react-confirm-alert.css';
// Locals




function EditAccount() {
  const dispatch = useDispatch();
  const { pseudo_name, email, password, confirmedpassword } = useSelector((state) => state.account);
  let { image } = useSelector((state) => state.user);
  if (image === null) {
    image = 'default-avatar_ld0jlt.png'
  }

  const handleChange = (value, field) => {
    dispatch(changeField(value, field));
  }

  const handleEdit = (evt) => {
    evt.preventDefault();
    dispatch(editUser())
  }
  const handleDelete = (evt) => {
    confirmAlert({
      title: 'Vous êtes sur le point de supprimer votre compte',
      message: 'Attention, cette action est irréversible',
      buttons: [
        {
          label: 'Supprimer',
          onClick: () => dispatch(deleteUser())
        },
        {
          label: 'Annuler',
        }
      ]
    });
  };


  return (
    <form className="useraccount useraccount--register">
      <WidgetLoader />
      <Widget
        sources={["local", "url", "camera", "google_drive", "dropbox"]}
        resourceType={'image'} // optionally set with 'auto', 'image', 'video' or 'raw' -> default = 'auto'
        cloudName={'dyg'} // your cloudinary account cloud name.
        // Located on https://cloudinary.com/console/
        uploadPreset={'preset1'} // check that an upload preset exists and check mode is signed or unisgned
        defaultSource={"local"}
        buttonText={<AiOutlineEdit />} // default 'Upload Files'
        style={{
          position: "absolute",
          borderRadius: "1em",
          width: "2em",
          height: "2em",
        }}
        showAdvancedOptions={false}
        cropping={true}
        multiple={false}
        autoClose={true} // will close the widget after success. Default true
        // onSuccess={successCallBack}
        // onFailure={failureCallBack}
        widgetStyles={{
          palette: {
            window: "#32374E",
            windowBorder: "#414867",
            tabIcon: "#D82C54",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#D82C54",
            action: "#D82C54",
            inactiveTabIcon: "#E4EBF1",
            error: "#F44235",
            inProgress: "#D82C54",
            complete: "#3B9A64",
            sourceBg: "#FFDFC1"
          },
          fonts: {
            default: null,
            "'Montserrat', sans-serif": {
              url: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap',
              active: true
            }
          }
        }}
        destroy={true}
      />
      <IoClose className="useraccount__close" onClick={() => dispatch(toggleEditAccount(false))} />
      <div className="useraccount__picture">
        <div className="useraccount__picture__redcircle" />
        <div className="useraccount__picture__yellowcircle" />
        <img className="useraccount__picture__img" src={`https://res.cloudinary.com/dyg/c_scale,h_150,q_80,w_150/${image}`} alt="avatar" />
      </div>
      <div className="useraccount__info__edit">
        <div className="description_input"> Mon pseudo </div>
        <Field
          name="pseudo_name"
          placeholder="Modifier mon pseudo"
          onChange={handleChange}
          value={pseudo_name}
          Icon={BsPerson}
        />
        <div className="description_input"> Mon adresse e-mail </div>
        <Field
          name="email"
          type="email"
          placeholder="modifier mon e-mail"
          onChange={handleChange}
          value={email}
          Icon={AiOutlineMail}
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
        />
        <div className="description_input"> Confirmer mon mot de passe </div>
        <Field
          name="confirmedpassword"
          type="password"
          placeholder="confirmer mon mot de passe"
          onChange={handleChange}
          field="password"
          value={confirmedpassword}
          Icon={AiOutlineLock}
        />
      </div>
      <div className="useraccount__buttons">
        <Button
          name="Valider les modifications"
          classname="secondary"
          type="submit"
          style={{ width: '78%', marginTop: '1em', fontSize: '0.8em' }}
          onclick={handleEdit}
        />
        <Button
          name="Supprimer mon compte"
          classname="primary"
          style={{ width: '70%', marginTop: '1em', fontSize: '0.8em' }}
          onclick={handleDelete}
        />
      </div>
    </form>
  );
}

export default EditAccount;
