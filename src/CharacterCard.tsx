interface CharacterCardProps {
  character: {
    image: string;
    name: string;
    status: string;
    species: string;
    location: {
      name: string;
    };
  };
}
const CharacterCard = ({ character }: CharacterCardProps) => {
  return(
    <div className="card">
      <img
      src={character.image}
      alt={character.name}>
      </img>
      <div className="info">
        <h3>{character.name}</h3>
        <p>
          <span className={
            character.status === 'Alive'
            ? 'alive' : 'dead'
          }></span>
          {character.status} - {character.species}
        </p>
        <p>
          {character.location.name}
        </p>
      </div>
    </div>
  )
}

export default CharacterCard