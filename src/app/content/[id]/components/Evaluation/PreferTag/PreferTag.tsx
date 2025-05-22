import { Tag, TAG_COLORS } from '@/shared/components/Tag/Tag'
import { DetailItem } from '@/shared/types/detail'

import LabelContent from '../LabelContainer/LabelContent'

import * as styles from './PreferTag.css'

const PreferTag = ({ keywords }: Pick<DetailItem, 'keywords'>) => {
  return (
    <LabelContent label="선호 태그">
      <div className={styles.tagContainer}>
        {keywords.map((keyword, index) => (
          <Tag key={keyword} text={keyword} color={TAG_COLORS[index]} />
        ))}
      </div>
    </LabelContent>
  )
}

export default PreferTag
