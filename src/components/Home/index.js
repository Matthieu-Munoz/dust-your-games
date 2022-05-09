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
    <div className="home">
      <div className="userform">
        {(isLoginForm) ? <Loginform /> : <RegisterForm />}
      </div>
      <div className="presentation">
        <div className='presentation__logo' />
        <div className="presentation__text">
          <div className="presentation__text__first">
            À quoi allons-nous jouer ce soir ? Qu’avons-nous sur nos étagères ? Depuis combien de temps ce jeu prend la poussière ? Autant de questions qui ne facilitent pas la vie des joueurs de jeux de société. Depuis notre application, nous souhaitons pouvoir trouver rapidement un jeu adapté pour toutes situations : que vous ayez 5 minutes ou 3 heures, que vous soyez jeune ou moins jeune, que vous soyez un, deux, trois, douze... !
          </div>
          <div className="presentation__text__second">
            Avec Dust Your Games, dépoussiérons nos
            jeux en un seul clic.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
