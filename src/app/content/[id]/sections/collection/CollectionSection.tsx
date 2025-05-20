import Image from 'next/image'
import * as styles from './CollectionSection.css'

interface CollectionItemProps {
  posters: string[]
  title: string
  like: number
}

const CollectionItem = ({ posters, title, like }: CollectionItemProps) => {
  return (
    <div className={styles.collectionGridContainer}>
      <div className={styles.collectionPosterGrid}>
        {posters.map((poster, index) => (
          <Image
            src={poster}
            key={`컬렉션 포스터 ${index + 1}`}
            alt={`컬렉션 포스터`}
            width={79}
            height={113}
            className={styles.collectionPoster}
          />
        ))}
      </div>
      <div className={styles.collectionTitle}>{title}</div>
      <div className={styles.collectionLike}>좋아요 {like}</div>
    </div>
  )
}
