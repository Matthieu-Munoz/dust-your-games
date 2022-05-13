// Dependencies
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// React-Redux
import {
  fetchTopGames,
} from '@/actions/dashboard';
// Styles
import "./dashboard.scss";
// Locals
function Dashboard() {
  const dispatch = useDispatch();

  const didMount = useRef(false);
  useEffect(() => {
    if (didMount.current) {
      dispatch(fetchTopGames());
    }
    else didMount.current = true;
  }, [dispatch]);


  const topGames = useSelector((state) => state.dashboard.games);

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
        <div className="dashboard__widget__scrollctn">
          <div className="dashboard__widget__games">
            {topGames && topGames.map((topGame) => (
              <div key={topGame.id} className="dashboard__widget__game">
                <img src={topGame.image_url} alt="" className="dashboard__widget__game__img" />
                <div className="dashboard__widget__game__name">{topGame.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
