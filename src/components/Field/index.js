// Dependencies
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { BiShow, BiHide } from "react-icons/bi";
// React-Redux
// Styles
import './style.scss';
import { togglePassword } from '@/actions/app';

function Field({
  value,
  type,
  name,
  placeholder,
  onChange,
  Icon,
  SecondIcon,
  field,
  options,
  max,
  error,
  tip,
  innerRef,
}) {
  const dispatch = useDispatch();
  const { passwordVisible } = useSelector((state) => state.app);
  const handlePassword = () => {
    dispatch(togglePassword());
  }
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <>
      {(field === "password") && (
        <>
          <div className="field">
            {(Icon !== null) && <Icon className="field__icon" />}
            <input
              name={name}
              className="field__input"
              type={passwordVisible ? "text" : "password"}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              max={max}
              required
            />
            {passwordVisible ? <BiHide className="field__icon field__icon--second" onClick={handlePassword} /> : <BiShow className="field__icon field__icon--second" onClick={handlePassword} />}
            {error && <AiOutlineExclamationCircle className="field__icon field__icon--error" data-tip={tip} />}
          </div>
        </>
      )}
      {(field === "input") && (
        <>
          <div className="field">
            {(Icon !== null) && <Icon className="field__icon" />}
            <input
              name={name}
              className="field__input"
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={handleChange}
              required
              ref={(innerRef) && innerRef}
            />
            {(SecondIcon !== null) && <SecondIcon className="field__icon field__icon--second" />}
            {error && <AiOutlineExclamationCircle className="field__icon field__icon--error" data-tip={tip} />}
          </div>
        </>
      )}
      {(field === "textarea") && (
        <div className="field">
          {(Icon !== null) && <Icon className="field__icon" />}
          <TextareaAutosize
            name={name}
            placeholder={placeholder}
            className="field__textarea"
            required
            style={{ maxHeight: 100, resize: 'none' }}
          />
          {(SecondIcon !== null) && <SecondIcon className="field__icon field__icon--second" />}
        </div>
      )}
      {(field === "select") && (
        <div className="field">
          {(Icon !== null) && <Icon className="field__icon" />}
          <select name={name} className="field__select" required>
            {options.map((option) => (
              <option value={option.value} key={option.value} >{option.text}</option>
            ))}
          </select>
          {(SecondIcon !== null) && <SecondIcon className="field__icon field__icon--second" />}
        </div>
      )}
    </>
  );
}

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.any,
  Icon: PropTypes.any,
  SecondIcon: PropTypes.any,
  field: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })),
  max: PropTypes.string,
  error: PropTypes.bool,
  tip: PropTypes.string,
  innerRef: PropTypes.any,
};

Field.defaultProps = {
  placeholder: '',
  value: '',
  type: 'text',
  Icon: null,
  SecondIcon: null,
  field: "input",
  options: [{ value: "", text: "Choisir une option" },],
  max: "",
  error: false,
  tip: 'Merci de verifier cette information',
  innerRef: null,
};

export default Field;
