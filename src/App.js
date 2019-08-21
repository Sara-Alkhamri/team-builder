import React, { useState } from 'react';
import data from './data';
import Form from './Components/Form';
import TeamList from './Components/TeamList';

import './App.css';

function App() {

  const [memebers, setMemebers] = useState(data);

  const addNewMemeber = memeber => {
    setMemebers([...memebers, memeber])
  }
  return (
    <div>
      <h1>Team</h1>
      <TeamList team={memebers} />
      <Form addNewMemeber={addNewMemeber}/>
      
    </div>
  );
  
}

export default App;
