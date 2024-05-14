import { useState } from 'react';
import AddPlayers from './AddPlayers';
import './App.css';

function randomize(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



function App() {
  const [players, setPlayers] = useState([])
  const [nextId, setNextId] = useState(0)
  const [defaultMessage, setDefaultMessage] = useState('')
  const [groupSize, setGroupSize] = useState(0)

  function handleAddPlayer(player1, player2) {
    setPlayers([
      ...players,
      {
        id: nextId,
        player1: player1,
        player2: player2
      }
    ])
    setNextId(nextId + 1)
  }

  function handleRandomize() {
    const shuffledPlayers = randomize([...players]);
    setPlayers(shuffledPlayers);
  }

  function handleGenerate() {
    if (players.length == 4) {
      setDefaultMessage("Semifinal e final")
      setGroupSize(2)

    } else if ((players.length % 4) == 0) {
      setDefaultMessage(`${groupSize} duplas por grupo`)
      setGroupSize(4)

    } else if ((players.length % 3) == 0) {
      setDefaultMessage(`${groupSize} duplas por grupo`)
      setGroupSize(3)

    } else if (players.length == 2) {
      setDefaultMessage("Final")
      setGroupSize(2)

    } else {
      setDefaultMessage("Irregular")
    }

    handleRandomize();
    console.log("the button's working, at least")
  }



  return (
    <>
      <div className='container'>
        <h1>Aqui formularemos torneios com GUI usando React</h1>
        <AddPlayers onAddPlayer={handleAddPlayer} />
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Jogador 1</th>
              <th>Jogador 2</th>
            </tr>
          </thead>
          <tbody>
            {players.map(player => (
              <tr key={player.id}>
                <td>{player.id}</td>
                <td>{player.player1}</td>
                <td>{player.player2}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleGenerate}>Randomizar Jogadores</button>
        <h2>{defaultMessage}</h2>
      </div>
    </>

  );
}

export default App;
