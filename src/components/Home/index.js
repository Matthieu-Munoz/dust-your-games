// Dependencies
import { useSelector } from 'react-redux';
// React-Redux
import Loginform from "./Loginform";
import RegisterForm from "./Registerform";
// Styles
import "./home.scss"

function Home() {
  // Control if the loginForm or the registerForm is displayed
  const isLoginForm = useSelector((state) => state.home.isLoginForm);

  return (
    <div className="userform">
      {(isLoginForm) ? <Loginform /> : <RegisterForm />}
    </div>
  );
}

export default Home;
