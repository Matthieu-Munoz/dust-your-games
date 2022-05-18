// styles
import './notification.scss';
import { useSelector } from 'react-redux';
import { AiOutlineCheckCircle, AiOutlineWarning } from 'react-icons/ai';
import classNames from 'classnames';

function Alerts() {
  const type = useSelector((state) => state.app.alert.type);
  const message = useSelector((state) => state.app.alert.message);
  const status = useSelector((state) => state.app.alert.status);
  const cssClass = classNames(`notification-${type}`, { show: status });
  return (
    <div id="notification" className={cssClass}>
      <div id="notification__icons">
        <AiOutlineCheckCircle className="notification__icon" id="check_icon" name="checkmark-circle-outline" />
        <AiOutlineWarning className="notification__icon" id="error_icon" name="alert-circle-outline" />
      </div>
      <div id="notification__messages">
        {message}
      </div>
    </div>
  );
}

export default Alerts;
