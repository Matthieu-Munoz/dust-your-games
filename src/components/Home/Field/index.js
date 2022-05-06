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
};

Field.defaultProps = {
  value: '',
  type: 'text',
};

export default Field;
