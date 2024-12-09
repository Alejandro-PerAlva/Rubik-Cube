import React, { useState } from 'react';
import Cube from './components/Cube';
import Controls from './components/Controls';
import Solution from './components/Solution';

const App = () => {
  const initialCubeState = {
    F: ['red', 'red', 'red'],
    B: ['blue', 'blue', 'blue'],
    U: ['white', 'white', 'white'],
    D: ['yellow', 'yellow', 'yellow'],
    L: ['orange', 'orange', 'orange'],
    R: ['green', 'green', 'green']
  };

  const [cubeState, setCubeState] = useState(initialCubeState);
  const [solution, setSolution] = useState(null);

  const handleMove = (face) => {
    const newCubeState = cube.moveFaceClockwise(face);
    setCubeState(newCubeState);
    
    const newSolution = cube.solve();
    setSolution(newSolution);
  };

  return (
    <div className="app">
      <Cube initialState={cubeState} />
      <Controls onMove={handleMove} />
      <Solution solution={solution} />
    </div>
  );
};

export default App;
