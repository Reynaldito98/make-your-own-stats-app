import './App.css';
import Header from '../General/Header/Header';
import Main from '../Home/Main/Main';
import Footer from '../General/Footer/Footer';
import HittersMain from '../Hitters/HittersMain/HittersMain';
import PitchersMain from '../Pitchers/PitchersMain/PitchersMain';
import NewsMain from '../News/NewsMain/NewsMain';
import StatsMain from '../Stats/StatsMain/StatsMain';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="page">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/news" element={<NewsMain></NewsMain>}></Route>
        <Route path="/hitters" element={<HittersMain></HittersMain>}></Route>
        <Route path="/pitchers" element={<PitchersMain></PitchersMain>}></Route>
        <Route path="/stats" element={<StatsMain></StatsMain>}></Route>
        <Route path="/rankings"></Route>
      </Routes>

      <Footer></Footer>
    </div>  
  )
}

export default App
