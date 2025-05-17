import Image from 'next/image'
import * as styles from '@/app/home/components/Event/Event.css'
const Event = () => {
  return (
    <div className={styles.eventCard}>
      <Image
        src="/images/view1/img_event.png"
        alt="파과 영화 이미지"
        width={345}
        height={160}
        className={styles.eventImage}
      />
      <div className={styles.eventBottom}>&lt;파과&gt; 시사회 이벤트</div>
    </div>
  )
}

export default Event
