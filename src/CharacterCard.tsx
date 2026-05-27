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

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const statusClass = character.status.toLowerCase();
  
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div className="info">
        <h3>{character.name}</h3>
        <p className={statusClass}>
          <span className="status-dot"></span>
          {character.status}
        </p>
        <p className="location-label">{character.location.name}</p>
      </div>
    </div>
  );
}
