// Dependencies
import { useDispatch, useSelector } from 'react-redux';
// React-Redux
import UserAccount from "./UserAccount";
import EditAccount from "./EditAccount"
import { Navigate, useLocation } from 'react-router-dom';
// Styles
import "./account.scss"
import { useEffect } from 'react';
import { loginCheck } from '@/actions/user';

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Control if the edit mode of the account is toggled
  const isEdit = useSelector((state) => state.account.isEdit);
  // const logged = useSelector((state) => state.user.logged);
  const dispatch = useDispatch();
  // if (!logged) {
  //   return <Navigate to="/" replace />;
  // }
  // On location change, scroll the windows to the top and close the menu
  const location = useLocation();
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      dispatch(loginCheck())
    },
    [location, dispatch],
  );
  return (
    <div className="account">
      {(!isEdit) ? <UserAccount /> : <EditAccount />}
    </div>
  );
}

export default Account;