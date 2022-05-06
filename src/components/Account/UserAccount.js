// styles
import "./account.scss"
import hedgehog from 'assets/images/hedgehog.jpg';
import { FaChessPawn } from "react-icons/fa";
import { RiUserHeartFill } from "react-icons/ri";



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
        <p>debbie.baker@example.com</p>
      </div>
      <button className="useraccount__btn" type="button">gérer mon compte</button>
      <div className="useraccount__statistics__ctn">
        <div className="useraccount__statistics__gamenumber">
          <FaChessPawn className="useraccount__statistics__gamenumber__icon" />
          <p>42</p>
        </div>
        <div className="useraccount__statistics__seperator" />
        <div className="useraccount__statistics__statistics__friendsnumber"></div>
        <RiUserHeartFill className="useraccount__statistics__friendsnumber__icon" />
        <p>6</p>
      </div>
    </div>
  );
}

export default UserAccount;


