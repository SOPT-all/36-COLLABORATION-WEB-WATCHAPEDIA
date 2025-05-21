import * as styles from './Magazine.css'
import MagazineField from './MagazineField/MagazineField'

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

const Magazine = () => {
  return (
    <>
      {magazineData.map((magazine, index) => (
        <div className={styles.magazineWrapper} key={index}>
          <MagazineField key={index} magazine={magazine} />
          <div className={styles.grayLine} />
        </div>
      ))}
    </>
  )
}

export default Magazine
