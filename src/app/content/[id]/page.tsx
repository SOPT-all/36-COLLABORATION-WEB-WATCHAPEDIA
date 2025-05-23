import Ad from '@/shared/widget/Ad/Ad'
import { getContent, getContentList } from '@/services/content/api'

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

const Content = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const content = await getContent(Number(id))
  const comment = await getContentList(Number(id))

  return (
    <div className={styles.contentContainer}>
      <InfoSection {...content} />
      <EvaluationSection keywords={content.keywords} />
      <div className={styles.firstInfoWrapper}>
        <DescriptionSection
          posterImage={content.posterImage}
          detail={content.detail}
        />
        <GraphSection />
        <Ad type="callenge" />
      </div>
      <div className={styles.secondInfoWrapper}>
        <CastAndCrewSection castAndCrewList={content.artists} />
        <CommentSection {...comment} />
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
