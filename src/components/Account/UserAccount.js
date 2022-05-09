// Dependencies
import { useDispatch } from 'react-redux';
import { BsPeopleFill } from "react-icons/bs";
import { FaChessPawn } from "react-icons/fa";
// React-Redux
import { toggleEditAccount } from '@/actions/account';
// Styles
import "./account.scss"
// Locals
import hedgehog from '@/assets/images/hedgehog.jpg';

function UserAccount() {
  const dispatch = useDispatch();

  return (
    <div className="useraccount">
      <div className="useraccount__picture">
        <div className="useraccount__picture__redcircle" />
        <div className="useraccount__picture__yellowcircle" />
        <img className="useraccount__picture__img" src={hedgehog} alt="avatar" />
      </div>
      <h2 className="useraccount__title">Bonjour Debbie</h2>
      <div className="useraccount__email">
        debbie.baker@example.com
      </div>
      <button onClick={() => dispatch(toggleEditAccount(true))} className="useraccount__btn" type="button">gérer mon compte</button>
      <div className="useraccount__statistics">
        <div className="useraccount__statistics__gamenumber">
          <FaChessPawn className="useraccount__statistics__gamenumber__icon" />
          <div className="useraccount__statistics__gamenumber__number">
            42
          </div>
        </div>
        <div className="useraccount__statistics__seperator" />
        <div className="useraccount__statistics__friendsnumber">
          <BsPeopleFill className="useraccount__statistics__friendsnumber__icon" />
          <div className="useraccount__statistics__friendsnumber__number">
            6
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;