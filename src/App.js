import React, { useState } from 'react';
import data from './data';
import Form from './Components/Form';
import TeamList from './Components/TeamList';

import './App.css';

function App() {

  const [members, setMembers] = useState(data);

  const addNewMember = member => {
    setMembers([...members, member])
  }
  return (
    <div className="App">
      <h1>Our Team</h1>
      <TeamList team={members} />
      <Form addNewMember={addNewMember}/>
      
    </div>
  );
  
}

export default App;
