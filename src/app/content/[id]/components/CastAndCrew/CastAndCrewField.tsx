import Image from 'next/image'
import * as styles from './CastAndCrewField.css'

interface Props {
  role: string
  name: string
  character?: string
  castImage: string
}

const CastAndCrewField = ({ role, name, character, castImage }: Props) => {
  const roleText = role === 'DIRECTOR' ? '감독' : '주연'

  return (
    <section className={styles.fieldWrapper}>
      <Image
        src={castImage}
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
