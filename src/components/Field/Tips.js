// Dependencies
import PropTypes from 'prop-types';
import { AiOutlineExclamationCircle, AiOutlineQuestionCircle } from 'react-icons/ai';
// React-Redux
// Styles
import './style.scss';
import Tooltip from 'react-tooltip-lite';

function Tips({
  error,
  tip,
  info,
  infoTip,
}) {
  return (
    <>
      {error ?
        <Tooltip
          distance={30}
          arrowSize={5}
          content={tip}
          color="hsl(0, 51%, 43%)"
          background="hsl(0, 51%, 81%"
          direction="right"
          className="target errorTip"
          tipContentClassName="arrow-content-tooltip">
          <AiOutlineExclamationCircle className="field__icon field__icon--error" />
        </Tooltip>
        :
        (info &&
          <Tooltip
            eventOn="onClick"
            eventOff="onMouseOut"
            useHover={false}
            distance={30} arrowSize={5}
            content={(infoTip)}
            direction="right"
            className="target infoTip"
            tipContentClassName="arrow-content-tooltip">
            <AiOutlineQuestionCircle className="field__icon field__icon--info" />
          </Tooltip>
        )
      }
    </>
  );
}

Tips.propTypes = {
  error: PropTypes.bool,
  tip: PropTypes.string,
  info: PropTypes.bool,
  infoTip: PropTypes.any,
};

Tips.defaultProps = {
  error: false,
  tip: 'Merci de verifier cette information',
  info: false,
  infoTip: "",
};

export default Tips;
