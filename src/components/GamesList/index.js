// Dependencies
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
//Icons
import { AiOutlineAppstoreAdd, AiOutlineCheckCircle, AiOutlineCloseCircle, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BiFilterAlt, BiSort, BiCategoryAlt } from "react-icons/bi";
import { BsSortAlphaDown, BsSortAlphaUp, BsSortDownAlt, BsSortDown, BsSearch, BsHourglassSplit, BsFillPeopleFill } from "react-icons/bs";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
// Local | React-Redux
import Field from "../Field";
import { fetchUser } from "@/actions/user";
import {
  closeAlert,
  sendAlert,
  toggleModal
} from '@/actions/app';
import { toggleFilterMenu, toggleFilter, selectGame, dustAll, fetchCategories, changeField, checkGame, dustBy } from "@/actions/games";
// Styles
import "./gameslist.scss"

function GamesList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginChecked = useSelector((state) => state.user.loginChecked);
  const { menuToggled, games, checkedGames, searchInput, categories } = useSelector((state) => state.games);
  const { checkFilter, sortAlphaFilter, sortNumFilter, sortDirFilter, categoriesFilter, timesFilter, playersFilter } = useSelector((state) => state.games.toggles);
  const sideClass = classNames('games__side', { 'games__side--openned': menuToggled });
  const orderFilterClass = classNames('games__side__filter__sorting__btn', { 'games__side__filter__sorting__btn--disable': !checkFilter });
  const CheckIconFilter = (!checkFilter) ? AiOutlineCheckCircle : AiOutlineCloseCircle;
  const AlpaIconFilter = (!sortAlphaFilter) ? BsSortAlphaDown : BsSortAlphaUp;
  const SortkIconFilter = (!sortNumFilter) ? BsSortDownAlt : BsSortDown;
  let gamesList = games;

  useEffect(
    () => {
      dispatch(fetchCategories())
      dispatch(fetchUser())
      if (!loginChecked) {
        navigate('../', { replace: true });
      }
      // eslint-disable-next-line
    }, [],
  );

  const handleChange = (value, field) => {
    dispatch(changeField(value, field));
  }

  const handleCheckingGames = () => {
    dispatch(toggleFilter('checkFilter', !checkFilter))
    if (checkFilter) {
      dispatch(toggleFilter('sortDirFilter', false))
      dispatch(sendAlert('check', 'Sélection manuelle désactivée.'));
      setTimeout(() => {
        dispatch(closeAlert());
      }, 2800);
    } else {
      dispatch(sendAlert('check', 'Sélection manuelle activée.'));
      setTimeout(() => {
        dispatch(closeAlert());
      }, 2800);
    }
  }

  const handleGameSelection = (name) => {
    dispatch(toggleModal('gameDesc'));
    dispatch(selectGame(name));
  };

  const filterGamesBySearch = (games, query) => {
    if (!query) {
      return games;
    }
    return games.filter((ite) => {
      const gameName = ite.game.name.toLowerCase();
      return gameName.includes(query.toLowerCase());
    });
  };

  const sortGames = (games) => {
    if (!sortDirFilter) {
      return games;
    } else {
      const trueFirst = [...games].sort((a, b) => Number(b.checked) - Number(a.checked));
      return trueFirst;
    }

  };

  if (checkFilter) {
    gamesList = sortGames(filterGamesBySearch(checkedGames, searchInput));
  } else {
    gamesList = filterGamesBySearch(games, searchInput);
  }

  return (
    <div className="games">
      <div className="games__list--scroll">
        <h2 className="games__list__title">Votre liste de jeux</h2>
        <div className="games__list">
          {gamesList && gamesList.map((ite) => (
            <div
              key={ite.game.name}
              className={checkFilter ? (ite.checked ? "games__list__game" : "games__list__game games__list__game--checked") : "games__list__game"}
              onClick={() => { !checkFilter ? handleGameSelection(ite.game.id) : dispatch(checkGame(ite.game.id)) }}
            >
              <img
                className="games__list__game__img"
                src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,q_80,w_150/${ite.game.image}`}
                alt={ite.game.name}
                onClick={() => handleGameSelection(ite.game.id)}
              />
              <div className="games__list__game__overlay">
                <div className="games__list__game__overlay--bg" />
                <div className="games__list__game__overlay--text">
                  {ite.game.name}
                </div>
              </div>
              {!checkFilter &&
                <>
                  {(ite.weight === 7) && <img
                    className="games__list__game__dusting games__list__game__dusting--dust7"
                    src={`https://res.cloudinary.com/dyg/image/upload/c_scale,h_150,q_80,w_150/gameDust_ehkwqd.png`}
                    alt="game dust"
                  />}
                  {(ite.weight === 8) && <img
                    className="games__list__game__dusting games__list__game__dusting--dust8"
                    src={`https://res.cloudinary.com/dyg/image/upload/c_scale,h_150,q_80,w_150/gameDust_ehkwqd.png`}
                    alt="game dust"
                  />}
                  {(ite.weight === 9) && <img
                    className="games__list__game__dusting games__list__game__dusting--dust9"
                    src={`https://res.cloudinary.com/dyg/image/upload/c_scale,h_150,q_80,w_150/gameDust_ehkwqd.png`}
                    alt="game dust"
                  />}
                  {(ite.weight === 3) && <img
                    className="games__list__game__dusting games__list__game__dusting--star1"
                    src={`https://res.cloudinary.com/dyg/image/upload/c_scale,h_150,q_80,w_150/stars1_grnmgb.png`}
                    alt="game dust"
                  />}
                  {(ite.weight === 2) && <img
                    className="games__list__game__dusting games__list__game__dusting--star2"
                    src={`https://res.cloudinary.com/dyg/image/upload/c_scale,h_150,q_80,w_150/stars2_doxaem.png`}
                    alt="game dust"
                  />}
                  {(ite.weight <= 1) && <img
                    className="games__list__game__dusting games__list__game__dusting--star3"
                    src={`https://res.cloudinary.com/dyg/image/upload/c_scale,h_150,q_80,w_150/stars3_yzsh69.png`}
                    alt="game dust"
                  />}
                </>
              }
            </div>
          ))}
        </div>
      </div>
      <div className={sideClass}>
        <div className="games__side__logo" onClick={() => { navigate('/', { replace: true }) }} />
        <div className="games__side__btns">
          <div className="games__side__btn" onClick={() => dispatch(toggleModal('addgames'))}>
            <AiOutlineAppstoreAdd className="games__side__btn__icon" />
            <div className="games__side__btn__name">Ajouter un jeu</div>
          </div>
          <div className="games__side__btn games__side__btn--filter" onClick={() => dispatch(toggleFilterMenu())}>
            <BiFilterAlt className="games__side__btn__icon" />
            <div className="games__side__btn__name">Filtrer</div>
          </div>
          <div className="games__side__btn" onClick={() => { !checkFilter ? dispatch(dustAll()) : dispatch(dustBy(checkedGames)) }}>
            <GiPerspectiveDiceSixFacesRandom className="games__side__btn__icon" />
            <div className="games__side__btn__name">Dépoussiérage</div>
          </div>
        </div>
        <div className="games__side__filter">
          <div className="games__side__filter__btns">
            <AiOutlineAppstoreAdd className="games__side__filter__btn" />
            <BiFilterAlt className="games__side__filter__btn games__side__filter__btn--filter" onClick={() => dispatch(toggleFilterMenu())} />
            <GiPerspectiveDiceSixFacesRandom className="games__side__filter__btn" />
          </div>
          <div className="games__side__filter--scroll">
            <div className="games__side__filter__sorting">
              <CheckIconFilter className={`games__side__filter__sorting__btn ${checkFilter && "games__side__filter__sorting__btn--active"}`} onClick={handleCheckingGames} />
              <AlpaIconFilter className={orderFilterClass} onClick={() => dispatch(toggleFilter('sortAlphaFilter', !sortAlphaFilter))} />
              <SortkIconFilter className={orderFilterClass} onClick={() => dispatch(toggleFilter('sortNumFilter', !sortNumFilter))} />
              <BiSort className={`${orderFilterClass} ${sortDirFilter && "games__side__filter__sorting__btn--active"}`} onClick={() => dispatch(toggleFilter('sortDirFilter', !sortDirFilter))} />
            </div>
            <Field
              name="searchInput"
              placeholder="Rechercher"
              Icon={BsSearch}
              value={searchInput}
              onChange={handleChange}
            />
            <div className="games__side__filter__ctn" >
              <div className="games__side__filter__type" onClick={() => dispatch(toggleFilter('categoriesFilter', !categoriesFilter))}>
                <BiCategoryAlt className="games__side__filter__type__icon" />
                <div className="games__side__filter__type__name">Catégories</div>
                {categoriesFilter ? <AiFillCaretUp className="games__side__filter__type__icon" /> : <AiFillCaretDown className="games__side__filter__type__icon" />}
              </div>
              {categoriesFilter && <div className="games__side__filter__type__items">
                {categories && categories.map((ite) => (
                  <div key={ite.name} className="games__side__filter__type__item">{ite.name}</div>
                ))}
              </div>}

            </div>
            <div className="games__side__filter__ctn" >
              <div className="games__side__filter__type" onClick={() => dispatch(toggleFilter('timesFilter', !timesFilter))}>
                <BsHourglassSplit className="games__side__filter__type__icon" />
                <div className="games__side__filter__type__name">Durée</div>
                {timesFilter ? <AiFillCaretUp className="games__side__filter__type__icon" /> : <AiFillCaretDown className="games__side__filter__type__icon" />}
              </div>
              {timesFilter && <div className="games__side__filter__type__items">
                <div className="games__side__filter__type__item">-10min</div>
                <div className="games__side__filter__type__item">±20min</div>
                <div className="games__side__filter__type__item">±30min</div>
                <div className="games__side__filter__type__item">±45min</div>
                <div className="games__side__filter__type__item">+60min</div>
              </div>}
            </div>
            <div className="games__side__filter__ctn" >
              <div className="games__side__filter__type" onClick={() => dispatch(toggleFilter('playersFilter', !playersFilter))}>
                <BsFillPeopleFill className="games__side__filter__type__icon" />
                <div className="games__side__filter__type__name">Joueurs</div>
                {playersFilter ? <AiFillCaretUp className="games__side__filter__type__icon" /> : <AiFillCaretDown className="games__side__filter__type__icon" />}
              </div>
              {playersFilter && <div className="games__side__filter__type__items">
                <input className="games__side__filter__type__item"></input>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesList;
