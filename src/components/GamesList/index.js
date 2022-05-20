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
  toggleModal
} from '@/actions/app';
import { toggleFilterMenu, toggleFilter, selectGame, dustAll, fetchCategories, changeField, checkOneGame } from "@/actions/games";
// Styles
import "./gameslist.scss"

function GamesList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginChecked = useSelector((state) => state.user.loginChecked);
  const { menuToggled, games, checkedGames, searchInput, categories } = useSelector((state) => state.games);
  const { checkFilter, sortAlphaFilter, sortNumFilter, sortDirFilter, categoriesFilter, timesFilter, playersFilter } = useSelector((state) => state.games.toggles);
  const sideClass = classNames('games__side', { 'games__side--openned': menuToggled });
  const CheckIconFilter = (!checkFilter) ? AiOutlineCheckCircle : AiOutlineCloseCircle;
  const CheckIconGame = (checkFilter) ? AiOutlineCheckCircle : AiOutlineCloseCircle;
  let gamesList = games;

  useEffect(
    () => {
      dispatch(fetchCategories())
      dispatch(fetchUser())
      if (!loginChecked) {
        navigate('../', { replace: true });
      }
    }, [],
  );

  const handleChange = (value, field) => {
    dispatch(changeField(value, field));
    dispatch(toggleFilter('checkFilter', !checkFilter))
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

  // const filterGamesByCheck = (checkFilter) => {
  //   if (!checkFilter) {
  //     return games;
  //   } else {
  //     return filterGamesBySearch(games, searchInput)
  //   }
  // };

  gamesList = filterGamesBySearch(checkedGames, searchInput);

  return (
    <div className="games">
      <div className="games__list--scroll">
        <h2 className="games__list__title">Votre liste de jeux</h2>
        <div className="games__list">
          {gamesList && gamesList.map((ite) => (
            <div key={ite.game.name} className="games__list__game" onClick={() => handleGameSelection(ite.game.id)}>
              <img
                className="games__list__game__img"
                src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,q_80,w_150/${ite.game.image}`}
                alt={ite.game.name}
              />
              <div className="games__list__game__overlay">
                <div className="games__list__game__overlay--bg" />
                <div className="games__list__game__overlay--text">
                  {ite.game.name}
                </div>
              </div>
              {/* {checkFilter &&
                <label className="games__list__game__check">
                  <input type="checkbox" checked="checked" />
                  <span class="games__list__game__check__checkmark"></span>
                </label>
              } */}
            </div>
          ))}
        </div>
      </div>
      <div className={sideClass}>
        <div className="games__side__logo" />
        <div className="games__side__btns">
          <div className="games__side__btn" onClick={() => dispatch(toggleModal('addgames'))}>
            <AiOutlineAppstoreAdd className="games__side__btn__icon" />
            <div className="games__side__btn__name">Ajouter un jeu</div>
          </div>
          <div className="games__side__btn games__side__btn--filter" onClick={() => dispatch(toggleFilterMenu())}>
            <BiFilterAlt className="games__side__btn__icon" />
            <div className="games__side__btn__name">Filtrer</div>
          </div>
          <div className="games__side__btn" onClick={() => dispatch(dustAll())}>
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
              <CheckIconFilter className="games__side__filter__sorting__btn" onClick={() => dispatch(toggleFilter('checkFilter', !checkFilter))} />
              <BsSortAlphaDown className="games__side__filter__sorting__btn games__side__filter__sorting__btn" onClick={() => dispatch(toggleFilter('sortAlphaFilter', !sortAlphaFilter))} />
              <BsSortDownAlt className="games__side__filter__sorting__btn" onClick={() => dispatch(toggleFilter('sortNumFilter', !sortNumFilter))} />
              <BiSort className="games__side__filter__sorting__btn" onClick={() => dispatch(toggleFilter('sortDirFilter', !sortDirFilter))} />
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
                <div className="games__side__filter__type__item">Aventure</div>
                <div className="games__side__filter__type__item">Fantasie</div>
                <div className="games__side__filter__type__item">Escape Game</div>
              </div>}
            </div>
            <div className="games__side__filter__ctn" >
              <div className="games__side__filter__type" onClick={() => dispatch(toggleFilter('playersFilter', !playersFilter))}>
                <BsFillPeopleFill className="games__side__filter__type__icon" />
                <div className="games__side__filter__type__name">Joueurs</div>
                {playersFilter ? <AiFillCaretUp className="games__side__filter__type__icon" /> : <AiFillCaretDown className="games__side__filter__type__icon" />}
              </div>
              {playersFilter && <div className="games__side__filter__type__items">
                <div className="games__side__filter__type__item">Aventure</div>
                <div className="games__side__filter__type__item">Fantasie</div>
                <div className="games__side__filter__type__item">Escape Game</div>
              </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesList;
