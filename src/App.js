import React, { useState } from 'react';

import './App.css';

function App() {

  const [memebers, setMemebers] = useState();

  const addNewMemeber = memeber => {
    setMemebers([...memebers, memeber])
  }
  return (
    <div>
      <h1>Team</h1>
      <TeamList team={memebers} />
      <From addNewMemeber={addNewMemeber}/>
      
    </div>
  );
  
}

export default App;
