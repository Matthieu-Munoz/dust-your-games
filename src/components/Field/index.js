// Dependencies
import PropTypes from 'prop-types';
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
}) {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  return (
    <div className="field">
      <Icon className="field__icon" />
      <input
        name={name}
        className="field__input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange} />
      {(SecondIcon !== null) && <SecondIcon className="field__icon field__icon--second" />}
    </div>
  );
}

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  Icon: PropTypes.any.isRequired,
  SecondIcon: PropTypes.any,
};

Field.defaultProps = {
  value: '',
  type: 'text',
  SecondIcon: null,
};

export default Field;
