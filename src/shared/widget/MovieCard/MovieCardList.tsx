import MovieCard from './MovieCard';
import { MovieCardType } from './MovieMock';

interface MovieCardListProps {
  types: MovieCardType[];
}

const MovieCardList = ({ types }: MovieCardListProps) => (
  <div style={{ display: 'flex', gap: '16px' }}>
    {types.map((type, idx) => (
      <MovieCard key={type + idx} type={type} />
    ))}
  </div>
);

export default MovieCardList; 