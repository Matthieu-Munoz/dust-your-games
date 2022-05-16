// Dependencies
import { GrMail } from "react-icons/gr";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsQuestionCircle, BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineSelector } from "react-icons/hi"
// React-Redux
import Field from "@/components/Field";
import Button from '../Button';
import { changeInputValue, isSubmitForm } from '@/actions/contact';
// Dependencies
import { useDispatch, useSelector } from 'react-redux';
// Styles
import "./contact.scss"

// Locals
import alicePicture from '@/assets/images/alice.png';
import manuPicture from '@/assets/images/manu.png';
import medhyPicture from '@/assets/images/medhy.png';
import mehdiPicture from '@/assets/images/mehdi.png';
import matthieuPicture from '@/assets/images/matthieu.png';

function Contact() {

  const dispatch = useDispatch();
  const { pseudo, email, objet, message } = useSelector((state) => state.contact);

  const handleChangeField = (value, name) => {
    dispatch(changeInputValue(value, name));
  }

  const handleFormSubmit = (evt) => {
  evt.preventDefault();
  dispatch(isSubmitForm())
  }

return (
  <div className="contact">
    <div className="contact__team">
      <h2 className="contact__team__title">L'équipe</h2>
      <div className="contact__team__ctn">
        <div className="contact__team__card">
          <div className="contact__team__picture">
            <div className="contact__team__picture__border" />
            <img className="contact__team__picture__img" src={matthieuPicture} alt="matthieu" />
          </div>
          <div className="contact__team__description">
            Matthieu M. <br />
            Développeur React.js
          </div>
          <div className="contact__team__links">
            <a href="/" className="contact__team__link">
              <GrMail className="contact__team__link" />
            </a>
            <a href="/" className="contact__team__link">
              <FaGithub className="contact__team__link" />
            </a>
            <a href="/" className="contact__team__link">
              <FaLinkedin className="contact__team__link" />
            </a>
          </div>
        </div>
        <div className="contact__team__card">
          <div className="contact__team__picture">
            <div className="contact__team__picture__border" />
            <img className="contact__team__picture__img" src={alicePicture} alt="alice" />
          </div>
          <div className="contact__team__description">
            Alice C. <br />
            Développeuse React.js
          </div>
          <div className="contact__team__links">
            <a href="/" className="contact__team__link">
              <GrMail className="contact__team__link" />
            </a>
            <a href="/" className="contact__team__link">
              <FaGithub className="contact__team__link" />
            </a>
            <a href="/" className="contact__team__link">
              <FaLinkedin className="contact__team__link" />
            </a>
          </div>
        </div>
        <div className="contact__team__card">
          <div className="contact__team__picture">
            <div className="contact__team__picture__border" />
            <img className="contact__team__picture__img" src={manuPicture} alt="manu" />
          </div>
          <div className="contact__team__description">
            Manu S. <br />
            Développeur React.js
          </div>
          <div className="contact__team__links">
            <a href="/" className="contact__team__link">
              <GrMail className="contact__team__link" />
            </a>
            <a href="/" className="contact__team__link">
              <FaGithub className="contact__team__link" />
            </a>
            <a href="/" className="contact__team__link">
              <FaLinkedin className="contact__team__link" />
            </a>
          </div>
        </div>
        <div className="contact__team__card">
          <div className="contact__team__picture">
            <div className="contact__team__picture__border" />
            <img className="contact__team__picture__img" src={medhyPicture} alt="medhy" />
          </div>
          <div className="contact__team__description">
            Medhy D. <br />
            Développeur Symfony
          </div>
          <div className="contact__team__links">
            <a href="/" className="contact__team__link">
              <GrMail className="contact__team__link" />
            </a>
            <a href="/" className="contact__team__link">
              <FaGithub className="contact__team__link" />
            </a>
            <a href="/" className="contact__team__link">
              <FaLinkedin className="contact__team__link" />
            </a>
          </div>
        </div>
        <div className="contact__team__card">
          <div className="contact__team__picture">
            <div className="contact__team__picture__border" />
            <img className="contact__team__picture__img" src={mehdiPicture} alt="mehdi" />
          </div>
          <div className="contact__team__description">
            Mehdi B. <br />
            Développeur Symfony
          </div>
          <div className="contact__team__links">
            <a href="/" className="contact__team__link">
              <GrMail className="contact__team__link" />
            </a>
            <a href="/" className="contact__team__link">
              <FaGithub className="contact__team__link" />
            </a>
            <a href="/" className="contact__team__link">
              <FaLinkedin className="contact__team__link" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="contact__separator" />
    <div className="contact__form">
      <h2 className="contact__form__title">Nous contacter</h2>
      <form className="contact__form__section">
        <Field
          name="pseudo"
          type="text"
          placeholder="pseudo"
          onChange={handleChangeField}
          value={pseudo}
          Icon={BsPerson}
        />
        <Field
          name="email"
          type="email"
          placeholder="e-mail"
          onChange={handleChangeField}
          value={email}
          Icon={AiOutlineMail}
        />
        <Field
          name="objet"
          onChange={handleChangeField}
          value={objet}
          Icon={BsQuestionCircle}
          SecondIcon={HiOutlineSelector}
          options={[
            { value: "object", text: "AU SUJET DE..." },
            { value: "object", text: "Choisir une option" },
            { value: "object", text: "Choisir une option" },
          ]}
          field="select"
        />
        <Field
          name="message"
          placeholder="Votre message..."
          field="textarea"
          value={message}
          onChange={handleChangeField}
        />
        <Button
          name="envoyer"
          classname="primary"
          type="submit"
          onclick={handleFormSubmit}
        />
        {/*<div className="information">
        N'hésitez pas à nous envoyer un message.
        Pour nous laisser une note :
      </div> */}
      </form>
    </div>

  </div>
);
}

export default Contact;
