// Dependencies

// React-Redux

// Styles
import "./dashboard.scss"

function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Tableau de bord</h2>
      <div className="dashboard__separator" />
      <div className="dashboard__cards">
        <div className="dashboard__card">
          <h3 className="dashboard__card__title">Liste de jeux</h3>
        </div>
        <div className="dashboard__card">
          <h3 className="dashboard__card__title">Dépoussiérage</h3>
        </div>
        <div className="dashboard__card">
          <h3 className="dashboard__card__title">Liste d'amis</h3>
        </div>
      </div>
      <div className="dashboard__separator" />
      <div className="dashboard__widget">
        <h3 className="dashboard__widget__title">Top 3</h3>
        <div className="dashboard__widget__games">
          <div className="dashboard__widget__game">
            <img src="/" alt="" className="dashboard__widget__game__img" />
            <div className="dashboard__widget__game__name">Nom du jeu</div>
          </div>
          <div className="dashboard__widget__game">
            <img src="/" alt="" className="dashboard__widget__game__img" />
            <div className="dashboard__widget__game__name">Nom du jeu</div>
          </div>
          <div className="dashboard__widget__game">
            <img src="/" alt="" className="dashboard__widget__game__img" />
            <div className="dashboard__widget__game__name">Nom du jeu</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
