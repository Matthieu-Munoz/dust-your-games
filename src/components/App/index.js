import Userform from '../Userform';
import ThemeToggle from '../ThemeToggle';
import './app.scss';

function App() {
  return (
    <div className="theme theme--dark">
      <div className="app">
        <ThemeToggle />
        <Userform />
      </div>
    </div>
  );
}

export default App;
