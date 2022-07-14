// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { BsPeopleFill } from "react-icons/bs";
import { FaChessPawn } from "react-icons/fa";
// React-Redux
import { toggleEditAccount } from "Actions/account";
import Button from "../Button";

// Styles
import "./account.scss";
// Locals

function UserAccount() {
  const dispatch = useDispatch();
  let { pseudo_name, email, nb_games, image } = useSelector(
    (state) => state.account
  );
  if (image === null) {
    image = "default-avatar_ld0jlt.png";
  }

  return (
    <div className="useraccount">
      <div className="useraccount__info">
        <div className="useraccount__picture">
          <div className="useraccount__picture__redcircle" />
          <div className="useraccount__picture__yellowcircle" />
          <img
            className="useraccount__picture__img"
            src={`https://res.cloudinary.com/dyg/c_scale,h_150,q_80,w_150/${image}`}
            alt="avatar"
          />
        </div>
        <h2 className="useraccount__title">Bonjour {pseudo_name}</h2>
        <div className="useraccount__email">{email}</div>
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
            {nb_games}
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
