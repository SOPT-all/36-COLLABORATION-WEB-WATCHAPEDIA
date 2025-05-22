import HeaderSection from '../../components/HeaderSection/HeaderSection'
import MagazineField from '../../components/Magazine/MagazineField'

import * as styles from './MagazineSection.css'

const magazineData = [
  {
    category: '왓챠디깅클럽',
    title: '왓챠의 콘텐츠 사업팀을 소개합니다',
    content: '저희 씨네필 아닙니다. 잠깐, 크레딧 안 끝났는데',
    image: '/images/view2/magazine_1.png',
  },
  {
    category: '큐레이션',
    title: '느낌 좋은 배우 홍경의 영화 취향',
    content: '사실 홍경은 진짜 유명한 씨네필임...',
    image: '/images/view2/magazine_2.png',
  },
]

const MagazineSection = () => {
  return (
    <HeaderSection title="매거진" count={2}>
      {magazineData.map((magazine, index) => (
        <div
          className={styles.magazineWrapper}
          key={`${index}-${magazine.title}`}
        >
          <MagazineField
            key={`${index}-${magazine.title}`}
            magazine={magazine}
          />
          <hr className={styles.grayLine} />
        </div>
      ))}
    </HeaderSection>
  )
}

export default MagazineSection
