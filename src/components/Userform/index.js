import Loginform from "./Loginform";
import RegisterForm from "./Registerform";
// styles
import "./userform.scss"

function Userform() {
  return (
    <div className="userform">
      {/* <Loginform /> */}
      <RegisterForm />
    </div>
  );
}

export default Userform;
