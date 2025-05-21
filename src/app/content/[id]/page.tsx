import EvaluationSection from './sections/evaluation/EvaluationSection'
import * as styles from './styles.css'
import DescriptionSection from './sections/descriptionSection/DescriptionSection'
import CollectionSection from './sections/collection/CollectionSection'
import GallerySection from './sections/gallery/GallerySection'
import InfoSection from './sections/info/InfoSection'
import GraphSection from './sections/graph/GraphSection'
import Ad from '@/shared/widget/Ad/Ad'
import VideoSection from './sections/video/VideoSection'
import CastAndCrewSection from './sections/castAndCrew/CastAndCrewSection'
import CommentSection from './sections/comment/CommentSection'
import MagazineSection from './sections/magazine/MagazineSection'
const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <InfoSection />
      <EvaluationSection />
      <div className={styles.firstInfoWrapper}>
        <DescriptionSection />
        <GraphSection />
        <Ad type="callenge" />
      </div>
      <div className={styles.castAndCrewWrapper}>
        <CastAndCrewSection />
        <CommentSection />
        <MagazineSection />
        <GallerySection />
        <VideoSection />
        <CollectionSection />
      </div>
    </div>
  )
}

export default Content
