// Dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Local | React-Redux
import UserAccount from "./UserAccount";
import EditAccount from "./EditAccount"
import { useNavigate } from 'react-router-dom';
import { fetchUser } from '@/actions/user';
// Styles
import "./account.scss"

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Control if the edit mode of the account is toggled
  const isEdit = useSelector((state) => state.account.isEdit);
  const loginChecked = useSelector((state) => state.user.loginChecked);

  useEffect(
    () => {
      dispatch(fetchUser())
      if (!loginChecked) {
        navigate('../', { replace: true });
      }
    },
    [],
  );
  return (
    <div className="account">
      {(!isEdit) ? <UserAccount /> : <EditAccount />}
    </div>
  );
}

export default Account;