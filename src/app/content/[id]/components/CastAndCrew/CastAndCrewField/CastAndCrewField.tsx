import Image from 'next/image'
import * as styles from './CastAndCrewField.css'

interface Props {
  artist: {
    role: string
    name: string
    character?: string
  }
  castImage: string
}

const CastAndCrewField = ({ artist, castImage }: Props) => {
  const { role, name, character } = artist

  const roleText = role === 'DIRECTOR' ? '감독' : '배우'

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
        <div className={styles.textConentWrapper}>
          <p className={styles.name}>{name}</p>
          <p className={styles.character}>
            {roleText}
            {character ? ` | ${character}` : ''}
          </p>
        </div>
        <hr className={styles.bottomLine} />
      </div>
    </section>
  )
}

export default CastAndCrewField
