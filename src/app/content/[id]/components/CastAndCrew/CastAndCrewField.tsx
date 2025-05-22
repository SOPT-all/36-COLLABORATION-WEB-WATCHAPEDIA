import Image from 'next/image'

import { Artist } from '@/shared/types/detail'

import * as styles from './CastAndCrewField.css'

const CastAndCrewField = ({ role, name, character, imagePath }: Artist) => {
  const roleText = role === 'DIRECTOR' ? '감독' : '배우'

  return (
    <section className={styles.fieldWrapper}>
      <Image
        src={imagePath}
        alt={`${name} 사진`}
        width={55}
        height={55}
        className={styles.profile}
      />
      <div className={styles.rightWrapper}>
        <div className={styles.textContentWrapper}>
          <p className={styles.name}>{name}</p>
          <div className={styles.characterWrapper}>
            <p className={styles.roleText}>{roleText}</p>
            {character && (
              <>
                <hr className={styles.separator} />
                <p className={styles.character}>{character}</p>
              </>
            )}
          </div>
        </div>
        <hr className={styles.bottomLine} />
      </div>
    </section>
  )
}

export default CastAndCrewField
