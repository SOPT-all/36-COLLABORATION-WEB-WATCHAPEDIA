import { Tag } from '@/shared/components/Tag/Tag'

import LabelContent from '../LabelContainer/LabelContent'

import * as styles from './PreferTag.css'

const PreferTag = () => {
  return (
    <LabelContent label="선호 태그">
      <div className={styles.tagContainer}>
        <Tag text="사랑스러운" color="blue" />
        <Tag text="로멘스" color="orange" />
        <Tag text="🎬 연출이 새로워요" color="gray" />
      </div>
    </LabelContent>
  )
}

export default PreferTag
