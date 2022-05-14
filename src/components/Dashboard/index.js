// Dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IKImage } from 'imagekitio-react'
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
            <IKImage
              className="dashboard__card__img"
              path="dashboard_games_QUyTODpGw.png"
              transformation={[{ quality: 80 }]}
              lqip={{ active: true, quality: 20 }}
            />
            <h3 className="dashboard__card__title">Liste de jeux</h3>
          </div>
          <div className="dashboard__card dashboard__card--dust">
            <IKImage
              className="dashboard__card__img"
              path="dashboard_dust_gSj4rOw0A.png"
              transformation={[{ quality: 80 }]}
              lqip={{ active: true, quality: 20 }}
            />
            <h3 className="dashboard__card__title">Dépoussiérage</h3>
          </div>
          <div className="dashboard__card dashboard__card--friends">
            <IKImage
              className="dashboard__card__img"
              path="dashboard_friends_bPAmSxxrJ.png"
              transformation={[{ quality: 80 }]}
              lqip={{ active: true, quality: 20 }}
            />
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
                  <IKImage
                    className="dashboard__widget__game__img"
                    src={topGame.image_url}
                    transformation={[{ quality: 80 }]}
                    lqip={{ active: true, quality: 20 }}
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
