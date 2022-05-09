// Dependencies
import { useSelector } from 'react-redux';
// React-Redux
import UserAccount from "./UserAccount";
import EditAccount from "./EditAccount"
// Styles
import "./account.scss"

function Account() {
  // Control if the edit mode of the account is toggled
  const isEdit = useSelector((state) => state.account.isEdit);

  return (
    <div className="account">
      {(!isEdit) ? <UserAccount /> : <EditAccount />}
    </div>
  );
}

export default Account;
