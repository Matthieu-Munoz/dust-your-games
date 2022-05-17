// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Image, Transformation } from 'cloudinary-react';
import classNames from "classnames";
//Icons
import { AiOutlineAppstoreAdd, AiOutlineCheckCircle, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BiFilterAlt, BiSort, BiCategoryAlt } from "react-icons/bi";
import { BsSortAlphaDown, BsSortAlphaUp, BsSortDownAlt, BsSortDown, BsSearch, BsHourglassSplit, BsFillPeopleFill, BsCalendarDate } from "react-icons/bs";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
// Local | React-Redux
import gamesList from "@/data/games";
import { toggleFilterMenu, toggleFilter } from "@/actions/games";
// Styles
import "./gameslist.scss"
import Field from "../Field";

function GamesList() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  const { menuToggled } = useSelector((state) => state.games);
  const { check, sortAlpha, sortNum, sortDir, categories, times, players, age, } = useSelector((state) => state.games.toggles);
  const sideClass = classNames('games__side', { 'games__side--openned': menuToggled });;

  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="games">
      <div className="games__list--scroll">
        <div className="games__list">
          {gamesList && gamesList.map((game) => (
            <div key={game.id} className="games__list__game">
              <img
                className="games__list__game__img"
                src={`https://res.cloudinary.com/dyg/image/fetch/c_scale,h_150,q_80,w_150/${game.image_url}`}
                alt={game.handle}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={sideClass}>
        <div className="games__side__logo" />
        <div className="games__side__btns">
          <div className="games__side__btn">
            <AiOutlineAppstoreAdd className="games__side__btn__icon" />
            <div className="games__side__btn__name">Ajouter un jeu</div>
          </div>
          <div className="games__side__btn" onClick={() => dispatch(toggleFilterMenu())}>
            <BiFilterAlt className="games__side__btn__icon" />
            <div className="games__side__btn__name">Filtrer</div>
          </div>
          <div className="games__side__btn">
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
              <AiOutlineCheckCircle className="games__side__filter__sorting__btn" onClick={() => dispatch(toggleFilter('check', !check))} />
              <BsSortAlphaDown className="games__side__filter__sorting__btn games__side__filter__sorting__btn" onClick={() => dispatch(toggleFilter('sortAlpha', !sortAlpha))} />
              <BsSortDownAlt className="games__side__filter__sorting__btn" onClick={() => dispatch(toggleFilter('sortNum', !sortNum))} />
              <BiSort className="games__side__filter__sorting__btn" onClick={() => dispatch(toggleFilter('sortDir', !sortDir))} />
            </div>
            <Field
              name="search"
              placeholder="Rechercher"
              Icon={BsSearch}
            // value={email}
            // onChange={handleChange}
            />
            <div className="games__side__filter__ctn" >
              <div className="games__side__filter__type" onClick={() => dispatch(toggleFilter('categories', !categories))}>
                <BiCategoryAlt className="games__side__filter__type__icon" />
                <div className="games__side__filter__type__name">Catégories</div>
                {categories ? <AiFillCaretUp className="games__side__filter__type__icon" /> : <AiFillCaretDown className="games__side__filter__type__icon" />}
              </div>
              {categories && <div className="games__side__filter__type__items">
                <div className="games__side__filter__type__item">Aventure</div>
                <div className="games__side__filter__type__item">Fantasie</div>
                <div className="games__side__filter__type__item">Escape Game</div>
              </div>}
            </div>
            <div className="games__side__filter__ctn" >
              <div className="games__side__filter__type" onClick={() => dispatch(toggleFilter('times', !times))}>
                <BsHourglassSplit className="games__side__filter__type__icon" />
                <div className="games__side__filter__type__name">Durée</div>
                {times ? <AiFillCaretUp className="games__side__filter__type__icon" /> : <AiFillCaretDown className="games__side__filter__type__icon" />}
              </div>
              {times && <div className="games__side__filter__type__items">
                <div className="games__side__filter__type__item">Aventure</div>
                <div className="games__side__filter__type__item">Fantasie</div>
                <div className="games__side__filter__type__item">Escape Game</div>
              </div>}
            </div>
            <div className="games__side__filter__ctn" >
              <div className="games__side__filter__type" onClick={() => dispatch(toggleFilter('players', !players))}>
                <BsFillPeopleFill className="games__side__filter__type__icon" />
                <div className="games__side__filter__type__name">Joueurs</div>
                {players ? <AiFillCaretUp className="games__side__filter__type__icon" /> : <AiFillCaretDown className="games__side__filter__type__icon" />}
              </div>
              {players && <div className="games__side__filter__type__items">
                <div className="games__side__filter__type__item">Aventure</div>
                <div className="games__side__filter__type__item">Fantasie</div>
                <div className="games__side__filter__type__item">Escape Game</div>
              </div>}
            </div>
            <div className="games__side__filter__ctn" >
              <div className="games__side__filter__type" onClick={() => dispatch(toggleFilter('age', !age))}>
                <BsCalendarDate className="games__side__filter__type__icon" />
                <div className="games__side__filter__type__name">Age</div>
                {age ? <AiFillCaretUp className="games__side__filter__type__icon" /> : <AiFillCaretDown className="games__side__filter__type__icon" />}
              </div>
              {age && <div className="games__side__filter__type__items">
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
