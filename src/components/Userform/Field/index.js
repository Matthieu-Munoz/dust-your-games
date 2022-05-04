// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';

// == Composant
function Field({
  value,
  type,
  name,
  placeholder,
  onChange,
  Icon,
}) {
  const handleChange = (evt) => {
    // on observe que la fonction a passer au composant
    // Field devra accepter 2 paramètres :
    // - en 1 : la valeur à appliquer au champ,
    // - en 2 : le nom du champ concerné par la mise à jour
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

// Valeurs par défaut pour les props
Field.defaultProps = {
  value: '',
  type: 'text',
};

// == Export
export default Field;
