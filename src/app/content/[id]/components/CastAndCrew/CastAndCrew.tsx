import * as styles from './CastAndCrew.css'
import CastAndCrewField from './CastAndCrewField/CastAndCrewField';
import { detail } from '@/mocks';

const castImages = [
  '/images/view2/cast_1.png',
  '/images/view2/cast_2.png',
  '/images/view2/cast_3.png',
];

const CastAndCrew = () => {
  const { artists, id } = detail;

  return (
    <div className={styles.allWrapper}>
      {artists.map((artist) => (
        <CastAndCrewField 
          key={id}
          artist={artist}
          castImage={castImages[id]}
        />
      ))}
    </div>
  );
};

export default CastAndCrew;