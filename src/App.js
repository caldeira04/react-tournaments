import { useState } from 'react';
import './App.css';



function App() {
  const [state, setState] = useState({
    player1: '',
    player2: '',
    score: '',
    id: '',
  })

  const players = [{
    p1: state.player1,
    p2: state.player2,
    score: state.score,
    id: ''
  }]
 
  function List() {
    const listPlayers = players.map(double => 
      <>
      <td>{double.id}</td>
      <td>{double.p1}</td>
      <td>{double.p2}</td>
      </>
    )
    return <tr>{listPlayers}</tr>
  }
    
  return (
    <>
    <h1>Aqui formularemos torneios com GUI usando React</h1>
    <form>
      <input type="text" name="player1" />
      <input type="text" name="player2" />
      <input type="submit" value="Enviar" />
    </form>

    <table>
      <thead>
        <th>
          <td>ID</td>
          <td>Jogador 1</td>
          <td>Jogador 2</td>
        </th>
      </thead>
      <tbody>
       <List /> 
      </tbody>
    </table>
    </>
    
  );
}

export default App;
