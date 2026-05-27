import { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'
import './App.css'

const API = 'https://rickandmortyapi.com/api/character'

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  location: {
    name: string;
  };
}

function App() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setLoading(false)
      })
  }, [])

  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <p>Cargando...</p>

  return (
    <div className="App">
      <header>
        <h1>Rick & Morty</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Buscar personaje..."
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </header>

      <main className="grid">
        {filtered.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </main>
    </div>
  )
}

export default App
