import Bottom from '@/shared/components/Bottom/BottomNav'

import * as styles from './layout.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.layoutWrapper}>{children}</div> <Bottom />
    </>
  )
}

export default RootLayout
