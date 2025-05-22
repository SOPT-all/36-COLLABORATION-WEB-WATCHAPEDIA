import HeaderSection from '../../components/HeaderSection/HeaderSection'
import SimilarContentCard from '../../components/Similar/SimilarContentCard'
import * as styles from './SimilarSection.css'
const similarList = [
  {
    title: '아담',
    image: '/images/view2/similar1.png',
    rate: 3.8,
    type: '영화',
  },
  {
    title: '졸업',
    image: '/images/view2/similar2.png',
    rate: 2.7,
    type: '영화',
  },
  {
    title: '룸바',
    image: '/images/view2/similar3.png',
    rate: 3.1,
    type: '영화',
  },
  {
    title: '모짜르트와 고래',
    image: '/images/view2/similar4.png',
    rate: 2.6,
    type: '영화',
  },
  {
    title: '시리어스 맨',
    image: '/images/view2/similar5.png',
    rate: 2.6,
    type: '영화',
  },
  {
    title: '미스터 디즈',
    image: '/images/view2/similar6.png',
    rate: 2.6,
    type: '영화',
  },
  {
    title: '시티즌 독',
    image: '/images/view2/similar7.png',
    rate: 2.5,
    type: '영화',
  },
  {
    title: '다시 사랑할 수 있을까?',
    image: '/images/view2/similar8.png',
    rate: 2.2,
    type: '영화',
  },
  {
    title: '남주기 아까운 그녀',
    image: '/images/view2/similar9.png',
    rate: 2.7,
    type: '영화',
  },
]

const SimilarSection = () => {
  return (
    <HeaderSection title="비슷한 콘텐츠">
      <div className={styles.similarContent}>
        {similarList.map(({ title, image, rate, type }) => (
          <SimilarContentCard
            key={title}
            title={title}
            image={image}
            rate={rate}
            type={type}
          />
        ))}
      </div>
    </HeaderSection>
  )
}

export default SimilarSection
