import Image from "next/image";
import * as styles from './MovieCard.css'
import { movieMock } from "./MovieMock";
import { IcStar, IcWatchaLight } from "@/assets/svg";
import { Tag } from "@/shared/components/Tag/Tag";
import poster from "../../../../public/img/poster.png"


const MovieCard = () => {
  const { imagePath, title, score, tags } = movieMock;

  return (
    <div className={styles.cardWrap}>
      <div className={styles.posterWrap}>
        <Image src={poster} alt="포스터" width={110} height={222} className={styles.posterImg} />
        <IcWatchaLight className={styles.watchaBadge} />
      </div>
      <div className={styles.infoWrap}>
        <div className={styles.title}>{title}</div>
        <div className={styles.score}>
          예상 <IcStar width={11} height={11}/> {score}
        </div>
        <div className={styles.tags}>
          {tags.map(tag => (
            <Tag key={tag} text={tag} color="orange" size="sm"/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieCard
