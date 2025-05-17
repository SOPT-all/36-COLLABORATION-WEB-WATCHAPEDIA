import Carousel from '@/shared/components/Carousel/Carousel'
import Header from '@/shared/constants/Header/Header'
import { style } from '@vanilla-extract/css'
import * as styles from '@/app/home/Home.css'

const Home = () => {
  return (
    <div>
      <>
        <Header />
        <Carousel />
        <div className={styles.sectionContainer}></div>
      </>
    </div>
  )
}

export default Home
