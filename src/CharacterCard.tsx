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
  return (
    <div className="card">
      <img src={character.image} alt={character.name} />
      <div className="info">
        <h3>{character.name}</h3>
        <p>
          <span className={character.status === 'Alive' ? 'alive' : 'dead'}></span>
          {character.status} - {character.species}
        </p>
        <p>{character.location.name}</p>
      </div>
    </div>
  );
}
