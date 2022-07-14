// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { GrMail } from "react-icons/gr";
import { FaGithub, FaLinkedin, FaTeamspeak } from "react-icons/fa";
import { BsQuestionCircle, BsPerson } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineSelector } from "react-icons/hi";
// Local | React-Redux
import Field from "Components/Field";
import Button from "../Button";
import { changeInputValue, isSubmitForm } from "Actions/contact";
import team from "Data/team";
// Styles
import "./contact.scss";

function Contact() {
  const dispatch = useDispatch();
  const { pseudo, email, objet, message } = useSelector(
    (state) => state.contact
  );

  const handleChangeField = (value, name) => {
    dispatch(changeInputValue(value, name));
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(isSubmitForm(false));
  };

  return (
    <div className="contact">
      <div className="contact__team">
        <h2 className="contact__team__title">L'équipe</h2>
        <div className="contact__team__ctn">
          {team.map((item) => (
            <div className="contact__team__card" key={item.id}>
              <div className="contact__team__picture">
                <div className="contact__team__picture__border" />
                <img
                  className="contact__team__picture__img"
                  src={`https://res.cloudinary.com/dyg/c_scale,q_80,w_140/${item.picture}`}
                  alt="avatar"
                />
              </div>
              <div className="contact__team__description">
                {item.name} <br />
                {item.job}
              </div>
              <div className="contact__team__links">
                <a
                  href={item.socials.mail}
                  target="blank"
                  className="contact__team__link"
                >
                  <GrMail className="contact__team__link" />
                </a>
                <a
                  href={item.socials.github}
                  target="blank"
                  className="contact__team__link"
                >
                  <FaGithub className="contact__team__link" />
                </a>
                <a
                  href={item.socials.linkedin}
                  target="blank"
                  className="contact__team__link"
                >
                  <FaLinkedin className="contact__team__link" />
                </a>
              </div>
            </div>
          ))}
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
              { value: "1", text: "AU SUJET DE..." },
              { value: "2", text: "Je n'arrive plus à acceder à mon compte" },
              { value: "3", text: "Une question sur le fonctionnement" },
              { value: "4", text: "Autre..." },
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
            Icon={FaTeamspeak}
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
