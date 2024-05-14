import { useState } from "react";

export default function AddPlayers({ onAddPlayer }) {
  const [player1, setPlayer1] = useState('')
  const [player2, setPlayer2] = useState('')

  return (
    <div className="form">
      <input
        placeholder="Jogador 1"
        value={player1}
        onChange={e => setPlayer1(e.target.value)}
      />
      <input
        placeholder="Jogador 2"
        value={player2}
        onChange={e => setPlayer2(e.target.value)}
      />
      <button onClick={() => {
        setPlayer1('')
        setPlayer2('')
        onAddPlayer(player1, player2)
      }}>Adicionar dupla</button>
    </div>
  )
}
