import Spinner from '@/shared/components/Spinner/Spinner'

import * as styles from './loading.css'

const Loading = () => {
  return (
    <div className={styles.container}>
      <Spinner />
    </div>
  )
}

export default Loading
