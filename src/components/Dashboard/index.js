// Dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Transformation } from 'cloudinary-react';
import { useNavigate } from 'react-router-dom';
// Local | React-Redux
import { dustAll, selectGame } from '@/actions/games';
import {
  fetchTopGames,
} from '@/actions/dashboard';
// Styles
import "./dashboard.scss";
import { changeModalSource, closeAlert, sendAlert, toggleModal } from '@/actions/app';
// Locals

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { games } = useSelector((state) => state.games);


  useEffect(
    () => {
      dispatch(fetchTopGames());
    },
    [dispatch],
  );

  const handleGameSelection = (id) => {
    dispatch(toggleModal('gameDesc'));
    dispatch(changeModalSource('dashboard'));
    dispatch(selectGame(id));
  };
  const handleDust = () => {
    if (games.length < 1) {
      dispatch(sendAlert('error', 'Commençons par ajouter un jeu !'));
      setTimeout(() => {
        dispatch(closeAlert());
      }, 2800);
    } else {
      console.log('alert');
      dispatch(dustAll())
    }
  };

  const topGames = useSelector((state) => state.dashboard.games);

  return (
    <div className="dashboard">
      <h2 className="dashboard__title">Tableau de bord</h2>
      <div className="dashboard__separator" />
      <div className="dashboard__cards">
        <div className="dashboard__card dashboard__card--games" onClick={() => navigate('../games', { replace: true })}>
          <Image cloudName="dyg" publicId="dashboard_games_ku2j4f.png" className="dashboard__card__img" >
            <Transformation quality="80" width="250" crop="scale" />
          </Image>
          <h3 className="dashboard__card__title">Liste de jeux</h3>
        </div>
        <div className="dashboard__card dashboard__card--dust" onClick={handleDust}>
          <Image cloudName="dyg" publicId="dashboard_dust_ljmzor.png" className="dashboard__card__img" >
            <Transformation quality="80" width="250" crop="scale" />
          </Image>
          <h3 className="dashboard__card__title">Dépoussiérage</h3>
        </div>
        <div className="dashboard__card dashboard__card--friends" onClick={() => dispatch(toggleModal('friendslist'))}>
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
              <div key={topGame.id} className="dashboard__widget__game" onClick={() => handleGameSelection(topGame.id)}>
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
  );
}

export default Dashboard;
