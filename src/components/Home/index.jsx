// Dependencies
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Local | React-Redux
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import PasswordRecovery from "./PasswordRecovery";
// Styles
import "./home.scss";

function Home() {
  // Control if the loginForm or the registerForm is displayed
  const { isLoginForm, isRegisterForm, isPasswordRecovery } = useSelector(
    (state) => state.home
  );

  return (
    <div className="home">
      <Link to="/" className="presentation__logo presentation__logo--mobile" />
      <div className="userform">
        {isLoginForm && <LoginForm />}
        {isRegisterForm && <RegisterForm />}
        {isPasswordRecovery && <PasswordRecovery />}
      </div>
      <div className="presentation">
        <div className="presentation__logo presentation__logo--desktop" />
        <div className="presentation__text">
          <h3 className="presentation__text__title">
            À quoi allons-nous jouer ce soir ?
          </h3>
          <h3 className="presentation__text__title">
            Qu’avons-nous sur nos étagères ?
          </h3>
          <h3 className="presentation__text__title">
            Depuis combien de temps ce jeu prend la poussière ?
          </h3>
          <div className="presentation__text__first">
            Autant de questions qui ne facilitent pas la vie des joueurs de jeux
            de société. Depuis notre application, nous souhaitons pouvoir
            trouver rapidement un jeu adapté pour toutes situations : que vous
            ayez 5 minutes ou 3 heures, que vous soyez jeune ou moins jeune, que
            vous soyez un, deux, trois, douze... !
          </div>
          <div className="presentation__text__second">
            Avec Dust your Games, dépoussiérons nos jeux en un seul clic.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
