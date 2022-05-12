// Dependencies
import { GrMail } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineSelector } from "react-icons/hi"

// React-Redux
import Field from "@/components/Field";
import Button from '../Button';

// Styles
import "./contact.scss"

// Locals
import alice from '@/assets/images/alice.png';
import manu from '@/assets/images/manu.png';
import medhy from '@/assets/images/medhy.png';
import mehdi from '@/assets/images/mehdi.png';
import matthieu from '@/assets/images/matthieu.png';

function Contact() {
  const handleChangeField = (value, name) => {
    console.log(value, name);
  };
  return (
    <div className="contact">
      <div className="contact__team">
        <h2 className="contact__team__title">L'équipe</h2>
        <div className="contact__team__ctn">
          <div className="contact__team__card">
            <div className="contact__team__picture">
              <div className="contact__team__picture__border" />
              <img className="contact__team__picture__img" src={matthieu} alt="matthieu" />
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
              <img className="contact__team__picture__img" src={alice} alt="alice" />
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
              <img className="contact__team__picture__img" src={manu} alt="manu" />
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
              <img className="contact__team__picture__img" src={medhy} alt="medhy" />
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
              <img className="contact__team__picture__img" src={mehdi} alt="mehdi" />
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
            value={''}
            Icon={BsPerson}
          />
          <Field
            name="email"
            type="email"
            placeholder="e-mail"
            onChange={handleChangeField}
            value={''}
            Icon={AiOutlineMail}
          />
          <Field
            name="objet"
            onChange={handleChangeField}
            value={''}
            Icon={BsQuestionCircle}
            SecondIcon={HiOutlineSelector}
            options={[
              { value: "", text: "AU SUJET DE..." },
              { value: "1", text: "Choisir une option" },
              { value: "2", text: "Choisir une option" },
            ]}
            field="select"
          />
          <Field
            name="message"
            placeholder="Votre message..."
            field="textarea"
            onChange={handleChangeField}
          />
          <Button
            name="envoyer"
            classname="primary"
            type="submit"
            onclick={() => console.log}
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
