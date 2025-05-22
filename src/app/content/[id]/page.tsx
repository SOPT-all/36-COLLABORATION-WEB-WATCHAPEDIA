import Ad from '@/shared/widget/Ad/Ad'

import DescriptionSection from './sections/descriptionSection/DescriptionSection'
import CollectionSection from './sections/collection/CollectionSection'
import GallerySection from './sections/gallery/GallerySection'
import InfoSection from './sections/info/InfoSection'
import GraphSection from './sections/graph/GraphSection'
import VideoSection from './sections/video/VideoSection'
import SimilarSection from './sections/similar/SimilarSection'
import CastAndCrewSection from './sections/castAndCrew/CastAndCrewSection'
import CommentSection from './sections/comment/CommentSection'
import EvaluationSection from './sections/evaluation/EvaluationSection'
import MagazineSection from './sections/magazine/MagazineSection'
import * as styles from './styles.css'

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
      <div className={styles.secondInfoWrapper}>
        <CastAndCrewSection />
        <CommentSection />
        <MagazineSection />
        <GallerySection />
        <VideoSection />
        <CollectionSection />
        <SimilarSection />
      </div>
    </div>
  )
}

export default Content
