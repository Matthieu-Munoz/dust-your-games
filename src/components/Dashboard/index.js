// Dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Transformation } from 'cloudinary-react';
// React-Redux
import Loader from '@/components/Loader'
import {
  fetchTopGames,
} from '@/actions/dashboard';
// Styles
import "./dashboard.scss";
// Locals

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopGames());
  }, [dispatch]);

  const topGames = useSelector((state) => state.dashboard.games);
  const loading = useSelector((state) => state.dashboard.loading);

  return (
    <>
      {loading && <Loader />}
      {!loading && <div className="dashboard">
        <h2 className="dashboard__title">Tableau de bord</h2>
        <div className="dashboard__separator" />
        <div className="dashboard__cards">
          <div className="dashboard__card dashboard__card--games">
            <Image cloudName="dyg" publicId="dashboard_games_ku2j4f.png" className="dashboard__card__img" >
              <Transformation quality="80" width="250" crop="scale" />
            </Image>
            <h3 className="dashboard__card__title">Liste de jeux</h3>
          </div>
          <div className="dashboard__card dashboard__card--dust">
            <Image cloudName="dyg" publicId="dashboard_dust_ljmzor.png" className="dashboard__card__img" >
              <Transformation quality="80" width="250" crop="scale" />
            </Image>
            <h3 className="dashboard__card__title">Dépoussiérage</h3>
          </div>
          <div className="dashboard__card dashboard__card--friends">
            <Image cloudName="dyg" publicId="dashboard_friends_dyriwm.png" className="dashboard__card__img" >
              <Transformation quality="80" width="250" crop="scale" />
            </Image>
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
                  <img
                    className="dashboard__widget__game__img"
                    src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,q_60,w_150/${topGame.image_url}`}
                    alt={topGame.name}
                  />
                  <div className="dashboard__widget__game__name">{topGame.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default Dashboard;
