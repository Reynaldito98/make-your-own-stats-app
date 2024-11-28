import './App.css';
import Header from '../General/Header/Header';
import Main from '../Home/Main/Main';
import Footer from '../General/Footer/Footer';
import HittersMain from '../Hitters/HittersMain/HittersMain';
import PitchersMain from '../Pitchers/PitchersMain/PitchersMain';
import PitchersStatsMain from '../Stats/PitchersStatsMain/PitchersStatsMain';
import HittersStatsMain from '../Stats/HittersStatsMain/HittersStatsMain';
import NewsMain from '../News/NewsMain/NewsMain';
import StatsMain from '../Stats/StatsMain/StatsMain';
import ModalWithForm from '../General/ModalWithForm/ModalWithForm';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


function App() {
  const [addHitterModalOpened, setAddHitterModalOpened] = useState(false);

  const handleAddHitterModalOpened = () => {
    setAddHitterModalOpened(true);
  }

  const handleAddHitterModalClosed = () => {
    setAddHitterModalOpened(false);
  }

  return (
    <div className="page">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/news" element={<NewsMain></NewsMain>}></Route>
        <Route path="/hitters" element={<HittersMain handleOpen={handleAddHitterModalOpened}></HittersMain>}></Route>
        <Route path="/pitchers" element={<PitchersMain></PitchersMain>}></Route>
        <Route path="/stats" element={<StatsMain><HittersStatsMain></HittersStatsMain></StatsMain>}></Route>
        <Route path="/stats/pitchers" element={<StatsMain><PitchersStatsMain></PitchersStatsMain></StatsMain>}></Route>
      </Routes>

      <ModalWithForm modalOpened={addHitterModalOpened} handleClose={handleAddHitterModalClosed}></ModalWithForm>
      <Footer></Footer>
    </div>  
  )
}

export default App
