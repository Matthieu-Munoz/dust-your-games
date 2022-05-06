// styles
import "./account.scss"
import hedgehog from '@/assets/images/hedgehog.jpg';
import { FaChessPawn } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

function UserAccount() {
  return (
    <div className="useraccount__ctn">
      <div className="useraccount__picture">
        <div className="useraccount__picture__redcircle"></div>
        <div className="useraccount__picture__yellowcircle"></div>
        <img src={hedgehog} alt="avatar" />
      </div>
      <div className="useraccount__title">
        <h1>Bonjour Debbie</h1>
      </div>
      <div className="useraccount__email">
        debbie.baker@example.com
      </div>
      <button className="useraccount__btn" type="button">gérer mon compte</button>
      <div className="useraccount__statistics__ctn">
        <div className="useraccount__statistics__gamenumber">
          <FaChessPawn className="useraccount__statistics__gamenumber__icon" />
          <div className="useraccount_statistics__gamenumber__number">
            42
          </div>
        </div>
        <div className="useraccount__statistics__seperator" />
        <div className="useraccount__statistics__statistics__friendsnumber">
          <BsPeopleFill className="useraccount__statistics__friendsnumber__icon" />
          <div className="useraccount_statistics__friendsnumber__number">
            6
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccount;


