// Dependencies
import PropTypes from 'prop-types';
import TextareaAutosize from 'react-autosize-textarea';
// React-Redux
// Styles
import './style.scss';

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
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <>
      {(field === "input") && (
        <div className="field">
          {(Icon !== null) && <Icon className="field__icon" />}
          <input
            name={name}
            className="field__input"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={handleChange} />
          {(SecondIcon !== null) && <SecondIcon className="field__icon field__icon--second" />}
        </div>
      )}
      {(field === "textarea") && (
        <div className="field">
          {(Icon !== null) && <Icon className="field__icon" />}
          <TextareaAutosize
            name={name}
            placeholder={placeholder}
            className="field__textarea"
            style={{ maxHeight: 100, resize: 'none' }}
          />
          {(SecondIcon !== null) && <SecondIcon className="field__icon field__icon--second" />}
        </div>
      )}
      {(field === "select") && (
        <div className="field">
          {(Icon !== null) && <Icon className="field__icon" />}
          <select name={name} className="field__select">
            {options.map((option) => (
              <option value={option.value} key={option.value}>{option.text}</option>
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
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.any,
  SecondIcon: PropTypes.any,
  field: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      text: PropTypes.string,
    })),
};

Field.defaultProps = {
  value: '',
  type: 'text',
  Icon: null,
  SecondIcon: null,
  field: "input",
  options: [{ value: "", text: "Choisir une option" },],
};

export default Field;
