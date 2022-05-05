import { useSelector } from 'react-redux';
import Loginform from "./Loginform";
import RegisterForm from "./Registerform";
// styles
import "./home.scss"

function Home() {
  const isLoginForm = useSelector((state) => state.home.isLoginForm);

  return (
    <div className="userform">
      {(isLoginForm) ? <Loginform /> : <RegisterForm />}
    </div>
  );
}

export default Home;
