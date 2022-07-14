// Dependencies
// React-Redux
// styles
import "./intro.scss";

function Intro() {
  return (
    <div className="intro">
      <h2 className="intro__title">bienvenue !</h2>

      <div className="intro__cards">
        <div className="cards__section">
          <div className="cards__section__card cards__section__card--games">
            <img
              className="cards__section__card__img"
              src={`https://res.cloudinary.com/dyg/c_scale,q_80,w_250/dashboard_games_ku2j4f.png`}
              alt="avatar"
            />
            <h3 className="cards__section__card__title">Liste de jeux</h3>
          </div>
          <p className="cards__section__text cards__section__text--games">
            Gérez vos jeux de façon simple et ludique : parcourez une infinité
            de jeux, effectuez des recherches et créez votre liste de jeux
            personnalisée selon vos envies.
          </p>
        </div>
        <div className="cards__section">
          <div className="cards__section__card cards__section__card--dust">
            <img
              className="cards__section__card__img"
              src={`https://res.cloudinary.com/dyg/c_scale,q_80,w_250/dashboard_dust_ljmzor.png`}
              alt="avatar"
            />
            <h3 className="cards__section__card__title">Dépoussiérage</h3>
          </div>
          <p className="cards__section__text cards__section__text--dust">
            Grâce à notre algorithme de dépoussiérage, fini les jeux laissés au
            placard : effectuez un tirage au sort qui prend en compte les jeux
            auxquels vous avez joué récemment ou non.
          </p>
        </div>
        <div className="cards__section">
          <div className="cards__section__card cards__section__card--friends">
            <img
              className="cards__section__card__img"
              src={`https://res.cloudinary.com/dyg/c_scale,q_80,w_250/dashboard_friends_dyriwm.png`}
              alt="avatar"
            />
            <h3 className="cards__section__card__title">Liste d'amis</h3>
          </div>
          <p className="cards__section__text cards__section__text--friends">
            Accédez à votre liste d’amis. Connectez-vous à votre entourage et
            accédez à leurs jeux à tout moment. Vous saurez enfin quoi offrir
            aux anniversaires
          </p>
        </div>
      </div>
    </div>
  );
}

export default Intro;
