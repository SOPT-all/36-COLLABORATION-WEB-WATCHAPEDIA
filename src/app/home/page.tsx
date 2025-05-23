import * as styles from '@/app/home/Home.css'
import Ad from '@/shared/widget/Ad/Ad'
import Carousel from '@/shared/components/Carousel/Carousel'

import BoxOfficeCarousel from './components/MovieCarousel/movie/BoxOfficeCarousel'
import DdayCarousel from './components/MovieCarousel/movie/DdayCarousel'
import SeriesCarousel from './components/MovieCarousel/movie/SeriesCarousel'
import Event from './components/Event/Event'
import MagazineCarousel from './components/Magazine/MagazineCarousel'
import Section from './components/Section'
import TrendingComment from './components/TrendingComment/TrendingComment'
import TopRankingCarousel from './components/MovieCarousel/movie/TopRankingCarousel'

const Home = () => {
  return (
    <>
      <Carousel />
      <div className={styles.sectionContainer}>
        <Section title="내가 좋아할 만한 작품 랭킹" showNotice showRight>
          <TopRankingCarousel />
        </Section>
        <Section title="영화 공개 예정작" showRight>
          <DdayCarousel />
        </Section>
        <Section title="매거진" showRight id="magazine-section">
          <MagazineCarousel />
        </Section>
        <Section title="지금 뜨는 코멘트" showRight>
          <TrendingComment />
        </Section>
        <Section title="이벤트" showRight>
          <Event />
        </Section>
        <Section title="시리즈 공개 예정작" showRight>
          <SeriesCarousel />
        </Section>
        <div className={styles.adWrapper}>
          <Ad type="conclave" />
        </div>
        <Section title="박스 오피스 순위">
          <BoxOfficeCarousel />
        </Section>
      </div>
    </>
  )
}

export default Home
