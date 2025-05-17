import Carousel from '@/shared/components/Carousel/Carousel'
import Header from '@/shared/constants/Header/Header'
import * as styles from '@/app/home/Home.css'
import SectionHeader from './components/shared/SectionHeader'

const Home = () => {
  return (
    <div>
      <>
        <Header />
        <Carousel />
        <div className={styles.sectionContainer}>
          <SectionHeader
            text="내 취향 저격, 오늘의 TOP 랭킹"
            showRight
            showNotice
          />
          <SectionHeader text="영화 공개 예정작" showRight />
          <SectionHeader text="매거진" showRight />
          <SectionHeader text="지금 뜨는 코멘트" showRight />
          <SectionHeader text="이벤트" showRight />
          <SectionHeader text="시리즈 공개 예정작" showRight />
          <SectionHeader text="박스 오피스 순위" />
        </div>
      </>
    </div>
  )
}

export default Home
