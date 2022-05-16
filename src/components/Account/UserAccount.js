// Dependencies
import { useDispatch, useSelector } from 'react-redux';
import { BsPeopleFill } from "react-icons/bs";
import { FaChessPawn } from "react-icons/fa";
// React-Redux
import { toggleEditAccount } from '@/actions/account';
import Button from '../Button';

// Styles
import "./account.scss"
// Locals
import hedgehog from '@/assets/images/hedgehog.jpg';

function UserAccount() {
  const dispatch = useDispatch();
  const { pseudo, email } = useSelector((state) => state.account);


  return (
    <div className="useraccount">
      <div className="useraccount__info">
        <div className="useraccount__picture">
          <div className="useraccount__picture__redcircle" />
          <div className="useraccount__picture__yellowcircle" />
          <img className="useraccount__picture__img" src={hedgehog} alt="avatar" />
        </div>
        <h2 className="useraccount__title">Bonjour {pseudo}</h2>
        <div className="useraccount__email">
          { email }
        </div>
          <Button
            name="gérer mon compte"
            classname="secondary"
            onclick={() => dispatch(toggleEditAccount(true))}
          />
      </div>
      <div className="useraccount__statistics">
        <div className="useraccount__statistics__gamenumber">
          <FaChessPawn className="useraccount__statistics__gamenumber__icon" />
          <div className="useraccount__statistics__gamenumber__number">
            42
          </div>
        </div>
        <div className="useraccount__statistics__separator" />
        <div className="useraccount__statistics__friendsnumber">
          <BsPeopleFill className="useraccount__statistics__friendsnumber__icon" />
          <div className="useraccount__statistics__friendsnumber__number">
            0
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;
