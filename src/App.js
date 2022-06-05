import React from "react";
import StarRateIcon from '@mui/icons-material/StarRate';
import Chip from '@mui/mui-org.material-ui.chip';
import './App.css';

function App() {
  return (
    <>
      <ContactCard />
    </>
  );
}

const ContactCard = () => {
  return (
    <div className="strain-card">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="strain-container">
        <div className="strain-general">
          <p className="strain-name">Afghanica<Chip label="Sativa" /></p>
          <p className="strain-note"><StarRateIcon sx={{ fontSize: 17, color: 'warning.main' }}/>4.1</p>
        </div>
        <div className="strain-infos">
          <p>Effects: Relaxed,Sleepy,Happy,Hungry,Euphoric</p>
          <p>Flavour: Sweet,Flowery,Skunk</p>
        </div>
      </div>
    </div>
  );
};

export default App;
