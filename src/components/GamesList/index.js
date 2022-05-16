// Dependencies
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
// React-Redux

// Styles
import "./gameslist.scss"

function GamesList() {
  const logged = useSelector((state) => state.user.logged);

  if (!logged) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="gamesList">

    </div>
  );
}

export default GamesList;
