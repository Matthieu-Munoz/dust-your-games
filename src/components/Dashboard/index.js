// Dependencies

// React-Redux

// Styles
import "./dashboard.scss";

// Locals
// import dashboard_top1 from '@/assets/images/dashboard_top1.png';
// import dashboard_top2 from '@/assets/images/dashboard_top2.png';
// import dashboard_top3 from '@/assets/images/dashboard_top3.png';

function Dashboard() {
  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Tableau de bord</h2>
      <div className="dashboard__separator" />
      <div className="dashboard__cards">
        <div className="dashboard__card dashboard__card--games">
          <h3 className="dashboard__card__title">Liste de jeux</h3>
        </div>
        <div className="dashboard__card dashboard__card--dust">
          <h3 className="dashboard__card__title">Dépoussiérage</h3>
        </div>
        <div className="dashboard__card dashboard__card--friends">
          <h3 className="dashboard__card__title">Liste d'amis</h3>
        </div>
      </div>
      <div className="dashboard__separator" />
      <div className="dashboard__widget">
        <h3 className="dashboard__widget__title">Top 3</h3>
        <div className="dashboard__widget__games">
          <div className="dashboard__widget__game">
            <img src="{dashboard_top1}" alt="" className="dashboard__widget__game__img" />
            <div className="dashboard__widget__game__name">Nom du jeu</div>
          </div>
          <div className="dashboard__widget__game">
            <img src="{dashboard_top2}" alt="" className="dashboard__widget__game__img" />
            <div className="dashboard__widget__game__name">Nom du jeu</div>
          </div>
          <div className="dashboard__widget__game">
            <img src="{dashboard_top3}" alt="" className="dashboard__widget__game__img" />
            <div className="dashboard__widget__game__name">Nom du jeu</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
