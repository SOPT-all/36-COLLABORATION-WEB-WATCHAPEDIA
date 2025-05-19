import * as styles from './CastAndCrew.css'
import CastAndCrewField from './CastAndCrewField/CastAndCrewField';

import { detail } from '@/mocks';

const CastAndCrew = () => {
  const { artists } = detail;
  const castImages = [
    '/images/view2/cast_1.png',
    '/images/view2/cast_2.png',
    '/images/view2/cast_3.png',
  ];

  return (
    <div className={styles.allWrapper}>
      {artists.map((artist, index) => (
        <CastAndCrewField 
          key={index}
          artist={artist}
          castImage={castImages[index]}
        />
      ))}
    </div>
  );
};

export default CastAndCrew;