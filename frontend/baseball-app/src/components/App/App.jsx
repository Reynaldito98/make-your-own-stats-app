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
import AddHitterModal from '../General/AddHitterModal/AddHitterModal';
import AddPitcherModal from '../General/AddPitcherModal/AddPitcherModal';
import EditTeamModal from '../General/EditTeamModal/EditTeamModal';
import EditHitterModal from '../General/EditHitterModal/EditHitterModal';
import EditPitcherModal from '../General/EditPitcherModal/EditPitcherModal';
import ConfirmationModal from '../General/ConfirmationModal/ConfirmationModal';
import { createHitter, getHitters, updateHitter, deleteHitter } from '../../utils/api/hitters.api.js';
import { getPitchers, createPitcher, updatePitcher, deletePitcher } from '../../utils/api/pitchers.api';
import { getTeams, createTeam, updateTeam } from '../../utils/api/team.api';
import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  const [addHitterModalOpened, setAddHitterModalOpened] = useState(false);
  const [addPitcherModalOpened, setAddPitcherModalOpened] = useState(false);
  const [editTeamModalOpened, setEditTeamModalOpened] = useState(false);
  const [editHitterModalOpened, setEditHitterModalOpened] = useState(false);
  const [editPitcherModalOpened, setEditPitcherModalOpened] = useState(false);
  const [confirmationModalOpened, setConfirmationModalOpened] = useState(false);
  const [hitterData, setHitterData] = useState([]);
  const [pitcherData, setPitcherData] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const [teamData, setTeamData] = useState({})
 
  //Add Hitter Modal
  const handleAddHitterModalOpened = () => {
    setAddHitterModalOpened(true);
  }

  const handleAddHitterModalClosed = () => {
    setAddHitterModalOpened(false);
  }

  //Add Pitcher Modal
  const handleAddPitcherModalOpened = () => {
    setAddPitcherModalOpened(true);
  }

  const handleAddPitcherModalClosed = () => {
    setAddPitcherModalOpened(false);
  }

  //Edit Team Modal
  const handleEditTeamModalOpened = () => {
    setEditTeamModalOpened(true);
  }

  const handleEditTeamModalClosed = () => {
    setEditTeamModalOpened(false);
  }

  //Edit Hitter Modal
  const handleEditHitterModalOpened = () => {
    setEditHitterModalOpened(true);
  }

  const handleEditHitterModalClosed = () => {
    setEditHitterModalOpened(false);
  }

  //Edit Pitcher Modal
  const handleEditPitcherModalOpened = () => {
    setEditPitcherModalOpened(true);
  }

  const handleEditPitcherModalClosed = () => {
    setEditPitcherModalOpened(false);
  }

  //Confirmation Modal
  const handleConfirmationModalOpened = () => {
    setConfirmationModalOpened(true);
  }

  const handleConfirmationModalClosed = () => {
    setConfirmationModalOpened(false);
  }

  const handleSelectedPlayer = player => {
    setSelectedPlayer(player);
  }

  //Hitter API Requests
  const handleCreateHitter = (name, position, imageUrl) => {
    createHitter(name, position, imageUrl)
      .then(data => {
        setHitterData([...hitterData, data.data])
      })
      .catch(err => console.log(err))
  }

  const handleUpdateHitter = (id, ab, h, hr, rbi, sb, cs, doubles, triples, r) => {
    updateHitter(id, ab, h, hr, rbi, sb, cs, doubles, triples, r)
      .then(data => {
        handleEditHitterModalClosed();
      }).catch(err => console.log(err))
  }

  const handleDeleteHitter = id => {
    deleteHitter(id)
      .then(data => {
        setHitterData(hitterData.filter(hitter => hitter._id!==id))
      })
      .catch(err => console.log(err))
  }


  //Pitcher API Requests
  const handleCreatePitcher = (name, position, imageUrl) => {
    createPitcher(name, position, imageUrl)
      .then(data => {
        setPitcherData([...pitcherData, data.data])
      })
      .catch(err => console.log(err))
  }

  const handleUpdatePitcher = (id, ip, er, k, bb, w, l, sv) => {
    updatePitcher(id, ip, er, k, bb, w, l, sv)
      .then(data => {
        handleEditPitcherModalClosed();
      }).catch(err => console.log(err))
  }

  const handleDeletePitcher = id => {
    deletePitcher(id)
      .then(data => {
        setPitcherData(pitcherData.filter(item => item._id!==id))
      })
  }

  //Team API Requests
  const handleUpdateTeam = (id, name, logo, wins, losses) => {
    updateTeam(id, name, logo, wins, losses)
      .then(data => {
        handleEditTeamModalClosed();
      })
      .catch(err => {
        console.log(err);
      })
  }

  useEffect(() => {
    if(!editHitterModalOpened) {
      getHitters()
      .then(data => {
        setHitterData(data.data);
      })
      .catch(err => console.log(err))
    }
  }, [editHitterModalOpened]);

  useEffect(() => {
    if(!editPitcherModalOpened) {
      getPitchers()
      .then(data => {
        setPitcherData(data.data);
      })
      .catch(err => console.log(err))
    }
  }, [editPitcherModalOpened]);

  useEffect(() => {
    if(!editTeamModalOpened) {
      getTeams()
        .then(data => {
          setTeamData(data.data[0]);
        })
        .catch(err => console.log(err))
      }
  }, [editTeamModalOpened])

  return (
    <div className="page">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Main handleOpen={handleEditTeamModalOpened} teamData={teamData} handleSelectedPlayer={handleSelectedPlayer}></Main>}></Route>
        <Route path="/news" element={<NewsMain></NewsMain>}></Route>
        <Route path="/bats" element={<HittersMain handleOpen={handleAddHitterModalOpened} handleEditPlayerOpen={handleEditHitterModalOpened} handleConfirmationOpen={handleConfirmationModalOpened} hitterData={hitterData} handleSelectedPlayer={handleSelectedPlayer} handleDeleteHitter={handleDeleteHitter}></HittersMain>}></Route>
        <Route path="/pitchers" element={<PitchersMain handleOpen={handleAddPitcherModalOpened} handleEditPlayerOpen={handleEditPitcherModalOpened} handleConfirmationOpen={handleConfirmationModalOpened} pitcherData={pitcherData} handleSelectedPlayer={handleSelectedPlayer}  handleDeletePitcher={handleDeletePitcher}></PitchersMain>}></Route>
        <Route path="/stats" element={<StatsMain><HittersStatsMain hitterData={hitterData} modalOpened={editHitterModalOpened}></HittersStatsMain></StatsMain>}></Route>
        <Route path="/stats/pitchers" element={<StatsMain><PitchersStatsMain pitcherData={pitcherData} modalOpened={editPitcherModalOpened}></PitchersStatsMain></StatsMain>}></Route>
      </Routes>

      <AddHitterModal modalOpened={addHitterModalOpened} handleClose={handleAddHitterModalClosed} handleCreateHitter={handleCreateHitter}></AddHitterModal>
      <AddPitcherModal modalOpened={addPitcherModalOpened} handleClose={handleAddPitcherModalClosed} handleCreatePitcher={handleCreatePitcher}></AddPitcherModal>
      <EditTeamModal modalOpened={editTeamModalOpened} handleClose={handleEditTeamModalClosed} handleUpdateTeam={handleUpdateTeam} selectedPlayer={selectedPlayer}></EditTeamModal>
      <EditHitterModal modalOpened={editHitterModalOpened} handleClose={handleEditHitterModalClosed} selectedPlayer={selectedPlayer} handleUpdateHitter={handleUpdateHitter}></EditHitterModal>
      <EditPitcherModal modalOpened={editPitcherModalOpened} handleClose={handleEditPitcherModalClosed} handleUpdatePitcher={handleUpdatePitcher} selectedPlayer={selectedPlayer}></EditPitcherModal>
      <ConfirmationModal modalOpened={confirmationModalOpened} handleClose={handleConfirmationModalClosed} handleDeleteHitter={handleDeleteHitter} handleDeletePitcher={handleDeletePitcher} selectedPlayer={selectedPlayer}></ConfirmationModal>
      <Footer></Footer>
    </div>  
  )
}

export default App
