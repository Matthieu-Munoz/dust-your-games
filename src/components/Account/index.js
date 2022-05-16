// Dependencies
import { useSelector } from 'react-redux';
// React-Redux
import UserAccount from "./UserAccount";
import EditAccount from "./EditAccount"
import { Navigate } from 'react-router-dom';
// Styles
import "./account.scss"

function Account() {
  // Control if the edit mode of the account is toggled
  const isEdit = useSelector((state) => state.account.isEdit);
  const logged = useSelector((state) => state.user.logged);

  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="account">
      {(!isEdit) ? <UserAccount /> : <EditAccount />}
    </div>
  );
}

export default Account;
