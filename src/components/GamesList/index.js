// Dependencies
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import classNames from "classnames";
//Icons
import { AiOutlineAppstoreAdd, AiOutlineCheckCircle, AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { BiFilterAlt, BiSort, BiCategoryAlt } from "react-icons/bi";
import { BsSortAlphaDown, BsSortAlphaUp, BsSortDownAlt, BsSortDown, BsSearch, BsHourglassSplit, BsFillPeopleFill, BsCalendarDate } from "react-icons/bs";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
// Local | React-Redux
import gamesList from "@/data/games";
import { toggleFilterMenu } from "@/actions/games";
// Styles
import "./gameslist.scss"
import Field from "../Field";

function GamesList() {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.user.logged);
  const { menuToggled } = useSelector((state) => state.games);
  const menuClass = classNames('games__side', { 'games__side--openned': menuToggled });;

  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="games">
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
      <div className={menuClass}>
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
        <div className="games__filter">
          <div className="games__filter__btns">
            <AiOutlineAppstoreAdd className="games__filter__btn" />
            <BiFilterAlt className="games__filter__btn games__filter__btn--filter" onClick={() => dispatch(toggleFilterMenu())} />
            <GiPerspectiveDiceSixFacesRandom className="games__filter__btn" />
          </div>
          <div className="games__filter__sorting">
            <AiOutlineCheckCircle className="games__filter__sorting__btn" />
            <BsSortAlphaDown className="games__filter__sorting__btn games__filter__sorting__btn" />
            <BsSortDownAlt className="games__filter__sorting__btn" />
            <BiSort className="games__filter__sorting__btn" />
          </div>
          <Field
            name="search"
            placeholder="Rechercher"
            Icon={BsSearch}
          // value={email}
          // onChange={handleChange}
          />
          <div className="games__filter__type">
            <BiCategoryAlt className="games__filter__type__icon" />
            <div className="games__filter__type__name">Catégories</div>
            <AiFillCaretDown className="games__filter__type__icon" />
          </div>
          <div className="games__filter__type">
            <BsHourglassSplit className="games__filter__type__icon" />
            <div className="games__filter__type__name">Durée</div>
            <AiFillCaretDown className="games__filter__type__icon" />
          </div>
          <div className="games__filter__type">
            <BsFillPeopleFill className="games__filter__type__icon" />
            <div className="games__filter__type__name">Joueurs</div>
            <AiFillCaretDown className="games__filter__type__icon" />
          </div>
          <div className="games__filter__type">
            <BsCalendarDate className="games__filter__type__icon" />
            <div className="games__filter__type__name">Age</div>
            <AiFillCaretDown className="games__filter__type__icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamesList;
