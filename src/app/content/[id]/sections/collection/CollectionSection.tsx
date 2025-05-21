import Image from 'next/image'
import HeaderSection from '../../components/HeaderSection/HeaderSection'
import * as styles from './CollectionSection.css'

interface CollectionItemProps {
  posters: string[]
  title: string
  like: number
}

const collectionItems = [
  {
    posters: [
      '/images/view2/collection1.png',
      '/images/view2/collection2.png',
      '/images/view2/collection3.png',
      '/images/view2/collection4.png',
    ],
    title: '먼 훗날 나의 자식들이 내 책장에 꽂힌 디비디 시리즈를 보게 된다면',
    like: 23080,
  },
  {
    posters: [
      '/images/view2/collection5.png',
      '/images/view2/collection6.png',
      '/images/view2/collection7.png',
      '/images/view2/collection8.png',
    ],
    title: '한번쯤은 꼭 봤으면 하는 영화',
    like: 13171,
  },
]

const CollectionSection = () => {
  return (
    <HeaderSection title="이 작품이 담긴 컬렉션" count={2832}>
      <div className={styles.collectionContainer}>
        {collectionItems.map(({ posters, title, like }) => (
          <CollectionItem
            key={title}
            posters={posters}
            title={title}
            like={like}
          />
        ))}
      </div>
    </HeaderSection>
  )
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

export default CollectionSection
