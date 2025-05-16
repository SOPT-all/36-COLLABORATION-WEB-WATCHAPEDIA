import SvgBack from '@/assets/svg/Back'
import SvgShare from '@/assets/svg/Share'
import * as styles from './InfoHeader.css'

const InfoHeader = () => {
  return (
    <div className={styles.InfoHeaderContainer}>
      <SvgBack width={22} height={22} />
      <SvgShare width={24} height={24} />
    </div>
  )
}

export default InfoHeader
