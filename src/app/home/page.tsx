import Carousel from '@/shared/components/Carousel/Carousel'
import * as styles from '@/app/home/Home.css'
import Bottom from '@/shared/components/Bottom/BottomNav'
import Section from './components/Section'
import Header from '@/shared/components/Header/Header'
import TrendingComment from './components/TrendingComment/TrendingComment'
import Event from './components/Event/Event'
import Magazine from './components/Magazine/MagazineCard'

const Home = () => {
  return (
    <div>
      <>
        <Header />
        <Carousel />
        <div className={styles.sectionContainer}>
          <Section title="내 취향 저격, 오늘의 TOP 랭킹" showNotice showRight>
            <div></div>
          </Section>
          <Section title="영화 공개 예정작" showRight>
            <div></div>
          </Section>
          <Section title="매거진" showRight>
            <Magazine />
          </Section>
          <Section title="지금 뜨는 코멘트" showRight>
            <TrendingComment />
          </Section>
          <Section title="이벤트" showRight>
            <Event />
          </Section>
          <Section title="시리즈 공개 예정작" showRight>
            <div></div>
          </Section>
          <Section title="박스 오피스 순위">
            <div></div>
          </Section>
        </div>
        <Bottom />
      </>
    </div>
  )
}

export default Home
