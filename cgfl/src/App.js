
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Game from './routes/game/game.component';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';


const App = () => {
  return(
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='game/*' element={<Game /> } />
        </Route>
      </Routes>

  )

}

export default App;