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
import Blackground from '../General/Blackground/Blackground';
import LoginModal from '../General/LoginModal/LoginModal';
import RegisterModal from '../General/RegisterModal/RegisterModal';
import LogoutModal from '../General/LogoutModal/LogoutModal';
import CreateTeam from '../General/CreateTeam/CreateTeam';
import ProtectedRoute from '../General/ProtectedRoute/ProtectedRoute';
import { createHitter, getHitters, updateHitter, deleteHitter } from '../../utils/api/hitters.api.js';
import { getPitchers, createPitcher, updatePitcher, deletePitcher } from '../../utils/api/pitchers.api';
import { registerUser, loginUser} from '../../utils/api/auth.js';
import { getTeams, createTeam, updateTeam } from '../../utils/api/team.api';
import { getNews } from '../../utils/api/news.api';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  const location = useLocation();

  const [addHitterModalOpened, setAddHitterModalOpened] = useState(false);
  const [addPitcherModalOpened, setAddPitcherModalOpened] = useState(false);
  const [editTeamModalOpened, setEditTeamModalOpened] = useState(false);
  const [editHitterModalOpened, setEditHitterModalOpened] = useState(false);
  const [editPitcherModalOpened, setEditPitcherModalOpened] = useState(false);
  const [confirmationModalOpened, setConfirmationModalOpened] = useState(false);
  const [loginModalOpened, setLoginModalOpened] = useState(false);
  const [registerModalOpened, setRegisterModalOpened] = useState(true);
  const [logoutModalOpened, setLogoutModalOpened] = useState(false);
  const [createTeamOpened, setCreateTeamOpened] = useState(false);
  const [hitterData, setHitterData] = useState([]);
  const [pitcherData, setPitcherData] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState({});
  const [teamData, setTeamData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');

  const navigate = useNavigate();
 
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

  //Login Modal
  const handleLoginModalOpened = () => {
    setLoginModalOpened(true);
  }

  const handleLoginModalClosed = () => {
    setLoginModalOpened(false);
  }

  //Register Modal
  const handleRegisterModalOpened = () => {
    setRegisterModalOpened(true);
  }

  const handleRegisterModalClosed = () => {
    setRegisterModalOpened(false)
  }

  //LogoutModal
  const handleLogoutModalOpened = () => {
    setLogoutModalOpened(true);
  }

  const handleLogoutModalClosed = () => {
    setLogoutModalOpened(false)
  }

  //Create Team Modal
  const handleCreateTeamModalOpened = () => {
    setCreateTeamOpened(true);
  }

  const handleCreateTeamModalClosed = () => {
    setCreateTeamOpened(false);
  }

  //Logged in or out
  const handleLoggedOut = () => {
    localStorage.removeItem('jwt');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
  }

  const handleSelectedPlayer = player => {
    setSelectedPlayer(player);
  }

  //Hitter API Requests
  const handleCreateHitter = (name, position, imageUrl) => {
    const token = localStorage.getItem('jwt');

    createHitter(name, position, imageUrl, token)
      .then(data => {
        setHitterData([...hitterData, data.data]);
        handleAddHitterModalClosed();
      })
      .catch(err => console.log(err))
  }

  const handleUpdateHitter = (id, ab, h, hr, rbi, sb, cs, doubles, triples, r) => {
    const token = localStorage.getItem('jwt');

    updateHitter(id, ab, h, hr, rbi, sb, cs, doubles, triples, r, token)
      .then(data => {
        handleEditHitterModalClosed();
      }).catch(err => console.log(err))
  }

  const handleDeleteHitter = (id) => {
    const token = localStorage.getItem('jwt');

    deleteHitter(id, token)
      .then(data => {
        setHitterData(hitterData.filter(hitter => hitter._id!==id))
      })
      .catch(err => console.log(err))
  }


  //Pitcher API Requests
  const handleCreatePitcher = (name, position, imageUrl) => {
    const token = localStorage.getItem('jwt');

    createPitcher(name, position, imageUrl, token)
      .then(data => {
        setPitcherData([...pitcherData, data.data]);
        handleAddPitcherModalClosed();
      })
      .catch(err => console.log(err))
  }

  const handleUpdatePitcher = (id, ip, er, k, bb, w, l, sv) => {
    const token = localStorage.getItem('jwt');

    updatePitcher(id, ip, er, k, bb, w, l, sv, token)
      .then(data => {
        handleEditPitcherModalClosed();
      }).catch(err => console.log(err))
  }

  const handleDeletePitcher = id => {
    const token = localStorage.getItem('jwt');

    deletePitcher(id, token)
      .then(data => {
        setPitcherData(pitcherData.filter(item => item._id!==id))
      })
  }

  //Team API Requests
  const handleUpdateTeam = (id, name, logo, wins, losses) => {
    const token = localStorage.getItem('jwt');

    updateTeam(id, name, logo, wins, losses, token)
      .then(data => {
        handleEditTeamModalClosed();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleCreateTeam = (name, logo) => {
    const token = localStorage.getItem('jwt');

    createTeam(name, logo, token)
      .then(data => {
        setTeamData([teamData, ...data.data]);
        handleCreateTeamModalClosed();
      })
      .catch(err => console.log(err))
  }

  //Authorization and Authentication
  const handleRegisterUser = (username, email, password) => {
    registerUser(username, email, password)
      .then(data => {
        handleRegisterModalClosed();
        navigate('/login');
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleLoginUser = (email, password) => {
    if(!email || !password) {
      return;
    }

    loginUser(email, password)
      .then(data => {
          if(data.token) {
            localStorage.setItem('jwt', data.token);
            localStorage.setItem('username', data.username);
            localStorage.setItem('userId', data._id);
            setIsLoggedIn(true);
            setUserId(data._id);
            setUsername(data.username);
            handleLoginModalClosed();

            navigate('/');
          }
          
      })
      .catch(err => console.log(err))
  }



  const handleVisibleCards = () => {
    setVisibleCards(visibleCards + 3);
  }

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if(!editHitterModalOpened) {
      getHitters(token)
      .then(data => {
        setHitterData(data.data.filter(hitter => hitter.owner===userId));
      })
      .catch(err => console.log(err))
    }
  }, [editHitterModalOpened, isLoggedIn]);


  useEffect(() => {
    if(localStorage.getItem('username') && localStorage.getItem('jwt') && localStorage.getItem('userId')) {
      setIsLoggedIn(true);
      setUserId(localStorage.getItem('userId'));
      setUsername(localStorage.getItem('username'));
      navigate('/');
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if(!editPitcherModalOpened) {
      getPitchers(token)
      .then(data => {
        setPitcherData(data.data.filter(pitcher => pitcher.owner===userId));
      })
      .catch(err => console.log(err))
    }
  }, [editPitcherModalOpened, isLoggedIn]);



  useEffect(() => {
    const token = localStorage.getItem('jwt');

    if(!editTeamModalOpened) {
      getTeams(token)
        .then(data => {
          setTeamData(data.data.filter(team => team.owner===userId));

          getNews(data.data.filter(team => team.owner===userId)[0].name)
            .then(dat => {
              setNewsData(dat["data"]);
            })
            .catch(err => {
              console.log(err);
            })
        })
        .catch(err => console.log(err))
      }
  }, [editTeamModalOpened, isLoggedIn]);


  return (
    <div className="page">
      <Header isLoggedIn={isLoggedIn} handleModalOpened={handleLoginModalOpened} handleRegisterModalOpened={handleRegisterModalOpened} handleLogoutModalOpened={handleLogoutModalOpened} teamData={teamData} handleCreateTeamModalOpened={handleCreateTeamModalOpened}></Header>
      {(location.pathname==='/login' || location.pathname==='/register') && <Blackground></Blackground>}
      <Routes>
        <Route path="/" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
             <Main handleOpen={handleEditTeamModalOpened} teamData={teamData} handleSelectedPlayer={handleSelectedPlayer} username={username}></Main>
          </ProtectedRoute>
        }></Route>
        <Route path="/news" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
              <NewsMain newsData={newsData} visibleCards={visibleCards} handleVisibleCards={handleVisibleCards} teamData={teamData}></NewsMain>
          </ProtectedRoute>
        }></Route>
        <Route path="/bats" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <HittersMain handleOpen={handleAddHitterModalOpened} handleEditPlayerOpen={handleEditHitterModalOpened} handleConfirmationOpen={handleConfirmationModalOpened} hitterData={hitterData} handleSelectedPlayer={handleSelectedPlayer} handleDeleteHitter={handleDeleteHitter}></HittersMain>
          </ProtectedRoute>
        }></Route>
        <Route path="/pitchers" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <PitchersMain handleOpen={handleAddPitcherModalOpened} handleEditPlayerOpen={handleEditPitcherModalOpened} handleConfirmationOpen={handleConfirmationModalOpened} pitcherData={pitcherData} handleSelectedPlayer={handleSelectedPlayer}  handleDeletePitcher={handleDeletePitcher}></PitchersMain>
          </ProtectedRoute>
        }></Route>
        <Route path="/stats" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <StatsMain><HittersStatsMain hitterData={hitterData} modalOpened={editHitterModalOpened}></HittersStatsMain></StatsMain>
          </ProtectedRoute>
        }></Route>
        <Route path="/stats/pitchers" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <StatsMain><PitchersStatsMain pitcherData={pitcherData} modalOpened={editPitcherModalOpened}></PitchersStatsMain></StatsMain>
          </ProtectedRoute>
        }></Route>
        <Route path="/login" element={<LoginModal modalOpened={loginModalOpened} handleClose={handleLoginModalClosed} handleLoginUser={handleLoginUser}></LoginModal>}></Route>
        <Route path="/register" element={<RegisterModal modalOpened={registerModalOpened} handleClose={handleRegisterModalClosed} handleRegisterUser={handleRegisterUser}></RegisterModal>}></Route>
      </Routes>

      <AddHitterModal modalOpened={addHitterModalOpened} handleClose={handleAddHitterModalClosed} handleCreateHitter={handleCreateHitter}></AddHitterModal>
      <AddPitcherModal modalOpened={addPitcherModalOpened} handleClose={handleAddPitcherModalClosed} handleCreatePitcher={handleCreatePitcher}></AddPitcherModal>
      <EditTeamModal modalOpened={editTeamModalOpened} handleClose={handleEditTeamModalClosed} handleUpdateTeam={handleUpdateTeam} selectedPlayer={selectedPlayer}></EditTeamModal>
      <EditHitterModal modalOpened={editHitterModalOpened} handleClose={handleEditHitterModalClosed} selectedPlayer={selectedPlayer} handleUpdateHitter={handleUpdateHitter}></EditHitterModal>
      <EditPitcherModal modalOpened={editPitcherModalOpened} handleClose={handleEditPitcherModalClosed} handleUpdatePitcher={handleUpdatePitcher} selectedPlayer={selectedPlayer}></EditPitcherModal>
      <ConfirmationModal modalOpened={confirmationModalOpened} handleClose={handleConfirmationModalClosed} handleDeleteHitter={handleDeleteHitter} handleDeletePitcher={handleDeletePitcher} selectedPlayer={selectedPlayer}></ConfirmationModal>
      <LogoutModal modalOpened={logoutModalOpened} handleClose={handleLogoutModalClosed} handleLoggedOut={handleLoggedOut}></LogoutModal>
      <CreateTeam modalOpened={createTeamOpened} handleClose={handleCreateTeamModalClosed} createTeam={handleCreateTeam}></CreateTeam>
      {(location.pathname!=='/login' && location.pathname!=='/register') ? <Footer></Footer> : ""}
    </div>  
  )
}

export default App
