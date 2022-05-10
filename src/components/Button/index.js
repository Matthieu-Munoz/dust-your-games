// Dependencies
import PropTypes from 'prop-types';
import classNames from 'classnames';
// React-Redux
// Styles
import './button.scss';

function Button({
    name,
    type,
    classname,
    style,
    onclick
}) {
    const cssClass = classNames(
        'appbutton',
        { 'appbutton--primary': (classname === 'primary') },
        { 'appbutton--secondary': (classname === 'secondary') }
    );
    return (
        <button onClick={onclick} className={cssClass} type={type} style={style} >{name}</button>
    );

}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    classname: PropTypes.string,
    style: PropTypes.object,
    onclick: PropTypes.func,
};

Button.defaultProps = {
    type: 'button',
    classname: '',
    style: {},
    onclick: '',
};

export default Button;
