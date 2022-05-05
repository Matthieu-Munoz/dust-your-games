import Loginform from "./Loginform";
import RegisterForm from "./Registerform";
// styles
import "./home.scss"

function Home() {
  return (
    <div className="userform">
      <Loginform />
      {/* <RegisterForm /> */}
    </div>
  );
}

export default Home;
